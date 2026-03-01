import PageBanner from "@/components/PageBanner";
import ScrollReveal from "@/components/ScrollReveal";
import bannerUsps from "@/assets/banner-usps.jpg";
import uspCuttingEdge from "@/assets/usp-cutting-edge.jpg";
import uspCustomization from "@/assets/usp-customization.jpg";
import uspQuality from "@/assets/usp-quality.jpg";
import uspService from "@/assets/usp-service.jpg";
import uspExpertise from "@/assets/usp-expertise.jpg";
import {
  Cpu,
  Settings2,
  ShieldCheck,
  HeadsetIcon,
  BrainCircuit,
  Radio,
  LayoutDashboard,
  Smartphone,
  Palette,
  Cable,
  Leaf,
  Hammer,
} from "lucide-react";

const usps = [
  {
    title: "Cutting-Edge LED Scoreboards",
    description:
      "Cleveronics' LED scoreboards are engineered with the latest technology and advanced features to provide unmatched performance and reliability.",
    image: uspCuttingEdge,
    icon: Cpu,
  },
  {
    title: "Customization & Flexibility",
    description:
      "We understand that every sports venue has unique requirements. That's why our LED scoreboards are highly customizable, allowing customers to tailor the displays to their specific needs and preferences.",
    image: uspCustomization,
    icon: Settings2,
  },
  {
    title: "Quality Craftsmanship",
    description:
      "At Cleveronics, we take pride in the superior quality and craftsmanship of our products. Our LED scoreboards are built to last, ensuring durability and reliability even in the most demanding environments.",
    image: uspQuality,
    icon: ShieldCheck,
  },
  {
    title: "Exceptional Customer Service",
    description:
      "From product selection and installation to ongoing support and maintenance, Cleveronics is committed to providing exceptional customer service at every step of the way.",
    image: uspService,
    icon: HeadsetIcon,
  },
  {
    title: "Industry Expertise",
    description:
      "With years of experience in the sports technology industry, Cleveronics has the expertise and knowledge to deliver innovative solutions that meet the evolving needs of sports venues and organizations.",
    image: uspExpertise,
    icon: BrainCircuit,
  },
];

const specialFeatures = [
  {
    title: "Real-Time Data Updates",
    description:
      "Our LED scoreboards provide real-time updates on scores, player statistics, and game progress, keeping players and spectators informed and engaged throughout the match.",
    icon: Radio,
  },
  {
    title: "Dynamic Display Options",
    description:
      "With dynamic display options, our LED scoreboards can showcase a wide range of information, including scores, player names, match statistics, and sponsor messages, enhancing the overall viewing experience.",
    icon: LayoutDashboard,
  },
  {
    title: "Remote Control Functionality",
    description:
      "Users can remotely control our LED scoreboards, allowing for easy adjustment of settings, content updates, and display configurations from anywhere, at any time.",
    icon: Smartphone,
  },
  {
    title: "Customizable Graphics",
    description:
      "Our LED scoreboards support customizable graphics and branding, allowing sports venues to showcase team logos, sponsor advertisements, and promotional messages.",
    icon: Palette,
  },
  {
    title: "Integration with Scorekeeping Apps",
    description:
      "Our LED scoreboards are seamlessly integrated with major scorekeeping applications such as CricHeroes and CricClubs, allowing for easy retrieval and display of match data.",
    icon: Cable,
  },
  {
    title: "Energy-Efficient Design",
    description:
      "Engineered for energy efficiency, our LED scoreboards are designed to minimize power consumption without compromising on performance, helping reduce environmental footprint and operating costs.",
    icon: Leaf,
  },
  {
    title: "Durable & Long-Lasting",
    description:
      "Constructed with high-quality materials and components, our LED scoreboards are built to last, ensuring years of reliable performance and minimal maintenance requirements.",
    icon: Hammer,
  },
];

const USPs = () => {
  return (
    <>
      <PageBanner
        title="Why Choose Ballebaaz"
        subtitle="Discover what sets our LED scoreboards apart from the competition"
        image={bannerUsps}
      />

      {/* USP Cards – alternating layout */}
      <section className="container py-16 md:py-24 space-y-20">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Our Unique Selling Propositions
            </h2>
            <p className="mt-4 text-muted-foreground">
              What makes Cleveronics the trusted choice for cricket grounds across India.
            </p>
          </div>
        </ScrollReveal>

        {usps.map((usp, index) => {
          const Icon = usp.icon;
          const isReversed = index % 2 !== 0;
          return (
            <ScrollReveal key={usp.title}>
              <div
                className={`flex flex-col ${
                  isReversed ? "md:flex-row-reverse" : "md:flex-row"
                } items-center gap-8 md:gap-12`}
              >
                <div className="w-full md:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                    <img
                      src={usp.image}
                      alt={usp.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
                  </div>
                </div>
                <div className="w-full md:w-1/2 space-y-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-foreground">
                    {usp.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {usp.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </section>

      {/* Special Features Grid */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                Special Features
              </h2>
              <p className="mt-4 text-muted-foreground">
                Advanced capabilities that power every Ballebaaz scoreboard.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <ScrollReveal key={feature.title}>
                  <div className="group bg-background rounded-2xl p-6 shadow-sm border border-border hover:shadow-md hover:border-primary/30 transition-all duration-300 h-full">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default USPs;
