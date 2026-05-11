"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  setTheme: (t: Theme) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

const STORAGE_KEY = "metalab-theme";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // SSR/initial render uses "light" — matches the pre-hydration script default.
  const [theme, setThemeState] = useState<Theme>("light");

  useEffect(() => {
    const stored =
      (typeof document !== "undefined" &&
        (document.documentElement.getAttribute("data-theme") as Theme)) ||
      null;
    if (stored === "light" || stored === "dark") {
      setThemeState(stored);
    }
  }, []);

  const setTheme = useCallback((t: Theme) => {
    setThemeState(t);
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", t);
      try {
        localStorage.setItem(STORAGE_KEY, t);
      } catch {
        /* ignore */
      }
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(theme === "light" ? "dark" : "light");
  }, [theme, setTheme]);

  const value = useMemo(
    () => ({ theme, setTheme, toggleTheme }),
    [theme, setTheme, toggleTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}

/* Pre-hydration script — run before React mounts to apply the stored theme
 * without a flash. Inject via <Script strategy="beforeInteractive"> or as
 * a raw <script> tag in the document. */
export const themeInitScript = `
(function(){
  try {
    var t = localStorage.getItem('${STORAGE_KEY}');
    if (t !== 'light' && t !== 'dark') t = 'light';
    document.documentElement.setAttribute('data-theme', t);
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'light');
  }
})();
`;
