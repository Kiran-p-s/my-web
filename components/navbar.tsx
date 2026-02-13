"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

const navLinks = [
  { href: "#home", labelEn: "Home", labelMl: "ഹോം" },
  { href: "#services", labelEn: "Services", labelMl: "സേവനങ്ങള്‍" },
  { href: "#why-us", labelEn: "Why Us", labelMl: "എന്തുകൊണ്ട്" },
  { href: "#portfolio", labelEn: "Portfolio", labelMl: "പോര്‍ട്ട്‌ഫോളിയോ" },
  { href: "#process", labelEn: "Process", labelMl: "പ്രക്രിയ" },
  { href: "#contact", labelEn: "Contact", labelMl: "ബന്ധപ്പെടുക" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold text-primary tracking-tight">
          {"< K-4 />"}
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {language === "en" ? link.labelEn : link.labelMl}
            </a>
          ))}
          <button
            type="button"
            onClick={() => setLanguage(language === "en" ? "ml" : "en")}
            className="px-3 py-1.5 text-xs font-mono rounded-md border border-primary/30 text-primary hover:bg-primary/10 transition-colors"
          >
            {language === "en" ? "ML" : "EN"}
          </button>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-3">
          <button
            type="button"
            onClick={() => setLanguage(language === "en" ? "ml" : "en")}
            className="px-2 py-1 text-xs font-mono rounded border border-primary/30 text-primary"
          >
            {language === "en" ? "ML" : "EN"}
          </button>
          <button type="button" onClick={() => setIsOpen(!isOpen)} className="text-foreground">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden backdrop-blur-xl bg-background/90 border-b border-border/50"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {language === "en" ? link.labelEn : link.labelMl}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
