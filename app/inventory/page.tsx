"use client";

import { useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { categories } from "@/data/categories";
import { products } from "@/data/products";

const categoryOptions = [
  "All Categories",
  ...categories.map((category) => category.name),
];

const categorySlugMap = new Map(categories.map((category) => [category.name, category.slug]));

const brandOptions = [
  "All Brands",
  ...Array.from(new Set(products.map((product) => product.brand))).sort(),
];

export default function InventoryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All Categories");
  const [brandFilter, setBrandFilter] = useState("All Brands");
  const [sortBy, setSortBy] = useState("default");

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.brand.toLowerCase().includes(query) ||
          product.sku.toLowerCase().includes(query)
      );
    }

    if (categoryFilter !== "All Categories") {
      const slug = categorySlugMap.get(categoryFilter);
      if (slug) {
        result = result.filter((product) => product.category === slug);
      }
    }

    if (brandFilter !== "All Brands") {
      result = result.filter((product) => product.brand === brandFilter);
    }

    if (sortBy === "price-asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "name-asc") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "name-desc") {
      result.sort((a, b) => b.name.localeCompare(a.name));
    }

    return result;
  }, [searchQuery, categoryFilter, brandFilter, sortBy]);

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
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Search products"
            className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-slate-400"
          />

          <select
            value={categoryFilter}
            onChange={(event) => setCategoryFilter(event.target.value)}
            className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-slate-400"
          >
            {categoryOptions.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>

          <select
            value={brandFilter}
            onChange={(event) => setBrandFilter(event.target.value)}
            className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-slate-400"
          >
            {brandOptions.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>

          <select
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
            className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-slate-400"
          >
            <option value="default">Sort By</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name-asc">Name: A to Z</option>
            <option value="name-desc">Name: Z to A</option>
          </select>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="rounded-2xl border border-slate-200 bg-white p-8 text-slate-600">
            No products match your search and filters.
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
