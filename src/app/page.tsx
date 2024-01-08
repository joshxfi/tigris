import { About } from "@/components/about";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <main className="flex flex-col space-y-44 pb-24">
      <Header />
      <About />
    </main>
  );
}
