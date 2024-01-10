"use client";

import gsap from "gsap";
import { useRef } from "react";
import Image from "next/image";
import { toast } from "sonner";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import arrow from "@/assets/arrow.svg";
import scribble from "@/assets/scribble.svg";
import cetOrbit from "@/assets/images/cet-orbit.png";

export function Council() {
  const container = useRef<HTMLDivElement>(null);
  const tl = useRef<GSAPTimeline>();

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      tl.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: container.current,
            start: "top bottom",
            markers: process.env.NODE_ENV === "development",
          },
        })
        .from("#cet", {
          x: -500,
          duration: 1.5,
        })
        .from(
          "#council",
          {
            x: 500,
            duration: 2,
            ease: "bounce.out",
          },
          1
        );
    },
    { scope: container }
  );

  return (
    <div
      id="council"
      ref={container}
      className="md:py-44 py-28 border-t-2 border-secondary-200 flex justify-between items-center flex-col-reverse xl:flex-row"
    >
      <div className="md:text-6xl text-[6vw] font-extrabold leading-tight md:leading-tight flex flex-col xl:items-start items-center">
        <div className="flex md:space-x-4 space-x-2">
          <h2>introducing the </h2>
          <div className="rounded-full bg-primary-100 md:px-8 px-6 ml-2 overflow-hidden">
            <h2 id="cet">CET</h2>
          </div>
        </div>

        <div className="mt-2 flex">
          <Image
            src={scribble}
            alt="Arrow"
            className="md:w-[200px] w-[100px]"
          />
          <div className="rounded-full bg-primary-200 md:px-8 px-6 ml-3 overflow-hidden">
            <h2 id="council">council</h2>
          </div>

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
