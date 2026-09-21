import { ArrowRight, Cloud, CodeXml, PenTool, Shapes } from "lucide-react";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Branding",
      description:
        "Forging memorable digital identities and cohesive design systems.",
      icon: Shapes,
    },
    {
      id: 2,
      title: "UI/UX Design",
      description:
        "Forging memorable digital identities and cohesive design systems.",
      icon: PenTool,
    },
    {
      id: 3,
      title: "Web Development",
      description:
        "Engineering scalable front-end and robust back-end architecture.",
      icon: CodeXml,
    },
    {
      id: 4,
      title: "Deployment & Support",
      description:
        "Managing seamless cloud hosting and ongoing system maintenance.",
      icon: Cloud,
    },
  ];

  return (
    <section className="flex flex-col gap-4 md:gap-6 bg-[hsla(210,40%,98%,1)] p-4 md:p-16">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl md:text-3xl font-bold">Our Services</h2>
        <Link
          href="/#"
          className="flex items-center gap-2 md:text-lg text-[hsla(212,80%,42%,1)] hover:underline"
        >
          view full services
          <ArrowRight size={18} strokeWidth={3} />
        </Link>
      </div>

      <ul className="flex flex-col gap-4">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <li
              key={service.id}
              className="flex gap-4 items-center border border-[hsla(207,90%,61%,1)] py-4 px-2 rounded-xl"
            >
              <div className="flex items-center justify-center h-8 w-8 md:h-10 md:w-10 rounded-full bg-[hsla(207,90%,61%,0.1)]">
                <Icon className="size-5 md:size-6" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl md:text-2xl font-bold">
                  {service.title}
                </h3>
                <p className="text-sm md:text-md text-[hsla(215,16%,47%,1)]">
                  {service.description}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
