import Link from "next/link";
import { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  const inStock = product.stock > 0;

  return (
    <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Link href={`/product/${product.slug}`} className="block">
        <div className="flex h-52 items-center justify-center bg-white p-6">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-full w-auto object-contain transition duration-300 group-hover:scale-105"
          />
        </div>
      </Link>

      <div className="p-6">
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {product.brand}
          </span>

          <span
            className={`rounded-full px-3 py-1 text-xs font-medium ${
              inStock
                ? "bg-emerald-50 text-emerald-700"
                : "bg-red-50 text-red-700"
            }`}
          >
            {inStock ? "In Stock" : "Out of Stock"}
          </span>
        </div>

        <Link href={`/product/${product.slug}`} className="block">
          <h3 className="line-clamp-2 text-xl font-bold text-slate-900">
            {product.name}
          </h3>
        </Link>

        <p className="mt-2 text-sm text-slate-500">
          {product.size} • {product.pack}
        </p>

        <p className="mt-1 text-sm text-slate-500">SKU: {product.sku}</p>

        <div className="mt-5 flex items-end justify-between">
          <div>
            <p className="text-sm text-slate-900">Wholesale Price</p>
            <p className="text-2xl font-bold text-blue-1200">
              ${product.price.toFixed(2)}
            </p>
          </div>

          <p className="text-sm text-slate-600">Qty: {product.stock}</p>
        </div>

        <Link
          href={`/product/${product.slug}`}
          className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}