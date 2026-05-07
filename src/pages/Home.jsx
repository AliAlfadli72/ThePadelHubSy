import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Home({ isArabic }) {
  return (
    <div className="overflow-hidden bg-black text-white">
      {/* HERO SECTION - Optimized with official Slogan */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?q=80&w=2070&auto=format&fit=crop"
            className="w-full h-full object-cover opacity-60"
            alt="The Padel Hub Tartous"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <p className="uppercase tracking-[6px] text-primary font-bold mb-6 text-sm">
              {isArabic ? "رياضة جديدة.. طاقة متجددة" : "New Sport, New Vibe"}
            </p>

            <h1 className="text-6xl md:text-8xl font-black leading-tight mb-8 uppercase italic">
              {isArabic ? (
                <>ذا بادل هب <span className="text-primary block">سوريا</span></>
              ) : (
                <>The Padel <span className="text-primary">Hub</span></>
              )}
            </h1>

            <p className="text-gray-300 text-xl leading-relaxed max-w-2xl mb-10 font-light">
              {isArabic 
                ? "النبض الجديد للرياضة في قلب طرطوس. تجربة استثنائية تمزج بين الفخامة، الحماس، والتفاعل الاجتماعي."
                : "The new heartbeat of sports in Tartous. An exceptional experience blending luxury, excitement, and social interaction."}
            </p>

            <div className="flex flex-wrap gap-5">
              <Link to="/booking" className="bg-primary text-black px-10 py-4 rounded-full font-black uppercase hover:bg-white transition-colors duration-300">
                {isArabic ? "احجز الآن" : "Book Now"}
              </Link>
              <Link to="/about" className="backdrop-blur-md border border-white/30 px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
                {isArabic ? "اكتشف الهب" : "Explore The Hub"}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* USP SECTION - Based on Profile Page 2 */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: isArabic ? "موقع نخبوي" : "Elite Location",
                desc: isArabic ? "في قلب فندق جونادا - بيئة آمنة وراقية." : "Located at Junada Hotel – a secure and premium environment.",
              },
              {
                title: isArabic ? "بنية تحتية عالمية" : "World-Class Courts",
                desc: isArabic ? "ملاعب مصممة لتحمل الظروف المناخية مع إضاءة ليلية متطورة." : "Designed for coastal weather with advanced night lighting.",
              },
              {
                title: isArabic ? "مجتمع عصري" : "Modern Community",
                desc: isArabic ? "وجهة اجتماعية يومية تجمع بين الرياضة والتميز." : "A daily social destination for those seeking excellence.",
              }
            ].map((usp, i) => (
              <div key={i} className="border-l-2 border-primary pl-6">
                <h3 className="text-2xl font-black mb-3 italic uppercase">{usp.title}</h3>
                <p className="text-gray-400 leading-relaxed">{usp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW - Content from "Who We Are" */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            className="relative"
          >
            <div className="absolute -inset-4 border-2 border-primary/30 rounded-[40px] translate-x-4 translate-y-4" />
            <img
              src="https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=1974&auto=format&fit=crop"
              className="relative rounded-[40px] grayscale hover:grayscale-0 transition-all duration-700"
              alt="Padel Court Syria"
            />
          </motion.div>

          <div>
            <h2 className="text-4xl md:text-6xl font-black mb-8 italic uppercase leading-none">
              {isArabic ? "أكثر من مجرد ملعب" : "More than just a court"}
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-8">
              {isArabic 
                ? "نحن الوجهة الأولى لهواة ومحترفي رياضة البادل في سوريا. نوفر بيئة احترافية بمعايير دولية تمنح لاعبينا منصة للتطور والمنافسة."
                : "The premier destination for Padel enthusiasts in Syria. We provide a professional environment with international standards, offering players a platform to grow and compete."}
            </p>
            <ul className="space-y-4 mb-10 text-primary font-bold">
              <li>{isArabic ? "✓ حجز ملاعب ذكي" : "✓ Smart Booking System"}</li>
              <li>{isArabic ? "✓ أكاديمية تدريب معتمدة" : "✓ Certified Training Academy"}</li>
              <li>{isArabic ? "✓ متجر معدات عالمي" : "✓ Global Equipment Shop"}</li>
            </ul>
            <Link to="/about" className="text-white border-b-2 border-primary pb-2 font-black uppercase tracking-widest hover:text-primary transition-all">
              {isArabic ? "تعرف على رؤيتنا" : "Our Full Vision"}
            </Link>
          </div>
        </div>
      </section>
      <section className="py-24 bg-black">
  <div className="max-w-7xl mx-auto px-6">
    <div className="mb-16">
      <h2 className="text-4xl md:text-5xl font-black italic uppercase">
        {isArabic ? "خدماتنا الاحترافية" : "Professional Services"}
      </h2>
      <div className="h-1 w-24 bg-primary mt-4"></div>
    </div>
    
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        {
          title: isArabic ? "أكاديمية التدريب" : "Training Academy",
          desc: isArabic ? "برامج مخصصة تحت إشراف مدربين معتمدين لجميع الأعمار." : "Customized programs under certified coaches for all ages.", //
        },
        {
          title: isArabic ? "تنظيم البطولات" : "Tournaments",
          desc: isArabic ? "استضافة دوريات دورية لتعزيز روح التنافس في المجتمع." : "Hosting regular leagues to foster a competitive spirit.", //
        },
        {
          title: isArabic ? "متجر المعدات" : "The Shop",
          desc: isArabic ? "توفير أرقى ماركات مضارب وكرات البادل العالمية." : "Providing the finest international padel racket brands.", //
        },
        {
          title: isArabic ? "حجز الملاعب الذكي" : "Smart Booking",
          desc: isArabic ? "نظام حجز مرن لملاعب مطابقة للمواصفات العالمية." : "Flexible booking for courts matching international specs.", //
        }
      ].map((service, i) => (
        <div key={i} className="group p-8 border border-white/10 bg-zinc-900/50 hover:bg-primary transition-all duration-500 rounded-2xl">
          <h3 className="text-xl font-black mb-4 group-hover:text-black uppercase italic">{service.title}</h3>
          <p className="text-gray-400 group-hover:text-black/80 text-sm leading-relaxed">{service.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>
<section className="py-24 bg-zinc-950 relative overflow-hidden">
  {/* Decorative text background */}
  <div className="absolute top-1/2 -translate-y-1/2 left-0 text-[200px] font-black opacity-[0.02] whitespace-nowrap select-none">
    THE PADEL HUB SYRIA
  </div>

  <div className="max-w-7xl mx-auto px-6 relative z-10">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <span className="text-primary font-bold tracking-widest uppercase text-sm">
          {isArabic ? "لماذا نحن؟" : "Why Choose Us?"}
        </span>
        <h2 className="text-5xl font-black mt-4 mb-8 uppercase italic leading-none">
          {isArabic ? "الريادة في مدينة طرطوس" : "Leading The Game in Tartous"}
        </h2>
        <div className="space-y-8">
          <div className="flex gap-6">
            <div className="text-primary text-3xl font-black italic">01</div>
            <div>
              <h4 className="text-xl font-bold mb-2 uppercase">{isArabic ? "المحرك الأول" : "First Mover Advantage"}</h4>
              <p className="text-gray-400">{isArabic ? "أول ملعب بادل متخصص في مدينة طرطوس." : "The first specialized padel court in Tartous city."} [cite: 24]</p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="text-primary text-3xl font-black italic">02</div>
            <div>
              <h4 className="text-xl font-bold mb-2 uppercase">{isArabic ? "بيئة آمنة وراقية" : "Premium Environment"}</h4>
              <p className="text-gray-400">{isArabic ? "سهولة الوصول لجمهور النخبة ضمن فندق جونادا." : "Easy access for elite audiences within Junada Hotel."} [cite: 25]</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
         <img src="https://images.unsplash.com/photo-1592910129881-892bbe239ca0?q=80&w=2070&auto=format&fit=crop" 
              className="rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" 
              alt="Elite Padel Experience" />
      </div>
    </div>
  </div>
</section>
<section className="py-24 bg-black">
  <div className="max-w-7xl mx-auto px-6 text-center mb-16">
    <h2 className="text-4xl md:text-6xl font-black uppercase italic mb-4">
      {isArabic ? "طاقة متجددة" : "New Sport, New Vibe"}
    </h2>
    <p className="text-gray-400 max-w-2xl mx-auto">
      {isArabic 
        ? "مساحات مخصصة للاستراحة والتواصل، مما يجعل النادي وجهة اجتماعية يومية." 
        : "Dedicated spaces for rest and connection, making the club a daily social destination."} 
    </p>
  </div>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
    {[1, 2, 3, 4].map((i) => (
      <div key={i} className="aspect-square overflow-hidden rounded-xl relative group">
        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
        <img 
          src={`https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=1000&auto=format&fit=crop&sig=${i}`} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
          alt="Padel Life" 
        />
      </div>
    ))}
  </div>
</section>

      {/* CTA SECTION */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-primary p-16 rounded-[50px] text-black text-center relative overflow-hidden">
            <h2 className="text-5xl md:text-7xl font-black mb-6 italic uppercase">
              {isArabic ? "جاهز للتحدي؟" : "Ready to Play?"}
            </h2>
            <p className="text-black/80 text-xl mb-10 font-bold">
              {isArabic ? "انضم إلى مجتمعنا في فندق جونادا اليوم." : "Join our community at Junada Hotel today."}
            </p>
            <Link to="/booking" className="bg-black text-white px-12 py-5 rounded-full font-black uppercase text-lg hover:scale-105 transition-transform inline-block">
              {isArabic ? "ابدأ الحجز الآن" : "Start Booking Now"}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;