"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Palette,
  Code2,
  Server,
  Layers,
  RefreshCw,
  Search,
} from "lucide-react";
import { useLanguage } from "@/components/language-provider";

const services = [
  {
    icon: Palette,
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8V2ViJTIwRGVzaWdufGVufDB8fDB8fHww",
    titleEn: "Web Design",
    titleMl: "വെബ് ഡിസൈന്‍",
    descEn:
      "Beautiful, modern designs that captivate your audience and reflect your brand identity.",
    descMl:
      "നിങ്ങളുടെ ബ്രാന്‍ഡ് ഐഡന്‍റിറ്റി പ്രതിഫലിപ്പിക്കുന്ന മനോഹരമായ ഡിസൈനുകള്‍.",
  },
  {
    icon: Code2,
    image: "https://images.unsplash.com/photo-1605379399843-5870eea9b74e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww",
    titleEn: "Web Development",
    titleMl: "വെബ് ഡെവലപ്‌മെന്‍റ്",
    descEn:
      "High-performance websites built with cutting-edge technologies for speed and reliability.",
    descMl:
      "വേഗതയ്ക്കും വിശ്വാസ്യതയ്ക്കും വേണ്ടി നിര്‍മ്മിച്ച ഉയര്‍ന്ന പ്രകടന വെബ്‌സൈറ്റുകള്‍.",
  },
  // {
  //   icon: Server,
  //   image: "/services/django.jpg",
  //   titleEn: "Django Web Apps",
  //   titleMl: "ജാംഗോ വെബ് ആപ്പുകള്‍",
  //   descEn:
  //     "Robust, scalable web applications powered by Django for complex business requirements.",
  //   descMl:
  //     "സങ്കീര്‍ണ്ണമായ ബിസിനസ് ആവശ്യകതകള്‍ക്ക് വേണ്ടിയുള്ള വെബ് ആപ്ലിക്കേഷനുകള്‍.",
  // },
  {
    icon: Layers,
    image: "https://images.unsplash.com/photo-1621111848501-8d3634f82336?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8VUklMkZVWCUyMERlc2lnbnxlbnwwfHwwfHx8MA%3D%3D",
    titleEn: "UI/UX Design",
    titleMl: "UI/UX ഡിസൈന്‍",
    descEn:
      "User-centered design that creates intuitive and delightful digital experiences.",
    descMl:
      "അവബോധജന്യവും ആനന്ദദായകവുമായ ഡിജിറ്റല്‍ അനുഭവങ്ങള്‍ സൃഷ്ടിക്കുന്ന ഡിസൈന്‍.",
  },
  {
    icon: RefreshCw,
    image: "https://images.unsplash.com/photo-1642132652860-471b4228023e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fFdlYnNpdGUlMjBSZWRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D",
    titleEn: "Website Redesign",
    titleMl: "വെബ്‌സൈറ്റ് റീഡിസൈന്‍",
    descEn:
      "Transform your outdated website into a modern, high-converting digital experience.",
    descMl:
      "നിങ്ങളുടെ പഴയ വെബ്‌സൈറ്റിനെ ആധുനിക ഡിജിറ്റല്‍ അനുഭവമാക്കി മാറ്റുക.",
  },
  {
    icon: Search,
    image: "https://images.unsplash.com/photo-1674027326254-88c960d8e561?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFNFT3xlbnwwfHwwfHx8MA%3D%3D",
    titleEn: "SEO Friendly",
    titleMl: "SEO സൗഹൃദ",
    descEn:
      "Search engine optimized websites that rank higher and drive organic traffic to your business.",
    descMl:
      "നിങ്ങളുടെ ബിസിനസിലേക്ക് ഓര്‍ഗാനിക് ട്രാഫിക് നയിക്കുന്ന SEO ഒപ്റ്റിമൈസ്ഡ് വെബ്‌സൈറ്റുകള്‍.",
  },
];
export function Services() {
  const { language } = useLanguage();
  // Double the items for seamless marquee
  const marqueeItems = [...services, ...services];

  return (
    <section id="services" className="relative py-24 overflow-hidden z-10">
      <div className="absolute inset-0 bg-background/90 z-0" />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 px-6"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            {language === "en" ? "Our Services" : "ഞങ്ങളുടെ സേവനങ്ങള്‍"}
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
            {language === "en"
              ? "Comprehensive web solutions tailored to your needs"
              : "നിങ്ങളുടെ ആവശ്യങ്ങള്‍ക്ക് അനുയോജ്യമായ സമഗ്ര വെബ് പരിഹാരങ്ങള്‍"}
          </p>
        </motion.div>

        {/* Marquee - scrolls left slowly */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

          <div className="flex animate-scroll-left">
            {marqueeItems.map((service, index) => {
              const Icon = service.icon;
              return (
               <div
  key={`${service.titleEn}-${index}`}
  className="flex-shrink-0 w-80 mx-4 rounded-xl overflow-hidden border border-border/50 bg-card/60 backdrop-blur-sm hover:border-primary/50 hover:shadow-[0_0_20px_hsl(174,72%,50%,0.1)] transition-all duration-500 group"
>
  {/* Image */}
  <div className="relative h-44 w-full overflow-hidden">
    <Image
      src={service.image}
      alt={service.titleEn}
      fill
      className="object-cover group-hover:scale-110 transition-transform duration-700"
    />
  </div>

  {/* Content */}
  <div className="p-8">
    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
      <Icon className="w-7 h-7 text-primary" />
    </div>

    <h3 className="text-xl font-semibold text-foreground mb-3">
      {language === "en" ? service.titleEn : service.titleMl}
    </h3>

    <p className="text-sm text-muted-foreground leading-relaxed">
      {language === "en" ? service.descEn : service.descMl}
    </p>
  </div>
</div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
