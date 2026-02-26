import PageBanner from "@/components/PageBanner";
import bannerLegal from "@/assets/banner-legal.jpg";

const Terms = () => {
  return (
    <>
      <PageBanner title="Terms & Conditions" image={bannerLegal} />
      <div className="container py-16 md:py-24 max-w-3xl">
        <p className="text-muted-foreground text-sm">Last updated: February 2026</p>

        <div className="mt-8 space-y-8 text-sm text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-lg font-display font-semibold text-foreground">1. Introduction</h2>
            <p className="mt-2">These Terms and Conditions govern the use of our website and the purchase of products from Cleveronics Technologies Private Limited. By accessing our website and making a purchase, you agree to be bound by these Terms and Conditions.</p>
          </section>
          <section>
            <h2 className="text-lg font-display font-semibold text-foreground">2. Order Acceptance</h2>
            <p className="mt-2">All orders placed through our website are subject to acceptance and availability. We reserve the right to refuse or cancel any order for any reason, including but not limited to product availability, errors in pricing or product information, or fraudulent activity.</p>
          </section>
          <section>
            <h2 className="text-lg font-display font-semibold text-foreground">3. Product Descriptions</h2>
            <p className="mt-2">We make every effort to ensure that product descriptions and images are accurate and up-to-date. However, we do not warrant that product descriptions or other content on our website are error-free, complete, or current.</p>
          </section>
          <section>
            <h2 className="text-lg font-display font-semibold text-foreground">4. Pricing and Payment</h2>
            <p className="mt-2">Prices for products listed on our website are in INR and are subject to change without notice. Payment for orders is processed at the time of purchase. We accept payment via Debit Card, UPI, Credit Card.</p>
          </section>
          <section>
            <h2 className="text-lg font-display font-semibold text-foreground">5. Intellectual Property</h2>
            <p className="mt-2">All content on our website, including text, images, logos, and trademarks, is the property of Cleveronics Technologies Private Limited and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or use any content from our website without our express written permission.</p>
          </section>
          <section>
            <h2 className="text-lg font-display font-semibold text-foreground">6. Limitation of Liability</h2>
            <p className="mt-2">In no event shall Cleveronics Technologies Private Limited be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our website or the purchase of products from us.</p>
          </section>
          <section>
            <h2 className="text-lg font-display font-semibold text-foreground">7. Governing Law</h2>
            <p className="mt-2">These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising under these Terms and Conditions shall be subject to the exclusive jurisdiction of the courts of Malkajgiri, Telangana, India.</p>
          </section>

          <div className="border-t border-border pt-8">
            <h2 className="text-xl font-display font-bold text-foreground">Refunds / Cancellations Policy</h2>
            <p className="mt-3">We do not offer refunds or cancellations for any purchases made through our website. All sales are final, and once an order is placed, it cannot be cancelled, refunded, or returned.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terms;
