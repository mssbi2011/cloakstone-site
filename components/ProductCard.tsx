import Link from "next/link";
import { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  const inStock = product.stock > 0;

  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <Link href={`/product/${product.slug}`} className="block">
        <div className="relative h-56 overflow-hidden bg-slate-100">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      </Link>

      <div className="p-5">
        <div className="mb-2 flex items-center justify-between gap-3">
          <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {product.brand}
          </span>
          <span
            className={`rounded-full px-2 py-1 text-xs font-medium ${
              inStock
                ? "bg-emerald-50 text-emerald-700"
                : "bg-red-50 text-red-700"
            }`}
          >
            {inStock ? "In Stock" : "Out of Stock"}
          </span>
        </div>

        <Link href={`/product/${product.slug}`} className="block">
          <h3 className="line-clamp-2 text-lg font-semibold text-slate-900">
            {product.name}
          </h3>
        </Link>

        <p className="mt-2 text-sm text-slate-500">
          {product.size} • {product.pack}
        </p>

        <p className="mt-1 text-sm text-slate-500">SKU: {product.sku}</p>

        <div className="mt-4 flex items-end justify-between">
          <div>
            <p className="text-sm text-slate-500">Wholesale Price</p>
            <p className="text-2xl font-bold text-slate-900">
              ${product.price.toFixed(2)}
            </p>
          </div>
          <p className="text-sm text-slate-600">Qty: {product.stock}</p>
        </div>

        <div className="mt-5">
          <Link
            href={`/product/${product.slug}`}
            className="inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}