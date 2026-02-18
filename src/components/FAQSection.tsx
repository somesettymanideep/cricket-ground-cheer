import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const categories = ["All", "Products", "Installation", "Support", "Pricing"];

const faqs = [
  { q: "What types of cricket scoreboards does Ballebaaz manufacture?", a: "We manufacture four main types: <strong style='color:#ba1816'>LED Scoreboards</strong> for professional stadiums, <strong style='color:#ba1816'>Portable Scoreboards</strong> for tournaments, <strong style='color:#ba1816'>Manual Scoreboards</strong> for local grounds, and <strong style='color:#ba1816'>Custom Scoreboards</strong> tailored to your exact specifications.", cat: "Products" },
  { q: "Can scoreboards be operated wirelessly from the scorer's table?", a: "Yes. All our LED and Portable models come with <strong style='color:#ba1816'>wireless remote control</strong> capability. Scorers can update scores, overs, and wickets from up to 200 metres away using our proprietary RF controller or a dedicated mobile app.", cat: "Products" },
  { q: "How long does installation take and is on-site service available?", a: "Standard installations take <strong style='color:#ba1816'>1–2 days</strong> depending on ground conditions. Our field team travels pan-India and handles mounting, wiring, calibration, and staff training — all included in the installation package.", cat: "Installation" },
  { q: "Are scoreboards weather-resistant for outdoor year-round use?", a: "Absolutely. Every unit is built with <strong style='color:#ba1816'>IP65-rated enclosures</strong>, UV-resistant panels, and corrosion-proof hardware designed specifically for the Indian climate — from monsoon rains to harsh summer heat.", cat: "Products" },
  { q: "What is the warranty period and what does it cover?", a: "We offer a <strong style='color:#ba1816'>2-year comprehensive warranty</strong> covering LED modules, controllers, power supplies, and structural components. Extended warranty and annual maintenance contracts are also available.", cat: "Support" },
  { q: "Can the board display player names, logos, and advertisements?", a: "Yes. Our LED models support <strong style='color:#ba1816'>full-color graphics</strong> including team logos, player names, sponsor advertisements, and custom animations. Content can be updated remotely via our management software.", cat: "Products" },
  { q: "What are payment options and is financing available?", a: "We accept bank transfers, UPI, and cheque payments. For orders above ₹1 lakh, we offer <strong style='color:#ba1816'>flexible EMI options</strong> and instalment plans. Government and institutional purchase orders are also accepted.", cat: "Pricing" },
];

const stats = [
  { value: "500+", label: "Grounds Served" },
  { value: "18", label: "States Covered" },
  { value: "99%", label: "Uptime Guaranteed" },
  { value: "24/7", label: "Support Access" },
];

const FAQSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered = activeCategory === "All" ? faqs : faqs.filter(f => f.cat === activeCategory);

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-white" style={{ borderTop: "4px solid #ba1816" }}>
      {/* Ghost watermark */}
      <div
        className="absolute bottom-0 right-0 select-none pointer-events-none"
        style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(180px, 20vw, 350px)", color: "rgba(186, 24, 22, 0.04)", lineHeight: 0.8, transform: "translate(5%, 10%)" }}
      >
        FAQ
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* LEFT PANEL */}
          <div className="lg:col-span-2 lg:sticky lg:top-28 lg:self-start">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-[2px]" style={{ backgroundColor: "#ba1816" }} />
                <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ fontFamily: "'DM Sans', sans-serif", color: "#ba1816" }}>
                  Have Questions?
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ fontFamily: "'Bebas Neue', sans-serif", color: "#1a0d0d", letterSpacing: "0.02em" }}>
                Common{" "}
                <span className="italic" style={{ color: "#ba1816", fontFamily: "Georgia, 'Times New Roman', serif" }}>
                  Queries
                </span>
              </h2>

              <p className="mt-4 text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif", color: "#888" }}>
                Everything you need to know about our cricket scoreboards, installation process, and after-sales support.
              </p>

              {/* CTA */}
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 mt-6 px-6 py-3 text-sm font-semibold text-white transition-all group"
                style={{ fontFamily: "'DM Sans', sans-serif", backgroundColor: "#ba1816" }}
              >
                Ask Us Directly
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-0 mt-8" style={{ border: "1px solid rgba(186, 24, 22, 0.15)" }}>
                {stats.map((stat) => (
                  <div key={stat.label} className="p-4" style={{ borderRight: "1px solid rgba(186, 24, 22, 0.15)", borderBottom: "1px solid rgba(186, 24, 22, 0.15)" }}>
                    <div className="text-2xl font-bold" style={{ fontFamily: "'Bebas Neue', sans-serif", color: "#ba1816" }}>
                      {stat.value}
                    </div>
                    <div className="text-[10px] font-semibold tracking-[0.15em] uppercase mt-1" style={{ fontFamily: "'DM Sans', sans-serif", color: "#888" }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT PANEL */}
          <div className="lg:col-span-3">
            {/* Category filters */}
            <ScrollReveal>
              <div className="flex flex-wrap gap-2 mb-8">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => { setActiveCategory(cat); setOpenIndex(null); }}
                    className="px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-all"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      backgroundColor: activeCategory === cat ? "#ba1816" : "transparent",
                      color: activeCategory === cat ? "#ffffff" : "#ba1816",
                      border: activeCategory === cat ? "1px solid #ba1816" : "1px solid rgba(186, 24, 22, 0.3)",
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </ScrollReveal>

            {/* FAQ items */}
            <div>
              {filtered.map((faq, i) => {
                const globalIndex = faqs.indexOf(faq);
                const num = String(globalIndex + 1).padStart(2, "0");
                const isOpen = openIndex === globalIndex;

                return (
                  <ScrollReveal key={globalIndex} delay={i * 0.05}>
                    <div
                      className="transition-colors duration-300"
                      style={{
                        borderTop: "1px solid rgba(186, 24, 22, 0.15)",
                        backgroundColor: isOpen ? "#fef9f7" : "transparent",
                      }}
                    >
                      <button
                        className="w-full flex items-center gap-4 py-5 px-4 text-left group"
                        onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                      >
                        {/* Number */}
                        <span
                          className="text-2xl font-bold shrink-0 w-8"
                          style={{ fontFamily: "'Bebas Neue', sans-serif", color: "rgba(186, 24, 22, 0.2)" }}
                        >
                          {num}
                        </span>

                        {/* Question */}
                        <span
                          className="flex-1 text-sm font-medium transition-colors"
                          style={{
                            fontFamily: "'DM Sans', sans-serif",
                            color: isOpen ? "#ba1816" : "#1a0d0d",
                          }}
                        >
                          {faq.q}
                        </span>

                        {/* Toggle */}
                        <div
                          className="w-8 h-8 flex items-center justify-center shrink-0 transition-all duration-300"
                          style={{
                            borderRadius: "50%",
                            backgroundColor: isOpen ? "#ba1816" : "transparent",
                            border: isOpen ? "1px solid #ba1816" : "1px solid rgba(186, 24, 22, 0.3)",
                          }}
                        >
                          <Plus
                            className="w-4 h-4 transition-transform duration-300"
                            style={{
                              color: isOpen ? "#ffffff" : "#ba1816",
                              transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                            }}
                          />
                        </div>
                      </button>

                      {/* Answer */}
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div
                              className="px-4 pb-5 pl-16 text-sm leading-relaxed"
                              style={{ fontFamily: "'DM Sans', sans-serif", color: "#888" }}
                              dangerouslySetInnerHTML={{ __html: faq.a }}
                            />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </ScrollReveal>
                );
              })}
              {/* Bottom border */}
              <div style={{ borderTop: "1px solid rgba(186, 24, 22, 0.15)" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
