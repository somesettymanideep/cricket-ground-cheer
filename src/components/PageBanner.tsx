import ScrollReveal from "@/components/ScrollReveal";

type PageBannerProps = {
  title: string;
  subtitle?: string;
  image: string;
};

const PageBanner = ({ title, subtitle, image }: PageBannerProps) => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-foreground/60" />
      </div>
      <div className="container relative z-10 text-center">
        <ScrollReveal>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PageBanner;
