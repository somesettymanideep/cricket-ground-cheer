import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const WHATSAPP_NUMBER = "919876543210";
const WHATSAPP_MESSAGE = "Hi Ballebaaz! I'm interested in your cricket scoreboards.";

const FloatingButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      {/* Scroll to top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToTop}
            className="w-11 h-11 rounded-full flex items-center justify-center shadow-lg transition-colors"
            style={{ backgroundColor: "#1a0d0d", color: "#ffffff" }}
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* WhatsApp */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        style={{ backgroundColor: "#25D366" }}
        aria-label="Chat on WhatsApp"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
      >
        <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white">
          <path d="M16.004 2.667A13.26 13.26 0 0 0 2.667 15.89a13.16 13.16 0 0 0 1.795 6.64L2.667 29.333l7.05-1.85a13.28 13.28 0 0 0 6.287 1.604h.006A13.27 13.27 0 0 0 29.333 15.9 13.2 13.2 0 0 0 16.004 2.667Zm0 24.27a11.02 11.02 0 0 1-5.617-1.536l-.403-.24-4.18 1.097 1.115-4.078-.262-.418a10.97 10.97 0 0 1-1.684-5.872 11.02 11.02 0 0 1 11.03-11.005 11.02 11.02 0 0 1 11.024 11.015 11.03 11.03 0 0 1-11.023 11.037Zm6.045-8.252c-.332-.166-1.963-.969-2.268-1.079-.305-.111-.527-.166-.749.166s-.86 1.08-1.054 1.3c-.194.222-.388.249-.72.083a9.07 9.07 0 0 1-2.672-1.649 10.02 10.02 0 0 1-1.849-2.3c-.194-.332-.02-.512.146-.677.15-.149.332-.388.499-.582.166-.194.221-.333.332-.555.111-.221.056-.416-.028-.582-.083-.166-.749-1.804-1.026-2.47-.27-.649-.545-.561-.749-.572l-.638-.011a1.22 1.22 0 0 0-.887.416c-.305.333-1.164 1.138-1.164 2.775s1.192 3.22 1.358 3.442c.166.222 2.346 3.58 5.685 5.02.794.343 1.414.548 1.898.701.797.253 1.523.217 2.096.132.64-.095 1.963-.803 2.24-1.578.278-.775.278-1.44.194-1.578-.083-.139-.305-.222-.638-.388Z" />
        </svg>
      </motion.a>
    </div>
  );
};

export default FloatingButtons;
