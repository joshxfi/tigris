import Image from "next/image";

export function Feedbacks() {
  return (
    <section className="lg:gap-8 gap-6 mx-auto grid lg:grid-cols-3 sm:grid-cols-2">
      <div className="lg:space-y-8 space-y-6">
        <Feedback
          name="Lance Jiro Tacsagon"
          position="Editor-in-Chief"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <Feedback
          name="Lance Jiro Tacsagon"
          position="Editor-in-Chief"
          content="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      </div>

      <div className="lg:space-y-8 space-y-6">
        <Feedback
          name="Lance Jiro Tacsagon"
          position="Editor-in-Chief"
          content="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
        <Feedback
          name="Lance Jiro Tacsagon"
          position="Editor-in-Chief"
          content="Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
        />
      </div>

      <div className="lg:space-y-8 space-y-6 hidden lg:block">
        <Feedback
          name="Lance Jiro Tacsagon"
          position="Editor-in-Chief"
          content="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
        />
        <Feedback
          name="Lance Jiro Tacsagon"
          position="Editor-in-Chief"
          content="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
        />
      </div>
    </section>
  );
}

function Feedback({
  name,
  position,
  content,
}: {
  name: string;
  position: string;
  content: string;
}) {
  return (
    <figure className="p-8 bg-secondary-300 border-2 border-secondary-200 rounded-lg md:text-xl text-lg shadow-sm">
      <div className="flex space-x-4">
        <Image
          src="/assets/images/tigris-orbit.png"
          width={50}
          height={50}
          className="object-contain"
          alt="Tigris Logo"
        />

        <figcaption>
          <h3 className="font-medium">{name}</h3>
          <h4 className="text-primary-100 md:text-lg text-base font-light">
            {position}
          </h4>
        </figcaption>
      </div>

      <blockquote className="mt-6 font-light">{content}</blockquote>
    </figure>
  );
}
