import Image from "next/image";
import arrow from "@/assets/arrow.svg";

export function Header() {
  return (
    <div className="mx-auto flex flex-col justify-center items-center mt-32 text-5xl font-extrabold leading-tight">
      <div>
        <p className="text-secondary-100 uppercase self-end text-sm tracking-[0.2rem] font-medium text-right mr-14">
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
        <span className="rounded-full bg-primary-100 px-8 ml-2">
          engineering
        </span>
      </h1>

      <div className="mt-2 flex ml-12">
        <p>& </p>
        <p className="rounded-full bg-primary-200 px-8 ml-3">technology</p>

        <Image src={arrow} alt="Arrow" className="h-[50px] -ml-4" />
      </div>
    </div>
  );
}
