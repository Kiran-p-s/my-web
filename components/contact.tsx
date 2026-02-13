"use client";

import React from "react"

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

export function Contact() {
  const { language } = useLanguage();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" className="relative py-24 z-10">
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
              ? "Get In Touch"
              : "ബന്ധപ്പെടുക"}
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
            {language === "en"
              ? "Ready to start your project? Let's talk about your ideas."
              : "നിങ്ങളുടെ പ്രോജക്ട് ആരംഭിക്കാന്‍ തയ്യാറാണോ? നിങ്ങളുടെ ആശയങ്ങളെ കുറിച്ച് സംസാരിക്കാം."}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-foreground font-semibold">
                  {language === "en" ? "Email Us" : "ഇമെയില്‍ ചെയ്യുക"}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  hello@webcraft.studio
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-foreground font-semibold">
                  {language === "en" ? "Call Us" : "ഞങ്ങളെ വിളിക്കൂ"}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  +91 98765 43210
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-foreground font-semibold">
                  {language === "en" ? "Visit Us" : "ഞങ്ങളെ സന്ദര്‍ശിക്കൂ"}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {language === "en"
                    ? "Kerala, India"
                    : "കേരളം, ഇന്ത്യ"}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
          >
            <div>
              <label htmlFor="name" className="text-sm text-muted-foreground mb-2 block">
                {language === "en" ? "Your Name" : "നിങ്ങളുടെ പേര്‍"}
              </label>
              <input
                id="name"
                type="text"
                value={formState.name}
                onChange={(e) =>
                  setFormState({ ...formState, name: e.target.value })
                }
                required
                className="w-full px-4 py-3 rounded-lg bg-card border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors"
                placeholder={language === "en" ? "John Doe" : "പേര്‍ ടൈപ്പ് ചെയ്യുക"}
              />
            </div>

            <div>
              <label htmlFor="email" className="text-sm text-muted-foreground mb-2 block">
                {language === "en" ? "Email Address" : "ഇമെയില്‍ വിലാസം"}
              </label>
              <input
                id="email"
                type="email"
                value={formState.email}
                onChange={(e) =>
                  setFormState({ ...formState, email: e.target.value })
                }
                required
                className="w-full px-4 py-3 rounded-lg bg-card border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors"
                placeholder={language === "en" ? "john@example.com" : "ഇമെയില്‍ ടൈപ്പ് ചെയ്യുക"}
              />
            </div>

            <div>
              <label htmlFor="message" className="text-sm text-muted-foreground mb-2 block">
                {language === "en" ? "Message" : "സന്ദേശം"}
              </label>
              <textarea
                id="message"
                value={formState.message}
                onChange={(e) =>
                  setFormState({ ...formState, message: e.target.value })
                }
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-card border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors resize-none"
                placeholder={
                  language === "en"
                    ? "Tell us about your project..."
                    : "നിങ്ങളുടെ പ്രോജക്ടിനെ കുറിച്ച് പറയൂ..."
                }
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${
                submitted
                  ? "bg-green-600 text-green-50"
                  : "bg-primary text-primary-foreground hover:shadow-[0_0_30px_hsl(174,72%,50%,0.3)]"
              }`}
            >
              {submitted ? (
                language === "en" ? "Sent Successfully!" : "വിജയകരമായി അയച്ചു!"
              ) : (
                <>
                  {language === "en" ? "Send Message" : "സന്ദേശം അയയ്ക്കുക"}
                  <Send className="w-4 h-4" />
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
