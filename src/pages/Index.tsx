import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Truck, Award, Wrench, ChevronRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import heroImage from "@/assets/hero-cricket.jpg";
import productLed from "@/assets/product-led.jpg";
import productPortable from "@/assets/product-portable.jpg";
import productManual from "@/assets/product-manual.jpg";
import productCustom from "@/assets/product-custom.jpg";

const products = [
  { title: "LED Scoreboards", description: "High brightness & visibility. Ideal for stadiums & academies.", image: productLed, slug: "led" },
  { title: "Portable Scoreboards", description: "Easy to move & install. Suitable for local grounds & tournaments.", image: productPortable, slug: "portable" },
  { title: "Manual Scoreboards", description: "Cost-effective & durable. Traditional operation.", image: productManual, slug: "manual" },
  { title: "Custom Scoreboards", description: "Tailor-made designs. Size, display, and features as per requirement.", image: productCustom, slug: "custom" },
];

const stats = [
  { value: "500+", label: "Scoreboards Delivered" },
  { value: "200+", label: "Grounds Equipped" },
  { value: "15+", label: "Years Experience" },
  { value: "28", label: "States Covered" },
];

const whyChoose = [
  { icon: Shield, title: "Built to Last", description: "Weather-resistant and durable construction for Indian conditions." },
  { icon: Truck, title: "Pan-India Delivery", description: "We deliver and install scoreboards across all Indian states." },
  { icon: Award, title: "Certified Quality", description: "Manufactured to the highest standards in our Meerut facility." },
  { icon: Wrench, title: "Custom Solutions", description: "Every ground is unique. We build scoreboards to match your needs." },
];

const Index = () => {
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
                <Button size="lg" variant="outline" asChild className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
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
                <Link to={`/products/${product.slug}`} className="group bg-card border rounded-lg overflow-hidden hover:shadow-lg transition-shadow block h-full">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg font-semibold group-hover:text-primary transition-colors">{product.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{product.description}</p>
                    <span className="mt-3 inline-flex items-center text-sm font-medium text-primary">Learn more <ChevronRight className="ml-1 w-4 h-4" /></span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <ScrollReveal>
            <div className="text-center max-w-xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Why Choose Ballebaaz?</h2>
              <p className="mt-3 text-muted-foreground">Trusted by cricket grounds, academies, and stadiums across India.</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="bg-card p-6 rounded-lg border text-center h-full">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

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
