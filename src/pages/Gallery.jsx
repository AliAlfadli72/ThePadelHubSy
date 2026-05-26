import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, Eye, Trophy, Layers, Sparkles, Dumbbell, Coffee } from "lucide-react";

import courtImg from "../assets/panoramic_court_light.png";
import smashImg from "../assets/padel_smash_light.png";
import racketImg from "../assets/padel_racket_light.png";
import loungeImg from "../assets/sports_lounge_light.png";

function Gallery({ isArabic }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    document.title = isArabic 
      ? "معرض الصور | ذا بادل هب طرطوس" 
      : "Photo Gallery | The Padel Hub Tartous";
    
    const metaDesc = document.querySelector('meta[name="description"]');
    const descText = isArabic 
      ? "تصفح ألبوم صور ذا بادل هب طرطوس. ملاعب عالمية، بطولات حماسية، تدريبات أكاديمية، وأجواء اجتماعية فاخرة."
      : "Browse The Padel Hub Tartous photo album. World-class courts, exciting tournaments, training academies, and luxurious social atmospheres.";
    if (metaDesc) {
      metaDesc.setAttribute("content", descText);
    }
  }, [isArabic]);

  // Gallery items with varying sizes to generate an authentic masonry layout
  const galleryItems = [
    {
      id: 1,
      image: courtImg,
      category: "courts",
      titleAr: "الملعب البانورامي المغطى",
      titleEn: "Panoramic Indoor Show Court",
      aspect: "aspect-[4/3]"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?q=80&w=800&auto=format&fit=crop",
      category: "tournaments",
      titleAr: "نهائيات بطولة الساحل الأولى",
      titleEn: "Coastal Championship Finals",
      aspect: "aspect-[3/4]"
    },
    {
      id: 3,
      image: smashImg,
      category: "academy",
      titleAr: "تدريبات الأكاديمية الصباحية",
      titleEn: "Morning Academy Drill Session",
      aspect: "aspect-square"
    },
    {
      id: 4,
      image: racketImg,
      category: "courts",
      titleAr: "مضارب الكربون الرسمية للهب",
      titleEn: "Official Hub Carbon Rackets",
      aspect: "aspect-[3/4]"
    },
    {
      id: 5,
      image: loungeImg,
      category: "lounge",
      titleAr: "لاونج الاستراحة والقهوة المختصة",
      titleEn: "Social Lounge Specialty Cafe",
      aspect: "aspect-[4/3]"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=800&auto=format&fit=crop",
      category: "academy",
      titleAr: "جلسة تدريب فردي مع المدرب",
      titleEn: "1-on-1 Session with Coach",
      aspect: "aspect-[3/4]"
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=800&auto=format&fit=crop",
      category: "tournaments",
      titleAr: "تتويج رابحي الدوري الصيفي",
      titleEn: "Summer League Winners Awarding",
      aspect: "aspect-square"
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?q=80&w=800&auto=format&fit=crop",
      category: "lounge",
      titleAr: "أجواء وتواصل مجتمعي بعد اللعب",
      titleEn: "Post-Match Player Community",
      aspect: "aspect-[4/3]"
    }
  ];

  const categories = [
    { id: "all", labelAr: "الكل", labelEn: "All Shots", icon: <Layers className="w-4 h-4" /> },
    { id: "courts", labelAr: "الملاعب", labelEn: "Our Courts", icon: <Sparkles className="w-4 h-4" /> },
    { id: "tournaments", labelAr: "البطولات", labelEn: "Tournaments", icon: <Trophy className="w-4 h-4" /> },
    { id: "academy", labelAr: "الأكاديمية", labelEn: "Academy", icon: <Dumbbell className="w-4 h-4" /> },
    { id: "lounge", labelAr: "اللاونج", labelEn: "The Lounge", icon: <Coffee className="w-4 h-4" /> }
  ];

  const filteredItems = activeCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="bg-[#FFFFFF] text-[#2C3E50] min-h-screen pt-[88px] md:pt-[100px] pb-24">
      
      {/* HERO */}
      <section className="relative py-16 border-b border-dark/10 bg-slate-50">
        <div className="absolute top-0 right-1/3 w-[300px] h-[150px] bg-primary/10 blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <p className="uppercase tracking-[5px] text-[#2C3E50] font-black text-xs md:text-sm mb-4 bg-primary/30 px-3 py-1 rounded inline-block shadow-sm">
            {isArabic ? "ألبوم الصور" : "VISUAL EXPERIENCE"}
          </p>
          <h1 className="text-4xl md:text-6xl font-black italic uppercase leading-none text-stroke-dark">
            {isArabic ? (
              <>معرض <span className="text-[#2C3E50] bg-primary px-3 py-0.5 rounded shadow-neon text-stroke-none">لحظات</span> اللعب</>
            ) : (
              <>MOMENTS OF <span className="text-[#2C3E50] bg-primary px-3 py-0.5 rounded shadow-neon text-stroke-none">THE GAME</span></>
            )}
          </h1>
          <p className="text-[#2C3E50]/70 text-sm md:text-base mt-4 max-w-2xl font-semibold">
            {isArabic 
              ? "تصفح لقطات حية وتفاصيل معمارية وثقناها لملاعبنا، بطولاتنا التنافسية، وحصص التدريب الاحترافية في طرطوس."
              : "Step into our world. A curated collection of action freeze-frames, court architecture, and high-energy social tournaments."}
          </p>
        </div>
      </section>

      {/* FILTER TABS */}
      <section className="py-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-start lg:justify-center gap-3 border-b border-dark/10 pb-8">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-black text-sm transition-all duration-300 border ${
                  isActive
                    ? "bg-primary border-primary text-[#2C3E50] shadow-neon"
                    : "bg-slate-50 border-dark/10 text-[#2C3E50]/75 hover:border-primary hover:bg-white"
                }`}
              >
                {cat.icon}
                <span>{isArabic ? cat.labelAr : cat.labelEn}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* EDITORIAL MASONRY GRID */}
      <section className="max-w-7xl mx-auto px-6 py-6">
        <motion.div 
          layout
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedImage(item)}
                className={`break-inside-avoid relative rounded-[28px] overflow-hidden border border-dark/10 bg-white group cursor-pointer shadow-glass hover:border-primary transition-all duration-300 ${item.aspect}`}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={isArabic ? item.titleAr : item.titleEn}
                  className="w-full h-full object-cover group-hover:scale-[1.04] transition-all duration-700 ease-out"
                  loading="lazy"
                />

                {/* Cover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/10 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300" />

                {/* Info Card on Hover */}
                <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-left">
                    <span className="text-[10px] text-primary-dark font-black bg-primary px-2 py-0.5 rounded uppercase tracking-widest block mb-1.5 w-fit">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-black italic uppercase leading-tight text-[#2C3E50]">
                      {isArabic ? item.titleAr : item.titleEn}
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-[#2C3E50] text-white flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Eye className="w-5 h-5 text-primary" />
                  </div>
                </div>

                {/* Quick zoom icon top right */}
                <div className="absolute top-4 right-4 p-2 bg-white/70 backdrop-blur-md rounded-lg border border-dark/10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-4 h-4 text-[#2C3E50]" />
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* FULL-SCREEN LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-white/95 backdrop-blur-md flex flex-col items-center justify-center p-6"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-xl bg-slate-100 border border-dark/10 hover:border-primary flex items-center justify-center hover:bg-primary hover:text-black transition-all duration-300 shadow-sm"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6 text-[#2C3E50]" />
            </button>

            {/* Lightbox Media Frame */}
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: "spring", damping: 25 }}
              className="max-w-5xl w-full max-h-[75vh] rounded-[30px] overflow-hidden border border-dark/10 shadow-glass bg-white relative"
            >
              <img
                src={selectedImage.image}
                alt={isArabic ? selectedImage.titleAr : selectedImage.titleEn}
                className="w-full h-full object-contain max-h-[75vh] mx-auto"
              />
            </motion.div>

            {/* Lightbox Caption */}
            <div className="mt-8 text-center max-w-xl">
              <span className="text-xs text-primary-dark bg-primary px-3 py-1 rounded font-black uppercase tracking-widest inline-block">
                {selectedImage.category}
              </span>
              <h2 className="text-2xl md:text-3xl font-black italic uppercase mt-2 mb-2 text-[#2C3E50]">
                {isArabic ? selectedImage.titleAr : selectedImage.titleEn}
              </h2>
              <div className="w-12 h-1 bg-primary mx-auto rounded-full mt-3 shadow-neon" />
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

export default Gallery;