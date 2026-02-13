"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";

export function Hero() {
  const { language } = useLanguage();

  return (
    <section
      id="home"
      /* Changed justify-center to justify-start and added pt-32 to move content down */
      className="relative min-h-screen flex items-start justify-center overflow-hidden pt-20 md:pt-38"
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background z-[1]" />

      <div className="relative z-10 text-center px-6">
        {/* "We Build Stunning" from right */}
        <motion.div
          initial={{ x: "100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground">
            {language === "en" ? "We Build Stunning" : "ഞങ്ങള്‍ നിര്‍മ്മിക്കുന്നത്"}
          </h1>
        </motion.div>

        {/* "Websites That" from left */}
        <motion.div
          initial={{ x: "-100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-primary mt-2">
            {language === "en" ? "Websites That" : "അതിശയകരമായ"}
          </h1>
        </motion.div>

        {/* "Grow Your Business" from bottom */}
        <motion.div
          initial={{ y: "50vh", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 1.4 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mt-2">
            {language === "en" ? "Grow Your Business" : "വെബ്‌സൈറ്റുകള്‍"}
          </h1>
        </motion.div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          {language === "en"
            ? "We craft premium digital experiences that captivate users, drive conversions, and scale your online presence."
            : "ഉപയോക്താക്കളെ ആകര്‍ഷിക്കുന്നതും പരിവര്‍ത്തനങ്ങള്‍ നയിക്കുന്നതുമായ പ്രീമിയം ഡിജിറ്റല്‍ അനുഭവങ്ങള്‍ ഞങ്ങള്‍ സൃഷ്ടിക്കുന്നു."}
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 2.6 }}
          className="mt-10"
        >
          <a
            href="https://wa.me/916238174041"
            className="inline-block px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-[0_0_30px_hsl(174,72%,50%,0.3)] transition-all duration-300 hover:scale-105"
          >
            {language === "en" ? "Get a Free Quote" : "സൗജന്യ ക്വോട്ട് നേടുക"}
          </a>
        </motion.div>

        {/* Scroll indicator removed from here */}
      </div>
    </section>
  );
}