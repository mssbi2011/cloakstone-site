export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="bg-gradient-to-br from-slate-950 via-blue-900 to-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <nav className="sticky top-0 z-50 mb-16 flex items-center justify-between bg-transparent backdrop-blur">
            <div className="text-2xl font-bold tracking-wide">Cloakstone Distributors</div>
            <div className="hidden gap-8 text-sm md:flex">
              <a href="#products" className="hover:text-blue-200">Products</a>
              <a href="#about" className="hover:text-blue-200">About</a>
              <a href="#contact" className="hover:text-blue-200">Contact</a>
            </div>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm">
                Premium Distribution Solutions
              </p>
              <h1 className="mb-6 text-5xl font-bold leading-tight lg:text-6xl">
                Modern sourcing and distribution for growing businesses
              </h1>
              <p className="mb-8 max-w-2xl text-lg text-blue-100">
                Cloakstone helps businesses streamline product distribution with
                reliable sourcing, quality-focused partnerships, and a modern
                service-first approach.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#products"
                  className="rounded-full bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-blue-100"
                >
                  View Products
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  Contact Us
                </a>
              </div>
            </div>

            <div>
              <div className="rounded-3xl border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white/10 p-6">
                    <h3 className="mb-2 text-xl font-semibold">Trusted Supply</h3>
                    <p className="text-sm text-blue-100">
                      Consistent sourcing with dependable fulfillment support.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-6">
                    <h3 className="mb-2 text-xl font-semibold">Quality Focus</h3>
                    <p className="text-sm text-blue-100">
                      Product standards designed to support long-term growth.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-6">
                    <h3 className="mb-2 text-xl font-semibold">Fast Response</h3>
                    <p className="text-sm text-blue-100">
                      Clear communication and responsive service for partners.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-6">
                    <h3 className="mb-2 text-xl font-semibold">Scalable Model</h3>
                    <p className="text-sm text-blue-100">
                      Built to support startups, retailers, and enterprise buyers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
            Product Catalog
          </p>
          <h2 className="mb-4 text-4xl font-bold">Featured product categories</h2>
          <p className="text-lg text-slate-600">
            Explore a flexible catalog structure ready for your real products,
            specifications, and business lines.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {[
            {
              title: "Industrial Supplies",
              text: "Reliable materials and essential supply products for business operations.",
            },
            {
              title: "Retail Distribution",
              text: "Scalable product distribution support for stores, resellers, and marketplaces.",
            },
            {
              title: "Specialty Goods",
              text: "Curated product lines for targeted markets and premium customer segments.",
            },
            {
              title: "Bulk Orders",
              text: "Volume-ready distribution designed for repeat purchasing and growth accounts.",
            },
            {
              title: "Private Label Support",
              text: "Flexible solutions for branded product opportunities and expansion.",
            },
            {
              title: "Custom Sourcing",
              text: "Partner-driven sourcing support tailored to your category needs.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-4 h-12 w-12 rounded-2xl bg-blue-100" />
              <h3 className="mb-3 text-2xl font-semibold">{item.title}</h3>
              <p className="text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              About Us
            </p>
            <h2 className="mb-6 text-4xl font-bold">Built on trust, service, and long-term partnerships</h2>
            <p className="text-lg leading-8 text-slate-600">
              Cloakstone is designed to present a premium, dependable distribution
              brand. This layout gives you a strong foundation for launching with
              real products, certifications, company details, and customer-ready
              messaging.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h3 className="mb-2 text-xl font-semibold">Professional Presentation</h3>
              <p className="text-slate-600">
                A clean, launch-ready website structure that feels credible and modern.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h3 className="mb-2 text-xl font-semibold">Business Ready</h3>
              <p className="text-slate-600">
                Easy to expand with certifications, forms, policies, and product data.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h3 className="mb-2 text-xl font-semibold">Premium Branding</h3>
              <p className="text-slate-600">
                Navy-forward styling for a stronger and more polished visual identity.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h3 className="mb-2 text-xl font-semibold">Scalable Foundation</h3>
              <p className="text-slate-600">
                Ready for future pages like catalog, quotes, logistics, and partner portal.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-[32px] bg-slate-950 px-8 py-14 text-white lg:px-14">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                Contact
              </p>
              <h2 className="mb-4 text-4xl font-bold">Let’s build your supply network</h2>
              <p className="max-w-xl text-slate-300">
                Connect with Cloakstone to discuss sourcing, product categories,
                wholesale opportunities, and long-term distribution partnerships.
              </p>
            </div>

            <div className="grid gap-4 text-slate-200">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                Email: info@cloakstone.com
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                Phone: (123) 456-7890
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                Location: Dallas-Fort Worth, Texas
              </div>
            </div>
          </div>
        </div>
      </section>
   <footer className="bg-slate-950 text-slate-300">
  <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
    <div className="grid gap-8 md:grid-cols-3">
      <div>
        <h3 className="text-xl font-bold text-white mb-3">Cloakstone LLC</h3>
        <p className="text-sm">
          Modern distribution solutions built for reliability, scale, and long-term partnerships.
        </p>
      </div>

      <div>
        <h4 className="mb-3 font-semibold text-white">Quick Links</h4>
        <ul className="space-y-2 text-sm">
          <li><a href="#products" className="hover:text-white">Products</a></li>
          <li><a href="#about" className="hover:text-white">About</a></li>
          <li><a href="#contact" className="hover:text-white">Contact</a></li>
        </ul>
      </div>

      <div>
        <h4 className="mb-3 font-semibold text-white">Legal</h4>
        <ul className="space-y-2 text-sm">
          <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
          <li><a href="/terms" className="hover:text-white">Terms & Conditions</a></li>
        </ul>
      </div>
    </div>

    <div className="mt-10 border-t border-white/10 pt-6 text-sm text-center">
      © {new Date().getFullYear()} Cloakstone LLC. All rights reserved.
    </div>
  </div>
</footer> </main>
  );
}