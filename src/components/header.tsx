"use client";

import gsap from "gsap";
import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import arrow from "@/assets/arrow.svg";

export function Header() {
  const container = useRef<HTMLDivElement>(null);
  const tl = useRef<GSAPTimeline>();

  useGSAP(
    () => {
      tl.current = gsap
        .timeline()
        .from("#engineering", { x: -800, duration: 1.5 })
        .from(
          "#technology",
          {
            x: 800,
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
      ref={container}
      className="mx-auto flex flex-col justify-center items-center md:mt-24 mt-16 2xl:text-8xl text-[6vw] font-extrabold leading-tight 2xl:leading-tight"
    >
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

      <div className="flex md:space-x-8 space-x-2">
        <h1>college of </h1>
        <div className="rounded-full bg-primary-100 md:px-8 px-6 overflow-hidden">
          <h1 id="engineering">engineering</h1>
        </div>
      </div>

      <div className="md:mt-4 mt-2 flex ml-12">
        <h1>& </h1>
        <div className="rounded-full bg-primary-200 md:px-8 px-6 ml-3 overflow-hidden">
          <h1 id="technology">technology</h1>
        </div>

        <Image
          src={arrow}
          alt="Arrow"
          className="xl:h-[80px] lg:h-[70px] md:h-[50px] h-[30px] lg:ml-2 md:-ml-4 -ml-6"
        />
      </div>
    </div>
  );
}
