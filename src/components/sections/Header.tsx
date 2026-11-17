"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { mainNav } from "@/data/content";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CloseIcon, LumaLogo, MenuIcon } from "@/components/ui/Icons";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!isMenuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    const closeOnDesktop = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) setIsMenuOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    window.addEventListener("resize", closeOnDesktop);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      window.removeEventListener("resize", closeOnDesktop);
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-cream/95 backdrop-blur supports-[backdrop-filter]:bg-cream/85">
      <Container className="flex h-[68px] items-center justify-between lg:h-[69px]">
        <Link href="#top" className="flex rounded text-ink" aria-label="Luma home" onClick={closeMenu}>
          <LumaLogo className="block h-[17px] w-[54px]" />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {mainNav.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="rounded text-sm leading-6 text-muted transition-colors hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href="#contact"
            className="rounded-lg px-4 py-2.5 text-sm leading-6 text-muted transition-colors hover:text-ink"
          >
            Log in
          </Link>
          <ButtonLink href="#courses" className="!px-5 !py-2.5">
            Start learning
          </ButtonLink>
        </div>

        <button
          type="button"
          className="-mr-1.5 rounded-lg p-1.5 text-ink lg:hidden"
          aria-expanded={isMenuOpen}
          aria-controls={menuId}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <CloseIcon className="size-6" /> : <MenuIcon className="size-6" />}
        </button>
      </Container>

      <div
        id={menuId}
        hidden={!isMenuOpen}
        className="border-t border-line bg-cream lg:hidden"
      >
        <Container className="py-6">
          <nav aria-label="Mobile">
            <ul className="flex flex-col">
              {mainNav.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className="block rounded py-3 font-display text-lg font-bold text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-6 flex flex-col gap-3">
            <ButtonLink href="#courses" onClick={closeMenu} className="w-full">
              Start learning
            </ButtonLink>
            <ButtonLink href="#contact" variant="secondary" onClick={closeMenu} className="w-full">
              Log in
            </ButtonLink>
          </div>
        </Container>
      </div>
    </header>
  );
}
