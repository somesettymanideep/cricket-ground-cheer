import { Shield, Eye, Target, Factory, MapPin } from "lucide-react";

const About = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground tracking-tight">
            About Ballebaaz
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            From a small workshop in Meerut to a trusted national manufacturer of professional cricket scoreboards.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight">Our Story</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Ballebaaz was born out of a simple observation — while cricket is the heart of India, most local grounds struggled to have a proper scoreboard. Founded in Meerut, the sports manufacturing capital of India, we set out to change that.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            What started as a small workshop crafting manual scoreboards for local clubs has grown into a trusted national brand. Today, we manufacture LED, Portable, Manual, and Custom scoreboards that serve academies, tournaments, and stadiums across 28 states.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container grid md:grid-cols-2 gap-8 max-w-4xl">
          <div className="bg-card p-8 rounded-lg border">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-display font-bold">Our Mission</h3>
            <p className="mt-3 text-muted-foreground">
              To make professional-grade cricket scoreboards affordable and accessible to every cricket ground in India, from village maidens to international stadiums.
            </p>
          </div>
          <div className="bg-card p-8 rounded-lg border">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Eye className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-display font-bold">Our Vision</h3>
            <p className="mt-3 text-muted-foreground">
              To be India's most trusted scoreboard manufacturer, known for quality craftsmanship, innovation, and pan-India reach.
            </p>
          </div>
        </div>
      </section>

      {/* What Makes Us Trusted */}
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">What Makes Us Trusted</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Factory, title: "Own Manufacturing", description: "We design, build, and test everything in-house at our Meerut facility — no outsourcing." },
              { icon: Shield, title: "Quality Standards", description: "Every scoreboard undergoes rigorous quality checks for visibility, durability, and weather resistance." },
              { icon: MapPin, title: "Pan-India Presence", description: "500+ scoreboards installed across 28 states, from local clubs to district stadiums." },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
