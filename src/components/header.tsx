import Image from "next/image";
import arrow from "@/assets/arrow.svg";

export function Header() {
  return (
    <div className="mx-auto flex flex-col justify-center items-center md:mt-24 mt-16 2xl:text-8xl text-[6vw] font-extrabold leading-tight 2xl:leading-tight">
      <div>
        <p className="text-secondary-100 uppercase text-[2vw] md:text-lg tracking-[0.2rem] font-medium text-right md:mr-20 xl:mr-28 mr-9">
          University of St. La Salle
        </p>
        <h1>
          The{" "}
          <span className="font-playfair font-semibold italic">official</span>{" "}
          publication <span className="font-medium">—</span>
        </h1>
      </div>

      <h1>
        college of{" "}
        <span className="rounded-full bg-primary-100 md:px-8 px-6 ml-2">
          engineering
        </span>
      </h1>

      <div className="mt-2 flex ml-12">
        <p>& </p>
        <p className="rounded-full bg-primary-200 md:px-8 px-6 ml-3">technology</p>

        <Image src={arrow} alt="Arrow" className="xl:h-[80px] lg:h-[70px] md:h-[50px] h-[30px] lg:ml-2 md:-ml-4 -ml-6" />
      </div>
    </div>
  );
}
