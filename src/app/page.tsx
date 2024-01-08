import { About } from "@/components/about";
import { Header } from "@/components/header";
import { Departments } from "@/components/departments";

export default function Home() {
  return (
    <main className="flex flex-col md:space-y-44 space-y-32 pb-24">
      <Header />
      <About />
      <Departments />
    </main>
  );
}
