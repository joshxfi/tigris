import Image from "next/image";

export function Departments() {
  return (
    <div>
      <div className="flex flex-col items-center space-y-4">
        <Image
          src="/assets/images/tigris-orbit.png"
          width={100}
          height={100}
          alt="Tigris Logo"
        />

        <p className="rounded-full bg-primary-200 px-4 inline-block md:text-2xl text-xl mb-6 font-semibold">
          departments
        </p>

        <p className="text-center md:text-3xl text-xl max-w-4xl pt-4 leading-normal md:leading-normal">
          We aim to foster a collaborative and inclusive environment where
          students can showcase their talents and voice their perspectives on
          various topics of interest.
        </p>
      </div>

      <div className="md:mt-44 mt-24 md:space-y-32 space-y-20 max-w-screen-md mx-auto">
        <Department
          title="ascribe"
          pronunciation="/əˈskraɪb/"
          description="Shapes the narratives, conducts research, and contributes to a wide range of publications."
        />

        <div className="bg-secondary-200 h-[2px]"></div>

        <Department
          title="artem"
          pronunciation="/ɑːrˈtɛm/"
          description="Brings creative visions to life, designs graphics that resonate, and contributes to a diverse array of visual projects."
        />

        <div className="bg-secondary-200 h-[2px]"></div>

        <Department
          title="apertura"
          pronunciation="/æp.ɝːˌtʊr.ə/"
          description="Curates stunning images that complements the written content and enhances the overall reader experience."
        />
      </div>
    </div>
  );
}

type Props = {
  title: string;
  pronunciation: string;
  description: string;
};

function Department({ title, pronunciation, description }: Props) {
  return (
    <figure>
      <section className="flex md:space-x-6 space-x-4">
        <Image
          src={`/assets/images/${title}-icon.svg`}
          width={50}
          height={50}
          className="w-[40px] md:w-[50px]"
          alt={title}
        />
        <figcaption className="flex md:space-x-4 space-x-2 items-center">
          <h3 className="md:text-5xl text-4xl font-semibold">{title}</h3>
          <p className="md:text-2xl text-lg font-playfair italic">{pronunciation}</p>
        </figcaption>
      </section>

      <section className="bg-secondary-200 p-8 rounded-lg md:text-3xl text-xl md:leading-normal mt-6 leading-normal">
        {description}
      </section>
    </figure>
  );
}
