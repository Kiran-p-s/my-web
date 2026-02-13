"use client";

import { motion } from "framer-motion";
import { MessageSquare, PenTool, Code, Rocket } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    titleEn: "Discussion",
    titleMl: "ചര്‍ച്ച",
    descEn:
      "We understand your vision, goals, and requirements through in-depth consultation.",
    descMl:
      "ആഴത്തിലുള്ള കണ്‍സള്‍ട്ടേഷനിലൂടെ നിങ്ങളുടെ ദര്‍ശനവും ലക്ഷ്യങ്ങളും ഞങ്ങള്‍ മനസ്സിലാക്കുന്നു.",
  },
  {
    icon: PenTool,
    step: "02",
    titleEn: "Design",
    titleMl: "ഡിസൈന്‍",
    descEn:
      "Our designers create stunning mockups and prototypes for your approval.",
    descMl:
      "ഞങ്ങളുടെ ഡിസൈനര്‍മാര്‍ നിങ്ങളുടെ അംഗീകാരത്തിനായി മനോഹരമായ മോക്കപ്പുകള്‍ സൃഷ്ടിക്കുന്നു.",
  },
  {
    icon: Code,
    step: "03",
    titleEn: "Development",
    titleMl: "ഡെവലപ്‌മെന്‍റ്",
    descEn:
      "We build your website using the latest technologies and best practices.",
    descMl:
      "ഏറ്റവും പുതിയ സാങ്കേതികവിദ്യകള്‍ ഉപയോഗിച്ച് ഞങ്ങള്‍ നിങ്ങളുടെ വെബ്‌സൈറ്റ് നിര്‍മ്മിക്കുന്നു.",
  },
  {
    icon: Rocket,
    step: "04",
    titleEn: "Delivery",
    titleMl: "ഡെലിവറി",
    descEn:
      "We launch your website and provide ongoing support and maintenance.",
    descMl:
      "ഞങ്ങള്‍ നിങ്ങളുടെ വെബ്‌സൈറ്റ് ലോഞ്ച് ചെയ്യുകയും തുടര്‍ സപ്പോര്‍ട്ട് നല്‍കുകയും ചെയ്യുന്നു.",
  },
];

export function Process() {
  const { language } = useLanguage();

  return (
    <section id="process" className="relative py-24 z-10">
      <div className="absolute inset-0 bg-secondary/40 z-0" />

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
              ? "Our Process"
              : "ഞങ്ങളുടെ പ്രക്രിയ"}
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
            {language === "en"
              ? "A streamlined workflow to bring your ideas to life"
              : "നിങ്ങളുടെ ആശയങ്ങള്‍ യാഥാര്‍ത്ഥ്യമാക്കാനുള്ള ഒരു കാര്യക്ഷമമായ വര്‍ക്ക്ഫ്ലോ"}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative text-center"
              >
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-full h-px bg-gradient-to-r from-primary/40 to-transparent" />
                )}

                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 mx-auto flex items-center justify-center mb-6"
                >
                  <Icon className="w-8 h-8 text-primary" />
                </motion.div>

                <span className="text-xs font-mono text-primary/60 tracking-wider">
                  {language === "en" ? "STEP" : "ഘട്ടം"} {step.step}
                </span>
                <h3 className="text-lg font-semibold text-foreground mt-2 mb-3">
                  {language === "en" ? step.titleEn : step.titleMl}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {language === "en" ? step.descEn : step.descMl}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
