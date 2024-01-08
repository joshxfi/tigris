import Image from "next/image";
import arrow from "@/assets/arrow.svg";

export function Header() {
  return (
    <div className="mx-auto flex flex-col md:space-y-3 justify-center items-center mt-32 md:text-5xl text-[6vw] font-extrabold leading-tight">
      <div>
        <p className="text-secondary-100 uppercase md:text-sm text-xs tracking-[0.2rem] font-medium text-right md:mr-14 mr-9">
          University of St. La Salle
        </p>
        <h1>
          The{" "}
          <span className="font-playfair font-semibold italic">official</span>{" "}
          publication <span className="font-medium">—</span>
        </h1>
      </div>

      <h1 className="-ml-8">
        college of{" "}
        <span className="rounded-full bg-primary-100 md:px-8 px-6 ml-2">
          engineering
        </span>
      </h1>

      <div className="mt-2 flex ml-12">
        <p>& </p>
        <p className="rounded-full bg-primary-200 md:px-8 px-6 ml-3">technology</p>

        <Image src={arrow} alt="Arrow" className="md:h-[50px] h-[30px] md:-ml-4 -ml-6" />
      </div>
    </div>
  );
}
