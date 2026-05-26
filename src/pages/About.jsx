import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShieldCheck, Award, Zap, Compass, Users } from "lucide-react";

import courtImg from "../assets/panoramic_court_light.png";
import smashImg from "../assets/padel_smash_light.png";
import racketImg from "../assets/padel_racket_light.png";

function About({ isArabic }) {
  useEffect(() => {
    document.title = isArabic 
      ? "قصتنا وهويتنا | ذا بادل هب طرطوس" 
      : "Our Story & Identity | The Padel Hub Tartous";
    
    const metaDesc = document.querySelector('meta[name="description"]');
    const descText = isArabic 
      ? "تعرف على رؤية ذا بادل هب طرطوس في إدخال رياضة البادل بمعايير دولية وكهرباء شمسية 24/7 إلى الساحل السوري."
      : "Learn about The Padel Hub Tartous and its vision of bringing international padel standards and 24/7 solar backup power to Syria.";
    if (metaDesc) {
      metaDesc.setAttribute("content", descText);
    }
  }, [isArabic]);

  // Specifications list
  const specs = [
    {
      titleAr: "عشب سوبر كورت الإسباني",
      titleEn: "Spanish Supercourt Turf",
      descAr: "عشب نسيجي معتمد دولياً من الاتحاد الدولي للبادل يضمن ارتداداً متناسقاً وثباتاً ممتازاً للقدمين.",
      specsEn: "Certified WPT textured turf for consistent ball rebound, joint safety, and premium slip resistance."
    },
    {
      titleAr: "هياكل زجاجية بانورامية 12 مم",
      titleEn: "12mm Tempered Panoramic Glass",
      descAr: "ألواح زجاجية مقساة بسمك 12 مم مدعمة بهياكل فولاذية لتحمل الرياح الساحلية الشديدة وتوفير رؤية مشاهدة خالية من العوائق.",
      specsEn: "Heavy-duty 12mm glass panels engineered to absorb impacts and withstand coastal wind velocities without anchors."
    },
    {
      titleAr: "بنية هجينة للطاقة الشمسية 24/7",
      titleEn: "24/7 Hybrid Solar Grid",
      descAr: "نظام طاقة بديل متكامل يضمن استمرارية الإضاءة الاحترافية وتكييف الهواء وغرف الملابس طوال اليوم دون انقطاع.",
      specsEn: "Custom solar array securing seamless illumination, chilled lockers, and lobby cafe operations during outages."
    },
    {
      titleAr: "فولاذ مقاوم للتآكل والرطوبة",
      titleEn: "Anti-Corrosive Galvanized Steel",
      descAr: "هياكل حديدية معالجة ضد الرطوبة الساحلية والصدأ لضمان سلامة اللاعبين وعمر افتراضي طويل للمنشأة.",
      specsEn: "Double-galvanized frame coatings preventing rust and weathering under high coastal humidity."
    }
  ];

  return (
    <div className="bg-[#FFFFFF] text-[#2C3E50] min-h-screen pt-[88px] md:pt-[100px] pb-24">
      
      {/* HERO */}
      <section className="relative py-20 border-b border-dark/10 bg-slate-50">
        <div className="absolute top-0 right-1/4 w-[300px] h-[150px] bg-primary/10 blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <p className="uppercase tracking-[5px] text-[#2C3E50] font-black text-xs md:text-sm mb-4 bg-primary/30 px-3 py-1 rounded inline-block shadow-sm">
            {isArabic ? "القصة والهوية" : "STORY & LEGACY"}
          </p>
          <h1 className="text-4xl md:text-6xl font-black italic uppercase leading-none text-stroke-dark">
            {isArabic ? (
              <>تاريخنا <span className="text-[#2C3E50] bg-primary px-3 py-0.5 rounded shadow-neon text-stroke-none">ورؤيتنا</span> الرياضية</>
            ) : (
              <>OUR STORY & <span className="text-[#2C3E50] bg-primary px-3 py-0.5 rounded shadow-neon text-stroke-none">VISION</span></>
            )}
          </h1>
          <p className="text-[#2C3E50]/70 text-sm md:text-base mt-4 max-w-2xl font-semibold">
            {isArabic 
              ? "انطلق ذا بادل هب في مايو 2024 ليكون أول ملعب بادل متخصص بمعايير دولية في مدينة طرطوس، حاملاً رؤية لتطوير هذه الرياضة وبناء مجتمع نشيط."
              : "Launched in May 2024, The Padel Hub entered Syria's sports landscape as the first WPT-grade indoor venue in Tartous, blending active lifestyles with hospitality."}
          </p>
        </div>
      </section>

      {/* STORY & NARRATIVE BLOCK (60/40 Split) */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Narrative: 60% */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl md:text-4xl font-black italic uppercase text-[#2C3E50] border-b-2 border-primary pb-2 w-fit">
              {isArabic ? "الريادة في طرطوس: كيف بدأنا؟" : "First Mover: Bringing the Vibe to Tartous"}
            </h2>
            <p className="text-[#2C3E50]/70 leading-relaxed text-sm md:text-base font-semibold">
              {isArabic 
                ? "في ظل الحاجة المتزايدة لمساحات ترفيهية ورياضية راقية تلبي تطلعات الشباب والمحترفين في سوريا، قمنا بتأسيس 'ذا بادل هب' كأول وجهة متكاملة لرياضة البادل تنس في مدينة طرطوس. اخترنا موقعنا بعناية فائقة داخل فندق جونادا الفاخر لنضمن لعملائنا بيئة آمنة، مريحة، وسهلة الوصول."
                : "Realizing the massive potential for padel tennis in the coastal region, we established 'The Padel Hub' inside Hotel Junada, Tartous. Our mission was simple: eliminate all structural limitations – from electricity outages to coastal weather restrictions – and build a sanctuary where players can hone their skills and gather daily."}
            </p>
            <p className="text-[#2C3E50]/60 leading-relaxed text-sm font-medium">
              {isArabic 
                ? "ولأن البنية التحتية هي حجر الأساس، تغلبنا على تحديات الطاقة المحلية بإنشاء أول نظام كهرباء شمسية هجين كامل في المنشأة لضمان استمرارية اللعب تحت الكشافات الليلية القوية وفي الصالات المكيفة. نحن لا نقدم ملعباً فحسب، بل نصنع معياراً جديداً للرياضة السورية."
                : "By investing in a robust, custom-engineered structural frame and the city's first high-capacity solar grid for a sports facility, we successfully pioneered a 24/7 operational hub. Today, we are proud to foster a growing local player database, hosting seasonal tournaments and certified training clinics."}
            </p>

            <div className="flex gap-4 pt-4">
              <div className="text-center bg-slate-50 border border-dark/10 rounded-2xl p-4 min-w-[100px] shadow-sm">
                <span className="block text-primary-dark font-black text-2xl italic">May</span>
                <span className="block text-xs font-bold text-[#2C3E50]/50 uppercase mt-1">2024</span>
              </div>
              <div className="text-center bg-slate-50 border border-dark/10 rounded-2xl p-4 min-w-[100px] shadow-sm">
                <span className="block text-primary-dark font-black text-2xl italic">1st</span>
                <span className="block text-xs font-bold text-[#2C3E50]/50 uppercase mt-1">In Tartous</span>
              </div>
            </div>
          </div>

          {/* Visual: 40% */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-2 border-2 border-primary rounded-[35px] translate-x-3 translate-y-3 pointer-events-none -skew-x-2" />
            <div className="relative rounded-[30px] overflow-hidden aspect-[4/5] border border-dark/15 shadow-glass bg-white">
              <img src={courtImg} className="w-full h-full object-cover transition-all duration-700" alt="About The Padel Hub" />
              <div className="padel-gradient-overlay" />
            </div>
          </div>

        </div>
      </section>

      {/* MISSION & VISION - ASYMMETRIC 60/40 CARDS */}
      <section className="py-20 bg-slate-50 border-y border-dark/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Mission: 60% width */}
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: isArabic ? 40 : -40 }}
              viewport={{ once: true }}
              className="lg:col-span-7 bg-[#FFFFFF] border border-dark/15 rounded-[35px] p-8 md:p-12 flex flex-col justify-between group shadow-glass"
            >
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Compass className="w-8 h-8 text-primary-dark" />
                  <span className="text-xs font-black uppercase tracking-widest text-[#2C3E50] bg-primary/20 px-2 py-0.5 rounded">{isArabic ? "رسالتنا" : "OUR MISSION"}</span>
                </div>
                <h3 className="text-3xl font-black italic uppercase mb-6 leading-tight text-[#2C3E50]">
                  {isArabic ? "توفير بيئة رياضية بمقاييس عالمية تدفع اللاعبين للتطور والتواصل" : "Establishing Professional Venues for Growth & Connection"}
                </h3>
                <p className="text-[#2C3E50]/70 text-sm md:text-base leading-relaxed font-semibold">
                  {isArabic
                    ? "تلتزم رسالتنا بنشر وتطوير رياضة البادل في سوريا عبر تقديم منشآت رياضية مطابقة تماماً للمواصفات الدولية، وتوفير برامج تدريبية احترافية معتمدة تدفع اللاعبين بكافة أعمارهم ومستوياتهم للنمو والمنافسة، وخلق صلات اجتماعية وثقافية وثيقة بين أعضاء النادي."
                    : "To systematically nurture the sport of padel in Syria by offering uncompromising court environments, certified training academies, and local leagues. We focus on bridging high-performance athleticism with premium recreational hospitality, making sports an everyday social routine."}
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-dark/10 flex items-center gap-3 text-xs text-[#2C3E50]/55 font-bold">
                <Users className="w-4 h-4 text-primary-dark" />
                <span>{isArabic ? "تمكين المجتمع الرياضي الساحلي" : "Empowering the Syrian coastal tennis community"}</span>
              </div>
            </motion.div>

            {/* Vision: 40% width */}
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: isArabic ? -40 : 40 }}
              viewport={{ once: true }}
              className="lg:col-span-5 bg-[#2C3E50] text-white rounded-[35px] p-8 md:p-12 flex flex-col justify-between shadow-glass border border-dark/10"
            >
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Award className="w-8 h-8 text-primary fill-primary" />
                  <span className="text-xs font-black uppercase tracking-widest text-primary-dark bg-primary px-2.5 py-0.5 rounded">{isArabic ? "رؤيتنا" : "OUR VISION"}</span>
                </div>
                <h3 className="text-3xl font-black italic uppercase mb-6 leading-tight text-white">
                  {isArabic ? "الريادة والمرجعية الأولى للبادل في سوريا" : "The Pioneer & Reference for Padel in Syria"}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed font-semibold">
                  {isArabic
                    ? "نسعى لأن نصبح العلامة التجارية الأولى والجهة المرجعية الأبرز لرياضة البادل على مستوى سوريا، ومواصلة توسعة وتطوير الملاعب لتمثيل الرياضيين السوريين في المحافل والبطولات الإقليمية والدولية بكفاءة واحترافية."
                    : "To become the ultimate country-wide brand and benchmark for padel court systems and professional player coaching in Syria. We aim to represent local athletes in international padel tournaments and expand our custom solar court model across key cities."}
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3 text-xs text-white/60 font-bold">
                <Zap className="w-4 h-4 text-primary fill-primary" />
                <span>{isArabic ? "طاقة متجددة، رؤية مستمرة" : "Renewable Energy, Visionary Future"}</span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* FACILITIES TECHNICAL SPECS SHEET */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center mb-16 max-w-xl mx-auto">
            <span className="text-primary-dark font-heading font-black tracking-widest uppercase text-xs bg-primary/20 px-3 py-1 rounded">
              {isArabic ? "المواصفات الفنية للملاعب" : "TECHNICAL SPECIFICATIONS"}
            </span>
            <h2 className="text-4xl font-black italic uppercase leading-none mt-4 text-[#2C3E50]">
              {isArabic ? "بنية تحتية هندسية احترافية" : "Engineered to Perform"}
            </h2>
            <p className="text-[#2C3E50]/70 text-xs md:text-sm mt-3 font-semibold">
              {isArabic 
                ? "ملاعبنا مصممة ومبنية بمواد ممتازة وخاضعة لمعايير الاتحاد الدولي للبادل (FIP) لضمان أفضل تجربة أداء."
                : "Every court installation meets precise International Padel Federation rules for safety, rebound, and playability."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specs.map((spec, idx) => (
              <div 
                key={idx} 
                className="bg-slate-50 border border-dark/10 hover:border-primary p-6 md:p-8 rounded-3xl transition-all duration-300 flex items-start gap-4 shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-primary text-[#2C3E50] flex items-center justify-center flex-shrink-0 font-black italic shadow-neon">
                  {idx + 1}
                </div>
                <div>
                  <h4 className="text-lg font-black italic uppercase text-[#2C3E50]">
                    {isArabic ? spec.titleAr : spec.titleEn}
                  </h4>
                  <p className="text-[#2C3E50]/70 text-sm mt-2 leading-relaxed font-semibold">
                    {isArabic ? spec.descAr : spec.specsEn}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}

export default About;