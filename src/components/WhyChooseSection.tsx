import { motion } from "framer-motion";
import { Shield, Truck, Award, Wrench } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const cards = [
  {
    num: "01",
    icon: Shield,
    title: "Built to Last",
    body: "Weather-resistant and durable construction for Indian conditions.",
    featured: false,
  },
  {
    num: "02",
    icon: Truck,
    title: "Pan-India Delivery",
    body: "We deliver and install scoreboards across all Indian states.",
    featured: false,
  },
  {
    num: "03",
    icon: Award,
    title: "Certified Quality",
    body: "Manufactured to the highest standards in our Meerut facility.",
    featured: true,
  },
  {
    num: "04",
    icon: Wrench,
    title: "Custom Solutions",
    body: "Every ground is unique. We build scoreboards to match your needs.",
    featured: false,
  },
];

const WhyChooseSection = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden" style={{ backgroundColor: "#ffffff" }}>
      {/* Faint dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(186,24,22,0.03) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="container relative z-10">
        <ScrollReveal>
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px]" style={{ backgroundColor: "#ba1816" }} />
              <span
                className="text-xs font-semibold tracking-[0.2em] uppercase"
                style={{ fontFamily: "'DM Sans', sans-serif", color: "#ba1816" }}
              >
                Why Us
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold tracking-tight"
              style={{ fontFamily: "'Bebas Neue', sans-serif", color: "#1a0d0d", letterSpacing: "0.02em" }}
            >
              Why Choose{" "}
              <span className="italic" style={{ color: "#ba1816", fontFamily: "Georgia, 'Times New Roman', serif" }}>
                Ballebaaz?
              </span>
            </h2>
            <p
              className="mt-4 max-w-lg text-sm leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif", color: "#888" }}
            >
              Trusted by cricket grounds, academies, and stadiums across India.
            </p>
          </div>
        </ScrollReveal>

        {/* Card grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          style={{ border: "1px solid rgba(186,24,22,0.12)" }}
        >
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
                  whileHover={
                    !isFeatured
                      ? { backgroundColor: "rgba(186,24,22,0.04)" }
                      : {}
                  }
                >
                  {/* Ghost number */}
                  <span
                    className="absolute top-4 right-5 select-none pointer-events-none"
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: "64px",
                      lineHeight: 1,
                      color: isFeatured ? "rgba(255,255,255,0.08)" : "rgba(186,24,22,0.04)",
                    }}
                  >
                    {card.num}
                  </span>

                  {/* Diagonal stripe overlay for featured */}
                  {isFeatured && (
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        backgroundImage:
                          "repeating-linear-gradient(135deg, transparent, transparent 10px, rgba(255,255,255,0.03) 10px, rgba(255,255,255,0.03) 12px)",
                      }}
                    />
                  )}

                  {/* Icon in square frame */}
                  <div
                    className="w-16 h-16 flex items-center justify-center mb-6 relative z-10"
                    style={{
                      border: isFeatured ? "1.5px solid rgba(255,255,255,0.6)" : "1.5px solid #ba1816",
                    }}
                  >
                    <Icon
                      className="w-8 h-8 transition-colors duration-300"
                      style={{
                        color: isFeatured ? "#ffffff" : "#ba1816",
                        strokeWidth: 1.5,
                      }}
                    />
                  </div>

                  {/* Heading */}
                  <h3
                    className="text-[28px] font-bold relative z-10"
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      color: isFeatured ? "#ffffff" : "#1a0d0d",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {card.title}
                  </h3>

                  {/* Underline accent */}
                  <div
                    className="mt-2 mb-4 h-[2px] transition-all duration-[350ms] ease-out group-hover:w-full relative z-10"
                    style={{
                      width: "40px",
                      backgroundColor: isFeatured ? "#ffffff" : "#ba1816",
                    }}
                  />

                  {/* Body */}
                  <p
                    className="relative z-10"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 300,
                      fontSize: "14.5px",
                      lineHeight: 1.7,
                      color: isFeatured ? "rgba(255,255,255,0.8)" : "#666",
                    }}
                  >
                    {card.body}
                  </p>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
