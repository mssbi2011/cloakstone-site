import ProductCard from "@/components/ProductCard";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { notFound } from "next/navigation";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const category = categories.find((item) => item.slug === slug);

  if (!category) {
    notFound();
  }

  const filteredProducts = products.filter(
    (product) => product.category === slug
  );

  return (
    <main className="bg-slate-50">
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
            Category
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">
            {category.name}
          </h1>
          <p className="mt-3 text-slate-600">
            Explore products in our {category.name.toLowerCase()} collection.
          </p>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="rounded-2xl border border-slate-200 bg-white p-8 text-slate-600">
            No products found in this category yet.
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}