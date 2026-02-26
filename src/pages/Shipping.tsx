import PageBanner from "@/components/PageBanner";
import bannerLegal from "@/assets/banner-legal.jpg";

const Shipping = () => {
  return (
    <>
      <PageBanner title="Shipping & Delivery Policy" image={bannerLegal} />
      <div className="container py-16 md:py-24 max-w-3xl">
        <p className="text-muted-foreground text-sm">Last updated: February 2026</p>

        <div className="mt-8 space-y-8 text-sm text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-lg font-display font-semibold text-foreground">1. Order Processing</h2>
            <p className="mt-2">Orders are typically processed and shipped within 7 business days of receipt. Orders received after 10 AM on any day will be processed the following business day.</p>
          </section>
          <section>
            <h2 className="text-lg font-display font-semibold text-foreground">2. Shipping Methods</h2>
            <p className="mt-2">We offer standard shipping for all orders. Expedited shipping options may be available for an additional fee.</p>
          </section>
          <section>
            <h2 className="text-lg font-display font-semibold text-foreground">3. Shipping Costs</h2>
            <p className="mt-2">Shipping costs are calculated based on the weight and destination of the order. Shipping costs will be displayed at checkout before payment is processed.</p>
          </section>
          <section>
            <h2 className="text-lg font-display font-semibold text-foreground">4. Delivery Times</h2>
            <p className="mt-2">Delivery times vary depending on the shipping method selected and the destination. Standard shipping typically takes 7 business days for domestic orders and 30 business days for international orders.</p>
          </section>
          <section>
            <h2 className="text-lg font-display font-semibold text-foreground">5. Order Tracking</h2>
            <p className="mt-2">Once your order has shipped, you will receive a shipping confirmation email with tracking information. You can track the status of your order using the provided tracking number.</p>
          </section>
          <section>
            <h2 className="text-lg font-display font-semibold text-foreground">6. Delivery Delays</h2>
            <p className="mt-2">While we make every effort to ensure timely delivery of orders, we are not responsible for delays caused by factors beyond our control, including but not limited to weather conditions, natural disasters, or carrier delays.</p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Shipping;
