import Image from "next/image";
import { featuredCourse } from "@/data/content";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ArrowRight } from "@/components/ui/Icons";

export function FeaturedCourse() {
  return (
    <section
      id="featured-course"
      aria-labelledby="featured-title"
      className="bg-brand py-[60px] text-white lg:py-[100px]"
    >
      <Container className="grid items-center gap-[38px] lg:grid-cols-2 lg:gap-[60px] lg:pr-16">
        <div className="relative mx-auto w-full max-w-[538px]">
          <div className="relative aspect-[362/280] overflow-hidden rounded-2xl lg:aspect-[538/408]">
            <Image
              src="/images/featured-course.jpg"
              alt="Student sketching interface ideas at a desk covered with material samples"
              fill
              sizes="(min-width: 1024px) 538px, (min-width: 618px) 538px, calc(100vw - 40px)"
              className="object-cover"
            />
          </div>
          <p className="eyebrow absolute -top-3 -left-3 rounded-md bg-sun px-3 py-1.5 text-ink">
            Featured course
          </p>
        </div>

        <div className="mx-auto w-full max-w-[538px]">
          <p className="eyebrow">Most popular this month</p>
          <h2 id="featured-title" className="heading-2 mt-4">
            {featuredCourse.title}
          </h2>
          <p className="mt-5 text-sm leading-6 lg:text-base lg:leading-7">{featuredCourse.description}</p>
          <p className="mt-6 text-sm leading-6 lg:text-base lg:leading-7">{featuredCourse.instructor}</p>

          <ul className="mt-6 flex flex-wrap gap-3" aria-label="Course details">
            {featuredCourse.meta.map((item) => (
              <li
                key={item}
                className="rounded-lg border border-line px-3.5 py-1.5 text-sm leading-6 text-white"
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href="#featured-course" variant="highlight" className="w-full sm:w-auto">
              View course
            </ButtonLink>
            <ButtonLink href="#courses" variant="ghost" className="group w-full sm:w-auto">
              Browse all courses
              <ArrowRight className="size-5 text-white transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none" />
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
