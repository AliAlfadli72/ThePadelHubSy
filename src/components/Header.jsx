import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";

function Header({ isArabic, setIsArabic }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close drawer on path change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { path: "/", labelAr: "الرئيسية", labelEn: "Home" },
    { path: "/about", labelAr: "من نحن", labelEn: "About" },
    { path: "/services", labelAr: "الخدمات", labelEn: "Services" },
    { path: "/gallery", labelAr: "المعرض", labelEn: "Gallery" },
    { path: "/booking", labelAr: "الحجز", labelEn: "Booking" },
    { path: "/contact", labelAr: "اتصل بنا", labelEn: "Contact" },
  ];

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 md:px-8 py-4 ${scrolled ? "py-2" : "py-5"}`}>
      <header className={`max-w-7xl mx-auto rounded-2xl border transition-all duration-500 ${scrolled ? "bg-white/95 border-primary/40 shadow-glass" : "bg-white/70 border-white/50"} backdrop-blur-md shadow-glass`}>
        <div className="px-6 py-4 flex items-center justify-between">
          {/* LOGO */}
          <Link to="/" className="text-xl md:text-2xl font-black italic uppercase tracking-tighter flex items-center gap-2 group">
            <span className="text-[#2C3E50] group-hover:text-primary transition-colors duration-300">THE PADEL</span>
            <span className="bg-primary text-[#2C3E50] px-2 py-0.5 rounded skew-x-12 inline-block font-black shadow-neon">HUB</span>
            <span className="text-xs text-primary font-bold tracking-widest hidden sm:inline ml-1">SY</span>
          </Link>

          {/* NAV - DESKTOP */}
          <nav className="hidden lg:flex items-center gap-8 font-heading text-sm uppercase tracking-wider">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative py-2 transition-all duration-300 font-bold ${
                    isActive 
                      ? "text-[#2C3E50] font-black scale-105" 
                      : "text-[#2C3E50]/70 hover:text-[#2C3E50]"
                  }`}
                >
                  {isArabic ? link.labelAr : link.labelEn}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary shadow-neon rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-4">
            {/* LANGUAGE TOGGLE */}
            <button
              onClick={() => setIsArabic(!isArabic)}
              className="flex items-center gap-1.5 border border-[#2C3E50]/10 hover:border-primary/50 bg-[#2C3E50]/5 hover:bg-primary/10 px-3 py-1.5 rounded-xl text-xs md:text-sm font-bold text-[#2C3E50] transition-all duration-300 group"
              title={isArabic ? "Switch to English" : "تغيير للغة العربية"}
            >
              <Globe className="w-4 h-4 text-primary group-hover:rotate-12 transition-transform duration-300" />
              <span>{isArabic ? "EN" : "العربية"}</span>
            </button>

            {/* CTA BUTTON */}
            <Link
              to="/booking"
              className="hidden sm:inline-flex bg-[#2C3E50] text-white hover:bg-primary hover:text-[#2C3E50] border border-[#2C3E50] hover:border-primary px-6 py-2.5 rounded-xl font-black text-xs md:text-sm tracking-tight transition-all duration-300 uppercase hover:scale-[1.03] active:scale-[0.97] shadow-sm hover:shadow-neon"
            >
              {isArabic ? "احجز الآن" : "Book Now"}
            </Link>

            {/* MOBILE MENU TOGGLE */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-[#2C3E50]/80 hover:text-primary p-2 border border-[#2C3E50]/5 hover:border-primary/30 rounded-xl bg-[#2C3E50]/5 transition-all duration-300"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-40 top-[88px] md:top-[100px] left-0 right-0 bottom-0 bg-white/95 backdrop-blur-lg border-t border-[#2C3E50]/5 px-6 py-8 flex flex-col justify-between animate-fadeIn">
          <nav className="flex flex-col gap-6 text-2xl font-heading text-right uppercase tracking-wider">
            {navLinks.map((link, idx) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center justify-between border-b border-[#2C3E50]/5 pb-4 ${
                    isActive ? "text-[#2C3E50] font-black" : "text-[#2C3E50]/70"
                  }`}
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  <span>{isArabic ? link.labelAr : link.labelEn}</span>
                  <span className={`w-2 h-2 rounded-full bg-primary shadow-neon ${isActive ? "opacity-100" : "opacity-0"}`} />
                </Link>
              );
            })}
          </nav>

          <div className="flex flex-col gap-4 mt-auto">
            <Link
              to="/booking"
              className="w-full text-center bg-[#2C3E50] text-white hover:bg-primary hover:text-[#2C3E50] py-4 rounded-2xl font-black text-lg shadow-md transition-colors duration-300 uppercase tracking-tight"
            >
              {isArabic ? "احجز الآن" : "Book Now"}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;