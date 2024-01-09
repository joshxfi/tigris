"use client";

import Image from "next/image";
import { toast } from "sonner";

import arrow from "@/assets/arrow.svg";
import scribble from "@/assets/scribble.svg";
import cetOrbit from "@/assets/images/cet-orbit.png";

export function Council() {
  return (
    <div
      id="council"
      className="md:py-44 py-28 border-t-2 border-secondary-200 flex justify-between items-center flex-col-reverse xl:flex-row"
    >
      <div className="md:text-6xl text-[6vw] font-extrabold leading-tight md:leading-tight flex flex-col xl:items-start items-center">
        <h1>
          introducing the{" "}
          <span className="rounded-full bg-primary-100 md:px-8 px-6 ml-2">
            CET
          </span>
        </h1>
        <div className="mt-2 flex">
          <Image
            src={scribble}
            alt="Arrow"
            className="md:w-[200px] w-[100px]"
          />
          <p className="rounded-full bg-primary-200 md:px-8 px-6 ml-3">
            council
          </p>

          <Image
            src={arrow}
            alt="Arrow"
            className="md:h-[70px] sm:h-[50px] h-[30px] sm:ml-0 -ml-6"
          />
        </div>

        <p className="md:text-3xl text-xl md:mt-12 mt-6 md:max-w-xl max-w-md md:leading-normal leading-normal font-normal text-center xl:text-left">
          Reigniting the orange spirit within, as we embody the essence of a
          true tiger.
        </p>

        <button
          type="button"
          onClick={() => toast.info("Coming Soon!")}
          className="px-8 py-3 mt-8 border-2 border-dirtyWhite rounded-full md:text-2xl text-lg font-medium hover:bg-dirtyWhite transition-all hover:text-secondary-300"
        >
          Learn more &nbsp; &rarr;
        </button>
      </div>

      <Image
        src={cetOrbit}
        alt="CET Logo"
        placeholder="blur"
        className="object-contain xl:w-[400px] md:w-[300px] w-[150px] mb-6 xl:mb-0"
      />
    </div>
  );
}
