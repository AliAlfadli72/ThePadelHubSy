import { motion } from "framer-motion";
import { FaCalendarAlt, FaClock, FaUsers } from "react-icons/fa";

function Booking({ isArabic }) {
  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative py-32 border-b border-white/10">
        {/* BG */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?q=80&w=2070&auto=format&fit=crop"
            alt="Booking"
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
              {isArabic ? "الحجز" : "Booking"}
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">
              {isArabic ? (
                <>
                  احجز
                  <span className="text-primary"> ملعبك </span>
                  الآن
                </>
              ) : (
                <>
                  Book Your
                  <span className="text-primary"> Court </span>
                  Now
                </>
              )}
            </h1>

            <p className="text-white/70 text-lg leading-8 max-w-3xl">
              {isArabic
                ? "احجز ملعب البادل الخاص بك بسهولة واستمتع بأجواء رياضية حديثة وتجربة استثنائية."
                : "Reserve your padel court easily and enjoy a premium modern sports experience."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* BOOKING FORM */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-[5px] text-primary mb-5">
              {isArabic ? "نموذج الحجز" : "Booking Form"}
            </p>

            <h2 className="text-4xl md:text-6xl font-black leading-tight mb-8">
              {isArabic
                ? "ابدأ تجربتك"
                : "Start Your Experience"}
            </h2>

            <p className="text-white/70 leading-8 mb-10">
              {isArabic
                ? "قم بإدخال معلومات الحجز الخاصة بك وسيتم التواصل معك لتأكيد الحجز."
                : "Fill in your booking information and our team will contact you to confirm your reservation."}
            </p>

            {/* FEATURES */}
            <div className="space-y-6">
              {[
                {
                  icon: <FaCalendarAlt />,
                  title: isArabic
                    ? "حجز مرن"
                    : "Flexible Scheduling",
                },

                {
                  icon: <FaClock />,
                  title: isArabic
                    ? "دعم سريع"
                    : "Fast Confirmation",
                },

                {
                  icon: <FaUsers />,
                  title: isArabic
                    ? "للأفراد والمجموعات"
                    : "For Individuals & Groups",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-5 bg-white/5 border border-white/10 rounded-2xl p-5"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary text-black flex items-center justify-center text-xl">
                    {item.icon}
                  </div>

                  <h3 className="text-xl font-bold">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-[40px] p-8 md:p-10"
          >
            <div className="grid md:grid-cols-2 gap-6">
              {/* NAME */}
              <div className="md:col-span-2">
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

              {/* PHONE */}
              <div>
                <label className="block mb-3 text-white/70">
                  {isArabic ? "رقم الهاتف" : "Phone Number"}
                </label>

                <input
                  type="text"
                  placeholder={
                    isArabic
                      ? "أدخل رقم الهاتف"
                      : "Enter phone number"
                  }
                  className="w-full bg-black border border-white/10 p-4 rounded-2xl outline-none focus:border-primary duration-300"
                />
              </div>

              {/* DATE */}
              <div>
                <label className="block mb-3 text-white/70">
                  {isArabic ? "التاريخ" : "Date"}
                </label>

                <input
                  type="date"
                  className="w-full bg-black border border-white/10 p-4 rounded-2xl outline-none focus:border-primary duration-300"
                />
              </div>

              {/* TIME */}
              <div>
                <label className="block mb-3 text-white/70">
                  {isArabic ? "الوقت" : "Time"}
                </label>

                <input
                  type="time"
                  className="w-full bg-black border border-white/10 p-4 rounded-2xl outline-none focus:border-primary duration-300"
                />
              </div>

              {/* PLAYERS */}
              <div>
                <label className="block mb-3 text-white/70">
                  {isArabic
                    ? "عدد اللاعبين"
                    : "Number of Players"}
                </label>

                <select className="w-full bg-black border border-white/10 p-4 rounded-2xl outline-none focus:border-primary duration-300">
                  <option>
                    {isArabic ? "اختر" : "Select"}
                  </option>

                  <option>2</option>
                  <option>4</option>
                </select>
              </div>

              {/* TYPE */}
              <div>
                <label className="block mb-3 text-white/70">
                  {isArabic ? "نوع الحجز" : "Booking Type"}
                </label>

                <select className="w-full bg-black border border-white/10 p-4 rounded-2xl outline-none focus:border-primary duration-300">
                  <option>
                    {isArabic ? "اختر" : "Select"}
                  </option>

                  <option>
                    {isArabic ? "تدريب" : "Training"}
                  </option>

                  <option>
                    {isArabic ? "مباراة" : "Match"}
                  </option>
                </select>
              </div>

              {/* NOTES */}
              <div className="md:col-span-2">
                <label className="block mb-3 text-white/70">
                  {isArabic ? "ملاحظات إضافية" : "Additional Notes"}
                </label>

                <textarea
                  rows="5"
                  placeholder={
                    isArabic
                      ? "اكتب ملاحظاتك هنا..."
                      : "Write your notes here..."
                  }
                  className="w-full bg-black border border-white/10 p-4 rounded-2xl outline-none focus:border-primary duration-300 resize-none"
                />
              </div>
            </div>

            {/* BUTTON */}
            <button className="w-full mt-8 bg-primary text-black py-5 rounded-2xl font-black text-lg hover:scale-[1.02] duration-300">
              {isArabic ? "إرسال الطلب" : "Submit Booking"}
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Booking;