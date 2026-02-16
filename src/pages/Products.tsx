import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import productLed from "@/assets/product-led.jpg";
import productPortable from "@/assets/product-portable.jpg";
import productManual from "@/assets/product-manual.jpg";
import productCustom from "@/assets/product-custom.jpg";

const products = [
  {
    title: "LED Scoreboards",
    slug: "led",
    image: productLed,
    description: "High brightness & visibility. Ideal for stadiums & academies.",
    features: ["Ultra-bright LED display", "Wireless remote control", "All-weather construction", "Multiple size options"],
  },
  {
    title: "Portable Scoreboards",
    slug: "portable",
    image: productPortable,
    description: "Easy to move & install. Suitable for local grounds & tournaments.",
    features: ["Lightweight with wheels", "Quick setup", "Battery & mains powered", "Tournament-ready"],
  },
  {
    title: "Manual Scoreboards",
    slug: "manual",
    image: productManual,
    description: "Cost-effective & durable. Traditional operation.",
    features: ["No electricity needed", "Low maintenance", "Heavy-duty build", "Easy number plates"],
  },
  {
    title: "Custom Scoreboards",
    slug: "custom",
    image: productCustom,
    description: "Tailor-made designs. Size, display, and features as per requirement.",
    features: ["Any size or shape", "Sponsor panels", "Team logos & branding", "Hybrid LED + manual"],
  },
];

const Products = () => {
  return (
    <>
      <section className="bg-primary py-16 md:py-24">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground tracking-tight">
            Our Products
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Professional cricket scoreboard solutions for every ground, every budget.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container space-y-16">
          {products.map((product, i) => (
            <div
              key={product.slug}
              className={`flex flex-col ${
                i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
              } gap-8 items-center`}
            >
              <div className="md:w-1/2">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full rounded-lg object-cover aspect-[4/3]"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{product.title}</h2>
                <p className="mt-3 text-muted-foreground">{product.description}</p>
                <ul className="mt-4 space-y-2">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <ChevronRight className="w-4 h-4 text-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button className="mt-6" asChild>
                  <Link to={`/products/${product.slug}`}>
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tight">Need a Custom Quote?</h2>
          <p className="mt-3 text-muted-foreground max-w-md mx-auto">
            Every ground is unique. Tell us your requirements and we'll design the perfect scoreboard for you.
          </p>
          <Button size="lg" className="mt-8" asChild>
            <Link to="/contact">
              Request Custom Quote <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Products;
