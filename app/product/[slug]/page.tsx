import { products } from "@/data/products";
import { notFound } from "next/navigation";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  const inStock = product.stock > 0;

  return (
    <main className="bg-slate-50">
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex items-center justify-center rounded-3xl border border-slate-200 bg-slate-50 p-10 shadow-sm">
            <img
              src={product.image}
              alt={product.name}
              className="max-h-[420px] w-auto object-contain transition duration-300 hover:scale-105"
            />
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">
              {product.brand}
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">
              {product.name}
            </h1>

            <p className="mt-4 text-slate-600">
              Bulk-ready wholesale inventory for retailers, distributors, and
              business buyers.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Size</p>
                <p className="mt-1 font-semibold text-slate-900">
                  {product.size}
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Pack</p>
                <p className="mt-1 font-semibold text-slate-900">
                  {product.pack}
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">SKU</p>
                <p className="mt-1 font-semibold text-slate-900">
                  {product.sku}
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Stock</p>
                <p className="mt-1 font-semibold text-slate-900">
                  {product.stock} Units
                </p>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <div>
                <p className="text-sm text-slate-500">Wholesale Price</p>
                <p className="text-3xl font-bold text-blue-700">
                  ${product.price.toFixed(2)}
                </p>
              </div>

              <span
                className={`rounded-full px-3 py-1 text-sm font-medium ${
                  inStock
                    ? "bg-emerald-50 text-emerald-700"
                    : "bg-red-50 text-red-700"
                }`}
              >
                {inStock ? "In Stock" : "Out of Stock"}
              </span>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/contact"
                className="rounded-2xl bg-blue-600 px-6 py-4 text-center font-semibold text-white transition hover:bg-blue-700"
              >
                Request Quote
              </a>

              <a
                href="/contact"
                className="rounded-2xl border border-slate-300 bg-white px-6 py-4 text-center font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}