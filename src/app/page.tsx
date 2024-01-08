import { About } from "@/components/about";
import { Header } from "@/components/header";
import { Departments } from "@/components/departments";

export default function Home() {
  return (
    <main className="flex flex-col space-y-44 pb-24">
      <Header />
      <About />
      <Departments />
    </main>
  );
}
