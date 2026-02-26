import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Trophy, Users, Target, Eye } from "lucide-react";
import founderAditya from "@/assets/founder-aditya.jpg";
import founderPranay from "@/assets/founder-pranay.jpg";
import founderSharath from "@/assets/founder-sharath.jpg";
import { motion } from "framer-motion";

const founders = [
  {
    name: "Aditya",
    role: "Co-Founder & CEO",
    photo: founderAditya,
    desc: "Visionary leader driving business strategy and growth.",
  },
  {
    name: "Pranay",
    role: "Co-Founder & CTO",
    photo: founderPranay,
    desc: "Tech architect behind our LED scoreboard innovations.",
  },
  {
    name: "Sharath",
    role: "Co-Founder & COO",
    photo: founderSharath,
    desc: "Operations expert ensuring quality at every step.",
  },
];

const stats = [
  { value: "500+", label: "Scoreboards Installed", icon: Zap },
  { value: "10+", label: "Sports Supported", icon: Trophy },
  { value: "3", label: "Visionary Founders", icon: Users },
];

const About = () => {
  return (
    <div className="bg-[hsl(0,0%,5%)] text-white min-h-screen">
      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden py-28 md:py-40">
        {/* LED grid background */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `radial-gradient(circle, hsl(0 82% 50%) 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }} />
        {/* Glow accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />

        <div className="container relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] border border-primary/40 text-primary rounded-sm mb-6"
          >
            About Cleveronics
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-8xl font-display font-bold tracking-tight leading-none"
          >
            ABOUT <span className="text-primary">US</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 text-lg md:text-xl text-white/60 max-w-2xl mx-auto font-body leading-relaxed"
          >
            Transforming sports scorekeeping with cutting-edge LED technology — one scoreboard at a time.
          </motion.p>

          {/* LED scoreboard accent element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 mx-auto max-w-md"
          >
            <div className="border border-primary/30 bg-black/60 backdrop-blur-sm rounded-sm px-8 py-5 flex items-center justify-center gap-6 shadow-[0_0_40px_-10px_hsl(0,82%,50%,0.3)]">
              <div className="text-center">
                <div className="font-display text-3xl md:text-4xl text-primary font-bold tracking-wider" style={{ textShadow: '0 0 20px hsl(0 82% 50% / 0.6)' }}>
                  BAL
                </div>
              </div>
              <div className="w-px h-10 bg-primary/30" />
              <div className="text-center">
                <div className="font-display text-3xl md:text-4xl text-primary font-bold tracking-wider" style={{ textShadow: '0 0 20px hsl(0 82% 50% / 0.6)' }}>
                  LEBAAZ
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Our Story Section ── */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] bg-primary/10 text-primary border border-primary/20 rounded-sm mb-5">
                  Our Story
                </span>
                <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight">
                  FROM <span className="text-primary">PASSION</span><br />TO PURPOSE
                </h2>
                <div className="mt-8 space-y-5 text-white/70 text-sm md:text-base leading-relaxed font-body">
                  <p>
                    Cleveronics Technologies Private Limited was founded by Aditya, Pranay, and Sharath, a trio of passionate individuals with a shared vision to transform scorekeeping in sports. Their journey began with a simple yet powerful idea: to create LED scoreboards that would not only provide accurate and real-time score updates but also enhance the overall sports experience for players and spectators alike.
                  </p>
                  <p>
                    Drawing from their diverse backgrounds in technology, engineering, and sports, the founders embarked on a mission to turn their vision into reality.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="relative">
                {/* Decorative LED grid card */}
                <div className="relative border border-white/10 bg-white/[0.03] backdrop-blur-sm rounded-sm p-8 md:p-10">
                  <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_hsl(0,82%,50%,0.5)]" />
                  <div className="absolute top-4 right-10 w-3 h-3 rounded-full bg-primary/40" />
                  <blockquote className="text-lg md:text-xl font-display italic text-white/90 leading-relaxed border-l-4 border-primary pl-6">
                    "We set out to ensure every cricket ground — no matter how small — has access to professional-grade scorekeeping."
                  </blockquote>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="w-10 h-0.5 bg-primary" />
                    <span className="text-xs uppercase tracking-[0.15em] text-white/50 font-body">The Founders</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Founders Section ── */}
      <section className="py-20 md:py-28 relative">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] bg-primary/10 text-primary border border-primary/20 rounded-sm mb-5">
                Leadership
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-bold">
                MEET THE <span className="text-primary">FOUNDERS</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {founders.map((f, i) => (
              <ScrollReveal key={f.name}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="group relative border border-white/10 bg-white/[0.03] rounded-sm overflow-hidden"
                >
                  {/* Photo */}
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={f.photo}
                      alt={f.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[hsl(0,0%,5%)] via-transparent to-transparent" />
                    {/* LED indicator dot */}
                    <div className="absolute top-4 right-4 w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_8px_hsl(0,82%,50%,0.6)]" />
                  </div>

                  {/* Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-display font-bold">{f.name}</h3>
                    <p className="text-primary text-xs uppercase tracking-[0.15em] font-bold mt-1">{f.role}</p>
                    <p className="mt-3 text-white/50 text-sm font-body leading-relaxed">{f.desc}</p>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          {/* Founders story */}
          <ScrollReveal>
            <div className="mt-16 max-w-3xl mx-auto text-center">
              <p className="text-white/60 text-sm md:text-base leading-relaxed font-body">
                The founders' deep-rooted passion for sports, particularly cricket, served as the driving force behind Cleveronics' inception. As active participants in local cricket leagues, they experienced firsthand the frustrations of outdated and inaccurate scorekeeping systems. Determined to address this challenge, they pooled their expertise and resources to develop innovative LED scoreboards that would revolutionize the way sports are played and enjoyed.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="py-16 border-y border-white/10 bg-primary/[0.03]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {stats.map((stat) => (
              <ScrollReveal key={stat.label}>
                <div className="text-center group">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-4 transition-transform group-hover:scale-110" style={{ filter: 'drop-shadow(0 0 8px hsl(0 82% 50% / 0.4))' }} />
                  <div className="text-4xl md:text-5xl font-display font-bold text-white" style={{ textShadow: '0 0 30px hsl(0 82% 50% / 0.15)' }}>
                    {stat.value}
                  </div>
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/50 font-body font-bold">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission / Vision ── */}
      <section className="py-20 md:py-28 relative">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Mission */}
            <ScrollReveal>
              <div className="relative border border-primary/30 bg-primary/[0.06] rounded-sm p-8 md:p-12 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary/60 to-transparent" />
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-[60px]" />
                <Target className="w-10 h-10 text-primary mb-6" style={{ filter: 'drop-shadow(0 0 10px hsl(0 82% 50% / 0.4))' }} />
                <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
                  OUR <span className="text-primary">MISSION</span>
                </h3>
                <p className="text-white/70 text-sm md:text-base leading-relaxed font-body">
                  Today, Cleveronics stands as a testament to the founders' unwavering commitment to innovation and excellence. Their relentless pursuit of quality craftsmanship, coupled with a customer-centric approach, has earned Cleveronics a reputation for reliability and innovation in the sports technology market.
                </p>
              </div>
            </ScrollReveal>

            {/* Vision */}
            <ScrollReveal>
              <div className="relative border border-white/10 bg-white/[0.03] rounded-sm p-8 md:p-12 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-white/20 via-white/10 to-transparent" />
                <Eye className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
                  OUR <span className="text-primary">VISION</span>
                </h3>
                <p className="text-white/70 text-sm md:text-base leading-relaxed font-body">
                  As the company continues to grow and expand its reach, the founders remain dedicated to pushing the boundaries of what's possible in sports technology and delivering unmatched solutions to customers around the globe.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle, hsl(0 82% 50%) 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
        }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />
        <div className="container relative z-10">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-display font-bold">
              EXPLORE OUR <span className="text-primary">TECHNOLOGY</span>
            </h2>
            <p className="mt-4 text-white/50 max-w-lg mx-auto font-body">
              Discover the scoreboards that are changing the game across stadiums and cricket grounds worldwide.
            </p>
            <Button asChild size="lg" className="mt-8 bg-primary hover:bg-primary/90 text-white font-display text-lg tracking-wide px-8">
              <Link to="/products">
                Learn More About Our Technology
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Footer Tagline ── */}
      <section className="py-12 border-t border-white/10 text-center">
        <span className="text-2xl md:text-3xl font-display font-bold tracking-wider text-primary" style={{ textShadow: '0 0 20px hsl(0 82% 50% / 0.3)' }}>
          BALLEBAAZ
        </span>
        <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/40 font-body">
          Innovating the Future of Sports Technology
        </p>
        <p className="mt-1 text-[10px] text-white/25 font-body">
          by Cleveronics Technologies Pvt. Ltd.
        </p>
      </section>
    </div>
  );
};

export default About;
