const Terms = () => {
  return (
    <div className="container py-16 md:py-24 max-w-3xl">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Terms of Service</h1>
      <p className="mt-4 text-muted-foreground text-sm">Last updated: February 2026</p>

      <div className="mt-8 space-y-8 text-sm text-muted-foreground leading-relaxed">
        <section>
          <h2 className="text-lg font-display font-semibold text-foreground">Use of Website</h2>
          <p className="mt-2">By accessing this website, you agree to comply with these terms of service. The content on this website is for informational purposes and may be updated without notice.</p>
        </section>
        <section>
          <h2 className="text-lg font-display font-semibold text-foreground">Product Information Disclaimer</h2>
          <p className="mt-2">Product images, specifications, and prices on this website are indicative and may vary. Final specifications and pricing will be confirmed during the quotation process.</p>
        </section>
        <section>
          <h2 className="text-lg font-display font-semibold text-foreground">Orders & Custom Manufacturing</h2>
          <p className="mt-2">All orders are confirmed only after a formal quotation is accepted and advance payment is received. Custom manufacturing timelines vary based on specifications and will be communicated during the order process.</p>
        </section>
        <section>
          <h2 className="text-lg font-display font-semibold text-foreground">Warranty & Liability</h2>
          <p className="mt-2">Our products come with a manufacturer's warranty as specified at the time of purchase. Liability is limited to the value of the product purchased. We are not liable for damages arising from improper installation or misuse.</p>
        </section>
        <section>
          <h2 className="text-lg font-display font-semibold text-foreground">Governing Law</h2>
          <p className="mt-2">These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Meerut, Uttar Pradesh.</p>
        </section>
      </div>
    </div>
  );
};

export default Terms;
