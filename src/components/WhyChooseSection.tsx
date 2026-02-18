import { motion, useInView } from "framer-motion";
import { Shield, Truck, Award, Wrench, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";

const cards = [
  { num: "01", icon: Shield, title: "Built to Last", body: "Weather-resistant and durable construction for Indian conditions.", featured: false },
  { num: "02", icon: Truck, title: "Pan-India Delivery", body: "We deliver and install scoreboards across all Indian states.", featured: false },
  { num: "03", icon: Award, title: "Certified Quality", body: "Manufactured to the highest standards in our Meerut facility.", featured: true },
  { num: "04", icon: Wrench, title: "Custom Solutions", body: "Every ground is unique. We build scoreboards to match your needs.", featured: false },
];

const counters = [
  { end: 500, suffix: "+", label: "Grounds" },
  { end: 18, suffix: "", label: "States" },
  { end: 20, suffix: "", label: "Years" },
  { end: 99, suffix: "%", label: "Uptime" },
];

const trustBadges = ["BCCI Affiliated Grounds", "ISO Certified", "Made in Meerut", "GST Registered"];

/* Animated number */
const AnimatedNumber = ({ end, suffix }: { end: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1200;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setVal(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, end]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
};

const WhyChooseSection = () => {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: "#ffffff" }}>
      {/* C — Scoreboard dot-matrix background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(186,24,22,0.045) 1.5px, transparent 1.5px)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative z-10">
        {/* A — Animated Counter Strip */}
        <div style={{ backgroundColor: "#ba1816" }}>
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4">
              {counters.map((c, i) => (
                <div
                  key={c.label}
                  className="flex items-center justify-center gap-2 py-4"
                  style={{
                    borderRight: i < 3 ? "1px solid rgba(255,255,255,0.15)" : "none",
                  }}
                >
                  <span
                    className="text-2xl md:text-3xl font-bold"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", color: "#ffffff", letterSpacing: "0.03em" }}
                  >
                    <AnimatedNumber end={c.end} suffix={c.suffix} />
                  </span>
                  <span
                    className="text-[10px] md:text-xs font-semibold tracking-[0.15em] uppercase"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.7)" }}
                  >
                    {c.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Header + Cards */}
        <div className="container py-16 md:py-24">
          <ScrollReveal>
            <div className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-[2px]" style={{ backgroundColor: "#ba1816" }} />
                <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ fontFamily: "'DM Sans', sans-serif", color: "#ba1816" }}>
                  Why Us
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ fontFamily: "'Bebas Neue', sans-serif", color: "#1a0d0d", letterSpacing: "0.02em" }}>
                Why Choose{" "}
                <span className="italic" style={{ color: "#ba1816", fontFamily: "Georgia, 'Times New Roman', serif" }}>
                  Ballebaaz?
                </span>
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif", color: "#888" }}>
                Trusted by cricket grounds, academies, and stadiums across India.
              </p>
            </div>
          </ScrollReveal>

          {/* Card grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ border: "1px solid rgba(186,24,22,0.12)" }}>
            {cards.map((card, i) => {
              const Icon = card.icon;
              const isFeatured = card.featured;
              return (
                <ScrollReveal key={card.title} delay={i * 0.08}>
                  <motion.div
                    className="relative overflow-hidden group cursor-default h-full flex flex-col"
                    style={{
                      padding: "48px 36px",
                      backgroundColor: isFeatured ? "#ba1816" : "#ffffff",
                      borderRight: i < 3 ? "1px solid rgba(186,24,22,0.12)" : "none",
                      boxShadow: isFeatured ? "0 8px 30px rgba(186,24,22,0.18)" : "none",
                      transition: "background-color 0.35s ease-out",
                    }}
                    whileHover={!isFeatured ? { backgroundColor: "rgba(186,24,22,0.04)" } : {}}
                  >
                    <span className="absolute top-4 right-5 select-none pointer-events-none" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "64px", lineHeight: 1, color: isFeatured ? "rgba(255,255,255,0.08)" : "rgba(186,24,22,0.04)" }}>
                      {card.num}
                    </span>
                    {isFeatured && (
                      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(135deg, transparent, transparent 10px, rgba(255,255,255,0.03) 10px, rgba(255,255,255,0.03) 12px)" }} />
                    )}
                    <div className="w-16 h-16 flex items-center justify-center mb-6 relative z-10" style={{ border: isFeatured ? "1.5px solid rgba(255,255,255,0.6)" : "1.5px solid #ba1816" }}>
                      <Icon className="w-8 h-8 transition-colors duration-300" style={{ color: isFeatured ? "#ffffff" : "#ba1816", strokeWidth: 1.5 }} />
                    </div>
                    <h3 className="text-[28px] font-bold relative z-10" style={{ fontFamily: "'Bebas Neue', sans-serif", color: isFeatured ? "#ffffff" : "#1a0d0d", letterSpacing: "0.02em" }}>
                      {card.title}
                    </h3>
                    <div className="mt-2 mb-4 h-[2px] transition-all duration-[350ms] ease-out group-hover:w-full relative z-10" style={{ width: "40px", backgroundColor: isFeatured ? "#ffffff" : "#ba1816" }} />
                    <p className="relative z-10" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "14.5px", lineHeight: 1.7, color: isFeatured ? "rgba(255,255,255,0.8)" : "#666" }}>
                      {card.body}
                    </p>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* B — Trust Badge Row */}
          <ScrollReveal>
            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-3 mt-10 py-6" style={{ borderTop: "1px solid rgba(186,24,22,0.1)", borderBottom: "1px solid rgba(186,24,22,0.1)" }}>
              {trustBadges.map((badge, i) => (
                <span key={badge} className="flex items-center gap-2">
                  <span className="text-xs font-semibold tracking-[0.12em] uppercase" style={{ fontFamily: "'DM Sans', sans-serif", color: "#1a0d0d" }}>
                    {badge}
                  </span>
                  {i < trustBadges.length - 1 && (
                    <span style={{ color: "#ba1816", fontSize: "10px" }}>◆</span>
                  )}
                </span>
              ))}
            </div>
          </ScrollReveal>

          {/* D — CTA Row */}
          <ScrollReveal>
            <div className="text-center mt-14">
              <p className="text-lg mb-6" style={{ fontFamily: "'Bebas Neue', sans-serif", color: "#1a0d0d", fontSize: "24px", letterSpacing: "0.02em" }}>
                Ready to upgrade your ground?
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button size="lg" asChild className="rounded-none" style={{ backgroundColor: "#ba1816", color: "#ffffff" }}>
                  <Link to="/contact">Get a Free Quote <ArrowRight className="ml-2 w-4 h-4" /></Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="rounded-none" style={{ borderColor: "#ba1816", color: "#ba1816" }}>
                  <Link to="/products">View Our Products</Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
