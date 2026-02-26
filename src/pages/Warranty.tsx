import PageBanner from "@/components/PageBanner";
import bannerLegal from "@/assets/banner-legal.jpg";

const Warranty = () => {
  return (
    <>
      <PageBanner title="Warranty Terms & Conditions" image={bannerLegal} />
      <div className="container py-16 md:py-24 max-w-3xl">
        <p className="text-muted-foreground text-sm">Last updated: February 2026</p>

        <div className="mt-8 space-y-8 text-sm text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-lg font-display font-semibold text-foreground">1. Limited Warranty</h2>
            <p className="mt-2">Cleveronics Technologies Private Limited provides a 1-year limited warranty on LED scoreboards manufactured under the brand name Ballebaaz by Cleveronics Technologies Private Limited.</p>
            <p className="mt-2">All scoreboards undergo output testing to ensure they are free from defects.</p>
            <p className="mt-2">High-quality packaging and shipping services are employed to prevent damage during transit.</p>
          </section>
          <section>
            <h2 className="text-lg font-display font-semibold text-foreground">2. Guarantor's Responsibilities</h2>
            <p className="mt-2">Cleveronics Technologies Private Limited, owner of the Ballebaaz brand, guarantees the quality and proper functioning of purchased devices when used appropriately and in accordance with the operation manual.</p>
          </section>
          <section>
            <h2 className="text-lg font-display font-semibold text-foreground">3. Warranty Coverage</h2>
            <p className="mt-2">Covers defects resulting from defective parts, materials, or manufacturing for 12 months from the date of purchase.</p>
            <p className="mt-2">Defective devices fail to perform functions as indicated in operation manuals, technical specifications, or similar documents.</p>
          </section>
          <section>
            <h2 className="text-lg font-display font-semibold text-foreground">4. Warranty Service Conditions</h2>
            <ul className="mt-2 list-disc list-inside space-y-1">
              <li>Customers must notify the Guarantor immediately of determined defects and cease using the device.</li>
              <li>Defective devices must be made available to the Guarantor along with a copy of the commercial invoice.</li>
              <li>Detailed description of technical problems must accompany returned devices.</li>
              <li>Devices must have intact seals and appropriate packaging during transit.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-lg font-display font-semibold text-foreground">5. Customer Responsibilities</h2>
            <ul className="mt-2 list-disc list-inside space-y-1">
              <li>Arrange and pay for shipment to the Guarantor Service Center if the product has been moved from the installation site.</li>
              <li>Provide WiFi within a 10-meter range of the device.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-lg font-display font-semibold text-foreground">6. Exclusions from Warranty Coverage</h2>
            <ul className="mt-2 list-disc list-inside space-y-1">
              <li>Mechanical or electrical damages from incorrect installation, configuration, or usage.</li>
              <li>Damages from acts of God, natural disasters, wars, or other external factors.</li>
              <li>Tampering with the device, damaged serial numbers or Guarantor seals, and improper usage of supply materials.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-lg font-display font-semibold text-foreground">7. Replacement and Extended Warranty</h2>
            <p className="mt-2">Guarantor reserves the right to replace defective devices with equivalent, defect-free components.</p>
            <p className="mt-2">Warranty period extends during device repair at the Guarantor's Service Center.</p>
          </section>
          <section>
            <h2 className="text-lg font-display font-semibold text-foreground">8. Force Majeure and Legal Compliance</h2>
            <p className="mt-2">Guarantor is not responsible for warranty obligations during force majeure events or if providing service breaches applicable laws.</p>
          </section>
          <section>
            <h2 className="text-lg font-display font-semibold text-foreground">9. Limitation of Liability</h2>
            <p className="mt-2">Warranty does not include lost profits or material losses caused by defective products.</p>
          </section>
          <section>
            <h2 className="text-lg font-display font-semibold text-foreground">10. Modification of Terms</h2>
            <p className="mt-2">General warranty terms and conditions may be altered if agreed upon in a separate agreement between the Buyer and the Guarantor.</p>
          </section>

          <div className="border-t border-border pt-8">
            <h2 className="text-xl font-display font-bold text-foreground">About Cleveronics Technologies Private Limited</h2>
            <p className="mt-3">Cleveronics Technologies Private Limited is a dynamic player in the sports technology industry, dedicated to revolutionizing the sports experience through cutting-edge LED scoreboard solutions. With a relentless focus on innovation, quality, and customer satisfaction, Cleveronics is committed to pushing the boundaries of sports technology and delivering unparalleled solutions to sports venues and organizations worldwide.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Warranty;
