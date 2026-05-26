import { Link } from "react-router-dom";
import { Phone, MapPin, Mail, ChevronRight } from "lucide-react";
import { FaInstagram as Instagram } from "react-icons/fa";

function Footer({ isArabic }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-dark/10 bg-white pt-20 pb-10 overflow-hidden">
      {/* GLOW DECORATIONS */}
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[200px] h-[200px] bg-primary/15 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-dark/10">
          {/* COLUMN 1: BRAND */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="text-2xl font-black italic uppercase tracking-tighter flex items-center gap-2">
              <span className="text-[#2C3E50]">THE PADEL</span>
              <span className="bg-primary text-[#2C3E50] px-2 py-0.5 rounded skew-x-12 inline-block font-black shadow-neon">HUB</span>
            </Link>
            
            <p className="text-[#2C3E50]/70 text-sm leading-relaxed max-w-xs">
              {isArabic
                ? "الوجهة الرياضية الأولى والوحيدة بمعايير دولية ونظام طاقة شمسية متكامل 24/7 في قلب طرطوس، فندق جونادا."
                : "The premier sport destination with international standards and a 24/7 uninterrupted solar backup system in Tartous, Junada Hotel."}
            </p>

            {/* SOCIALS */}
            <div className="flex items-center gap-3 mt-2">
              {[
                { icon: <Instagram className="w-5 h-5" />, href: "https://instagram.com/thepadelhub.sy", label: "Instagram" },
                { icon: <Phone className="w-5 h-5" />, href: "tel:+963980130222", label: "Phone" },
                { icon: <MapPin className="w-5 h-5" />, href: "https://maps.google.com", label: "Map" }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-[#2C3E50]/5 border border-dark/5 flex items-center justify-center text-[#2C3E50]/80 hover:bg-primary hover:text-[#2C3E50] hover:border-primary hover:-translate-y-1 transition-all duration-300 shadow-sm"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* COLUMN 2: QUICK LINKS */}
          <div>
            <h4 className="text-[#2C3E50] font-heading font-black text-lg uppercase mb-6 tracking-wider">
              {isArabic ? "تصفح الهب" : "Explore Hub"}
            </h4>
            <ul className="space-y-4 text-sm font-semibold">
              {[
                { path: "/", labelAr: "الرئيسية", labelEn: "Home" },
                { path: "/about", labelAr: "القصة والهوية", labelEn: "About Story" },
                { path: "/services", labelAr: "خدماتنا", labelEn: "Our Services" },
                { path: "/gallery", labelAr: "المعرض", labelEn: "The Gallery" },
                { path: "/booking", labelAr: "الحجز الفوري", labelEn: "Book Court" },
                { path: "/contact", labelAr: "اتصل بنا", labelEn: "Contact Us" }
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    className="text-[#2C3E50]/70 hover:text-[#2C3E50] transition-colors duration-200 flex items-center gap-1 group"
                  >
                    <ChevronRight className="w-4 h-4 text-primary/70 group-hover:text-primary transition-colors duration-200 transform group-hover:translate-x-1" />
                    <span>{isArabic ? link.labelAr : link.labelEn}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: SERVICES */}
          <div>
            <h4 className="text-[#2C3E50] font-heading font-black text-lg uppercase mb-6 tracking-wider">
              {isArabic ? "خدماتنا" : "Club Services"}
            </h4>
            <ul className="space-y-4 text-sm text-[#2C3E50]/70">
              {[
                { labelAr: "تأجير ملاعب بانورامية", labelEn: "Panoramic Court Rentals" },
                { labelAr: "أكاديمية التدريب المعتمدة", labelEn: "Certified Academy Coaching" },
                { labelAr: "متجر المعدات الاحترافية", labelEn: "Pro Equipment Shop" },
                { labelAr: "كافيه هب لاونج المميز", labelEn: "Hub Lounge Cafe" },
                { labelAr: "تنظيم البطولات المحلية", labelEn: "Tournament Hosting" }
              ].map((service, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-neon" />
                  <span className="font-semibold">{isArabic ? service.labelAr : service.labelEn}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: CLUB INFO */}
          <div className="flex flex-col gap-6">
            <h4 className="text-[#2C3E50] font-heading font-black text-lg uppercase mb-6 tracking-wider">
              {isArabic ? "معلومات النادي" : "Club Address"}
            </h4>
            <div className="flex flex-col gap-4 text-sm text-[#2C3E50]/70 font-semibold">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>
                  {isArabic
                    ? "فندق جونادا، طرطوس، سوريا"
                    : "Hotel Junada, Tartous, Syria"}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+963980130222" className="hover:text-[#2C3E50] transition-colors">{isArabic ? "٠٩٨٠١٣٠٢٢٢" : "+963 980 130 222"}</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:info@thepadelhub.sy" className="hover:text-[#2C3E50] transition-colors">info@thepadelhub.sy</a>
              </div>
            </div>
            {/* POWER INFRASTRUCTURE STAMP */}
            <div className="border border-primary bg-primary/10 rounded-xl p-3 text-xs flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#2C3E50] animate-pulse flex-shrink-0" />
              <span className="text-[#2C3E50] font-bold">
                {isArabic ? "بنية كهرباء شمسية 24/7" : "24/7 Solar Backup Powered"}
              </span>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#2C3E50]/50 font-semibold">
          <p>
            &copy; {currentYear} The Padel Hub Sy.{" "}
            {isArabic ? "جميع الحقوق محفوظة. طرطوس، سوريا." : "All Rights Reserved. Tartous, Syria."}
          </p>
          <div className="flex items-center gap-2 font-heading font-black tracking-widest text-[#2C3E50] text-[10px] md:text-xs">
            <span className="text-primary-dark bg-primary/20 px-2 py-0.5 rounded">{isArabic ? "رياضة جديدة" : "NEW SPORT"}</span>
            <span className="text-[#2C3E50]/40">•</span>
            <span className="text-primary-dark bg-primary/20 px-2 py-0.5 rounded">{isArabic ? "طاقة متجددة" : "NEW VIBE"}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;