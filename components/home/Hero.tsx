export default function Hero() {
  return (
    <section className="flex flex-col gap-6 min-h-120 bg-[url('/hero-background.png')] bg-cover bg-center p-16">
      <div className="bg-[hsla(207,90%,61%,0.1)] w-fit py-2 px-4 rounded-full">
        END-TO-END DIGITAL AGENCY
      </div>

      <h1 className="text-6xl/18 font-bold max-w-2xl">
        Building Digital Experiences from{" "}
        <span className="text-[hsla(212,80%,42%,1)]">Design to Deployment</span>
      </h1>

      <p className="text-[hsla(215,16%,47%,1)] max-w-2xl">
        We craft intuitive user interfaces and architect robust software
        solutions, turning your complex problems into scalable digital products.
      </p>

      <div className="flex gap-10">
        <button className="bg-[hsla(212,80%,42%,1)] text-lg text-white font-bold p-4 rounded-2xl cursor-pointer">
          Get Started
        </button>
        <button className="border font-bold p-4 rounded-2xl cursor-pointer">
          View Our Work
        </button>
      </div>
    </section>
  );
}
