"use client";

import { Navbar, Footer } from "../components";
import { Hero, Contact, Projects } from "../sections";
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});
export default function Home() {
  return (
    <div className={`${montserrat.className} max-w-5xl m-auto`}>
      <Navbar />
      <Hero />

      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
