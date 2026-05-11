import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { products } from "@/lib/data";
import { ProductDetailView } from "@/components/sections/product-detail";

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) return {};
  return {
    title: `${product.name} — ${product.category.en}`,
    description: product.description.en,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) notFound();

  return <ProductDetailView product={product} />;
}
