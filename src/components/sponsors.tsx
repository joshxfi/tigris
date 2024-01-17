import Image, { ImageProps } from "next/image";
import gracePharmacy from "@/assets/sponsors/grace_pharmacy.png";
import overaux from "@/assets/sponsors/overaux.png";
import guiltea from "@/assets/sponsors/guiltea.png";
import mikaConCasa from "@/assets/sponsors/mika_con_casa.png";

export function Sponsors() {
  return (
    <section className="md:pb-44 pb-28 border-b-2 border-secondary-200">
      <p className="rounded-full bg-primary-200 px-4 inline-block md:text-3xl text-xl mb-6 font-semibold">
        backers
      </p>
      <h3 className="md:text-5xl text-[5vw] md:leading-snug 2xl:leading-snug md:mb-12 mb-6">
        Powered by <i>Electrifying</i> Sponsors!
      </h3>

      <div>
        <div className="rounded-lg bg-secondary-200 md:p-4 p-2 inline-block">
          <Image
            src={gracePharmacy}
            placeholder="blur"
            className="w-[550px] object-contain rounded-md"
            alt="Grace Pharmacy Logo"
          />
        </div>

        <div className="flex space-x-4 mt-2">
          <Sponsor src={overaux} alt="Overaux Logo" />
          <Sponsor src={guiltea} alt="Guiltea Logo" />
          <Sponsor src={mikaConCasa} alt="Mika Con Casa Logo" />
        </div>
      </div>
    </section>
  );
}

function Sponsor(props: ImageProps) {
  return (
    <div className="rounded-lg bg-secondary-200 md:p-4 p-2">
      <Image
        placeholder="blur"
        className="w-[130px] object-contain rounded-md"
        {...props}
      />
    </div>
  );
}
