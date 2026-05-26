import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Zap, MapPin, Shield, Star, Trophy, Users, ArrowRight, Calendar, Sparkles } from "lucide-react";

// Image Imports (Daylight theme)
import smashImg from "../assets/padel_smash_light.png";
import racketImg from "../assets/padel_racket_light.png";
import loungeImg from "../assets/sports_lounge_light.png";
import courtImg from "../assets/panoramic_court_light.png";

function Home({ isArabic }) {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = isArabic 
      ? "ذا بادل هب طرطوس | ملاعب بادل شمسية 24/7" 
      : "The Padel Hub Syria | 24/7 Solar Padel Tennis Club";
    
    const metaDesc = document.querySelector('meta[name="description"]');
    const descText = isArabic 
      ? "احجز ملعب البادل الخاص بك في ذا بادل هب طرطوس، فندق جونادا. طاقة شمسية مستمرة 24/7 وملاعب بانورامية احترافية بمعايير عالمية."
      : "Book your padel tennis court at The Padel Hub Tartous inside Hotel Junada. Enjoy 24/7 uninterrupted solar backup power and professional panoramic courts.";
    if (metaDesc) {
      metaDesc.setAttribute("content", descText);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = descText;
      document.head.appendChild(meta);
    }
  }, [isArabic]);

  // Handler for quick booking click
  const handleQuickBook = (courtType) => {
    navigate("/booking", { state: { selectedCourt: courtType } });
  };

  return (
    <div className="bg-[#FFFFFF] text-[#2C3E50] min-h-screen pt-[88px] md:pt-[100px] overflow-hidden">
      
      {/* 1. ASYMMETRIC HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center py-12 px-4 md:px-8 lg:px-16 overflow-hidden">
        {/* Abstract design elements */}
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-primary/15 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* HERO TEXT: 7 Cols (60% width equivalent) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`lg:col-span-7 flex flex-col items-start ${isArabic ? "text-right items-end lg:text-right lg:items-start" : "text-left"}`}
          >
            <div className="inline-flex items-center gap-2 border border-primary/40 bg-primary/10 px-4 py-2 rounded-xl text-xs md:text-sm font-bold text-[#2C3E50] uppercase tracking-wider mb-6 shadow-sm">
              <Zap className="w-4 h-4 text-primary fill-primary animate-pulse" />
              <span>{isArabic ? "بنية طاقة شمسية مستقلة 24/7" : "24/7 Independent Solar Infrastructure"}</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black italic uppercase leading-none tracking-tighter mb-6 text-stroke-dark select-none">
              {isArabic ? (
                <>
                  ذا بادل هب <br />
                  <span className="text-white bg-[#2C3E50] border border-primary/40 px-4 py-1 rounded-2xl skew-x-12 inline-block text-stroke-none mt-2 shadow-sm">طرطوس</span>
                </>
              ) : (
                <>
                  THE PADEL <br />
                  <span className="text-white bg-[#2C3E50] border border-primary/40 px-4 py-1 rounded-2xl skew-x-12 inline-block text-stroke-none shadow-sm mt-2">HUB SYRIA</span>
                </>
              )}
            </h1>

            <p className="text-[#2C3E50]/70 text-lg md:text-xl font-medium leading-relaxed max-w-xl mb-10">
              {isArabic 
                ? "بوابتك الرياضية الأكثر فخامة وحماساً على الساحل السوري. تجربة رياضية متكاملة في فندق جونادا مع تغطية طاقة شمسية كاملة 24/7 دون أي انقطاع."
                : "The ultimate sports lifestyle hub in Tartous. Enjoy premium indoor/outdoor panoramic courts at Hotel Junada, backed by a 24/7 solar power system."}
            </p>

            <div className="flex flex-wrap gap-4 w-full sm:w-auto">
              <Link 
                to="/booking" 
                className="w-full sm:w-auto text-center btn-primary"
              >
                {isArabic ? "احجز ملعبك الآن" : "Book Court Now"}
              </Link>
              <Link 
                to="/about" 
                className="w-full sm:w-auto text-center border border-[#2C3E50]/20 bg-white hover:bg-primary/20 hover:border-primary text-[#2C3E50] font-black px-8 py-4 rounded-xl transition-all duration-300 uppercase tracking-tight flex items-center justify-center gap-2 shadow-sm"
              >
                <span>{isArabic ? "اكتشف القصة" : "Explore Story"}</span>
                <ArrowRight className={`w-5 h-5 ${isArabic ? "rotate-180" : ""}`} />
              </Link>
            </div>
          </motion.div>

          {/* HERO IMAGE COLLAGE: 5 Cols (40% width equivalent) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Visual background borders for human-designed asymmetry */}
            <div className="absolute -inset-2 border-2 border-primary/60 rounded-[35px] translate-x-3 translate-y-3 -skew-x-3 pointer-events-none" />
            
            {/* Main Premium Card */}
            <div className="relative rounded-[32px] overflow-hidden border border-[#2C3E50]/15 aspect-square group shadow-glass bg-white/70 backdrop-blur-md">
              <img
                src={smashImg}
                className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
                alt="Padel Court Syria Smash"
              />
              <div className="padel-gradient-overlay" />
              
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md border border-[#2C3E50]/10 rounded-2xl p-5 shadow-glass">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[#2C3E50] font-black text-xs uppercase tracking-widest bg-primary/20 px-2 py-0.5 rounded">
                    {isArabic ? "بطولات احترافية" : "PRO TOURNAMENTS"}
                  </span>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-3.5 h-3.5 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
                <p className="text-sm font-bold text-[#2C3E50]">
                  {isArabic ? "استمتع بمشاهدة والمشاركة في أقوى المنافسات الساحلية" : "Watch & play the most competitive championships on the Syrian coast"}
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 2. DYNAMIC FEATURE GRID: SOLAR & ASYMMETRIC BOOKING */}
      <section className="py-24 bg-slate-50 border-y border-[#2C3E50]/5 relative">
        <div className="absolute top-1/2 -translate-y-1/2 left-0 text-[160px] font-black text-[#2C3E50]/3 opacity-[0.03] tracking-widest whitespace-nowrap select-none pointer-events-none font-heading">
          THE PADEL HUB
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-start mb-16">
            <span className="text-[#2C3E50] font-heading font-black tracking-widest uppercase text-xs md:text-sm bg-primary/30 px-3 py-1 rounded">
              {isArabic ? "بنية رياضية رائدة" : "PIONEERING SPORT FACILITIES"}
            </span>
            <h2 className="text-4xl md:text-6xl font-black italic uppercase leading-none mt-2 text-[#2C3E50]">
              {isArabic ? "معايير النخبة الرياضية" : "THE SPORT STANDARD OF ELITES"}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* FEATURE 1: SOLAR POWER (COL-SPAN-2) */}
            <motion.div 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              className="lg:col-span-2 bg-white border border-[#2C3E50]/15 rounded-[35px] p-8 md:p-12 relative overflow-hidden group shadow-glass hover:border-primary transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/10 blur-[100px] pointer-events-none" />
              <div className="absolute -top-12 -right-12 text-[140px] font-black text-[#2C3E50]/5 select-none font-heading leading-none group-hover:text-[#2C3E50]/10 transition-colors">
                24/7
              </div>
              
              <Zap className="w-14 h-14 text-[#2C3E50] bg-primary p-3 rounded-2xl mb-8 shadow-neon animate-pulse" />
              <h3 className="text-3xl md:text-4xl font-black italic uppercase mb-4 text-[#2C3E50]">
                {isArabic ? "بنية طاقة شمسية متكاملة 24/7 دون انقطاع" : "24/7 Uninterrupted Solar Power Infrastructure"}
              </h3>
              <p className="text-[#2C3E50]/70 text-base md:text-lg leading-relaxed max-w-2xl mb-6">
                {isArabic 
                  ? "لأن حماسك للعب لا يعرف التأجيل، صممنا نظاماً هجيناً ضخماً من الطاقة الشمسية. نضمن تغذية كاملة لجميع كشافات الملاعب الليلية، غرف تبديل الملابس الفاخرة، والخدمات التقنية على مدار الساعة في طرطوس دون ثانية انقطاع واحدة."
                  : "We solve the regional grid limits with an advanced, hybrid multi-megawatt solar backup infrastructure. Play late-night matches under professional stadium floodlights and enjoy absolute power reliability for lockers, cafe, and amenities."}
              </p>
              <Link 
                to="/booking"
                className="inline-flex items-center gap-2 font-black text-sm uppercase text-[#2C3E50] hover:text-[#2C3E50]/80 border-b-2 border-primary pb-1 group"
              >
                <span>{isArabic ? "احجز جلستك الفورية" : "Book Your Session Now"}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            {/* FEATURE 2: ASYMMETRIC BOOKING */}
            <motion.div 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white border border-[#2C3E50]/15 rounded-[35px] p-8 group hover:border-primary transition-all duration-300 relative shadow-glass"
            >
              <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-primary/10 blur-[60px] pointer-events-none" />
              <Calendar className="w-12 h-12 text-[#2C3E50] bg-primary p-2.5 rounded-2xl mb-6 shadow-neon" />
              <h3 className="text-2xl font-black italic uppercase mb-4 text-[#2C3E50]">
                {isArabic ? "حجز ذكي مرن" : "Asymmetric Booking System"}
              </h3>
              <p className="text-[#2C3E50]/70 text-sm leading-relaxed mb-6">
                {isArabic 
                  ? "نظام حجز إلكتروني متقدم يتيح لك انتقاء فتراتك الزمنية المفضلة (60 أو 90 دقيقة) مع حساب فوري وتكامل مع خدمة عملاء واتساب السريعة لتأكيد الحجوزات وإدارتها."
                  : "Our state-of-the-art interactive digital matrix matches you with court availability, calculates dynamic off-peak rates, and outputs instant confirmations direct to WhatsApp."}
              </p>
              <Link 
                to="/booking"
                className="inline-flex items-center gap-2 font-black text-xs uppercase text-[#2C3E50] hover:text-[#2C3E50]/80 border-b-2 border-primary pb-1"
              >
                <span>{isArabic ? "منصة الحجز" : "Open Matrix"}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>

            {/* FEATURE 3: PANORAMIC COURTS */}
            <motion.div 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white border border-[#2C3E50]/15 rounded-[35px] p-8 group hover:border-primary transition-all duration-300 relative shadow-glass"
            >
              <Shield className="w-12 h-12 text-[#2C3E50] bg-primary/20 p-2.5 rounded-2xl mb-6" />
              <h3 className="text-2xl font-black italic uppercase mb-4 text-[#2C3E50]">
                {isArabic ? "زجاج بانورامي مقوى" : "Panoramic Glass Courts"}
              </h3>
              <p className="text-[#2C3E50]/70 text-sm leading-relaxed">
                {isArabic 
                  ? "ملاعب مستوردة بالكامل بمواصفات الاتحاد الدولي للبادل. زجاج مقوى يوفر زاوية رؤية 360 درجة، وعشب صناعي متطور لتقليل الضغط على المفاصل وضمان ارتداد مثالي للكرة."
                  : "Enjoy standard structural glass walls engineered for coastal winds, featuring professional textured turf for superior grip, pivot movements, and optimal ball bounce."}
              </p>
            </motion.div>

            {/* FEATURE 4: HOTEL JUNADA EXCLUSIVITY */}
            <motion.div 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white border border-[#2C3E50]/15 rounded-[35px] p-8 group hover:border-primary transition-all duration-300 relative shadow-glass"
            >
              <MapPin className="w-12 h-12 text-[#2C3E50] bg-primary/20 p-2.5 rounded-2xl mb-6" />
              <h3 className="text-2xl font-black italic uppercase mb-4 text-[#2C3E50]">
                {isArabic ? "موقع فندقي فاخر" : "Hotel Junada Location"}
              </h3>
              <p className="text-[#2C3E50]/70 text-sm leading-relaxed">
                {isArabic 
                  ? "داخل حرم فندق جونادا 5 نجوم الشهير في طرطوس. مواقف سيارات آمنة، حراسة، شاطئ رملي مجاور، والوصول المباشر للمطاعم الفاخرة بعد انتهاء مباراتك."
                  : "Located inside Tartous' iconic 5-star seaside hotel gates. Offering premium security, secured parking spots, coastal fresh air, and surrounding dining options."}
              </p>
            </motion.div>

            {/* FEATURE 5: DAYLIGHT LOUNGE */}
            <motion.div 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white border border-[#2C3E50]/15 rounded-[35px] p-8 group hover:border-primary transition-all duration-300 relative shadow-glass"
            >
              <Sparkles className="w-12 h-12 text-[#2C3E50] bg-primary/20 p-2.5 rounded-2xl mb-6" />
              <h3 className="text-2xl font-black italic uppercase mb-4 text-[#2C3E50]">
                {isArabic ? "لاونج رياضي مضيء" : "Premium Daylight Lounge"}
              </h3>
              <p className="text-[#2C3E50]/70 text-sm leading-relaxed">
                {isArabic 
                  ? "صالة استراحة ممتازة مصممة بنوافذ بانورامية واسعة تُدخل الضوء الطبيعي، تقدم عصائر صحية، قهوة مختصة، وتوفر منطقة اجتماعية لمتابعة مباريات الأصدقاء."
                  : "Relax post-match at our sunlit glass lounge. Enjoy fresh high-protein shakes, specialty coffee, and fully air-conditioned spaces that connect the community."}
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. AURORA TOURNAMENTS SECTION */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content (alternating layout rhythm) */}
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: isArabic ? -40 : 40 }}
              viewport={{ once: true }}
              className="lg:col-span-5 flex flex-col items-start"
            >
              <span className="text-primary-dark font-heading font-black tracking-widest uppercase text-xs bg-primary/30 px-3 py-1 rounded">
                {isArabic ? "بطولات أورورا الرياضية" : "AURORA TOURNAMENTS SERIES"}
              </span>
              <h2 className="text-4xl md:text-5xl font-black italic uppercase mt-2 mb-6 leading-none text-[#2C3E50]">
                {isArabic ? "بطولات أورورا الساحلية" : "AURORA COAST CHAMPIONSHIPS"}
              </h2>
              <p className="text-[#2C3E50]/70 mb-6 leading-relaxed">
                {isArabic 
                  ? "سلسلة منافسات البادل الأكثر إثارة وجماهيرية في سوريا. نجمع أفضل اللاعبين والمصنفين وطنياً للتنافس في أجواء ليلية مشتعلة تحت كشافاتنا الشمسية. جوائز قيمة، جوائز مادية للمركز الأول، وتغطية إعلامية حية."
                  : "The pinnacle of competitive padel in Tartous. The Aurora Championships invite local top-tier teams to fight for glory, backed by professional sports filming, live commentary, and significant cash prizes."}
              </p>
              
              <div className="space-y-4 w-full mb-8">
                <div className="flex items-center gap-3 bg-slate-50 border border-[#2C3E50]/10 rounded-2xl p-4">
                  <Trophy className="w-5 h-5 text-primary fill-primary" />
                  <span className="font-bold text-sm text-[#2C3E50]">
                    {isArabic ? "دوري أورورا المفتوح - صيف ٢٠٢٦" : "Aurora Open League - Summer 2026"}
                  </span>
                </div>
                <div className="flex items-center gap-3 bg-slate-50 border border-[#2C3E50]/10 rounded-2xl p-4">
                  <Star className="w-5 h-5 text-primary fill-primary" />
                  <span className="font-bold text-sm text-[#2C3E50]">
                    {isArabic ? "جوائز نقدية وتكريم رسمي معتمد" : "Official Ranking Points & Cash Prizes"}
                  </span>
                </div>
              </div>

              <Link 
                to="/contact"
                className="btn-primary inline-flex items-center gap-2"
              >
                {isArabic ? "سجل كفريق الآن" : "Register Your Team"}
              </Link>
            </motion.div>

            {/* Right Asymmetric Image Showcase */}
            <motion.div 
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.95 }}
              viewport={{ once: true }}
              className="lg:col-span-7 relative"
            >
              <div className="absolute -inset-2 border-2 border-dark/10 rounded-[35px] -translate-x-3 -translate-y-3 skew-x-2 pointer-events-none" />
              <div className="relative rounded-[32px] overflow-hidden border border-[#2C3E50]/15 aspect-[16/10] shadow-glass">
                <img 
                  src={courtImg} 
                  className="w-full h-full object-cover" 
                  alt="Aurora Tournaments Action Shot" 
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 glass-card rounded-2xl p-5 border border-white/60">
                  <span className="text-xs font-black uppercase text-[#2C3E50] tracking-widest bg-primary px-2.5 py-1 rounded inline-block mb-2">
                    {isArabic ? "الحدث القادم" : "UPCOMING EVENT"}
                  </span>
                  <h4 className="text-xl font-black italic text-[#2C3E50] uppercase">
                    {isArabic ? "بطولة أورورا الشاطئية الثانية" : "Aurora Beach Tournament II"}
                  </h4>
                  <p className="text-xs text-[#2C3E50]/70 mt-1">
                    {isArabic ? "فندق جونادا • طرطوس • ١٢-١٥ تموز ٢٠٢٦" : "Hotel Junada • Tartous • July 12-15, 2026"}
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. ASYMMETRIC QUICK-BOOKING COURT SELECTOR */}
      <section className="py-24 bg-slate-50 border-t border-[#2C3E50]/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Selector Left Intro (Arabic align support) */}
            <div className={`lg:col-span-5 flex flex-col items-start ${isArabic ? "lg:items-end text-right" : "text-left"}`}>
              <span className="text-primary-dark font-heading font-black tracking-widest uppercase text-xs bg-primary/20 px-3 py-1 rounded">
                {isArabic ? "احجز بلمح البصر" : "FAST COURT BOOKING"}
              </span>
              <h2 className="text-4xl md:text-5xl font-black italic uppercase mt-2 mb-6 leading-none text-[#2C3E50]">
                {isArabic ? "اختر ميدانك المفضل" : "SELECT YOUR ARENA"}
              </h2>
              <p className="text-[#2C3E50]/70 mb-8 max-w-md font-semibold">
                {isArabic 
                  ? "انقر على أي من الملاعب الفاخرة المتاحة للذهاب مباشرة إلى صفحة الحجز وحجز فترتك المفضلة عبر نظامنا التفاعلي."
                  : "Click on either arena style to open our interactive booking layout and pick your custom slots instantly."}
              </p>
              
              <div className="hidden lg:flex items-center gap-2 text-[#2C3E50] font-black">
                <span>{isArabic ? "انقر للحجز السريع" : "Click card to book instantly"}</span>
                <ArrowRight className={`w-5 h-5 ${isArabic ? "rotate-180" : ""}`} />
              </div>
            </div>

            {/* Selector Right Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Panoramic Court Option */}
              <div 
                onClick={() => handleQuickBook("panoramic")}
                className="group relative rounded-3xl overflow-hidden border border-[#2C3E50]/15 hover:border-primary cursor-pointer transition-all duration-300 aspect-[4/3] bg-white shadow-glass hover:shadow-neon-strong"
              >
                <img src={courtImg} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Panoramic Court" />
                <div className="padel-gradient-overlay" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h4 className="text-xl font-black italic text-[#2C3E50] uppercase group-hover:text-primary-dark transition-colors">
                    {isArabic ? "الملعب البانورامي المغطى" : "Panoramic Indoor Arena"}
                  </h4>
                  <p className="text-[#2C3E50]/70 text-xs font-bold mt-1">
                    {isArabic ? "مغطى • طاقة شمسية 24/7 • زجاج مقوى" : "Covered • 24/7 Solar Backup • Pro Glass"}
                  </p>
                </div>
              </div>

              {/* Outdoor Coastal Court Option */}
              <div 
                onClick={() => handleQuickBook("outdoor")}
                className="group relative rounded-3xl overflow-hidden border border-[#2C3E50]/15 hover:border-primary cursor-pointer transition-all duration-300 aspect-[4/3] bg-white shadow-glass hover:shadow-neon-strong"
              >
                <img src={racketImg} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Outdoor Court" />
                <div className="padel-gradient-overlay" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h4 className="text-xl font-black italic text-[#2C3E50] uppercase group-hover:text-primary-dark transition-colors">
                    {isArabic ? "ملعب الساحل الخارجي" : "Coastal Outdoor Arena"}
                  </h4>
                  <p className="text-[#2C3E50]/70 text-xs font-bold mt-1">
                    {isArabic ? "مكشوف • إطلالة بحرية • كشافات ذكية" : "Outdoor • Sea View • Smart Floodlights"}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 5. STORY NARRATIVE & SOCIAL STATS */}
      <section className="py-24 bg-white border-y border-[#2C3E50]/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Collage - 60% */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-6 relative">
            <div className="space-y-6">
              <div className="rounded-3xl overflow-hidden border border-[#2C3E50]/15 aspect-[3/4] shadow-glass">
                <img src={racketImg} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="Carbon Padel Racket Closeup" />
              </div>
              <div className="bg-[#FFFFFF]/80 border border-[#2C3E50]/15 rounded-3xl p-6 text-center shadow-glass">
                <Trophy className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="text-3xl font-black italic text-[#2C3E50]">15+</h4>
                <p className="text-xs text-[#2C3E50]/60 mt-1 uppercase font-bold">{isArabic ? "بطولة محلية وإقليمية" : "Local Tournaments"}</p>
              </div>
            </div>
            <div className="space-y-6 pt-12">
              <div className="bg-primary/10 border border-primary/40 rounded-3xl p-6 text-center shadow-sm">
                <Users className="w-8 h-8 text-[#2C3E50] mx-auto mb-3" />
                <h4 className="text-3xl font-black italic text-[#2C3E50]">600+</h4>
                <p className="text-xs text-[#2C3E50]/70 mt-1 uppercase font-bold">{isArabic ? "عضو فعال في طرطوس" : "Active Players"}</p>
              </div>
              <div className="rounded-3xl overflow-hidden border border-[#2C3E50]/15 aspect-[3/4] shadow-glass">
                <img src={loungeImg} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="Sports Lounge Interior" />
              </div>
            </div>
          </div>

          {/* Right Narrative Copy - 40% */}
          <div className={`lg:col-span-5 flex flex-col items-start ${isArabic ? "lg:items-end text-right" : "text-left"}`}>
            <span className="text-[#2C3E50] font-heading font-black tracking-widest uppercase text-xs bg-primary/30 px-3 py-1 rounded">
              {isArabic ? "رسالتنا وشغفنا" : "MISSION & PASSION"}
            </span>
            <h2 className="text-4xl md:text-5xl font-black italic uppercase mt-2 mb-6 leading-tight text-[#2C3E50]">
              {isArabic ? "نحن نرفع معايير الرياضة في سوريا" : "Pioneering International Padel Standards"}
            </h2>
            <p className="text-[#2C3E50]/70 leading-relaxed mb-6 font-medium">
              {isArabic 
                ? "تأسس ذا بادل هب طرطوس ليكون المنصة الأولى التي تنقل البادل بمواصفاتها الدولية الاحترافية وتدريبها الإسباني المتقدم إلى الساحة السورية. نحن لا نقدم فقط ملاعب رائعة بل نبني مجتمعاً رياضياً متكاملاً يتبادل فيه الأعضاء التحديات والخبرات في أجواء راقية."
                : "The Padel Hub Sy was established to bring international tournament specifications, elite Spanish coaching methods, and a high-energy athletic community directly to Syria. We offer a luxurious safe haven for competitive play, youth development, and premium sports hospitality."}
            </p>
            
            <div className="space-y-4 w-full">
              {[
                { labelAr: "تأجير مضارب كربونية احترافية مجاناً مع الحجز", labelEn: "Premium Carbon Rackets Loaned with Court" },
                { labelAr: "أكاديمية تدريب معتمدة للفئات العمرية المختلفة", labelEn: "Certified Professional Academy Coaches" },
                { labelAr: "لاونج رياضي مكيف بالكامل ومطل على البحر", labelEn: "Viewing Lounge with High-End Cafe" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-slate-50 border border-[#2C3E50]/10 rounded-2xl p-4 shadow-sm">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary shadow-neon flex-shrink-0" />
                  <span className="text-sm font-bold text-[#2C3E50]">{isArabic ? item.labelAr : item.labelEn}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 6. CALL TO ACTION (CTA) */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div 
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.96 }}
            viewport={{ once: true }}
            className="bg-[#2C3E50] text-white rounded-[45px] p-12 md:p-20 text-center relative overflow-hidden shadow-glass border border-dark/10"
          >
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />
            
            <h2 className="text-5xl md:text-7xl font-black italic uppercase leading-none mb-6 text-white">
              {isArabic ? "هل أنت جاهز للتحطيم؟" : "READY TO SMASH?"}
            </h2>
            <p className="text-white/80 font-black text-lg md:text-xl max-w-2xl mx-auto mb-10">
              {isArabic 
                ? "احجز جلستك الرياضية الآن عبر نظامنا الإلكتروني الذكي والعب في أي وقت طوال اليوم والليل بفضل طاقتنا الشمسية." 
                : "Claim your court today. Experience uninterrupted solar-powered play at Junada Hotel."}
            </p>

            <Link 
              to="/booking" 
              className="bg-primary text-[#2C3E50] hover:bg-white hover:text-[#2C3E50] font-black text-lg uppercase tracking-tight px-12 py-5 rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95 inline-block shadow-2xl"
            >
              {isArabic ? "ابدأ الحجز الآن" : "Start Court Booking"}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;