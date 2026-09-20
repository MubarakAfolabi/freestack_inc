import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Portfolio() {
  return (
    <section className="flex flex-col gap-6 bg-[hsla(210,40%,98%,1)] p-16">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Selected Work</h2>
        <Link
          href="/#"
          className="flex items-center gap-2 text-lg text-[hsla(212,80%,42%,1)] hover:underline"
        >
          view all projects
          <ArrowRight size={18} strokeWidth={3} />
        </Link>
      </div>

      <ul>
        <li className="flex items-center gap-12">
          <div className="bg-[hsla(52,40%,36%,1)] flex items-center justify-center w-fit p-8 rounded-xl">
            <div className="">
              <Image
                src="/works/humanity-desktop.png"
                height={250}
                width={250}
                alt="work image"
              />
            </div>
            <div className="-ml-10 mt-10">
              <Image
                src="/works/humanity-mobile.png"
                height={80}
                width={80}
                alt="work image"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="bg-[hsla(207,90%,61%,0.1)] w-fit py-2 px-4  rounded-full">
              Ecommerce. Branding
            </div>
            <h3 className="text-2xl font-bold">Humanity Fashion Website</h3>
            <p className="text-[hsla(215,16%,47%,1)]">
              Crafting a memorable digital identity and a blazing-fast,
              high-converting checkout experience for a global apparel brand.
            </p>

            <div className="flex gap-4">
              <div className="bg-[hsla(212,52%,14%,0.1)] w-fit py-2 px-4 rounded-full">
                Branding
              </div>
              <div className="bg-[hsla(212,52%,14%,0.1)] w-fit py-2 px-4 rounded-full">
                Figma
              </div>
              <div className="bg-[hsla(212,52%,14%,0.1)] w-fit py-2 px-4 rounded-full">
                Next.js
              </div>
            </div>

            <Link
              href="/#"
              className="flex gap-2 items-center text-[hsla(212,80%,42%,1)] hover:underline"
            >
              Read Case Study
              <ArrowUpRight size={18} strokeWidth={3} />
            </Link>
          </div>
        </li>
      </ul>
    </section>
  );
}
