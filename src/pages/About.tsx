import PageBanner from "@/components/PageBanner";
import bannerLegal from "@/assets/banner-legal.jpg";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Quote, Zap, Target, Trophy, Users } from "lucide-react";
import founderAditya from "@/assets/founder-aditya.jpg";
import founderPranay from "@/assets/founder-pranay.jpg";
import founderSharath from "@/assets/founder-sharath.jpg";

const founders = [
  { name: "Aditya", role: "Co-Founder & CEO", image: founderAditya },
  { name: "Pranay", role: "Co-Founder & CTO", image: founderPranay },
  { name: "Sharath", role: "Co-Founder & COO", image: founderSharath },
];

const About = () => {
  return (
    <>
      <PageBanner title="About Us" subtitle="The visionaries behind Ballebaaz" image={bannerLegal} />

      {/* Hero Quote */}
      <section className="relative py-12 md:py-16 bg-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        <div className="container relative z-10 text-center max-w-3xl">
          <Quote className="w-10 h-10 text-primary mx-auto mb-4" />
          <p className="text-xl md:text-2xl font-display italic text-background/90 leading-relaxed">
            "We set out to ensure every cricket ground — no matter how small — has access to professional-grade scorekeeping."
          </p>
          <div className="mt-6 flex items-center justify-center gap-2">
            <div className="h-px w-12 bg-primary" />
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-bold">The Founders</span>
            <div className="h-px w-12 bg-primary" />
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
            {founders.map((f, i) => (
              <ScrollReveal key={f.name}>
                <div className={`group relative overflow-hidden rounded-sm border border-border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${i === 0 ? 'md:mt-0' : i === 1 ? 'md:mt-8' : 'md:mt-4'}`}>
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={f.image}
                      alt={f.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-end justify-between">
                      <div>
                        <h3 className="text-xl font-display font-bold text-background">
                          {f.name}
                        </h3>
                        <p className="text-sm text-primary font-medium">{f.role}</p>
                      </div>
                      <div className="w-8 h-8 rounded-sm bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold">
                        {f.name[0]}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Story */}
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 items-start">
                <div className="hidden md:flex flex-col items-center gap-2">
                  <div className="w-1 h-8 bg-primary rounded-full" />
                  <div className="w-1 h-full bg-border rounded-full min-h-[200px]" />
                  <div className="w-1 h-8 bg-primary rounded-full" />
                </div>
                <div className="space-y-5 text-sm text-muted-foreground leading-relaxed">
                  <h3 className="text-lg font-display font-bold text-foreground">Our Journey</h3>
                  <p>
                    Cleveronics Technologies Private Limited was founded by Aditya, Pranay, and Sharath, a trio of passionate individuals with a shared vision to transform scorekeeping in sports. Their journey began with a simple yet powerful idea: to create LED scoreboards that would not only provide accurate and real-time score updates but also enhance the overall sports experience for players and spectators alike.
                  </p>
                  <p>
                    The founders' deep-rooted passion for sports, particularly cricket, served as the driving force behind Cleveronics' inception. As active participants in local cricket leagues, they experienced firsthand the frustrations of outdated and inaccurate scorekeeping systems. Determined to address this challenge, they pooled their expertise and resources to develop innovative LED scoreboards that would revolutionize the way sports are played and enjoyed.
                  </p>
                  <p>
                    Today, Cleveronics stands as a testament to the founders' unwavering commitment to innovation and excellence. Their relentless pursuit of quality craftsmanship, coupled with a customer-centric approach, has earned Cleveronics a reputation for reliability and innovation in the sports technology market.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* About Cleveronics — redesigned */}
      <section className="relative py-20 md:py-28 bg-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, hsl(var(--background)) 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
        <div className="container relative z-10">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] bg-primary/20 text-primary rounded-sm mb-4">
                Who We Are
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-background">
                About Cleveronics Technologies
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-sm text-background/60 leading-relaxed">
                A dynamic player in the sports technology industry, dedicated to revolutionizing the sports experience through cutting-edge LED scoreboard solutions.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: "Innovation First", desc: "Pushing boundaries with cutting-edge LED and IoT-driven scoreboard technology." },
              { icon: Trophy, title: "Quality Crafted", desc: "Every scoreboard undergoes rigorous output testing before it leaves our facility." },
              { icon: Target, title: "Customer Centric", desc: "Solutions tailored for cricket grounds of all sizes — from local to international." },
              { icon: Users, title: "Global Vision", desc: "Delivering unparalleled scoreboard solutions to sports venues worldwide." },
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
            <div className="mt-12 text-center">
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
