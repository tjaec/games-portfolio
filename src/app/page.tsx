import Hero from "@/components/home/Hero";
import Navbar from "@/components/layout/Navbar"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero
        name="Thomas Cameron"
        role="Computer Games Programmer"
      />
    </main>
  );
}
