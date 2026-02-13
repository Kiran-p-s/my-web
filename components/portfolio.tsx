"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

const projects = [
  {
    image: "/cortex5.jpg",
    titleEn: "Cortex5 Corporate Website",
    titleMl: "കോർട്ടക്സ്5 കോർപ്പറേറ്റ് വെബ്സൈറ്റ്",
    descEn:
      "A modern corporate website built with high-performance UI, responsive layouts, and clean design focused on showcasing services and technology expertise.",
    descMl:
      "സേവനങ്ങളും സാങ്കേതിക വൈദഗ്ധ്യവും പ്രദർശിപ്പിക്കുന്നതിനായി രൂപകൽപ്പന ചെയ്ത ഉയർന്ന പ്രകടനക്ഷമതയുള്ള, പ്രതികരണക്ഷമമായ കോർപ്പറേറ്റ് വെബ്സൈറ്റ്.",
    tag: "Next.js",
    link: "https://www.cortex5.com/",
  },
  {
    image: "/britsmaid.jpg",
    titleEn: "BritsMaid Cleaning Service Platform",
    titleMl: "ബ്രിറ്റ്സ്മെയ്ഡ് ക്ലീനിംഗ് സർവീസ് പ്ലാറ്റ്‌ഫോം",
    descEn:
      "A professional service booking platform with dynamic pricing, animated sliders, and user-friendly quote system for a UK-based cleaning service company.",
    descMl:
      "യുകെ ആസ്ഥാനമായ ക്ലീനിംഗ് സർവീസിനായി ഡൈനാമിക് പ്രൈസിംഗും അനിമേറ്റഡ് സ്ലൈഡറുകളും ഉള്ള പ്രൊഫഷണൽ സർവീസ് ബുക്കിംഗ് പ്ലാറ്റ്‌ഫോം.",
    tag: "React + Tailwind",
    link: "https://britsmaid.co.uk",
  },
  {
    image: "/Hitech.jpg",
    titleEn: "HI-TECH Academy Educational Website",
    titleMl: "ഹൈടെക് അക്കാദമി വിദ്യാഭ്യാസ വെബ്സൈറ്റ്",
    descEn:
      "A fully responsive educational website featuring courses, gallery, counselling form, and structured content sections designed for student engagement.",
    descMl:
      "കോഴ്‌സുകൾ, ഗാലറി, കൗൺസലിംഗ് ഫോം എന്നിവ ഉൾപ്പെടുത്തി വിദ്യാർത്ഥി പങ്കാളിത്തത്തിനായി രൂപകൽപ്പന ചെയ്ത വിദ്യാഭ്യാസ വെബ്സൈറ്റ്.",
    tag: "HTML, CSS, JS",
    link: "https://hitechacademy.org.in/",
  },
  {
    image: "/M.jpg",
    titleEn: "Makarandam dance  Website",
    titleMl: "മകരന്ദം ആയുര്‍വേദ ഉൽപ്പന്നങ്ങളുടെ വെബ്സൈറ്റ്",
    descEn:
      "An elegant product showcase website for Ayurvedic products with rich visuals, product highlights, and brand-focused storytelling design.",
    descMl:
      " മനോഹരമായ  വെബ്സൈറ്റ്.",
    tag: "React.js",
    link: "https://www.makarandam.com/",
  },
  {
    image: "/tetranuovanew.jpg",
    titleEn: "TetraNuova Business Landing Page",
    titleMl: "ടെട്രാനുവ ബിസിനസ് ലാൻഡിംഗ് പേജ്",
    descEn:
      "A high-converting business landing page with modern animations, strong typography, and clear call-to-actions to attract potential clients.",
    descMl:
      "കസ്റ്റമർമാരെ ആകർഷിക്കുന്നതിനായി ആധുനിക അനിമേഷനുകളും ശക്തമായ ടൈപ്പോഗ്രഫിയും ഉള്ള ബിസിനസ് ലാൻഡിംഗ് പേജ്.",
    tag: "Next.js",
    link: "https://www.tetranuova.co.uk/",
  },
];
export function Portfolio() {
  const { language } = useLanguage();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [spotlightProject, setSpotlightProject] = useState<number | null>(null);

  return (
    <section id="portfolio" className="relative py-24 z-10">
      <div className="absolute inset-0 bg-background/90 z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            {language === "en"
              ? "Our Portfolio"
              : "ഞങ്ങളുടെ പോര്‍ട്ട്‌ഫോളിയോ"}
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
            {language === "en"
              ? "Recent projects that showcase our expertise"
              : "ഞങ്ങളുടെ വൈദഗ്ധ്യം പ്രദര്‍ശിപ്പിക്കുന്ന പ്രോജക്ടുകള്‍"}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
  <motion.a
    key={index}
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    onMouseEnter={() => setHoveredIndex(index)}
    onMouseLeave={() => setHoveredIndex(null)}
    className={`relative rounded-xl overflow-hidden border border-border/50 cursor-pointer group transition-all duration-500 block ${
      hoveredIndex !== null && hoveredIndex !== index
        ? "opacity-30 scale-[0.97] blur-[2px]"
        : "opacity-100 scale-100"
    }`}
  >
    <div className="relative aspect-video overflow-hidden">
      <Image
        src={project.image || "/placeholder.svg"}
        alt={project.titleEn}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
        <span className="inline-block px-3 py-1 text-xs font-mono bg-primary/20 text-primary rounded-full w-fit mb-3">
          {project.tag}
        </span>

        <h3 className="text-xl font-semibold text-foreground">
          {language === "en" ? project.titleEn : project.titleMl}
        </h3>

        <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
          {language === "en" ? project.descEn : project.descMl}
        </p>

        {/* ✅ View Project */}
        <div className="mt-4 text-primary text-sm font-medium group-hover:underline transition">
          View Project →
        </div>
      </div>
    </div>
  </motion.a>
))}
        </div>
      </div>

      {/* Spotlight Modal */}
      <AnimatePresence>
        {spotlightProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-md p-6"
            onClick={() => setSpotlightProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative max-w-3xl w-full rounded-2xl overflow-hidden border border-border/50 bg-card"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSpotlightProject(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background transition-colors"
              >
                <X size={20} />
              </button>

              <div className="relative aspect-video">
                <Image
                  src={projects[spotlightProject].image || "/placeholder.svg"}
                  alt={projects[spotlightProject].titleEn}
                  fill
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <span className="inline-block px-3 py-1 text-xs font-mono bg-primary/20 text-primary rounded-full mb-4">
                  {projects[spotlightProject].tag}
                </span>
                <h3 className="text-2xl font-bold text-foreground">
                  {language === "en"
                    ? projects[spotlightProject].titleEn
                    : projects[spotlightProject].titleMl}
                </h3>
                <p className="text-muted-foreground mt-3 leading-relaxed">
                  {language === "en"
                    ? projects[spotlightProject].descEn
                    : projects[spotlightProject].descMl}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
