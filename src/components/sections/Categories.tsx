import Link from "next/link";
import { categories, type Category } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { ArrowRight } from "@/components/ui/Icons";

export function Categories() {
  return (
    <section id="courses" aria-labelledby="categories-title" className="bg-white py-[60px] lg:py-[100px]">
      <Container>
        <SectionIntro
          eyebrow="Find your next skill"
          titleId="categories-title"
          title="Learn something worth knowing."
          description="Short, practical courses designed around skills you can put to work immediately."
          className="max-w-[560px]"
        />

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4 lg:gap-5">
          {categories.map((category) => (
            <li key={category.number}>
              <CategoryCard category={category} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={category.href}
      className="group flex h-full flex-col justify-between rounded-2xl border border-line bg-white p-6 transition-[border-color,box-shadow,translate] duration-200 hover:-translate-y-1 hover:border-brand/40 hover:shadow-card motion-reduce:transition-none motion-reduce:hover:translate-y-0 lg:min-h-[265px] lg:p-7"
    >
      <div>
        <span className="eyebrow inline-block rounded-md bg-lavender px-2 py-1 text-brand">
          {category.number}
        </span>
        <h3 className="heading-3 mt-[21px] text-ink">{category.title}</h3>
        <p className="mt-3 text-sm leading-6 text-subtle">{category.description}</p>
      </div>
      <span className="mt-5 inline-flex items-center gap-2 text-sm leading-6 font-bold text-ink">
        Explore
        <span className="sr-only">{category.title} courses</span>
        <ArrowRight className="size-5 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none" />
      </span>
    </Link>
  );
}
