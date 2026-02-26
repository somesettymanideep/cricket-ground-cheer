import PageBanner from "@/components/PageBanner";
import bannerLegal from "@/assets/banner-legal.jpg";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Quote, Zap, Target, Trophy, Users, Lightbulb, Globe } from "lucide-react";
import founderAditya from "@/assets/founder-aditya.jpg";
import founderPranay from "@/assets/founder-pranay.jpg";
import founderSharath from "@/assets/founder-sharath.jpg";

const founders = [
  { name: "Aditya", role: "Co-Founder & CEO", image: founderAditya },
  { name: "Pranay", role: "Co-Founder & CTO", image: founderPranay },
  { name: "Sharath", role: "Co-Founder & COO", image: founderSharath },
];

const milestones = [
  { year: "The Spark", text: "Three cricket enthusiasts frustrated by outdated scorekeeping systems decided to pool their expertise in technology, engineering, and sports to build something better." },
  { year: "The Mission", text: "As active participants in local cricket leagues, they experienced firsthand the pain of inaccurate scores. They set out to create LED scoreboards that deliver real-time, accurate updates while elevating the entire match-day experience." },
  { year: "Today", text: "Cleveronics stands as a testament to unwavering commitment to innovation. Their relentless pursuit of quality craftsmanship and customer-centric approach has earned them a reputation for reliability across cricket grounds nationwide." },
];

const About = () => {
  return (
    <>
      <PageBanner title="About Us" subtitle="The visionaries behind Ballebaaz" image={bannerLegal} />

      {/* Hero Quote */}
      <section className="relative py-14 md:py-20 bg-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        <div className="container relative z-10 text-center max-w-3xl">
          <Quote className="w-10 h-10 text-primary mx-auto mb-5" />
          <p className="text-xl md:text-3xl font-display italic text-background/90 leading-relaxed">
            "We set out to ensure every cricket ground — no matter how small — has access to professional-grade scorekeeping."
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-primary/60" />
            <span className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Aditya, Pranay & Sharath</span>
            <div className="h-px w-16 bg-primary/60" />
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] bg-primary/10 text-primary rounded-sm mb-4">
                Meet The Team
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
                The Minds Behind Ballebaaz
              </h2>
            </div>
          </ScrollReveal>

          {/* Founder Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20">
            {founders.map((f, i) => (
              <ScrollReveal key={f.name}>
                <div className={`group relative overflow-hidden rounded-sm border border-border transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${i === 1 ? 'md:mt-8' : i === 2 ? 'md:mt-4' : ''}`}>
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={f.image}
                      alt={f.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-end justify-between">
                      <div>
                        <h3 className="text-2xl font-display font-bold text-background">
                          {f.name}
                        </h3>
                        <p className="text-sm text-primary font-semibold mt-1">{f.role}</p>
                      </div>
                      <div className="w-10 h-10 rounded-sm bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold shadow-lg">
                        {f.name[0]}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Founder Story — Timeline Style */}
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground">Our Story</h3>
                <p className="mt-2 text-sm text-muted-foreground">From a cricket field frustration to India's rising scoreboard brand</p>
              </div>

              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

                {milestones.map((m, i) => (
                  <ScrollReveal key={m.year}>
                    <div className={`relative flex flex-col md:flex-row items-start mb-10 last:mb-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                      {/* Content */}
                      <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}>
                        <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider bg-primary text-primary-foreground rounded-sm mb-2">
                          {m.year}
                        </span>
                        <p className="text-sm text-muted-foreground leading-relaxed">{m.text}</p>
                      </div>

                      {/* Dot */}
                      <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background shadow-md mt-1" />

                      {/* Spacer for the other side */}
                      <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              {/* Signature */}
              <ScrollReveal>
                <div className="mt-14 bg-accent/60 border border-border rounded-sm p-8 text-center">
                  <span className="text-3xl font-display font-bold text-primary tracking-tight">BALLEBAAZ</span>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1">by Cleveronics Technologies Pvt. Ltd.</p>
                  <div className="mt-5 flex justify-center gap-8 text-sm text-muted-foreground">
                    <span className="font-display italic">— Aditya</span>
                    <span className="font-display italic">— Pranay</span>
                    <span className="font-display italic">— Sharath</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* About Cleveronics Technologies */}
      <section className="relative py-20 md:py-28 bg-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, hsl(var(--background)) 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
        <div className="container relative z-10">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
              <div>
                <span className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] bg-primary/20 text-primary rounded-sm mb-4">
                  Who We Are
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-background leading-tight">
                  About Cleveronics<br />Technologies
                </h2>
              </div>
              <div>
                <p className="text-background/70 leading-relaxed">
                  Cleveronics Technologies Private Limited is a dynamic player in the sports technology industry, dedicated to revolutionizing the sports experience through cutting-edge LED scoreboard solutions. With a relentless focus on innovation, quality, and customer satisfaction, Cleveronics is committed to pushing the boundaries of sports technology and delivering unparalleled solutions to sports venues and organizations worldwide.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Stats */}
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {[
                { value: "1yr", label: "Warranty on all products" },
                { value: "Pan India", label: "Delivery coverage" },
                { value: "100%", label: "Output tested boards" },
                { value: "24/7", label: "Customer support" },
              ].map((stat) => (
                <div key={stat.label} className="text-center py-6 border border-background/10 rounded-sm">
                  <div className="text-2xl md:text-3xl font-display font-bold text-primary">{stat.value}</div>
                  <div className="mt-1 text-xs text-background/50 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Value Props */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: "Innovation First", desc: "Pushing boundaries with cutting-edge LED and IoT-driven scoreboard technology." },
              { icon: Trophy, title: "Quality Crafted", desc: "Every scoreboard undergoes rigorous output testing before it leaves our facility." },
              { icon: Target, title: "Customer Centric", desc: "Solutions tailored for cricket grounds of all sizes — from local to international." },
              { icon: Globe, title: "Global Vision", desc: "Delivering unparalleled scoreboard solutions to sports venues worldwide." },
            ].map((item) => (
              <ScrollReveal key={item.title}>
                <div className="group bg-background/5 border border-background/10 rounded-sm p-6 text-center transition-all duration-300 hover:bg-primary hover:border-primary">
                  <item.icon className="w-8 h-8 text-primary mx-auto mb-4 transition-colors group-hover:text-primary-foreground" />
                  <h3 className="font-display font-bold text-background text-sm uppercase tracking-wider mb-2 transition-colors group-hover:text-primary-foreground">
                    {item.title}
                  </h3>
                  <p className="text-xs text-background/50 leading-relaxed transition-colors group-hover:text-primary-foreground/80">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="mt-14 text-center">
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link to="/products">
                  Explore Our Products
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default About;
