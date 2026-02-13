"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

const testimonials = [
  {
    nameEn: "Sarah Johnson",
    nameMl: "സാറ ജോണ്‍സണ്‍",
    roleEn: "CEO, TechStart Inc.",
    roleMl: "CEO, ടെക്‌സ്റ്റാര്‍ട്ട് Inc.",
    quoteEn:
      "K-4 transformed our outdated website into a stunning modern platform. Our conversions increased by 300% in just two months.",
    quoteMl:
      "വെബ്‌ക്രാഫ്റ്റ് ഞങ്ങളുടെ പഴയ വെബ്‌സൈറ്റിനെ ഒരു ആധുനിക പ്ലാറ്റ്‌ഫോമാക്കി മാറ്റി. രണ്ട് മാസത്തിനുള്ളില്‍ ഞങ്ങളുടെ പരിവര്‍ത്തനങ്ങള്‍ 300% വര്‍ദ്ധിച്ചു.",
    rating: 5,
  },
  {
    nameEn: "Ahmed Raza",
    nameMl: "അഹമ്മദ് റാസ",
    roleEn: "Founder, FoodHub",
    roleMl: "സ്ഥാപകന്‍, ഫുഡ്‌ഹബ്",
    quoteEn:
      "The team delivered beyond our expectations. Their Django expertise helped us build a robust backend that handles millions of orders.",
    quoteMl:
      "ടീം ഞങ്ങളുടെ പ്രതീക്ഷകള്‍ക്ക് അപ്പുറം ഡെലിവര്‍ ചെയ്തു. മില്യണ്‍ കണക്കിന് ഓര്‍ഡറുകള്‍ കൈകാര്യം ചെയ്യുന്ന ശക്തമായ ബാക്കെന്‍ഡ് നിര്‍മ്മിക്കാന്‍ സഹായിച്ചു.",
    rating: 5,
  },
  {
    nameEn: "Emily Chen",
    nameMl: "എമിലി ചെന്‍",
    roleEn: "Marketing Director, GreenLife",
    roleMl: "മാര്‍ക്കറ്റിംഗ് ഡയറക്ടര്‍, ഗ്രീന്‍ലൈഫ്",
    quoteEn:
      "Outstanding SEO work! We went from page 5 to ranking #1 for all our target keywords. Highly recommend their services.",
    quoteMl:
      "മികച്ച SEO ജോലി! ഞങ്ങളുടെ എല്ലാ ടാര്‍ഗെറ്റ് കീവേഡുകള്‍ക്കും പേജ് 5-ല്‍ നിന്ന് #1 റാങ്കിലേക്ക് ഞങ്ങള്‍ എത്തി.",
    rating: 5,
  },
];

export function Testimonials() {
  const { language } = useLanguage();

  return (
    <section className="relative py-24 z-10">
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
              ? "What Our Clients Say"
              : "ഞങ്ങളുടെ ക്ലയന്‍റുകള്‍ പറയുന്നത്"}
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
            {language === "en"
              ? "Real feedback from our satisfied clients"
              : "ഞങ്ങളുടെ സംതൃപ്ത ക്ലയന്‍റുകളില്‍ നിന്നുള്ള യഥാര്‍ത്ഥ ഫീഡ്‌ബാക്ക്"}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.nameEn}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="p-8 rounded-xl border border-border/50 bg-card/60 backdrop-blur-sm relative"
            >
              <Quote className="w-8 h-8 text-primary/20 absolute top-6 right-6" />

              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={`star-${testimonial.nameEn}-${i}`}
                    className="w-4 h-4 fill-primary text-primary"
                  />
                ))}
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-6 italic">
                {'"'}
                {language === "en"
                  ? testimonial.quoteEn
                  : testimonial.quoteMl}
                {'"'}
              </p>

              <div>
                <p className="text-sm font-semibold text-foreground">
                  {language === "en"
                    ? testimonial.nameEn
                    : testimonial.nameMl}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {language === "en"
                    ? testimonial.roleEn
                    : testimonial.roleMl}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
