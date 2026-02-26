import PageBanner from "@/components/PageBanner";
import bannerLegal from "@/assets/banner-legal.jpg";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Quote } from "lucide-react";

const founders = [
  { name: "Aditya", role: "Co-Founder & CEO", initials: "A" },
  { name: "Pranay", role: "Co-Founder & CTO", initials: "P" },
  { name: "Sharath", role: "Co-Founder & COO", initials: "S" },
];

const About = () => {
  return (
    <>
      <PageBanner title="About Us" subtitle="The visionaries behind Ballebaaz" image={bannerLegal} />

      {/* Founder Message Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-16">
              <span className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] bg-primary/10 text-primary rounded-sm mb-4">
                Our Leadership
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                Founders &amp; Story
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left — Founder Photos */}
            <ScrollReveal>
              <div className="space-y-8">
                <div className="grid grid-cols-3 gap-4">
                  {founders.map((f) => (
                    <div key={f.name} className="flex flex-col items-center text-center">
                      <div className="w-28 h-28 md:w-36 md:h-36 rounded-sm bg-accent border-2 border-primary/20 flex items-center justify-center overflow-hidden shadow-lg">
                        <span className="text-4xl md:text-5xl font-display font-bold text-primary/60">
                          {f.initials}
                        </span>
                      </div>
                      <h3 className="mt-3 font-display font-bold text-foreground text-sm md:text-base">
                        {f.name}
                      </h3>
                      <p className="text-xs text-muted-foreground">{f.role}</p>
                    </div>
                  ))}
                </div>

                {/* Signature block */}
                <div className="bg-accent/50 border border-border rounded-sm p-6 text-center">
                  <span className="text-2xl font-display font-bold text-primary tracking-tight">
                    BALLEBAAZ
                  </span>
                  <p className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground mt-1">
                    by Cleveronics Technologies Pvt. Ltd.
                  </p>
                  <div className="mt-4 flex justify-center gap-6 text-xs text-muted-foreground italic">
                    <span>— Aditya</span>
                    <span>— Pranay</span>
                    <span>— Sharath</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right — Story */}
            <ScrollReveal>
              <div className="space-y-6">
                {/* Inspirational Quote */}
                <div className="relative border-l-4 border-primary pl-5 py-2">
                  <Quote className="absolute -left-3.5 -top-1 w-6 h-6 text-primary bg-background" />
                  <p className="text-base md:text-lg font-display italic text-foreground/90 leading-relaxed">
                    "We set out to ensure every cricket ground — no matter how small — has access to professional-grade scorekeeping."
                  </p>
                </div>

                <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                  <p>
                    Cleveronics Technologies Private Limited was founded by Aditya, Pranay, and Sharath, a trio of passionate individuals with a shared vision to transform scorekeeping in sports. Their journey began with a simple yet powerful idea: to create LED scoreboards that would not only provide accurate and real-time score updates but also enhance the overall sports experience for players and spectators alike. Drawing from their diverse backgrounds in technology, engineering, and sports, the founders embarked on a mission to turn their vision into reality.
                  </p>
                  <p>
                    The founders' deep-rooted passion for sports, particularly cricket, served as the driving force behind Cleveronics' inception. As active participants in local cricket leagues, they experienced firsthand the frustrations of outdated and inaccurate scorekeeping systems. Determined to address this challenge, they pooled their expertise and resources to develop innovative LED scoreboards that would revolutionize the way sports are played and enjoyed.
                  </p>
                  <p>
                    Today, Cleveronics stands as a testament to the founders' unwavering commitment to innovation and excellence. Their relentless pursuit of quality craftsmanship, coupled with a customer-centric approach, has earned Cleveronics a reputation for reliability and innovation in the sports technology market. As the company continues to grow and expand its reach, the founders remain dedicated to pushing the boundaries of what's possible in sports technology and delivering unmatched solutions to customers around the globe.
                  </p>
                </div>

                <Button asChild size="lg" className="mt-4">
                  <Link to="/products">
                    Learn More About Our Technology
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* About Company */}
      <section className="py-16 md:py-20 bg-accent">
        <div className="container max-w-3xl text-center">
          <ScrollReveal>
            <h2 className="text-xl md:text-2xl font-display font-bold text-foreground">
              About Cleveronics Technologies Private Limited
            </h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Cleveronics Technologies Private Limited is a dynamic player in the sports technology industry, dedicated to revolutionizing the sports experience through cutting-edge LED scoreboard solutions. With a relentless focus on innovation, quality, and customer satisfaction, Cleveronics is committed to pushing the boundaries of sports technology and delivering unparalleled solutions to sports venues and organizations worldwide.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default About;
