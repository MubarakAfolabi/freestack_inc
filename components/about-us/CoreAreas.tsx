import {
  Camera,
  ChartNoAxesColumnIncreasing,
  CodeXml,
  Megaphone,
} from "lucide-react";

export default function CoreAreas() {
  const areas = [
    {
      title: "Digital Infrastructure",
      description:
        "websites, digital platforms, databases, registration systems, and digital player profiles.",
      icon: CodeXml,
    },
    {
      title: "Creative & Media",
      description:
        "photography, videography, matchday content, graphics, social media management, interviews, and storytelling.",
      icon: Camera,
    },
    {
      title: "Performance & Data Analysis",
      description:
        "match statistics, player performance reports, opposition analysis, video analysis, and data-driven player development.",
      icon: ChartNoAxesColumnIncreasing,
    },
    {
      title: "Digital Branding & Communication",
      description:
        "strengthening an academy’s online presence and presenting its players, teams, achievements, and activities professionally.",
      icon: Megaphone,
    },
  ];

  return (
    <section className="bg-[hsla(210,40%,98%,1)] flex flex-col gap-6 p-4 md:p-8 lg:p-16">
      <h2 className="font-montserrat text-2xl font-bold">Our Core Areas</h2>

      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {areas.map((area, index) => {
          const Icon = area.icon;

          return (
            <li
              key={index}
              className="bg-[hsla(0,0%,100%,1)] flex flex-col gap-4 p-4 border-l-2 border-l-[hsla(207,90%,61%,1)] rounded-xl shadow-md"
            >
              <div className="bg-[hsla(207,90%,61%,0.1)] flex items-center justify-center h-10 w-10 rounded-full">
                <Icon />
              </div>

              <h3 className="font-montserrat text-xl font-bold">
                {area.title}
              </h3>

              <p>{area.description}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
