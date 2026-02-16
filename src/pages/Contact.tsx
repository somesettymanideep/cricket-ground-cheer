import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ScrollReveal from "@/components/ScrollReveal";
import PageBanner from "@/components/PageBanner";
import bannerContact from "@/assets/banner-contact.jpg";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", email: "", requirement: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Thank you!", description: "We've received your enquiry. Our team will contact you shortly." });
    setForm({ name: "", phone: "", email: "", requirement: "" });
  };

  return (
    <>
      <PageBanner
        title="Contact Us"
        subtitle="Get in touch for a free consultation and custom quote."
        image={bannerContact}
      />

      <section className="py-16 md:py-24">
        <div className="container grid md:grid-cols-2 gap-12 max-w-5xl">
          <ScrollReveal direction="left">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Send Us Your Requirement</h2>
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label className="text-sm font-medium" htmlFor="name">Full Name</label>
                  <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required placeholder="Your name" className="mt-1" />
                </div>
                <div>
                  <label className="text-sm font-medium" htmlFor="phone">Phone Number</label>
                  <Input id="phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required placeholder="+91 98765 43210" className="mt-1" />
                </div>
                <div>
                  <label className="text-sm font-medium" htmlFor="email">Email Address</label>
                  <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" className="mt-1" />
                </div>
                <div>
                  <label className="text-sm font-medium" htmlFor="requirement">Your Requirement</label>
                  <Textarea id="requirement" value={form.requirement} onChange={(e) => setForm({ ...form, requirement: e.target.value })} required placeholder="Tell us about your ground, budget, and scoreboard needs..." rows={5} className="mt-1" />
                </div>
                <Button type="submit" size="lg" className="w-full">Submit Enquiry</Button>
              </form>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Get In Touch</h2>
              <div className="mt-6 space-y-6">
                {[
                  { icon: Phone, title: "Phone", info: "+91 98765 43210" },
                  { icon: Mail, title: "Email", info: "info@ballebaaz.com" },
                  { icon: MapPin, title: "Manufacturing Location", info: "Meerut, Uttar Pradesh, India" },
                  { icon: Clock, title: "Business Hours", info: "Mon – Sat: 9:00 AM – 6:00 PM IST" },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.info}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-lg overflow-hidden border">
                <iframe
                  title="Ballebaaz Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111488.30348755813!2d77.63465!3d28.9845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c6510c1846037%3A0x97f12a60b1eb1b65!2sMeerut%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%" height="250" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default Contact;
