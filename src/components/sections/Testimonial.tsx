import Image from "next/image";
import { stats, testimonial } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { QuoteIcon } from "@/components/ui/Icons";

export function Testimonial() {
  return (
    <section aria-label="What learners say" className="bg-white py-[60px] lg:py-[100px]">
      <Container className="flex flex-col gap-[60px] lg:flex-row lg:items-center lg:justify-between lg:pr-16">
        <figure className="lg:max-w-[600px]">
          <QuoteIcon className="h-[22px] w-6 text-brand" />
          <blockquote className="mt-4 font-display text-xl leading-8 font-semibold text-ink lg:text-[1.875rem] lg:leading-[2.75rem] lg:tracking-[-0.025em]">
            <p>{testimonial.quote}</p>
          </blockquote>
          <figcaption className="mt-8 flex items-center gap-4">
            <Image
              src={testimonial.avatar}
              alt=""
              width={48}
              height={48}
              className="size-12 rounded-full bg-lavender object-cover"
            />
            <div>
              <p className="text-base leading-[1.625rem] font-bold text-ink lg:leading-7">{testimonial.name}</p>
              <p className="text-sm leading-6 text-muted">{testimonial.role}</p>
            </div>
          </figcaption>
        </figure>

        <dl className="grid grid-cols-3 lg:w-[401px] lg:shrink-0 lg:grid-cols-1 lg:gap-5 lg:border-l lg:border-line lg:pl-12">
          {stats.map((stat) => (
            <div key={stat.value} className="flex flex-col">
              <dt className="mt-1 pr-2 text-sm leading-6 text-subtle">{stat.label}</dt>
              <dd className="order-first font-display text-[2.5rem] leading-[2.75rem] font-extrabold tracking-[-0.025em] text-brand lg:text-[4rem] lg:leading-[4.375rem]">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
