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
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
      {categories.map((category: Category) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <div>{category.name}</div>
        </Link>
      ))}
    </div>
  );
}