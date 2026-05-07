import { motion } from "framer-motion";

function Gallery({ isArabic }) {
  const galleryImages = [
    {
      image:
        "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070&auto=format&fit=crop",
      title: isArabic ? "ملاعب احترافية" : "Professional Courts",
    },

    {
      image:
        "https://images.unsplash.com/photo-1547347298-4074fc3086f0?q=80&w=1974&auto=format&fit=crop",
      title: isArabic ? "بطولات قوية" : "Competitive Tournaments",
    },

    {
      image:
        "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=1974&auto=format&fit=crop",
      title: isArabic ? "مجتمع رياضي" : "Sports Community",
    },

    {
      image:
        "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=2070&auto=format&fit=crop",
      title: isArabic ? "تجربة حديثة" : "Modern Experience",
    },

    {
      image:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1974&auto=format&fit=crop",
      title: isArabic ? "طاقة وحماس" : "Energy & Passion",
    },

    {
      image:
        "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?q=80&w=1974&auto=format&fit=crop",
      title: isArabic ? "فعاليات مميزة" : "Special Events",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative py-32 border-b border-white/10">
        {/* BG */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?q=80&w=2070&auto=format&fit=crop"
            alt="Gallery Hero"
            className="w-full h-full object-cover opacity-20"
          />

          <div className="absolute inset-0 bg-black/80" />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <p className="uppercase tracking-[5px] text-primary mb-5">
              {isArabic ? "المعرض" : "Gallery"}
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">
              {isArabic ? (
                <>
                  لحظات من
                  <span className="text-primary"> البادل </span>
                </>
              ) : (
                <>
                  Moments Of
                  <span className="text-primary"> Padel </span>
                </>
              )}
            </h1>

            <p className="text-white/70 text-lg leading-8 max-w-3xl">
              {isArabic
                ? "استكشف أجواء The Padel Hub من خلال صور الملاعب، البطولات، والفعاليات المميزة."
                : "Explore The Padel Hub atmosphere through courts, tournaments, and unforgettable events."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {galleryImages.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-[35px] border border-white/10"
              >
                {/* IMAGE */}
                <div className="h-[450px] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 duration-700"
                  />
                </div>

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                {/* TEXT */}
                <div className="absolute bottom-0 left-0 p-8">
                  <h2 className="text-3xl font-black mb-3">
                    {item.title}
                  </h2>

                  <div className="w-16 h-1 bg-primary rounded-full" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="py-28 border-y border-white/10 bg-black">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-[5px] text-primary mb-5">
              {isArabic ? "التجربة" : "The Experience"}
            </p>

            <h2 className="text-4xl md:text-6xl font-black leading-tight mb-8">
              {isArabic
                ? "أجواء لا تُنسى"
                : "An Unforgettable Atmosphere"}
            </h2>

            <p className="text-white/70 leading-8 mb-8">
              {isArabic
                ? "من المباريات الليلية إلى الفعاليات الاجتماعية، نصنع تجربة رياضية حديثة مليئة بالطاقة والحياة."
                : "From night matches to social events, we create a modern sports experience full of energy and lifestyle."}
            </p>

            <div className="space-y-5">
              {[
                isArabic
                  ? "ملاعب حديثة"
                  : "Modern Courts",

                isArabic
                  ? "إضاءة احترافية"
                  : "Professional Lighting",

                isArabic
                  ? "فعاليات وبطولات"
                  : "Events & Tournaments",
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
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1974&auto=format&fit=crop"
              alt="Padel Experience"
              className="rounded-[40px] h-[650px] object-cover w-full"
            />

            <div className="absolute -bottom-10 -left-10 bg-primary text-black p-8 rounded-3xl">
              <h3 className="text-5xl font-black">24/7</h3>

              <p className="font-semibold mt-2">
                {isArabic ? "أجواء مستمرة" : "Always Active"}
              </p>
            </div>
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
            className="bg-primary rounded-[40px] p-14 md:p-20 text-center text-black relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/20 blur-[120px]" />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black mb-6">
                {isArabic
                  ? "اصنع لحظتك القادمة"
                  : "Create Your Next Moment"}
              </h2>

              <p className="max-w-2xl mx-auto text-black/70 text-lg leading-8 mb-10">
                {isArabic
                  ? "انضم إلى مجتمع البادل الأكثر تطوراً في سوريا."
                  : "Join one of the most exciting modern padel communities in Syria."}
              </p>

              <button className="bg-black text-white px-10 py-5 rounded-full font-bold hover:scale-105 duration-300">
                {isArabic ? "احجز الآن" : "Book Now"}
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Gallery;