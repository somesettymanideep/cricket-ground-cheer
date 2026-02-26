import PageBanner from "@/components/PageBanner";
import bannerLegal from "@/assets/banner-legal.jpg";

const Privacy = () => {
  return (
    <>
      <PageBanner title="Privacy Policy" image={bannerLegal} />
      <div className="container py-16 md:py-24 max-w-3xl">
        <p className="text-muted-foreground text-sm">Last updated: February 2026</p>

        <div className="mt-8 space-y-8 text-sm text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-lg font-display font-semibold text-foreground">1. Information Collection</h2>
            <p className="mt-2">We collect personal information, such as name, email address, and contact details, solely for the purpose of fulfilling orders and providing customer support.</p>
          </section>
          <section>
            <h2 className="text-lg font-display font-semibold text-foreground">2. Data Usage</h2>
            <p className="mt-2">Personal information collected is used for order processing, delivery, and communication with customers regarding their orders.</p>
          </section>
          <section>
            <h2 className="text-lg font-display font-semibold text-foreground">3. Data Protection</h2>
            <p className="mt-2">We are committed to protecting the privacy and security of our customers' personal information and implement appropriate measures to safeguard it.</p>
          </section>
          <section>
            <h2 className="text-lg font-display font-semibold text-foreground">4. Third-Party Disclosure</h2>
            <p className="mt-2">We do not sell, trade, or otherwise transfer personal information to third parties without explicit consent, except for the purpose of order fulfillment and delivery.</p>
          </section>
          <section>
            <h2 className="text-lg font-display font-semibold text-foreground">5. Data Retention</h2>
            <p className="mt-2">Personal information is retained only for as long as necessary to fulfill orders and provide customer support, unless otherwise required by law.</p>
          </section>
          <section>
            <h2 className="text-lg font-display font-semibold text-foreground">6. Cookies</h2>
            <p className="mt-2">Our website may use cookies to enhance user experience and track website usage. Users may choose to disable cookies in their browser settings, although this may affect certain functionalities of the website.</p>
          </section>
          <section>
            <h2 className="text-lg font-display font-semibold text-foreground">7. Third-Party Services</h2>
            <p className="mt-2">We may use third-party services, such as payment processors and shipping carriers, to facilitate order processing and delivery. These third-party services may have their own privacy policies governing the use of personal information.</p>
          </section>
          <section>
            <h2 className="text-lg font-display font-semibold text-foreground">8. Data Security</h2>
            <p className="mt-2">We take reasonable precautions to protect the confidentiality and integrity of personal information collected through our website. However, we cannot guarantee that data transmission over the internet or storage systems will be completely secure.</p>
          </section>
          <section>
            <h2 className="text-lg font-display font-semibold text-foreground">9. Children's Privacy</h2>
            <p className="mt-2">Our website is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under the age of 13 without parental consent.</p>
          </section>
          <section>
            <h2 className="text-lg font-display font-semibold text-foreground">10. Changes to Privacy Policy</h2>
            <p className="mt-2">We reserve the right to update our Privacy Policy as needed to reflect changes in our practices or legal requirements. Users will be notified of any significant changes.</p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Privacy;
