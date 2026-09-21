export default function Hero() {
  return (
    <section className="flex flex-col gap-2 md:gap-6 min-h-120 bg-[url('/hero-background.png')] md:bg-cover bg-left md:bg-center p-4 md:p-16">
      <div className="text-sm md:text-md bg-[hsla(207,90%,61%,0.1)] w-fit py-1 px-2 md:py-2 md:px-4 rounded-full">
        END-TO-END DIGITAL AGENCY
      </div>

      <h1 className="text-5xl/15 md:text-6xl/18 font-bold md:max-w-2xl">
        Building Digital Experiences from{" "}
        <span className="text-[hsla(212,80%,42%,1)]">Design to Deployment</span>
      </h1>

      <p className="text-[hsla(215,16%,47%,1)] max-w-2xl">
        We craft intuitive user interfaces and architect robust software
        solutions, turning your complex problems into scalable digital products.
      </p>

      <div className="flex items-center gap-5 md:gap-10">
        <button className="bg-[hsla(212,80%,42%,1)] md:text-lg text-white font-bold p-2 md:p-4 rounded-2xl cursor-pointer">
          Get Started
        </button>
        <button className="border md:text-lg font-bold p-2 md:p-4 rounded-2xl cursor-pointer">
          View Our Work
        </button>
      </div>
    </section>
  );
}
