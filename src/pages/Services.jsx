import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Zap, ShieldCheck, Flame, ShoppingBag, Coffee, ChevronRight, Award } from "lucide-react";

import courtImg from "../assets/panoramic_court_light.png";
import smashImg from "../assets/padel_smash_light.png";
import racketImg from "../assets/padel_racket_light.png";
import loungeImg from "../assets/sports_lounge_light.png";

function Services({ isArabic }) {
  useEffect(() => {
    document.title = isArabic 
      ? "خدمات النادي | ذا بادل هب طرطوس" 
      : "Club Services | The Padel Hub Tartous";
    
    const metaDesc = document.querySelector('meta[name="description"]');
    const descText = isArabic 
      ? "اكتشف خدماتنا الرياضية والترفيهية الفاخرة. حجز ملاعب بادل، أكاديمية تدريب معتمدة، متجر معدات احترافية، وكافيه هب لاونج."
      : "Discover our premium sports and hospitality services. Padel court rentals, certified coaching academy, pro shop, and the Hub Lounge cafe.";
    if (metaDesc) {
      metaDesc.setAttribute("content", descText);
    }
  }, [isArabic]);

  return (
    <div className="bg-[#FFFFFF] text-[#2C3E50] min-h-screen pt-[88px] md:pt-[100px] pb-24">
      
      {/* HERO */}
      <section className="relative py-20 border-b border-dark/10 bg-slate-50">
        <div className="absolute top-0 right-1/4 w-[350px] h-[150px] bg-primary/10 blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <p className="uppercase tracking-[5px] text-[#2C3E50] font-black text-xs md:text-sm mb-4 bg-primary/30 px-3 py-1 rounded inline-block shadow-sm">
            {isArabic ? "خدماتنا الاحترافية" : "OUR SERVICES"}
          </p>
          <h1 className="text-4xl md:text-6xl font-black italic uppercase leading-none text-stroke-dark">
            {isArabic ? (
              <>عالم متكامل <span className="text-[#2C3E50] bg-primary px-3 py-0.5 rounded shadow-neon text-stroke-none">للبادل</span></>
            ) : (
              <>EVERYTHING FOR <span className="text-[#2C3E50] bg-primary px-3 py-0.5 rounded shadow-neon text-stroke-none">PADEL</span></>
            )}
          </h1>
          <p className="text-[#2C3E50]/70 text-sm md:text-base mt-4 max-w-2xl font-semibold">
            {isArabic 
              ? "من ملاعبنا البانورامية المغطاة إلى أكاديميتنا التدريبية ومتجرنا الحصري، نقدم بيئة رياضية متطورة تلبي تطلعات الهواة والمحترفين."
              : "From professional panoramic courts to our certified training academy, pro shop, and social lounge, enjoy a complete 5-star padel lifestyle."}
          </p>
        </div>
      </section>

      {/* CORE SERVICES LIST - ALTERNATING ASYMMETRIC SPLITS */}
      <section className="py-16 max-w-7xl mx-auto px-6 space-y-24">

        {/* 1. COURT RENTALS (60/40 Split) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Content: 60% */}
          <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 text-[#2C3E50] font-black bg-primary/20 px-3 py-1 rounded">
              <Zap className="w-5 h-5 text-primary-dark fill-primary" />
              <span className="uppercase text-xs tracking-wider">{isArabic ? "ملاعب معتمدة دولياً" : "WPT STANDARD COURTS"}</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black italic uppercase leading-none text-[#2C3E50]">
              {isArabic ? "تأجير الملاعب والاشتراكات" : "Premium Court Bookings"}
            </h2>
            
            <p className="text-[#2C3E50]/70 text-sm md:text-base leading-relaxed font-semibold">
              {isArabic
                ? "احجز حصتك واستمتع باللعب على عشب صناعي نسيجي متطور للغاية (Supercourt) يقلص الاحتكاك ويحمي المفاصل. ملاعبنا مزودة بأسقف عالية مغطاة بالكامل لحمايتك من الرياح والأمطار الساحلية، وبدعم طاقة شمسية كامل 24/7."
                : "Book single matches or secure monthly subscriptions. Our indoor courts feature high-clearance ceilings to shelter you from coastal wind and rain, paired with World Padel Tour grade Supercourt turf and dynamic shadowless night floodlighting."}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { titleAr: "حجوزات فردية (90 دقيقة)", titleEn: "Single Bookings (90 Mins)" },
                { titleAr: "اشتراكات وحزم ألعاب شهرية", titleEn: "Monthly Play Packages" },
                { titleAr: "تأمين ملاعب للبطولات الخاصة", titleEn: "Corporate & Private Rentals" },
                { titleAr: "إضاءة ليلية وتكييف دون انقطاع", titleEn: "Continuous AC & Floodlights" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-slate-50 border border-dark/10 rounded-xl p-3 shadow-sm">
                  <ShieldCheck className="w-5 h-5 text-[#2C3E50] bg-primary/20 p-0.5 rounded flex-shrink-0" />
                  <span className="text-sm font-black text-[#2C3E50]">{isArabic ? item.titleAr : item.titleEn}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link to="/booking" className="btn-primary inline-block">
                {isArabic ? "احجز ملعب الآن" : "Book Your Court"}
              </Link>
            </div>
          </div>

          {/* Visual: 40% */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative rounded-[32px] overflow-hidden border border-dark/15 aspect-[4/3] shadow-glass">
              <img src={courtImg} className="w-full h-full object-cover transition-all duration-700" alt="Padel Courts Syria" />
              <div className="padel-gradient-overlay" />
            </div>
          </div>
        </div>

        {/* 2. PADEL ACADEMY (40/60 Split - Alternating) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual: 40% */}
          <div className="lg:col-span-5">
            <div className="relative rounded-[32px] overflow-hidden border border-dark/15 aspect-[4/3] shadow-glass">
              <img src={smashImg} className="w-full h-full object-cover transition-all duration-700" alt="Padel Academy Coaching" />
              <div className="padel-gradient-overlay" />
            </div>
          </div>

          {/* Content: 60% */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-[#2C3E50] font-black bg-primary/20 px-3 py-1 rounded">
              <Award className="w-5 h-5 text-primary-dark" />
              <span className="uppercase text-xs tracking-wider">{isArabic ? "برامج تدريبية احترافية" : "CERTIFIED ACADEMY"}</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black italic uppercase leading-none text-[#2C3E50]">
              {isArabic ? "أكاديمية التدريب والتطوير" : "The Padel Academy"}
            </h2>
            
            <p className="text-[#2C3E50]/70 text-sm md:text-base leading-relaxed font-semibold">
              {isArabic
                ? "ارتقِ بمستوى لعبك مع برامج تدريبية متخصصة ومصممة خصيصاً لمختلف المستويات والأعمار. نعتمد على أحدث مناهج التدريب الإسبانية لتعليم التموضع، تكتيكات اللعب الدفاعي والهجومي، والضربات الفنية كـ البانديخا والفيوبرا."
                : "Accelerate your skill development under certified training plans inspired by elite Spanish padel academies. We offer structured technical coaching covering strategic court placement, smash mechanics, spin controls, and net play."}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { titleAr: "جلسات تدريب فردية (خبير)", titleEn: "Private 1-on-1 Sessions" },
                { titleAr: "تدريب جماعي تنافسي (4 لاعبين)", titleEn: "Semi-Private Groups (Up to 4)" },
                { titleAr: "أكاديمية بادل للصغار والناشئين", titleEn: "Junior Academy Programs" },
                { titleAr: "معسكرات تدريب وتحدي مكثفة", titleEn: "Intensive Weekend Bootcamps" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-slate-50 border border-dark/10 rounded-xl p-3 shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-primary shadow-neon flex-shrink-0" />
                  <span className="text-sm font-black text-[#2C3E50]">{isArabic ? item.titleAr : item.titleEn}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link to="/booking" className="text-[#2C3E50] border-b-2 border-primary pb-1.5 font-black uppercase tracking-wider hover:text-primary-dark transition-all flex items-center gap-2 w-fit">
                <span>{isArabic ? "احجز حصة تدريبية" : "Schedule Coaching Session"}</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* 3. PRO SHOP GEAR (60/40 Split) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Content: 60% */}
          <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 text-[#2C3E50] font-black bg-primary/20 px-3 py-1 rounded">
              <ShoppingBag className="w-5 h-5 text-primary-dark" />
              <span className="uppercase text-xs tracking-wider">{isArabic ? "معدات ومستلزمات احترافية" : "PRO GEAR SHOP"}</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black italic uppercase leading-none text-[#2C3E50]">
              {isArabic ? "متجر المعدات وتأجير المضارب" : "Pro Gear & Racket Shop"}
            </h2>
            
            <p className="text-[#2C3E50]/70 text-sm md:text-base leading-relaxed font-semibold">
              {isArabic
                ? "نوفر للاعبينا تشكيلة مميزة من مضارب البادل الكربونية من كبرى العلامات التجارية العالمية (مثل Bullpadel, Babolat, Nox). يضم المتجر كرات بادل رسمية، حقائب رياضية، أحذية مخصصة للملاعب الرملية والترابية، بالإضافة لخدمة استبدال قبضة المضرب مجاناً."
                : "Gear up with the best racket brands in the world including Nox, Babolat, and Bullpadel. Our Pro Shop offers official tournament balls, specialized court footwear, carbon protectors, shock-absorber grips, and customized stringing support."}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { titleAr: "تأجير مجاني لمضارب كربونية للمبتدئين", titleEn: "Free Carbon Racket Loan for Novices" },
                { titleAr: "شراء مضارب وحقائب بادل رسمية", titleEn: "Official Brand Rackets & Accessories" },
                { titleAr: "كرات بادل معتمدة وملابس رياضية", titleEn: "Premium Balls & Official Apparel" },
                { titleAr: "تغيير وتثبيت قبضة المضرب بدقة", titleEn: "Free Grip Installation & Tuning" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-slate-50 border border-dark/10 rounded-xl p-3 shadow-sm">
                  <ShieldCheck className="w-5 h-5 text-[#2C3E50] bg-primary/20 p-0.5 rounded flex-shrink-0" />
                  <span className="text-sm font-black text-[#2C3E50]">{isArabic ? item.titleAr : item.titleEn}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual: 40% */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative rounded-[32px] overflow-hidden border border-dark/15 aspect-[4/3] shadow-glass">
              <img src={racketImg} className="w-full h-full object-cover transition-all duration-700" alt="Padel Pro Shop Gear" />
              <div className="padel-gradient-overlay" />
            </div>
          </div>
        </div>

        {/* 4. THE HUB LOUNGE (40/60 Split - Alternating) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual: 40% */}
          <div className="lg:col-span-5">
            <div className="relative rounded-[32px] overflow-hidden border border-dark/15 aspect-[4/3] shadow-glass">
              <img src={loungeImg} className="w-full h-full object-cover transition-all duration-700" alt="Sports Lounge Interior Cafe" />
              <div className="padel-gradient-overlay" />
            </div>
          </div>

          {/* Content: 60% */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-[#2C3E50] font-black bg-primary/20 px-3 py-1 rounded">
              <Coffee className="w-5 h-5 text-primary-dark" />
              <span className="uppercase text-xs tracking-wider">{isArabic ? "كافيه ومساحة تواصل" : "SOCIAL HUB LOUNGE"}</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black italic uppercase leading-none text-[#2C3E50]">
              {isArabic ? "ذا هب لاونج كافيه" : "The Hub Lounge"}
            </h2>
            
            <p className="text-[#2C3E50]/70 text-sm md:text-base leading-relaxed font-semibold">
              {isArabic
                ? "مساحتك المخصصة للاسترخاء وإعادة شحن طاقتك بعد مباريات البادل الحماسية. يقدم الكافيه إسبريسو مختص، سموذيز بروتينية طبيعية، وجبات خفيفة صحية، مع صالة عرض مكيفة بالكامل تطل مباشرة على الملاعب لمتابعة المباريات والبطولات العالمية."
                : "Relax and recharge post-match inside our glass-walled viewing lounge. Enjoy premium specialty espresso, organic protein smoothies, electrolyte drinks, healthy protein bars, and flat screens showing global sport events in an air-conditioned comfort."}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { titleAr: "إسبريسو مختص ومشروبات منعشة", titleEn: "Specialty Hot & Iced Coffees" },
                { titleAr: "مخفوقات بروتين وسموذيز طاقة", titleEn: "Protein Shakes & Energy Smoothies" },
                { titleAr: "شاشة بث مباشر للمباريات والبطولات", titleEn: "Live Sports Broadcast Screen" },
                { titleAr: "إطّلالة بانورامية زجاجية على الملاعب", titleEn: "Panoramic Glass Court Views" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-slate-50 border border-dark/10 rounded-xl p-3 shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-primary shadow-neon flex-shrink-0" />
                  <span className="text-sm font-black text-[#2C3E50]">{isArabic ? item.titleAr : item.titleEn}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>

      {/* CTA */}
      <section className="py-16 max-w-6xl mx-auto px-6 text-center">
        <div className="bg-[#2C3E50] text-white rounded-[45px] p-12 md:p-20 relative overflow-hidden shadow-glass border border-dark/10">
          <h2 className="text-4xl md:text-6xl font-black italic uppercase mb-6 leading-none text-white">
            {isArabic ? "ارتقِ بمستوى لعبتك اليوم" : "JOIN THE HUB EXPERIENCE"}
          </h2>
          <p className="text-white/80 font-black text-base md:text-lg max-w-xl mx-auto mb-10">
            {isArabic 
              ? "احجز ملعب بادل أو اختر مدربك الخاص ودعنا نتولى توفير المعدات والأجواء المثالية." 
              : "Reserve a court, book a Spanish coach, or buy your next carbon racket. We handle the rest."}
          </p>
          <Link to="/booking" className="bg-primary text-[#2C3E50] hover:bg-white hover:text-[#2C3E50] font-black text-sm uppercase px-10 py-4.5 rounded-2xl transition-all duration-300 shadow-2xl inline-block">
            {isArabic ? "احجز الآن" : "Start Booking"}
          </Link>
        </div>
      </section>

    </div>
  );
}

export default Services;