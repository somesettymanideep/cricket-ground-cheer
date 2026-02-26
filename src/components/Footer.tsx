import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <span className="text-2xl font-display font-bold text-primary">
              BALLEBAAZ
            </span>
            <p className="mt-3 text-sm text-background/60">
              Making Professional Cricket Scoreboards Accessible to Every Ground in India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2 text-sm text-background/60">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              
              <Link to="/products" className="hover:text-primary transition-colors">Products</Link>
              <Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link>
            </nav>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-wider mb-4">Products</h4>
            <nav className="flex flex-col gap-2 text-sm text-background/60">
              <Link to="/products/led" className="hover:text-primary transition-colors">LED Scoreboards</Link>
              <Link to="/products/portable" className="hover:text-primary transition-colors">Portable Scoreboards</Link>
              <Link to="/products/manual" className="hover:text-primary transition-colors">Manual Scoreboards</Link>
              <Link to="/products/custom" className="hover:text-primary transition-colors">Custom Scoreboards</Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-wider mb-4">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-background/60">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <span>Meerut, Uttar Pradesh, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span>info@ballebaaz.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-background/40">
          <span>© {new Date().getFullYear()} Ballebaaz – All Rights Reserved</span>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link>
            <Link to="/shipping" className="hover:text-primary transition-colors">Shipping Policy</Link>
            <Link to="/warranty" className="hover:text-primary transition-colors">Warranty</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
