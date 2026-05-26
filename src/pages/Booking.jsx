import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, MapPin, Zap, AlertCircle, CheckCircle, Flame, Moon, Sun } from "lucide-react";

import courtImg from "../assets/panoramic_court_light.png";
import smashImg from "../assets/padel_smash_light.png";
import racketImg from "../assets/padel_racket_light.png";

function Booking({ isArabic }) {
  const location = useLocation();
  
  // Pre-select court if navigated from home quick-selector
  const initialCourt = location.state?.selectedCourt || "panoramic";

  // State Variables
  const [selectedCourt, setSelectedCourt] = useState(initialCourt);
  const [selectedDate, setSelectedDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  });
  const [selectedShift, setSelectedShift] = useState("evening"); // morning or evening
  const [selectedSlot, setSelectedSlot] = useState(null);
  
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    notes: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  useEffect(() => {
    document.title = isArabic 
      ? "حجز الملاعب | ذا بادل هب طرطوس" 
      : "Book a Court | The Padel Hub Tartous";
    
    const metaDesc = document.querySelector('meta[name="description"]');
    const descText = isArabic 
      ? "احجز ملعب البادل المفضل لديك في طرطوس عبر الإنترنت. اختر من بين ملاعبنا البانورامية والكلية بالطاقة الشمسية."
      : "Book your preferred padel tennis court online in Tartous. Select from our panoramic indoor and outdoor courts.";
    if (metaDesc) {
      metaDesc.setAttribute("content", descText);
    }
  }, [isArabic]);

  // Courts Data
  const courts = [
    {
      id: "panoramic",
      nameAr: "الملعب البانورامي المغطى (1)",
      nameEn: "Panoramic Indoor Show Court (1)",
      specsAr: "مكيف بالكامل • عشب سوبر كورت • إضاءة ذكية",
      specsEn: "Fully Air Conditioned • Supercourt Turf • Smart Lighting",
      offPeakPrice: 75000,
      peakPrice: 100000,
      image: courtImg
    },
    {
      id: "classic",
      nameAr: "الملعب الكلاسيكي المغطى (2)",
      nameEn: "Classic Indoor Blue Court (2)",
      specsAr: "مكيف بالكامل • عشب أزرق معتمد • طاقة مستمرة",
      specsEn: "Fully Air Conditioned • Standard Blue Turf • Continuous Power",
      offPeakPrice: 65000,
      peakPrice: 85000,
      image: smashImg
    },
    {
      id: "outdoor",
      nameAr: "ملعب غروب الشمس الخارجي (3)",
      nameEn: "Sunset Coastal Outdoor Court (3)",
      specsAr: "إطلالة بحرية ساحرة • حماية ضد الرياح • كشافات ليلية",
      specsEn: "Coastal Sea View • Wind Protection • Pro Floodlights",
      offPeakPrice: 50000,
      peakPrice: 70000,
      image: racketImg
    }
  ];

  // Time Slots
  const morningSlots = ["06:00 AM", "07:30 AM", "09:00 AM", "10:30 AM"];
  const eveningSlots = ["04:00 PM", "05:30 PM", "07:00 PM", "08:30 PM", "10:00 PM", "11:30 PM"];

  const currentCourt = courts.find(c => c.id === selectedCourt) || courts[0];
  const activeSlots = selectedShift === "morning" ? morningSlots : eveningSlots;
  const currentPrice = selectedShift === "morning" ? currentCourt.offPeakPrice : currentCourt.peakPrice;

  // Handle Form Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  // Validate form
  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = isArabic ? "الاسم الكامل مطلوب" : "Full name is required";
    if (!formData.phone.trim()) {
      tempErrors.phone = isArabic ? "رقم الهاتف مطلوب" : "Phone number is required";
    } else if (!/^\+?[\d\s-]{7,15}$/.test(formData.phone)) {
      tempErrors.phone = isArabic ? "رقم الهاتف غير صالح" : "Invalid phone number";
    }
    if (!selectedSlot) tempErrors.slot = isArabic ? "يجب اختيار وقت اللعب" : "Please select a time slot";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Submit Booking Request
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate API reservation request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsConfirmed(true);
    }, 1500);
  };

  return (
    <div className="bg-[#FFFFFF] text-[#2C3E50] min-h-screen pt-[88px] md:pt-[100px] pb-24">
      
      {/* HEADER SECTION */}
      <section className="relative py-16 border-b border-[#2C3E50]/10 bg-slate-50">
        {/* Glow styling */}
        <div className="absolute top-0 right-10 w-[300px] h-[150px] bg-primary/10 blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <p className="uppercase tracking-[5px] text-[#2C3E50] font-black text-xs md:text-sm mb-4 bg-primary/30 px-3 py-1 rounded inline-block">
            {isArabic ? "الحجز الفوري" : "REAL-TIME RESERVATION"}
          </p>
          <h1 className="text-4xl md:text-6xl font-black italic uppercase leading-none text-stroke-dark mb-4">
            {isArabic ? (
              <>احجز <span className="text-[#2C3E50] bg-primary px-3 py-0.5 rounded shadow-neon text-stroke-none">ملعبك</span> الآن</>
            ) : (
              <>BOOK YOUR <span className="text-[#2C3E50] bg-primary px-3 py-0.5 rounded shadow-neon text-stroke-none">COURT</span> NOW</>
            )}
          </h1>
          <p className="text-[#2C3E50]/70 text-sm md:text-base max-w-2xl font-medium">
            {isArabic 
              ? "اختر ملعبك الاحترافي في فندق جونادا ووقت اللعب المناسب. نظام الطاقة الشمسية يضمن ملاعب ليلية مضيئة ومرافق تعمل دون أي انقطاع."
              : "Reserve your arena in Tartous at Hotel Junada. Full solar-powered backup secures consistent spotlights, ventilation, and social cafes."}
          </p>
        </div>
      </section>

      {/* BOOKING INTERFACE CONTAINER */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: COURT & SLOT SELECTORS (7 cols) */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* 1. COURT SELECTOR GRID */}
            <div className="space-y-6">
              <h3 className="text-xl md:text-2xl font-black italic uppercase flex items-center gap-2 text-[#2C3E50]">
                <span className="text-primary-dark bg-primary px-2 py-0.5 rounded shadow-neon">01.</span>
                <span>{isArabic ? "اختر الملعب" : "Select Arena"}</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {courts.map((court) => {
                  const isSelected = selectedCourt === court.id;
                  return (
                    <div
                      key={court.id}
                      onClick={() => {
                        setSelectedCourt(court.id);
                        setSelectedSlot(null); // Reset slot choice when court changes
                      }}
                      className={`group cursor-pointer rounded-2xl overflow-hidden border-2 bg-white transition-all duration-350 ${
                        isSelected 
                          ? "border-primary shadow-glass shadow-sm" 
                          : "border-dark/10 hover:border-primary/50"
                      }`}
                    >
                      <div className="h-32 relative overflow-hidden">
                        <img 
                          src={court.image} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                          alt={court.nameEn} 
                        />
                        <div className="absolute inset-0 bg-[#2C3E50]/10" />
                      </div>
                      <div className="p-4">
                        <h4 className={`font-black text-sm md:text-base transition-colors ${isSelected ? "text-primary-dark" : "text-[#2C3E50]"}`}>
                          {isArabic ? court.nameAr : court.nameEn}
                        </h4>
                        <p className="text-[#2C3E50]/70 text-[10px] md:text-xs mt-1.5 leading-tight font-semibold">
                          {isArabic ? court.specsAr : court.specsEn}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 2. DATE SELECTOR */}
            <div className="space-y-6">
              <h3 className="text-xl md:text-2xl font-black italic uppercase flex items-center gap-2 text-[#2C3E50]">
                <span className="text-primary-dark bg-primary px-2 py-0.5 rounded shadow-neon">02.</span>
                <span>{isArabic ? "تاريخ اللعب" : "Select Date"}</span>
              </h3>
              
              <div className="bg-white border border-dark/10 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-4 shadow-glass backdrop-blur-md">
                <Calendar className="w-6 h-6 text-[#2C3E50] flex-shrink-0" />
                <div className="w-full">
                  <label className="block text-xs text-[#2C3E50]/70 font-bold uppercase tracking-wider mb-2">
                    {isArabic ? "اختر اليوم" : "Booking Date"}
                  </label>
                  <input
                    type="date"
                    min={new Date().toISOString().split("T")[0]}
                    value={selectedDate}
                    onChange={(e) => {
                      setSelectedDate(e.target.value);
                      setSelectedSlot(null);
                    }}
                    className="w-full bg-slate-50 border border-dark/10 rounded-xl px-4 py-3 text-[#2C3E50] outline-none focus:border-primary focus:bg-white transition-all text-sm font-semibold"
                  />
                </div>
              </div>
            </div>

            {/* 3. SHIFT & TIME SLOT MATRIX */}
            <div className="space-y-6">
              <h3 className="text-xl md:text-2xl font-black italic uppercase flex items-center gap-2 text-[#2C3E50]">
                <span className="text-primary-dark bg-primary px-2 py-0.5 rounded shadow-neon">03.</span>
                <span>{isArabic ? "حصة اللعب والموعد" : "Select Shift & Time"}</span>
              </h3>

              <div className="bg-white border border-dark/10 rounded-2xl p-6 space-y-6 shadow-glass backdrop-blur-md">
                
                {/* Shift Tabs */}
                <div className="grid grid-cols-2 gap-4 border-b border-dark/10 pb-6">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedShift("morning");
                      setSelectedSlot(null);
                    }}
                    className={`flex items-center justify-center gap-2 py-3 rounded-xl font-black transition-all duration-300 border ${
                      selectedShift === "morning"
                        ? "bg-primary/20 border-primary text-[#2C3E50] shadow-sm"
                        : "border-dark/10 text-[#2C3E50]/70 hover:bg-slate-50"
                    }`}
                  >
                    <Sun className="w-4 h-4 text-primary-dark" />
                    <span>{isArabic ? "صباحية (مخفضة)" : "Morning (Off-Peak)"}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedShift("evening");
                      setSelectedSlot(null);
                    }}
                    className={`flex items-center justify-center gap-2 py-3 rounded-xl font-black transition-all duration-300 border ${
                      selectedShift === "evening"
                        ? "bg-primary/20 border-primary text-[#2C3E50] shadow-sm"
                        : "border-dark/10 text-[#2C3E50]/70 hover:bg-slate-50"
                    }`}
                  >
                    <Moon className="w-4 h-4 text-primary-dark" />
                    <span>{isArabic ? "مسائية (ذروة)" : "Evening (Peak Shift)"}</span>
                  </button>
                </div>

                {/* Slots Grid */}
                <div>
                  <label className="block text-xs text-[#2C3E50]/70 font-bold uppercase tracking-wider mb-4">
                    {isArabic ? "الساعات المتاحة (مدة الحجز: 90 دقيقة)" : "Available Slots (90-Min Playtime)"}
                  </label>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {activeSlots.map((slot) => {
                      const isSelected = selectedSlot === slot;
                      return (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setSelectedSlot(slot)}
                          className={`py-3.5 px-4 rounded-xl border text-sm font-black transition-all duration-300 flex items-center justify-between ${
                            isSelected
                              ? "bg-primary border-primary text-[#2C3E50] shadow-neon"
                              : "bg-slate-50 border-dark/10 text-[#2C3E50] hover:border-primary/50 hover:bg-white"
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 opacity-70" />
                            <span>{slot}</span>
                          </div>
                          {selectedShift === "evening" && !isSelected && (
                            <Flame className="w-3.5 h-3.5 text-primary fill-primary animate-pulse" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                  {errors.slot && (
                    <p className="text-red-500 text-xs mt-3 flex items-center gap-1 font-bold">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.slot}</span>
                    </p>
                  )}
                </div>

              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: BOOKING SUMMARY & PERSONAL FORM (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <h3 className="text-xl md:text-2xl font-black italic uppercase flex items-center gap-2 text-[#2C3E50]">
              <span className="text-primary-dark bg-primary px-2 py-0.5 rounded shadow-neon">04.</span>
              <span>{isArabic ? "ملخص الحجز والتأكيد" : "Checkout Summary"}</span>
            </h3>

            <div className="bg-white border border-dark/10 rounded-[30px] p-6 md:p-8 space-y-6 shadow-glass relative overflow-hidden">
              
              {/* Confirmed State Overlay */}
              <AnimatePresence>
                {isConfirmed && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-white/98 backdrop-blur-md z-30 p-8 flex flex-col items-center justify-center text-center rounded-[30px]"
                  >
                    <CheckCircle className="w-16 h-16 text-primary-dark bg-primary p-3 rounded-full mb-6 animate-bounce shadow-neon" />
                    <h3 className="text-2xl font-black italic uppercase mb-3 text-[#2C3E50]">
                      {isArabic ? "تم استلام طلب الحجز!" : "BOOKING RECEIVED!"}
                    </h3>
                    <p className="text-[#2C3E50]/70 text-sm mb-6 max-w-xs leading-relaxed font-semibold">
                      {isArabic
                        ? "شكراً لاختيارك ذا بادل هب. سيقوم فريقنا بمراجعة الجداول وتأكيد حجزك عبر الواتساب في غضون 10 دقائق."
                        : "Thank you for choosing The Padel Hub. Our operations team will verify slot availability and send WhatsApp confirmation within 10 minutes."}
                    </p>
                    <div className="bg-slate-50 border border-dark/10 rounded-2xl p-4 w-full text-left space-y-2 mb-6">
                      <div className="text-xs text-[#2C3E50]/55 font-bold">{isArabic ? "تفاصيل الطلب:" : "Requested details:"}</div>
                      <div className="text-xs font-black text-[#2C3E50]">{isArabic ? "الملعب:" : "Court:"} <span className="text-primary-dark bg-primary/20 px-2 py-0.5 rounded">{isArabic ? currentCourt.nameAr : currentCourt.nameEn}</span></div>
                      <div className="text-xs font-black text-[#2C3E50]">{isArabic ? "التاريخ:" : "Date:"} <span className="text-[#2C3E50]">{selectedDate}</span></div>
                      <div className="text-xs font-black text-[#2C3E50]">{isArabic ? "الوقت:" : "Time:"} <span className="text-primary-dark bg-primary/20 px-2 py-0.5 rounded">{selectedSlot}</span></div>
                      <div className="text-xs font-black text-[#2C3E50]">{isArabic ? "السعر الإجمالي:" : "Total Price:"} <span className="text-[#2C3E50] font-black">{currentPrice.toLocaleString()} SYP</span></div>
                    </div>
                    <button
                      onClick={() => {
                        setIsConfirmed(false);
                        setSelectedSlot(null);
                        setFormData({ name: "", phone: "", email: "", notes: "" });
                      }}
                      className="btn-primary py-3 px-8 text-sm"
                    >
                      {isArabic ? "حجز آخر" : "Book Another"}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* BOOKING SPECS DISPLAY */}
              <div className="border-b border-dark/10 pb-6 space-y-4">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <span className="text-xs text-[#2C3E50]/50 font-bold uppercase">{isArabic ? "الملعب المختار" : "SELECTED ARENA"}</span>
                    <h4 className="text-lg font-black italic text-[#2C3E50] mt-1">
                      {isArabic ? currentCourt.nameAr : currentCourt.nameEn}
                    </h4>
                  </div>
                  <span className="bg-primary/20 px-3 py-1 rounded-lg text-xs font-black uppercase tracking-wider flex-shrink-0 text-[#2C3E50]">
                    {selectedCourt}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="bg-slate-50 rounded-xl p-3 border border-dark/10">
                    <span className="text-[10px] text-[#2C3E50]/50 block font-bold uppercase">{isArabic ? "التاريخ" : "DATE"}</span>
                    <span className="text-xs font-black text-[#2C3E50] block mt-1">{selectedDate}</span>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-3 border border-dark/10">
                    <span className="text-[10px] text-[#2C3E50]/50 block font-bold uppercase">{isArabic ? "الوقت المختار" : "SLOT"}</span>
                    <span className="text-xs font-black text-primary-dark bg-primary/30 px-1.5 py-0.5 rounded block mt-1 text-center font-heading">
                      {selectedSlot ? selectedSlot : (isArabic ? "لم يحدد" : "Not Selected")}
                    </span>
                  </div>
                </div>
              </div>

              {/* DETAILS FORM */}
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Full Name */}
                <div>
                  <label className="block text-xs text-[#2C3E50]/70 font-bold uppercase tracking-wider mb-2">
                    {isArabic ? "الاسم الكامل" : "Full Name"}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={isArabic ? "أدخل اسمك الكامل" : "Enter your full name"}
                    className="w-full bg-slate-50 border border-dark/10 rounded-xl px-4 py-3 text-[#2C3E50] placeholder-dark/30 outline-none focus:border-primary focus:bg-white transition-all text-sm font-semibold"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1 font-bold">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs text-[#2C3E50]/70 font-bold uppercase tracking-wider mb-2">
                    {isArabic ? "رقم الهاتف (واتساب لتأكيد الحجز)" : "Phone Number (WhatsApp for confirmation)"}
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={isArabic ? "مثال: 0980130222" : "e.g. +963 980 130 222"}
                    className="w-full bg-slate-50 border border-dark/10 rounded-xl px-4 py-3 text-[#2C3E50] placeholder-dark/30 outline-none focus:border-primary focus:bg-white transition-all text-sm font-semibold"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1 font-bold">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>

                {/* Email (Optional) */}
                <div>
                  <label className="block text-xs text-[#2C3E50]/70 font-bold uppercase tracking-wider mb-2">
                    {isArabic ? "البريد الإلكتروني (اختياري)" : "Email Address (Optional)"}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="w-full bg-slate-50 border border-dark/10 rounded-xl px-4 py-3 text-[#2C3E50] placeholder-dark/30 outline-none focus:border-primary focus:bg-white transition-all text-sm font-semibold"
                  />
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-xs text-[#2C3E50]/70 font-bold uppercase tracking-wider mb-2">
                    {isArabic ? "ملاحظات إضافية" : "Additional Request"}
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows="3"
                    placeholder={isArabic ? "مثال: مضارب إضافية، تفضيل حجز مدرب..." : "e.g. Need extra rackets, coaching requested..."}
                    className="w-full bg-slate-50 border border-dark/10 rounded-xl px-4 py-3 text-[#2C3E50] placeholder-dark/30 outline-none focus:border-primary focus:bg-white transition-all text-sm resize-none font-semibold"
                  />
                </div>

                {/* DYNAMIC PRICE DISPLAY */}
                <div className="bg-slate-50 rounded-2xl p-5 border border-dark/10 mt-6 space-y-2">
                  <div className="flex justify-between items-center text-xs text-[#2C3E50]/55 font-bold uppercase">
                    <span>{isArabic ? "تسعيرة الفترة" : "Rate Category"}</span>
                    <span className="text-primary-dark bg-primary px-2 py-0.5 rounded font-black uppercase text-xs shadow-sm">
                      {selectedShift === "morning" ? (isArabic ? "صباحية مخفضة" : "Morning off-peak") : (isArabic ? "مسائية ذروة" : "Evening Peak")}
                    </span>
                  </div>
                  <div className="flex justify-between items-baseline pt-2">
                    <span className="text-sm font-black text-[#2C3E50]">{isArabic ? "إجمالي الحساب (90 دقيقة)" : "Total Due (90 min)"}</span>
                    <span className="text-2xl font-black text-[#2C3E50] italic font-heading">
                      {currentPrice.toLocaleString()} SYP
                    </span>
                  </div>
                </div>

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary py-4 mt-6 text-sm font-black flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <span>{isArabic ? "تأكيد الطلب الفوري" : "Request Instant Booking"}</span>
                  )}
                </button>

                {/* SOLAR POWER RELIABILITY STAMP */}
                <div className="text-center pt-2 flex items-center justify-center gap-2 text-[10px] text-[#2C3E50]/50 font-bold">
                  <Zap className="w-3.5 h-3.5 text-primary-dark fill-primary animate-pulse" />
                  <span>{isArabic ? "جلسة بادل مضمنة بطاقة شمسية كاملة 24/7" : "Session backed 24/7 by continuous solar power"}</span>
                </div>

              </form>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Booking;