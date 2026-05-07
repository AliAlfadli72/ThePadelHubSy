import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

function Contact({ isArabic }) {
  const contactInfo = [
    {
      icon: <FaPhoneAlt />,
      title: isArabic ? "رقم الهاتف" : "Phone Number",
      value: "+963 980 130 222",
    },

    {
      icon: <FaInstagram />,
      title: isArabic ? "إنستغرام" : "Instagram",
      value: "@thepadelhub.sy",
    },

    {
      icon: <FaMapMarkerAlt />,
      title: isArabic ? "الموقع" : "Location",
      value: isArabic
        ? "فندق جونادا - طرطوس - سوريا"
        : "Hotel Junada - Tartous - Syria",
    },

    {
      icon: <FaEnvelope />,
      title: isArabic ? "البريد الإلكتروني" : "Email",
      value: "info@thepadelhub.sy",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative py-32 border-b border-white/10">
        {/* BG */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=2070&auto=format&fit=crop"
            alt="Contact"
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
              {isArabic ? "تواصل معنا" : "Get In Touch"}
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">
              {isArabic ? (
                <>
                  دعنا
                  <span className="text-primary"> نتحدث </span>
                </>
              ) : (
                <>
                  Let's
                  <span className="text-primary"> Connect </span>
                </>
              )}
            </h1>

            <p className="text-white/70 text-lg leading-8 max-w-3xl">
              {isArabic
                ? "نحن هنا للإجابة على جميع استفساراتك ومساعدتك في حجز أفضل تجربة بادل في سوريا."
                : "We are here to answer all your questions and help you book the best padel experience in Syria."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-[5px] text-primary mb-5">
              {isArabic ? "معلومات التواصل" : "Contact Information"}
            </p>

            <h2 className="text-4xl md:text-6xl font-black leading-tight mb-8">
              {isArabic
                ? "تواصل معنا بسهولة"
                : "Reach Us Easily"}
            </h2>

            <p className="text-white/70 leading-8 mb-12">
              {isArabic
                ? "يمكنك التواصل معنا عبر الهاتف أو وسائل التواصل الاجتماعي أو زيارة موقعنا مباشرة."
                : "Contact us through phone, social media, or visit our location directly."}
            </p>

            {/* INFO CARDS */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-5 bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-primary/40 duration-300"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary text-black flex items-center justify-center text-2xl">
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-1">
                      {item.title}
                    </h3>

                    <p className="text-white/70">
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-[40px] p-8 md:p-10"
          >
            <h3 className="text-3xl font-black mb-8">
              {isArabic ? "أرسل رسالة" : "Send a Message"}
            </h3>

            <div className="space-y-6">
              {/* NAME */}
              <div>
                <label className="block mb-3 text-white/70">
                  {isArabic ? "الاسم الكامل" : "Full Name"}
                </label>

                <input
                  type="text"
                  placeholder={
                    isArabic
                      ? "أدخل اسمك الكامل"
                      : "Enter your full name"
                  }
                  className="w-full bg-black border border-white/10 p-4 rounded-2xl outline-none focus:border-primary duration-300"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="block mb-3 text-white/70">
                  {isArabic ? "البريد الإلكتروني" : "Email"}
                </label>

                <input
                  type="email"
                  placeholder={
                    isArabic
                      ? "أدخل بريدك الإلكتروني"
                      : "Enter your email"
                  }
                  className="w-full bg-black border border-white/10 p-4 rounded-2xl outline-none focus:border-primary duration-300"
                />
              </div>

              {/* SUBJECT */}
              <div>
                <label className="block mb-3 text-white/70">
                  {isArabic ? "الموضوع" : "Subject"}
                </label>

                <input
                  type="text"
                  placeholder={
                    isArabic
                      ? "أدخل الموضوع"
                      : "Enter subject"
                  }
                  className="w-full bg-black border border-white/10 p-4 rounded-2xl outline-none focus:border-primary duration-300"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label className="block mb-3 text-white/70">
                  {isArabic ? "الرسالة" : "Message"}
                </label>

                <textarea
                  rows="6"
                  placeholder={
                    isArabic
                      ? "اكتب رسالتك هنا..."
                      : "Write your message here..."
                  }
                  className="w-full bg-black border border-white/10 p-4 rounded-2xl outline-none focus:border-primary duration-300 resize-none"
                />
              </div>
            </div>

            {/* BUTTON */}
            <button className="w-full mt-8 bg-primary text-black py-5 rounded-2xl font-black text-lg hover:scale-[1.02] duration-300">
              {isArabic ? "إرسال الرسالة" : "Send Message"}
            </button>
          </motion.div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="rounded-[40px] overflow-hidden border border-white/10"
          >
            <iframe
              title="Padel Hub Location"
              src="https://www.google.com/maps/embed?pb=!1m18"
              width="100%"
              height="500"
              allowFullScreen=""
              loading="lazy"
              className="w-full"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Contact;