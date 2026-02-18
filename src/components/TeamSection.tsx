import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const teamMembers = [
  { name: "Aditya VNS", role: "CEO", bio: "An innovator, who has always been passionate about technology, is the creator of Ballebaaz, disrupting the game of Cricket for entertainers.", specialty: "Innovation & Vision", featured: true },
  { name: "Vinod Goud", role: "Operations Manager", bio: "Vinod represented India for boxing at 17 years of age and is known for his discipline, consistency and determination. A strategist who just knows how to plan well.", specialty: "Strategy & Operations" },
  { name: "Pranay Kumar", role: "Electronics Engineer", bio: "Graduating with a degree in Electronics and Communication, he has always loved working with wires.", specialty: "Electronics & Hardware" },
];

const TeamSection = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden" style={{ backgroundColor: "#f7f2f0" }}>
      {/* Ghost watermark */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none"
        style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(200px, 25vw, 400px)", color: "rgba(186, 24, 22, 0.06)", lineHeight: 1, letterSpacing: "0.05em" }}
      >
        TEAM
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px]" style={{ backgroundColor: "#ba1816" }} />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ fontFamily: "'DM Sans', sans-serif", color: "#ba1816" }}>
                Our People
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ fontFamily: "'Bebas Neue', sans-serif", color: "#1a0d0d", letterSpacing: "0.02em" }}>
              The Minds Behind{" "}
              <span className="italic" style={{ color: "#ba1816", fontFamily: "Georgia, 'Times New Roman', serif" }}>
                Every Score
              </span>
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif", color: "#888" }}>
              A passionate crew of engineers, designers, and cricket enthusiasts
              <br />
              dedicated to bringing world-class scoring technology to every ground.
            </p>
          </div>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0" style={{ border: "1px solid rgba(186, 24, 22, 0.15)" }}>
          {teamMembers.map((member, i) => {
            const num = String(i + 1).padStart(2, "0");
            const isFeatured = member.featured;
            const initials = member.name.split(" ").map(n => n[0]).join("");

            return (
              <ScrollReveal key={member.name} delay={i * 0.08}>
                <motion.div
                  className={`relative overflow-hidden p-6 flex flex-col justify-between group cursor-default h-full`}
                  style={{
                    backgroundColor: isFeatured ? "#ba1816" : "#ffffff",
                    borderRight: "1px solid rgba(186, 24, 22, 0.15)",
                    borderBottom: "1px solid rgba(186, 24, 22, 0.15)",
                    minHeight: "320px",
                  }}
                  whileHover={{ y: -3, boxShadow: "0 8px 30px rgba(186, 24, 22, 0.12)" }}
                  transition={{ duration: 0.25 }}
                >
                  {/* Ghost number */}
                  <span
                    className="absolute top-3 right-4 select-none pointer-events-none"
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: isFeatured ? "120px" : "80px",
                      lineHeight: 1,
                      color: isFeatured ? "rgba(255,255,255,0.1)" : "rgba(186, 24, 22, 0.06)",
                    }}
                  >
                    {num}
                  </span>

                  <div className="relative z-10">
                    {/* Avatar */}
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold mb-4"
                      style={{
                        fontFamily: "'Bebas Neue', sans-serif",
                        border: isFeatured ? "2px solid rgba(255,255,255,0.6)" : "2px solid #ba1816",
                        color: isFeatured ? "#ffffff" : "#ba1816",
                        backgroundColor: isFeatured ? "rgba(255,255,255,0.1)" : "rgba(186, 24, 22, 0.05)",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {initials}
                    </div>

                    {/* Name */}
                    <h3
                      className="text-xl font-bold"
                      style={{
                        fontFamily: "'Bebas Neue', sans-serif",
                        color: isFeatured ? "#ffffff" : "#1a0d0d",
                        letterSpacing: "0.03em",
                      }}
                    >
                      {member.name}
                    </h3>

                    {/* Role */}
                    <p
                      className="text-[10px] font-semibold tracking-[0.15em] uppercase mt-1"
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        color: isFeatured ? "rgba(255,255,255,0.7)" : "#ba1816",
                      }}
                    >
                      {member.role}
                    </p>

                    {/* Bio */}
                    <p
                      className="text-xs leading-relaxed mt-3"
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        color: isFeatured ? "rgba(255,255,255,0.75)" : "#888",
                      }}
                    >
                      {member.bio}
                    </p>
                  </div>

                  {/* Specialty tag */}
                  <div className="relative z-10 mt-4">
                    <span
                      className="inline-block px-3 py-1 text-[10px] font-semibold tracking-wider uppercase"
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        backgroundColor: isFeatured ? "rgba(255,255,255,0.15)" : "rgba(186, 24, 22, 0.08)",
                        color: isFeatured ? "#ffffff" : "#ba1816",
                        borderRadius: "999px",
                      }}
                    >
                      {member.specialty}
                    </span>
                  </div>

                  {/* Hover bar */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-[3px]"
                    style={{ backgroundColor: isFeatured ? "#ffffff" : "#ba1816" }}
                    initial={{ width: "0%" }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  />
                  <div
                    className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-500"
                    style={{ backgroundColor: isFeatured ? "#ffffff" : "#ba1816" }}
                  />
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
