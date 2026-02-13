"use client";

import { LanguageProvider } from "@/components/language-provider";
import { CodeRain } from "@/components/code-rain";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { WhyChooseUs } from "@/components/why-choose-us";
import { Portfolio } from "@/components/portfolio";
import { Process } from "@/components/process";
import { Testimonials } from "@/components/testimonials";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <LanguageProvider>
      <CodeRain />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Portfolio />
        <Process />
        {/* <Testimonials /> */}
        {/* <Contact /> */}
      </main>
      <Footer />
    </LanguageProvider>
  );
}
