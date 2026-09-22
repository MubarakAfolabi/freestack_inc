export default function Team() {
  const members = [
    {
      name: "Obinka Victor",
      title: "Founder",
      description:
        "Architecting seamless user experiences and scalable design systems for modern sports platforms. (short Bio)",
      pic: "",
    },
    {
      name: "Obinka Victor",
      title: "Founder",
      description:
        "Architecting seamless user experiences and scalable design systems for modern sports platforms. (short Bio)",
      pic: "",
    },
    {
      name: "Obinka Victor",
      title: "Founder",
      description:
        "Architecting seamless user experiences and scalable design systems for modern sports platforms. (short Bio)",
      pic: "",
    },
  ];

  return (
    <section className="bg-[url('/about-us/team-background.jpg')] bg-cover bg-center flex flex-col gap-6 p-4 mb-10">
      <h2 className="text-white text-2xl font-bold">Meet The Team</h2>

      <ul className="flex flex-col gap-6">
        {members.map((member, index) => {
          return (
            <li
              key={index}
              className="bg-[hsla(212,52%,14%,1)] flex flex-col gap-4 p-12 rounded-2xl"
            >
              <div className="bg-[hsla(0,0%,85%,1)] h-60 w-full rounded-2xl"></div>
              <h3 className="text-white text-xl font-bold">{member.name}</h3>
              <p className="text-[hsla(207,90%,61%,1)] text-bold">
                {member.title}
              </p>
              <p className="text-[hsla(0,0%,100%,0.8)]">
                Architecting seamless user experiences and scalable design
                systems for modern sports platforms. (short Bio)
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
