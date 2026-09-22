import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="bg-[hsla(212,80%,42%,1)] text-white flex flex-col gap-8 items-center justify-center p-4 md:p-16 mb-20">
      <h2 className="text-2xl md:text-3xl font-bold text-center">
        Ready to build something structurally sound?
      </h2>
      <p className="text-center">
        Let&apos;s turn your concept into a scalable digital product from design
        to deployment.
      </p>
      <Link
        href="/#"
        className="bg-white text-black text-lg py-5 px-20 rounded-xl cursor-pointer"
      >
        Get Started
      </Link>
    </section>
  );
}
