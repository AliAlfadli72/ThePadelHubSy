import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MapPin, Mail, Send, AlertCircle, CheckCircle, Zap } from "lucide-react";
import { FaInstagram as Instagram } from "react-icons/fa";

function Contact({ isArabic }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  useEffect(() => {
    document.title = isArabic 
      ? "اتصل بنا | ذا بادل هب طرطوس" 
      : "Contact Us | The Padel Hub Tartous";
    
    const metaDesc = document.querySelector('meta[name="description"]');
    const descText = isArabic 
      ? "اتصل بذا بادل هب سوريا. احصل على أرقام هواتف الحجز الفوري وموقعنا الجغرافي بفندق جونادا بطرطوس."
      : "Get in touch with The Padel Hub Syria. Find reservation phone numbers and our geographic coordinates inside Hotel Junada, Tartous.";
    if (metaDesc) {
      metaDesc.setAttribute("content", descText);
    }
  }, [isArabic]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = isArabic ? "الاسم الكامل مطلوب" : "Full name is required";
    if (!formData.message.trim()) tempErrors.message = isArabic ? "محتوى الرسالة مطلوب" : "Message content is required";
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = isArabic ? "البريد الإلكتروني غير صالح" : "Invalid email address";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate contact form dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <div className="bg-[#FFFFFF] text-[#2C3E50] min-h-screen pt-[88px] md:pt-[100px] pb-24">
      
      {/* HERO */}
      <section className="relative py-16 border-b border-dark/10 bg-slate-50">
        <div className="absolute top-0 right-1/4 w-[300px] h-[150px] bg-primary/10 blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <p className="uppercase tracking-[5px] text-[#2C3E50] font-black text-xs md:text-sm mb-4 bg-primary/30 px-3 py-1 rounded inline-block shadow-sm">
            {isArabic ? "اتصل بنا" : "GET IN TOUCH"}
          </p>
          <h1 className="text-4xl md:text-6xl font-black italic uppercase leading-none text-stroke-dark">
            {isArabic ? (
              <>تواصل مع <span className="text-[#2C3E50] bg-primary px-3 py-0.5 rounded shadow-neon text-stroke-none">إدارة</span> الهب</>
            ) : (
              <>CONNECT WITH <span className="text-[#2C3E50] bg-primary px-3 py-0.5 rounded shadow-neon text-stroke-none">THE HUB</span></>
            )}
          </h1>
          <p className="text-[#2C3E50]/70 text-sm md:text-base mt-4 max-w-2xl font-semibold">
            {isArabic 
              ? "هل لديك استفسار عن الاشتراكات، تدريبات الأكاديمية أو تنظيم البطولات؟ تواصل معنا فوراً وسيقوم فريقنا بمساعدتك."
              : "Have queries about memberships, corporate events, or professional academy programs? Message us directly."}
          </p>
        </div>
      </section>

      {/* CONTACT INFO & FORM SECTION (Asymmetric split) */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: CONTACT FORM (60% width equivalent) */}
          <div className="lg:col-span-7 bg-[#FFFFFF] border border-dark/15 rounded-[35px] p-6 md:p-10 shadow-glass relative overflow-hidden">
            
            <h3 className="text-2xl font-black italic uppercase mb-6 flex items-center gap-2 text-[#2C3E50]">
              <span>{isArabic ? "أرسل رسالة إلكترونية" : "Send Email Query"}</span>
            </h3>

            <AnimatePresence>
              {isSent && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="bg-primary/20 border border-primary/50 text-[#2C3E50] rounded-2xl p-5 flex items-start gap-3 mb-6 shadow-sm"
                >
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-primary-dark" />
                  <div>
                    <h4 className="font-black text-sm">{isArabic ? "تم إرسال رسالتك بنجاح!" : "Message Sent Successfully!"}</h4>
                    <p className="text-xs text-[#2C3E50]/70 mt-1 font-semibold">
                      {isArabic 
                        ? "شكراً لتواصلك. سنقوم بالرد على استفسارك في أقرب وقت ممكن عبر بريدك الإلكتروني." 
                        : "Thank you for reaching out. Our administration team will review your ticket and reply shortly."}
                    </p>
                  </div>
                  <button onClick={() => setIsSent(false)} className="text-xs font-black uppercase text-[#2C3E50]/50 hover:text-[#2C3E50] ml-auto">
                    {isArabic ? "إغلاق" : "Dismiss"}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-5">
              
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
                  className="w-full bg-slate-50 border border-dark/10 rounded-xl px-4 py-3.5 text-[#2C3E50] placeholder-dark/30 outline-none focus:border-primary focus:bg-white transition-all text-sm font-semibold"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1 font-bold">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs text-[#2C3E50]/70 font-bold uppercase tracking-wider mb-2">
                  {isArabic ? "البريد الإلكتروني" : "Email Address"}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className="w-full bg-slate-50 border border-dark/10 rounded-xl px-4 py-3.5 text-[#2C3E50] placeholder-dark/30 outline-none focus:border-primary focus:bg-white transition-all text-sm font-semibold"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1 font-bold">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>

              {/* Subject */}
              <div>
                <label className="block text-xs text-[#2C3E50]/70 font-bold uppercase tracking-wider mb-2">
                  {isArabic ? "الموضوع" : "Subject"}
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder={isArabic ? "ما هو موضوع رسالتك؟" : "What is this query about?"}
                  className="w-full bg-slate-50 border border-dark/10 rounded-xl px-4 py-3.5 text-[#2C3E50] placeholder-dark/30 outline-none focus:border-primary focus:bg-white transition-all text-sm font-semibold"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs text-[#2C3E50]/70 font-bold uppercase tracking-wider mb-2">
                  {isArabic ? "الرسالة" : "Your Message"}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder={isArabic ? "اكتب استفسارك بالتفصيل هنا..." : "Explain your request in detail..."}
                  className="w-full bg-slate-50 border border-dark/10 rounded-xl px-4 py-3.5 text-[#2C3E50] placeholder-dark/30 outline-none focus:border-primary focus:bg-white transition-all text-sm resize-none font-semibold"
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1 font-bold">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary py-4 text-sm font-black flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <span>{isArabic ? "إرسال الاستفسار" : "Dispatch Message"}</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

            </form>
          </div>

          {/* RIGHT: CONTACT INFORMATION CARDS (40% width equivalent) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Phone Card */}
            <div className="bg-[#FFFFFF] border border-dark/10 rounded-2xl p-6 flex items-start gap-4 hover:border-primary transition-all duration-300 shadow-glass">
              <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/40 text-primary-dark flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-xs uppercase text-[#2C3E50]/50">{isArabic ? "رقم الهاتف والحجز" : "RESERVATION PHONE"}</h4>
                <a href="tel:+963980130222" className="block text-lg font-black italic mt-1 text-[#2C3E50] hover:text-[#2C3E50]/80 transition-colors">
                  {isArabic ? "٠٩٨٠١٣٠٢٢٢" : "+963 980 130 222"}
                </a>
                <p className="text-[#2C3E50]/55 text-[10px] mt-1 font-bold">
                  {isArabic ? "اتصال أو واتساب للحجز الفوري والتأكيد" : "WhatsApp or call for priority verification"}
                </p>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-[#FFFFFF] border border-dark/10 rounded-2xl p-6 flex items-start gap-4 hover:border-primary transition-all duration-300 shadow-glass">
              <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/40 text-primary-dark flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-xs uppercase text-[#2C3E50]/50">{isArabic ? "البريد الإلكتروني للإدارة" : "ADMIN SUPPORT EMAIL"}</h4>
                <a href="mailto:info@thepadelhub.sy" className="block text-lg font-black italic mt-1 text-[#2C3E50] hover:text-[#2C3E50]/80 transition-colors">
                  info@thepadelhub.sy
                </a>
              </div>
            </div>

            {/* Address Card */}
            <div className="bg-[#FFFFFF] border border-dark/10 rounded-2xl p-6 flex items-start gap-4 hover:border-primary transition-all duration-300 shadow-glass">
              <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/40 text-primary-dark flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-xs uppercase text-[#2C3E50]/50">{isArabic ? "الموقع الجغرافي" : "FACILITY LOCATION"}</h4>
                <span className="block text-base font-black italic mt-1 text-[#2C3E50]">
                  {isArabic ? "فندق جونادا، طرطوس، سوريا" : "Hotel Junada, Tartous, Syria"}
                </span>
              </div>
            </div>

            {/* Instagram Card */}
            <div className="bg-[#FFFFFF] border border-dark/10 rounded-2xl p-6 flex items-start gap-4 hover:border-primary transition-all duration-300 shadow-glass">
              <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/40 text-primary-dark flex items-center justify-center flex-shrink-0">
                <Instagram className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-xs uppercase text-[#2C3E50]/50">{isArabic ? "إنستغرام النادي" : "OFFICIAL INSTAGRAM"}</h4>
                <a href="https://instagram.com/thepadelhub.sy" target="_blank" rel="noopener noreferrer" className="block text-lg font-black italic mt-1 text-[#2C3E50] hover:text-[#2C3E50]/80 transition-colors">
                  @thepadelhub.sy
                </a>
              </div>
            </div>

            {/* Solar backup powered notice */}
            <div className="border border-primary bg-primary/10 rounded-[24px] p-6 text-center space-y-2 shadow-sm">
              <Zap className="w-8 h-8 text-primary-dark mx-auto animate-pulse" />
              <h4 className="text-sm font-black italic text-[#2C3E50] uppercase">{isArabic ? "جاهزون للاتصال واللعب 24/7" : "Always Powered 24/7"}</h4>
              <p className="text-[#2C3E50]/70 text-xs font-semibold">
                {isArabic 
                  ? "شبكة الطاقة الشمسية تضمن استمرارية خدمات الإدارة والرد على الحجوزات طوال اليوم دون توقف." 
                  : "Solar backup arrays power our operations room and checkout terminals around the clock."}
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* LOCALIZED GOOGLE MAPS EMBED */}
      <section className="max-w-7xl mx-auto px-6 pt-10">
        <div className="rounded-[35px] overflow-hidden border border-dark/15 shadow-glass relative aspect-[21/9] min-h-[300px]">
          <iframe
            title="Padel Hub Location at Hotel Junada"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.431057404561!2d35.8798!3d34.9081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15217983636f4521%3A0xe5c4a52ff37c7689!2sJunada%20Hotel!5e0!3m2!1sen!2ssy!4v1716752000000!5m2!1sen!2ssy"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "grayscale(0.4) contrast(1.1)" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 w-full h-full"
          />
        </div>
      </section>

    </div>
  );
}

export default Contact;