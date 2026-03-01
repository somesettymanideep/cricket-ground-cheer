import { Link } from "react-router-dom";
import { Ruler, Eye, Phone } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";

import bannerVariations from "@/assets/banner-variations.jpg";
import var3x1 from "@/assets/var-3x1.jpg";
import var3x2 from "@/assets/var-3x2.jpg";
import var4x2 from "@/assets/var-4x2.jpg";
import var4x1 from "@/assets/var-4x1.jpg";
import var5x25 from "@/assets/var-5x25.jpg";
import var5x3 from "@/assets/var-5x3.jpg";
import var5x35 from "@/assets/var-5x35.jpg";
import var8x4 from "@/assets/var-8x4.jpg";
import var8x8 from "@/assets/var-8x8.jpg";
import var8x12 from "@/assets/var-8x12.jpg";

const variations = [
  {
    name: "3FT × 1FT",
    tag: "Team Size",
    dimensions: "3 feet (W) × 1 foot (H)",
    distance: "60 meters",
    image: var3x1,
    description:
      "Compact and versatile, this scoreboard is perfect for teams and small-scale events. Its portable design allows for easy transportation in a car, making it ideal for on-the-go scorekeeping during outdoor practices, friendly matches, and community events.",
  },
  {
    name: "3FT × 2FT",
    tag: "Small Grounds",
    dimensions: "3 feet (W) × 2 feet (H)",
    distance: "60 meters",
    image: var3x2,
    description:
      "Tailored for small grounds and venues with budget constraints, this scoreboard offers essential features without compromising on quality. Its medium size provides a balance between affordability and functionality, making it suitable for local leagues, school sports, and recreational events held in outdoor conditions.",
  },
  {
    name: "4FT × 2FT",
    tag: "Medium Venues",
    dimensions: "4 feet (W) × 2 feet (H)",
    distance: "120 meters",
    image: var4x2,
    description:
      "Ideal for medium-sized outdoor venues seeking to offer advanced features to players and spectators, this scoreboard provides enhanced visibility and functionality. Its versatile design and customizable options make it suitable for amateur tournaments, club matches, and regional competitions.",
  },
  {
    name: "4FT × 1FT",
    tag: "Static – Large Grounds",
    dimensions: "4 feet (W) × 1 foot (H)",
    distance: "60 meters",
    image: var4x1,
    description:
      "Catering to large grounds and stadiums, this static scoreboard offers a commanding presence without moving text. Its compact size and static display make it suitable for permanent installation in outdoor venues hosting professional matches, championships, and major events.",
  },
  {
    name: "5FT × 2.5FT",
    tag: "Standard – Outdoor",
    dimensions: "5 feet (W) × 2.5 feet (H)",
    distance: "120 meters",
    image: var5x25,
    description:
      "Built for outdoor venues and events requiring a standard-sized scoreboard with advanced features, this scoreboard offers enhanced visibility and functionality. Its dynamic display options ensure clear and engaging visuals for spectators even in outdoor conditions.",
  },
  {
    name: "5FT × 3FT",
    tag: "Standard – Outdoor",
    dimensions: "5 feet (W) × 3 feet (H)",
    distance: "120 meters",
    image: var5x3,
    description:
      "Tailored for outdoor venues and sports fields, this scoreboard provides a spacious display area for showcasing comprehensive match data and statistics. Its high-resolution display ensures optimal visibility and clarity for spectators, even in bright outdoor conditions.",
  },
  {
    name: "5FT × 3.5FT",
    tag: "Medium-Large Venues",
    dimensions: "5 feet (W) × 3.5 feet (H)",
    distance: "120 meters",
    image: var5x35,
    description:
      "Offering an even larger display area for medium-large outdoor venues, this scoreboard provides ample space for showcasing detailed match information and sponsor messages. Its versatile design and customizable features make it suitable for a wide range of outdoor sports venues and events.",
  },
  {
    name: "8FT × 4FT",
    tag: "Static – Large Venues",
    dimensions: "8 feet (W) × 4 feet (H)",
    distance: "120 meters",
    image: var8x4,
    description:
      "This static scoreboard offers a commanding presence for large outdoor venues and stadiums. Its expansive display area and static design make it ideal for permanent installation in outdoor venues hosting major sports events and championships.",
  },
  {
    name: "8FT × 8FT",
    tag: "Static – Large Venues",
    dimensions: "8 feet (W) × 8 feet (H)",
    distance: "120 meters",
    image: var8x8,
    description:
      "With its generous dimensions and static design, this scoreboard provides a stunning visual centerpiece for large outdoor venues and stadiums. Its high-resolution display ensures optimal visibility and clarity for spectators, even in outdoor conditions.",
  },
  {
    name: "8FT × 12FT",
    tag: "Static – Major Events",
    dimensions: "8 feet (W) × 12 feet (H)",
    distance: "120 meters",
    image: var8x12,
    description:
      "Designed for major outdoor sports events and tournaments, this extra-large static scoreboard offers an expansive display area for showcasing comprehensive match information and sponsor messages. Its high-resolution display ensures maximum visibility and impact for spectators, even in outdoor conditions.",
  },
];

const LEDVariations = () => {
  return (
    <>
      <PageBanner
        title="LED Scoreboard Variations"
        subtitle="From portable team boards to stadium-grade displays — find the perfect size for your venue"
        image={bannerVariations}
      />

      <section className="container py-16 md:py-24">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Choose Your Perfect Size
            </h2>
            <p className="mt-4 text-muted-foreground">
              We offer 10 carefully engineered LED scoreboard sizes to match every venue — from
              backyard pitches to international stadiums.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-12">
          {variations.map((v, i) => (
            <ScrollReveal key={v.name}>
              <div
                className={`flex flex-col ${
                  i % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
                } items-stretch gap-0 rounded-2xl overflow-hidden border border-border bg-background shadow-sm hover:shadow-md transition-shadow duration-300`}
              >
                {/* Image */}
                <div className="w-full md:w-5/12 relative">
                  <img
                    src={v.image}
                    alt={`${v.name} LED Scoreboard`}
                    className="w-full h-full object-cover min-h-[240px] md:min-h-[320px]"
                    loading="lazy"
                  />
                  <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    {v.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="w-full md:w-7/12 p-6 md:p-8 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                    {v.name}
                  </h3>

                  <div className="flex flex-wrap gap-4 mt-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Ruler className="w-4 h-4 text-primary" />
                      <span>{v.dimensions}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Eye className="w-4 h-4 text-primary" />
                      <span>Viewing: {v.distance}</span>
                    </div>
                  </div>

                  <p className="mt-4 text-muted-foreground leading-relaxed text-sm md:text-base">
                    {v.description}
                  </p>

                  <div className="mt-6">
                    <Button asChild>
                      <Link to="/contact">
                        <Phone className="w-4 h-4 mr-2" />
                        Enquire Now
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
};

export default LEDVariations;
