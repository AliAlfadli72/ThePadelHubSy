import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer({ isArabic }) {
  return (
    <footer className="relative border-t border-white/10 overflow-hidden">
      {/* BG GLOW */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 blur-[140px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-10">
        {/* TOP */}
        <div className="grid lg:grid-cols-4 gap-14 pb-16 border-b border-white/10">
          {/* BRAND */}
          <div>
            <h2 className="text-4xl font-black text-primary mb-6">
              The Padel Hub
            </h2>

            <p className="text-white/70 leading-8 mb-8">
              {isArabic
                ? "تجربة بادل حديثة تجمع بين الرياضة، المجتمع، والطاقة الجديدة في سوريا."
                : "A modern padel experience combining sports, community, and new energy in Syria."}
            </p>

            {/* SOCIAL */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-black duration-300"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-black duration-300"
              >
                <FaPhoneAlt />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-black duration-300"
              >
                <FaMapMarkerAlt />
              </a>
            </div>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="text-2xl font-bold mb-6">
              {isArabic ? "الصفحات" : "Pages"}
            </h3>

            <div className="flex flex-col gap-4 text-white/70">
              <Link
                to="/"
                className="hover:text-primary duration-300"
              >
                {isArabic ? "الرئيسية" : "Home"}
              </Link>

              <Link
                to="/about"
                className="hover:text-primary duration-300"
              >
                {isArabic ? "من نحن" : "About"}
              </Link>

              <Link
                to="/services"
                className="hover:text-primary duration-300"
              >
                {isArabic ? "الخدمات" : "Services"}
              </Link>

              <Link
                to="/gallery"
                className="hover:text-primary duration-300"
              >
                {isArabic ? "المعرض" : "Gallery"}
              </Link>

              <Link
                to="/contact"
                className="hover:text-primary duration-300"
              >
                {isArabic ? "اتصل بنا" : "Contact"}
              </Link>
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-2xl font-bold mb-6">
              {isArabic ? "الخدمات" : "Services"}
            </h3>

            <div className="flex flex-col gap-4 text-white/70">
              <p>
                {isArabic
                  ? "حجز الملاعب"
                  : "Court Booking"}
              </p>

              <p>
                {isArabic
                  ? "أكاديمية التدريب"
                  : "Training Academy"}
              </p>

              <p>
                {isArabic
                  ? "البطولات"
                  : "Tournaments"}
              </p>

              <p>
                {isArabic
                  ? "متجر البادل"
                  : "Padel Shop"}
              </p>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-2xl font-bold mb-6">
              {isArabic ? "تواصل معنا" : "Contact"}
            </h3>

            <div className="space-y-5 text-white/70">
              <p>
                {isArabic
                  ? "فندق جونادا - طرطوس"
                  : "Hotel Junada - Tartous"}
              </p>

              <p>+963 980 130 222</p>

              <p>@thepadelhub.sy</p>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/50 text-sm">
            © 2026 The Padel Hub Sy.{" "}
            {isArabic
              ? "جميع الحقوق محفوظة"
              : "All Rights Reserved"}
          </p>

          <p className="text-primary font-semibold tracking-[3px] uppercase text-sm">
            {isArabic
              ? "رياضة جديدة، طاقة جديدة"
              : "New Sport, New Vibe"}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;