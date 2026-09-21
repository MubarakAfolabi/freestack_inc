"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import type { LucideIcon } from "lucide-react";

type DropdownItem = {
  id: number;
  name: string;
  href: string;
  icon: LucideIcon;
};

type DropdownProps = {
  itemList: DropdownItem[];
  handleClick: (value?: boolean) => void;
  menuButtonRef: React.RefObject<HTMLButtonElement | null>;
};

export default function Dropdown({
  itemList,
  handleClick,
  menuButtonRef,
}: DropdownProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;

      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(target) &&
        !menuButtonRef.current?.contains(target)
      ) {
        handleClick(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClick, menuButtonRef]);
  return (
    <div
      ref={dropdownRef}
      className="bg-white absolute top-18 left-0 w-50 rounded-xl p-2 shadow-lg"
    >
      <nav className="flex flex-col gap-2 text-lg">
        {itemList.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => handleClick(false)}
              className="flex items-center gap-3 rounded-md p-2 hover:bg-[hsla(210,40%,98%,1)]"
            >
              <Icon size={20} />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
