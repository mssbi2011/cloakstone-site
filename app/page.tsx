import Link from "next/link";
import RequestQuoteForm from "@/components/RequestQuoteForm";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-45"
          style={{ backgroundImage: "url('/images/warehouse-hero.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-750 via-slate-750/85 to-slate-950/40" />

        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <Link href="/" className="text-2xl font-bold tracking-tight">
            Cloakstone Distributors
          </Link>

          <div className="hidden items-center gap-8 text-sm font-semibold md:flex">
            <Link href="/inventory" className="hover:text-blue-200">
              Inventory
            </Link>
            <Link href="/contact" className="hover:text-blue-200">
              Request Quote
            </Link>
          </div>
        </nav>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 pb-24 pt-20 lg:grid-cols-2">
          <div>
            <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur">
              Premium Wholesale Distribution
            </p>

            <h1 className="mt-8 max-w-3xl text-5xl font-bold tracking-tight md:text-7xl">
              Wholesale supply built for modern retailers.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              Source beverages, grocery, cleaning supplies, disposables, and
              everyday inventory from one dependable wholesale partner.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/inventory"
                className="rounded-full bg-white px-7 py-4 font-semibold text-slate-950 shadow-lg hover:bg-blue-50"
              >
                Browse Inventory
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-white/30 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur hover:bg-white/20"
              >
                Request Quote
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-xl">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Reliable Sourcing", "Inventory support for growing businesses."],
                ["Retail Ready", "Products organized by category and pack."],
                ["Quote Based", "Simple wholesale inquiry process."],
                ["Scalable Supply", "Built for resellers, stores, and operators."],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-3xl border border-white/10 bg-white/10 p-6"
                >
                  <h3 className="text-xl font-bold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-200">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">
                Categories
              </p>
              <h2 className="mt-3 text-4xl font-bold tracking-tight">
                Shop by Category
              </h2>
              <p className="mt-3 max-w-2xl text-slate-600">
                Explore core wholesale categories for retailers, resellers, and
                business buyers.
              </p>
            </div>

            <Link
              href="/inventory"
              className="font-semibold text-blue-700 hover:text-blue-900"
            >
              View all inventory →
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/category/${category.slug}`}
                className="group relative h-52 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white">
                  <h3 className="text-xl font-bold">{category.name}</h3>
                  <span className="rounded-full bg-white/20 px-3 py-1 text-sm opacity-0 backdrop-blur transition group-hover:opacity-100">
                    View →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">
              Featured Inventory
            </p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight">
              Popular wholesale items
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          {[
            ["Centralized Inventory", "Browse categories and product listings in one place."],
            ["Quote-First Sales", "Capture leads before investing in full checkout complexity."],
            ["Built to Scale", "Add more SKUs, categories, and suppliers as the business grows."],
          ].map(([title, text]) => (
            <div
              key={title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8"
            >
              <h3 className="text-2xl font-bold">{title}</h3>
              <p className="mt-4 leading-7 text-slate-300">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <RequestQuoteForm />
      <footer className="bg-slate-950 px-6 py-14 text-white">
  <div className="mx-auto grid max-w-7xl gap-10 border-b border-white/10 pb-10 md:grid-cols-3">
    <div>
      <h3 className="text-2xl font-bold">Cloakstone LLC</h3>
      <p className="mt-4 max-w-md text-sm leading-6 text-slate-300">
        Modern distribution solutions built for reliability, scale, and
        long-term partnerships.
      </p>
    </div>

    <div>
      <h4 className="font-bold">Quick Links</h4>
      <div className="mt-4 grid gap-3 text-sm text-slate-300">
        <a href="/inventory">Products</a>
        <a href="/contact">Contact</a>
      </div>
    </div>

    <div>
      <h4 className="font-bold">Legal</h4>
      <div className="mt-4 grid gap-3 text-sm text-slate-300">
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms & Conditions</a>
        <a href="/Returns">RETURN & REFUND POLICY</a>
      </div>
    </div>
  </div>

  <p className="pt-8 text-center text-sm text-slate-300">
    © {new Date().getFullYear()} Cloakstone LLC. All rights reserved.
  </p>
</footer>
    </main>
  );
}