import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaDumbbell,
  FaTrophy,
  FaUsers,
  FaShoppingBag,
} from "react-icons/fa";

function Services({ isArabic }) {
  const services = [
    {
      icon: <FaUsers />,
      title: isArabic ? "حجز الملاعب" : "Court Booking",
      desc: isArabic
        ? "احجز ملعبك بسهولة واستمتع بأفضل تجربة بادل حديثة."
        : "Book your court easily and enjoy a premium modern padel experience.",
    },

    {
      icon: <FaDumbbell />,
      title: isArabic ? "أكاديمية التدريب" : "Training Academy",
      desc: isArabic
        ? "برامج تدريب احترافية لجميع المستويات بإشراف مدربين معتمدين."
        : "Professional training programs for all levels with certified coaches.",
    },

    {
      icon: <FaTrophy />,
      title: isArabic ? "البطولات" : "Tournaments",
      desc: isArabic
        ? "تنظيم بطولات وفعاليات تنافسية بأجواء عالمية."
        : "Competitive tournaments and world-class sporting events.",
    },

    {
      icon: <FaShoppingBag />,
      title: isArabic ? "متجر البادل" : "Padel Shop",
      desc: isArabic
        ? "معدات وملابس احترافية من أفضل العلامات العالمية."
        : "Premium equipment and apparel from top global brands.",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative py-32 border-b border-white/10">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=2070&auto=format&fit=crop"
            alt="Padel Services"
            className="w-full h-full object-cover opacity-20"
          />

          <div className="absolute inset-0 bg-black/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <p className="uppercase tracking-[5px] text-primary mb-5">
              {isArabic ? "خدماتنا" : "Our Services"}
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">
              {isArabic ? (
                <>
                  كل ما تحتاجه
                  <span className="text-primary"> للبادل </span>
                </>
              ) : (
                <>
                  Everything You Need
                  <span className="text-primary"> For Padel </span>
                </>
              )}
            </h1>

            <p className="text-white/70 text-lg leading-8 max-w-3xl">
              {isArabic
                ? "من الملاعب الحديثة إلى البطولات والتدريب الاحترافي، نقدم تجربة متكاملة لعشاق البادل."
                : "From modern courts to tournaments and professional coaching, we provide a complete experience for padel lovers."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group bg-white/5 border border-white/10 rounded-[32px] p-10 hover:border-primary/40 hover:-translate-y-3 duration-500"
              >
                <div className="w-20 h-20 rounded-3xl bg-primary text-black flex items-center justify-center text-3xl mb-8 group-hover:rotate-6 duration-500">
                  {service.icon}
                </div>

                <h3 className="text-3xl font-black mb-5">
                  {service.title}
                </h3>

                <p className="text-white/70 leading-8">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TRAINING SECTION */}
      <section className="py-28 border-y border-white/10 bg-black">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070&auto=format&fit=crop"
              alt="Training"
              className="rounded-[40px] w-full h-[650px] object-cover"
            />

            <div className="absolute bottom-8 left-8 bg-primary text-black px-8 py-5 rounded-3xl">
              <h3 className="text-4xl font-black">24/7</h3>

              <p className="font-semibold">
                {isArabic ? "حجز متاح" : "Booking Available"}
              </p>
            </div>
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-[5px] text-primary mb-5">
              {isArabic ? "أكاديمية التدريب" : "Training Academy"}
            </p>

            <h2 className="text-4xl md:text-6xl font-black leading-tight mb-8">
              {isArabic
                ? "طور مهاراتك"
                : "Improve Your Game"}
            </h2>

            <p className="text-white/70 leading-8 mb-8">
              {isArabic
                ? "تدريبات فردية وجماعية مصممة لجميع المستويات بإشراف مدربين محترفين."
                : "Private and group training sessions designed for all skill levels with professional coaches."}
            </p>

            <div className="space-y-5 mb-10">
              {[
                isArabic
                  ? "مدربون محترفون"
                  : "Professional Coaches",

                isArabic
                  ? "برامج لجميع المستويات"
                  : "Programs For All Levels",

                isArabic
                  ? "جلسات فردية وجماعية"
                  : "Private & Group Sessions",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4"
                >
                  <div className="w-4 h-4 rounded-full bg-primary" />

                  <p className="text-white/80">{item}</p>
                </div>
              ))}
            </div>

            <Link
              to="/booking"
              className="bg-primary text-black px-8 py-4 rounded-full font-bold inline-flex hover:scale-105 duration-300"
            >
              {isArabic ? "احجز تدريبك" : "Book Your Session"}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-primary text-black rounded-[40px] p-14 md:p-20 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/20 blur-[120px]" />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black mb-6">
                {isArabic
                  ? "ابدأ رحلتك اليوم"
                  : "Start Your Journey Today"}
              </h2>

              <p className="max-w-2xl mx-auto text-black/70 text-lg leading-8 mb-10">
                {isArabic
                  ? "انضم إلى مجتمع البادل الأكثر حداثة في سوريا."
                  : "Join one of the most modern and energetic padel communities in Syria."}
              </p>

              <Link
                to="/booking"
                className="bg-black text-white px-10 py-5 rounded-full font-bold inline-flex hover:scale-105 duration-300"
              >
                {isArabic ? "احجز الآن" : "Book Now"}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Services;