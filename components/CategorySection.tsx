import Link from "next/link";

type Category = {
  name: string;
  slug: string;
  image: string;
};

export default function CategorySection({
  categories,
}: {
  categories: Category[];
}) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center">
        <h2 className="text-4xl font-bold tracking-tight text-slate-900">
          Shop by Category
        </h2>
        <p className="text-slate-500 mt-2">
          Explore our wholesale product categories
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {categories.map((category: Category) => (
          <Link key={category.slug} href={`/category/${category.slug}`}>
            <div className="relative h-56 rounded-2xl overflow-hidden group shadow-md hover:shadow-xl transition cursor-pointer">
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 transition" />

              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg md:text-xl font-semibold">
                  {category.name}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}