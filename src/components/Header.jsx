import { Link } from "react-router-dom";

function Header({ isArabic, setIsArabic }) {
  return (
    <header className="sticky top-0 z-50 bg-black/90 border-b border-white/10 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="text-2xl font-black text-primary">
          The Padel Hub
        </Link>

        {/* NAV */}
        <nav className="hidden lg:flex gap-8">
          <Link to="/">
            {isArabic ? "الرئيسية" : "Home"}
          </Link>

          <Link to="/about">
            {isArabic ? "من نحن" : "About"}
          </Link>

          <Link to="/services">
            {isArabic ? "الخدمات" : "Services"}
          </Link>

          <Link to="/gallery">
            {isArabic ? "المعرض" : "Gallery"}
          </Link>

          <Link to="/booking">
            {isArabic ? "الحجز" : "Booking"}
          </Link>

          <Link to="/contact">
            {isArabic ? "اتصل بنا" : "Contact"}
          </Link>
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">
          {/* TOGGLE */}
          <button
            onClick={() => setIsArabic(!isArabic)}
            className="border border-white/10 px-4 py-2 rounded-full hover:border-primary duration-300"
          >
            {isArabic ? "EN" : "AR"}
          </button>

          {/* BUTTON */}
          <Link
            to="/booking"
            className="bg-primary text-black px-5 py-2 rounded-full font-bold"
          >
            {isArabic ? "احجز الآن" : "Book Now"}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;