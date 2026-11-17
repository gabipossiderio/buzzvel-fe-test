import Link from "next/link";
import { footerColumns } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { LumaLogo } from "@/components/ui/Icons";

export function Footer() {
  return (
    <footer className="bg-ink pt-[60px] pb-5 lg:pt-20 lg:pb-10">
      <Container className="lg:pr-16">
        <div className="grid grid-cols-2 gap-x-10 gap-y-10 lg:grid-cols-[416px_repeat(3,1fr)] lg:gap-8">
          <div className="col-span-2 lg:col-span-1">
            <Link href="#top" aria-label="Back to top" className="flex w-fit rounded text-white">
              <LumaLogo className="block h-[17px] w-[54px]" />
            </Link>
            <p className="mt-3 text-sm leading-6 text-fog lg:max-w-[240px]">
              Practical learning for curious people.
            </p>
          </div>

          {footerColumns.map((column, index) => (
            <nav
              key={column.title}
              aria-label={column.title}
              className={index === footerColumns.length - 1 ? "col-span-2 lg:col-span-1" : ""}
            >
              <h2 className="eyebrow text-mist">{column.title}</h2>
              <ul className="mt-4 flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="inline-block rounded text-sm leading-6 text-fog transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <p className="mt-12 border-t border-muted pt-6 text-center text-[0.8125rem] leading-5 text-white lg:mt-16 lg:text-left lg:text-mist">
          © 2026 Luma Learning
        </p>
      </Container>
    </footer>
  );
}
