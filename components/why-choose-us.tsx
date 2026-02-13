"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Clock, HeartHandshake } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

const features = [
  {
    icon: Zap,
    titleEn: "Lightning Fast",
    titleMl: "മിന്നല്‍ വേഗത",
    descEn:
      "Optimized for speed with cutting-edge tech stack ensuring blazing fast load times.",
    descMl:
      "അതിവേഗ ലോഡ് ടൈം ഉറപ്പാക്കുന്ന അത്യാധുനിക ടെക് സ്റ്റാക്കുമായി ഒപ്റ്റിമൈസ് ചെയ്തത്.",
    color: "hsl(174, 72%, 50%)",
  },
  {
    icon: Shield,
    titleEn: "Secure & Reliable",
    titleMl: "സുരക്ഷിതവും വിശ്വസനീയവും",
    descEn:
      "Enterprise-grade security with SSL, backups, and 99.9% uptime guarantee.",
    descMl:
      "SSL, ബാക്കപ്പുകള്‍, 99.9% അപ്ടൈം ഗ്യാരണ്ടി എന്നിവയോടെ എന്‍റര്‍പ്രൈസ്-ഗ്രേഡ് സുരക്ഷ.",
    color: "hsl(160, 60%, 45%)",
  },
  {
    icon: Clock,
    titleEn: "On-Time Delivery",
    titleMl: "സമയബന്ധിത ഡെലിവറി",
    descEn:
      "We respect deadlines. Your project will be delivered on time, every time.",
    descMl:
      "ഞങ്ങള്‍ അന്തിമ സമയം പാലിക്കുന്നു. നിങ്ങളുടെ പ്രോജക്ട് സമയത്ത് ഡെലിവര്‍ ചെയ്യും.",
    color: "hsl(43, 74%, 66%)",
  },
  {
    icon: HeartHandshake,
    titleEn: "24/7 Support",
    titleMl: "24/7 സപ്പോര്‍ട്ട്",
    descEn:
      "Round-the-clock support to keep your website running smoothly at all times.",
    descMl:
      "നിങ്ങളുടെ വെബ്‌സൈറ്റ് സുഗമമായി പ്രവര്‍ത്തിക്കാന്‍ 24/7 സപ്പോര്‍ട്ട്.",
    color: "hsl(340, 75%, 55%)",
  },
];

const iconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: (i: number) => ({
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
      delay: i * 0.15,
    },
  }),
};

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.15,
      ease: "easeOut",
    },
  }),
};

export function WhyChooseUs() {
  const { language } = useLanguage();

  return (
    <section id="why-us" className="relative py-24 z-10">
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
              ? "Why Choose Us"
              : "എന്തുകൊണ്ട് ഞങ്ങളെ തിരഞ്ഞെടുക്കണം"}
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
            {language === "en"
              ? "We deliver excellence in every project we undertake"
              : "ഞങ്ങള്‍ ഏറ്റെടുക്കുന്ന ഓരോ പ്രോജക്ടിലും മികവ് നല്‍കുന്നു"}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.titleEn}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="relative p-8 rounded-xl border border-border/50 bg-card/60 backdrop-blur-sm text-center group hover:border-primary/40 transition-colors duration-500"
              >
                {/* Glow effect on hover */}
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at center, ${feature.color}10, transparent 70%)`,
                  }}
                />

                <motion.div
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={iconVariants}
                  className="relative w-16 h-16 rounded-xl mx-auto mb-6 flex items-center justify-center"
                  style={{
                    background: `${feature.color}15`,
                  }}
                >
                  <motion.div
                    animate={{
                      y: [0, -4, 0],
                    }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 3,
                      delay: index * 0.5,
                      ease: "easeInOut",
                    }}
                  >
                    <Icon
                      className="w-8 h-8"
                      style={{ color: feature.color }}
                    />
                  </motion.div>
                </motion.div>

                <h3 className="relative text-lg font-semibold text-foreground mb-3">
                  {language === "en" ? feature.titleEn : feature.titleMl}
                </h3>
                <p className="relative text-sm text-muted-foreground leading-relaxed">
                  {language === "en" ? feature.descEn : feature.descMl}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
