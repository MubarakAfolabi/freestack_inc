"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "Services", href: "/#" },
    { id: 3, name: "Portfolio", href: "/#" },
    { id: 4, name: "About Us", href: "/#" },
  ];

  return (
    <header className="flex items-center justify-between py-4 px-16">
      <div>
        <Image src="/logo.png" height={120} width={120} alt="Logo" />
      </div>

      <ul className="flex items-center justify-between gap-14">
        {navItems.map((item) => {
          return (
            <li key={item.id}>
              <Link
                href={item.href}
                className={`${item.href === pathname ? "border-b-2" : "text-[hsla(215,16%,47%,1)]"} p-1 text-lg`}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>

      <button className="bg-[hsla(212,80%,42%,1)] text-lg text-white font-bold p-4 rounded-2xl cursor-pointer">
        Get Started
      </button>
    </header>
  );
}
