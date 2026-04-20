import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function InventoryPage() {
  return (
    <main className="bg-slate-50">
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
            Wholesale Catalog
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">
            Browse Inventory
          </h1>
          <p className="mt-3 max-w-2xl text-slate-600">
            Explore our curated wholesale inventory across beverages, snacks,
            grocery, cleaning supplies, and disposables.
          </p>
        </div>

        <div className="mb-8 grid gap-4 rounded-2xl border border-slate-200 bg-white p-4 md:grid-cols-4">
          <input
            type="text"
            placeholder="Search products"
            className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-slate-400"
          />
          <select className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-slate-400">
            <option>All Categories</option>
            <option>Soft Drinks</option>
            <option>Energy Drinks</option>
            <option>Water</option>
            <option>Juice</option>
            <option>Snacks</option>
            <option>Cleaning Supplies</option>
            <option>Disposables</option>
          </select>
          <select className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-slate-400">
            <option>All Brands</option>
            <option>Coca-Cola</option>
            <option>Pepsi</option>
            <option>Red Bull</option>
            <option>Monster</option>
          </select>
          <select className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-slate-400">
            <option>Sort By</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest</option>
          </select>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}