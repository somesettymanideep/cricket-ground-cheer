import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import productLed from "@/assets/product-led.jpg";
import productPortable from "@/assets/product-portable.jpg";
import productManual from "@/assets/product-manual.jpg";
import productCustom from "@/assets/product-custom.jpg";

const productData: Record<string, { title: string; tagline: string; image: string; description: string; features: string[]; idealFor: string[] }> = {
  led: { title: "LED Scoreboards", tagline: "High brightness & visibility for professional venues", image: productLed, description: "Our LED scoreboards are designed for maximum visibility in all lighting conditions. Using ultra-bright LED panels, they provide clear, crisp displays that can be read from hundreds of meters away. Perfect for stadiums, academies, and professional tournaments.", features: ["Ultra-bright LED display visible in daylight", "Wireless remote control operation", "All-weather, dustproof, waterproof construction", "Multiple size options (6ft to 20ft)", "Low power consumption", "Easy installation & maintenance"], idealFor: ["Professional stadiums", "Cricket academies", "State & national tournaments", "Franchise leagues"] },
  portable: { title: "Portable Scoreboards", tagline: "Easy to move & install for any ground", image: productPortable, description: "Built for flexibility, our portable scoreboards come with heavy-duty wheels and lightweight construction. Set up in minutes, move between grounds easily, and store compactly when not in use. Ideal for clubs that host matches at multiple venues.", features: ["Heavy-duty wheels for easy transport", "Quick 10-minute setup", "Dual power: battery & mains", "Foldable design for storage", "Durable outdoor construction", "Available in LED & manual variants"], idealFor: ["Local cricket clubs", "Tournament organizers", "School & college grounds", "Practice facilities"] },
  manual: { title: "Manual Scoreboards", tagline: "Cost-effective & durable, the classic choice", image: productManual, description: "Our manual scoreboards offer a reliable, zero-electricity solution. Built with heavy-gauge steel and weather-resistant number plates, they deliver years of service with virtually no maintenance. The traditional choice that never fails.", features: ["No electricity required", "Heavy-gauge steel construction", "UV-resistant number plates", "Minimal maintenance", "15+ year lifespan", "Available in multiple sizes"], idealFor: ["Village & rural grounds", "Schools & colleges", "Budget-conscious clubs", "Grounds without electricity"] },
  custom: { title: "Custom Scoreboards", tagline: "Tailor-made to your exact specifications", image: productCustom, description: "No two grounds are the same. Our custom scoreboards are designed and built to your exact requirements — size, display type, branding, sponsor panels, and special features. Tell us what you need, and we'll make it happen.", features: ["Any size, shape, or configuration", "Sponsor & branding panels", "Team logos & custom graphics", "Hybrid LED + manual options", "Integrated clock & timer", "Dedicated design consultation"], idealFor: ["Stadiums with specific requirements", "Branded tournament venues", "Corporate cricket facilities", "State cricket associations"] },
};

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? productData[slug] : null;

  if (!product) {
    return (
      <div className="container py-24 text-center">
        <h1 className="text-2xl font-bold">Product not found</h1>
        <Button className="mt-4" asChild>
          <Link to="/products"><ArrowLeft className="mr-2 w-4 h-4" /> Back to Products</Link>
        </Button>
      </div>
    );
  }

  return (
    <>
      <section className="bg-primary py-16 md:py-24">
        <div className="container">
          <Link to="/products" className="inline-flex items-center text-sm text-primary-foreground/70 hover:text-primary-foreground mb-4">
            <ArrowLeft className="mr-1 w-4 h-4" /> All Products
          </Link>
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground tracking-tight">{product.title}</h1>
            <p className="mt-3 text-lg text-primary-foreground/80">{product.tagline}</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container grid md:grid-cols-2 gap-12 items-start">
          <ScrollReveal direction="left">
            <img src={product.image} alt={product.title} className="w-full rounded-lg object-cover aspect-[4/3]" />
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div>
              <p className="text-muted-foreground leading-relaxed">{product.description}</p>
              <h3 className="mt-8 font-display text-xl font-bold">Key Features</h3>
              <ul className="mt-4 space-y-3">
                {product.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm"><Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />{f}</li>
                ))}
              </ul>
              <h3 className="mt-8 font-display text-xl font-bold">Ideal For</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {product.idealFor.map((item) => (
                  <span key={item} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">{item}</span>
                ))}
              </div>
              <Button size="lg" className="mt-8" asChild>
                <Link to="/contact">Get a Quote <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
