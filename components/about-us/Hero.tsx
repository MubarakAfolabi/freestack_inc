import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[hsla(210,40%,98%,1)] flex flex-col gap-6 p-16">
      <div className="bg-[hsla(207,90%,61%,0.1)] w-fit py-2 px-4 rounded-full">
        ABOUT US
      </div>

      <div className="flex items-center gap-12 justify-between">
        <div className="flex-2 flex flex-col gap-6">
          <h1 className="text-6xl/18 font-bold max-w-2xl">
            Architects of the digital experience.
          </h1>
          <p className="text-[hsla(215,16%,47%,1)] max-w-2xl">
            FreeStack Inc. is a technology and digital solutions company focused
            on helping organizations build, manage, and improve their digital
            presence and operations. We combine technology, media, creative
            solutions, and data to provide practical digital services tailored
            to the needs of modern organizations.
          </p>
        </div>

        <div className="flex-1 flex items-center justify-center bg-[hsla(212,52%,14%,1)] rounded-xl">
          <Image src="/logo-white.png" height={400} width={400} alt="Logo" />
        </div>
      </div>
    </section>
  );
}
