import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import ScrollReveal from "@/components/ScrollReveal";
import TeamSection from "@/components/TeamSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import FAQSection from "@/components/FAQSection";
import heroImage from "@/assets/hero-cricket.jpg";
import productLed from "@/assets/product-led.jpg";
import productPortable from "@/assets/product-portable.jpg";
import productManual from "@/assets/product-manual.jpg";
import productCustom from "@/assets/product-custom.jpg";

const products = [
  { id: 101, title: "LED Scoreboards", description: "High brightness & visibility. Ideal for stadiums & academies.", image: productLed, slug: "led", price: 95000, badge: "Best Seller" },
  { id: 102, title: "Portable Scoreboards", description: "Easy to move & install. Suitable for local grounds & tournaments.", image: productPortable, slug: "portable", price: 42000, badge: "Popular" },
  { id: 103, title: "Manual Scoreboards", description: "Cost-effective & durable. Traditional operation.", image: productManual, slug: "manual", price: 15000, badge: "Value Pick" },
  { id: 104, title: "Custom Scoreboards", description: "Tailor-made designs. Size, display, and features as per requirement.", image: productCustom, slug: "custom", price: 150000, badge: "Premium" },
];

const stats = [
  { value: "500+", label: "Scoreboards Delivered" },
  { value: "200+", label: "Grounds Equipped" },
  { value: "15+", label: "Years Experience" },
  { value: "28", label: "States Covered" },
];


const formatPrice = (price: number) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(price);

const Index = () => {
  const { addItem } = useCart();
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }}>
          <div className="absolute inset-0 bg-foreground/70" />
        </div>
        <div className="container relative z-10 py-20">
          <div className="max-w-2xl">
            <ScrollReveal>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-primary-foreground leading-tight">
                Making Professional Cricket Scoreboards Accessible to{" "}
                <span className="text-primary">Every Ground</span> in India
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="mt-6 text-lg text-primary-foreground/80 max-w-lg">
                From a small workshop in Meerut to a trusted national manufacturer — LED, Portable, Manual & Custom scoreboards.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link to="/contact">Get a Quote <ArrowRight className="ml-2 w-4 h-4" /></Link>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/products">View Products</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary">
        <div className="container py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.1}>
                <div className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">{stat.value}</div>
                <div className="mt-1 text-sm text-primary-foreground/70">{stat.label}</div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 md:py-24">
        <div className="container">
          <ScrollReveal>
            <div className="text-center max-w-xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Scoreboard Solutions</h2>
              <p className="mt-3 text-muted-foreground">From high-tech LED displays to cost-effective manual boards — we have a solution for every cricket ground.</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, i) => (
              <ScrollReveal key={product.slug} delay={i * 0.1}>
                <Card className="group overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    {product.badge && (
                      <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">{product.badge}</Badge>
                    )}
                  </div>
                  <CardContent className="p-5 flex flex-col flex-1">
                    <h3 className="font-display text-lg font-semibold">{product.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{product.description}</p>
                    <p className="mt-3 text-xl font-bold">Starting {formatPrice(product.price)}</p>
                    <div className="flex gap-2 mt-4 pt-2">
                      <Button size="sm" variant="outline" className="flex-1" asChild>
                        <Link to={`/products/${product.slug}`}>View Details</Link>
                      </Button>
                      <Button
                        size="sm"
                        className="flex-1"
                        onClick={() => addItem({ id: product.id, name: product.title, slug: product.slug, price: product.price, image: product.image })}
                      >
                        <ShoppingCart className="w-4 h-4 mr-1" /> Order Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseSection />

      {/* Team */}
      <TeamSection />

      {/* FAQ */}
      <FAQSection />

      {/* CTA */}
      <section className="py-16 md:py-24">
        <ScrollReveal>
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Ready to Upgrade Your Ground?</h2>
            <p className="mt-3 text-muted-foreground max-w-md mx-auto">Get in touch with us for a free consultation and custom quote for your scoreboard needs.</p>
            <Button size="lg" className="mt-8" asChild>
              <Link to="/contact">Contact Us Today <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
};

export default Index;
