"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "span" | "h2" | "h3" | "p" | "li";
  y?: number;
  amount?: number;
  once?: boolean;
};

export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
  y = 28,
  amount = 0.25,
  once = true,
}: RevealProps) {
  const reduce = useReducedMotion();
  const Tag = motion[as] as typeof motion.div;

  const variants: Variants = reduce
    ? { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }
    : {
        hidden: { opacity: 0, y },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.85,
            ease: [0.16, 1, 0.3, 1],
            delay,
          },
        },
      };

  return (
    <Tag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
    >
      {children}
    </Tag>
  );
}

type StaggerProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  step?: number;
  amount?: number;
};

export function Stagger({
  children,
  className,
  delay = 0,
  step = 0.08,
  amount = 0.25,
}: StaggerProps) {
  const reduce = useReducedMotion();
  const variants: Variants = reduce
    ? { hidden: {}, show: {} }
    : {
        hidden: {},
        show: {
          transition: {
            staggerChildren: step,
            delayChildren: delay,
          },
        },
      };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
    >
      {children}
    </motion.div>
  );
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
  },
};

export function StaggerItem({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "span" | "li" | "p";
}) {
  const Tag = motion[as] as typeof motion.div;
  return (
    <Tag className={className} variants={itemVariants}>
      {children}
    </Tag>
  );
}

type WordRevealProps = {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  amount?: number;
};

export function WordReveal({
  text,
  className,
  wordClassName,
  delay = 0,
  amount = 0.4,
}: WordRevealProps) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  const container: Variants = reduce
    ? { hidden: {}, show: {} }
    : {
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.06,
            delayChildren: delay,
          },
        },
      };

  const child: Variants = reduce
    ? { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }
    : {
        hidden: { opacity: 0, y: "120%" },
        show: {
          opacity: 1,
          y: "0%",
          transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
        },
      };

  return (
    <motion.span
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
    >
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-flex overflow-hidden align-bottom"
        >
          <motion.span
            variants={child}
            className={wordClassName}
            style={{ display: "inline-block" }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
