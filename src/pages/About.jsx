import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function About({ isArabic }) {
  return (
    <div className="overflow-hidden bg-black text-white">
      {/* HERO - Content from "Who We Are" */}
      <section className="relative py-40 border-b border-white/10">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070&auto=format&fit=crop"
            alt="Padel Court Syria"
            className="w-full h-full object-cover opacity-30 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black to-black" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <p className="uppercase tracking-[5px] text-primary mb-6 font-bold">
              {isArabic ? "القصة والهوية" : "Story & Identity"}
            </p>

            <h1 className="text-5xl md:text-8xl font-black leading-none mb-8 italic uppercase">
              {isArabic ? (
                <>النبض الجديد <span className="text-primary block">للرياضة</span></>
              ) : (
                <>The New <span className="text-primary">Pulse</span> of Sport</>
              )}
            </h1>

            <p className="text-gray-300 text-xl leading-relaxed max-w-3xl font-light">
              {isArabic
                ? "نحن النبض الجديد للرياضة في قلب طرطوس. ذا بادل هب ليس مجرد ملعب رياضي بل هو مجتمع عصري تأسس ليكون الوجهة الأولى لهواة ومحترفي رياضة البادل في سوريا."
                : "We are the new pulse of sport in the heart of Tartous. The Padel Hub is not just a sports court; it is a modern community established to be the premier destination for padel enthusiasts and professionals in Syria."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* MISSION & VISION - From Page 2 of Profile */}
      <section className="py-28 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="p-12 bg-white/5 rounded-[40px] border border-white/10 relative overflow-hidden group"
            >
               <div className="absolute top-0 right-0 p-8 text-primary/10 text-9xl font-black italic group-hover:text-primary/20 transition-colors">01</div>
               <h3 className="text-primary tracking-widest uppercase font-bold mb-6">{isArabic ? "الرؤية" : "Vision"}</h3>
               <p className="text-2xl leading-relaxed font-bold italic uppercase">
                 {isArabic 
                   ? "أن نصبح العلامة التجارية الرائدة والمرجعية الأولى لرياضة البادل في سوريا، والمحرك الأساسي لانتشار هذه الرياضة عالمياً على الأرض السورية."
                   : "To become the leading brand and the primary reference for padel in Syria, and the main driver for the global spread of this sport on Syrian soil."}
               </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="p-12 bg-primary rounded-[40px] text-black relative overflow-hidden group"
            >
               <div className="absolute top-0 right-0 p-8 text-black/10 text-9xl font-black italic">02</div>
               <h3 className="tracking-widest uppercase font-bold mb-6 text-black/60">{isArabic ? "الرسالة" : "Mission"}</h3>
               <p className="text-2xl leading-relaxed font-bold italic uppercase">
                 {isArabic 
                   ? "توفير بيئة رياضية احترافية بمعايير دولية، تمنح لاعبينا من مختلف المستويات منصة للتطور والمنافسة، وبناء علاقات اجتماعية قوية."
                   : "Providing a professional sports environment with international standards, giving our players of all levels a platform for development and competition, and building strong social relationships."}
               </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* THE LOCATION HIGHLIGHT - Official Site Location */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1547347298-4074fc3086f0?q=80&w=1974&auto=format&fit=crop"
              alt="The Padel Hub Location"
              className="rounded-[40px] w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-8 -left-8 bg-zinc-900 border border-white/10 p-10 rounded-3xl shadow-2xl">
              <p className="text-primary font-bold uppercase tracking-widest mb-2">{isArabic ? "الموقع النخبوي" : "Elite Location"}</p>
              <h4 className="text-3xl font-black italic">{isArabic ? "فندق جونادا، طرطوس" : "Junada Hotel, Tartous"}</h4>
            </div>
          </motion.div>

          <div>
            <h2 className="text-4xl md:text-6xl font-black mb-8 italic uppercase leading-tight">
              {isArabic ? "تجربة استثنائية تمزج بين الفخامة والحماس" : "An Experience Blending Luxury & Excitement"}
            </h2>
            <p className="text-gray-400 text-lg leading-8 mb-8">
              {isArabic 
                ? "من موقعنا المتميز في فندق جونادا، نقدم تجربة رياضية استثنائية لننقل مفهوم الرياضة من مجرد نشاط بدني إلى نمط حياة متكامل."
                : "From our distinguished location at Junada Hotel, we provide an exceptional sports experience to shift the concept of sport from a mere physical activity to an integrated lifestyle."}
            </p>
            <div className="flex gap-4">
               <div className="w-12 h-1 bg-primary mt-3"></div>
               <p className="text-white font-bold italic">{isArabic ? "مايو 2024 - طرطوس" : "May 2024 - Tartous"}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES - Point 4 from Profile (USP) */}
      <section className="py-24 bg-zinc-950 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-4xl font-black uppercase italic mb-16">{isArabic ? "نقاط القوة" : "Our Strengths"}</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: isArabic ? "الريادة المحلية" : "Local Leadership",
                desc: isArabic ? "أول ملعب بادل متخصص في مدينة طرطوس." : "The first specialized padel court in the city of Tartous."
              },
              {
                title: isArabic ? "التسويق العصري" : "Modern Marketing",
                desc: isArabic ? "هوية بصرية قوية وشابة تخاطب جيل الشباب الطموح." : "A strong and youthful visual identity addressing the ambitious younger generation."
              },
              {
                title: isArabic ? "البنية التحتية" : "Infrastructure",
                desc: isArabic ? "ملاعب مصممة لتحمل الظروف المناخية الساحلية." : "Courts designed to withstand coastal weather conditions."
              }
            ].map((usp, i) => (
              <div key={i} className="text-center">
                <h4 className="text-primary text-2xl font-black mb-4 uppercase italic italic">{usp.title}</h4>
                <p className="text-gray-500">{usp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-32 bg-black text-center">
        <h2 className="text-5xl md:text-8xl font-black italic uppercase mb-12">
          {isArabic ? "ابدأ قصتك معنا" : "Start Your Story With Us"}
        </h2>
        <Link 
          to="/booking" 
          className="bg-primary text-black px-16 py-6 rounded-full font-black text-xl uppercase hover:scale-110 transition-transform duration-300 inline-block"
        >
          {isArabic ? "احجز ملعبك" : "Book Your Court"}
        </Link>
      </section>
    </div>
  );
}

export default About;