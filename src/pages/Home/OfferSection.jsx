import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../context/ThemeContext/ThemeContext";

const OfferSection = () => {
  const { isDark } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState("hint"); // hint | loading | success

  const confirmClaim = () => {
    setStep("loading");
    setTimeout(() => {
      setStep("success");
    }, 2000);
  };

  const closeModal = () => {
    setIsOpen(false);
    setStep("hint");
  };

  return (
    <section
      className={`relative w-full py-20 overflow-hidden transition-all duration-500 ${
        isDark
          ? "bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900"
          : "bg-gradient-to-br from-indigo-50 via-white to-blue-50"
      }`}
    >
      {/* Background Glowing Orbs */}
      <motion.div
        className="absolute top-10 left-0 w-64 h-64 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-3xl opacity-20"
        animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full blur-3xl opacity-20"
        animate={{ x: [0, -15, 0], y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Text Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500">
              Limited Time Offer
            </span>{" "}
            Just For You
          </h2>

          <p
            className={`text-lg md:text-xl leading-relaxed max-w-xl ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            🎉 Enroll today and 
            <span className="font-semibold text-indigo-500"> unlock premium benefits</span> with 
            <span className="font-semibold text-purple-500"> 50% off</span> your first month. 
            Upgrade your skills with world-class tutors — the clock’s ticking! ⏳
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <motion.button
              onClick={() => setIsOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl font-semibold text-lg shadow-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-xl transition-all duration-300"
            >
              Claim Offer
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-4 rounded-xl font-semibold text-lg shadow-lg transition-all duration-300 ${
                isDark
                  ? "bg-slate-700 text-gray-200 hover:bg-slate-600"
                  : "bg-white text-gray-700 hover:bg-indigo-50"
              }`}
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full flex justify-center items-center"
        >
          <motion.div
            className={`relative w-80 h-80 md:w-96 md:h-96 rounded-3xl p-1 shadow-xl overflow-hidden ${
              isDark ? "bg-slate-800" : "bg-white"
            }`}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute inset-0 rounded-3xl"
              style={{
                background:
                  "conic-gradient(from 90deg at 50% 50%, #6366F1, #A855F7, #EC4899, #F59E0B, #6366F1)"
              }}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            ></motion.div>
            <div
              className={`relative z-10 h-full rounded-[calc(1.5rem-4px)] flex flex-col justify-center items-center text-center backdrop-blur-md ${
                isDark ? "bg-slate-900/80" : "bg-white/80"
              }`}
            >
              <motion.span
                className="text-6xl mb-4"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                🚀
              </motion.span>
              <h3
                className={`text-2xl font-bold mb-2 ${
                  isDark ? "text-white" : "text-gray-800"
                }`}
              >
                Upgrade Your Future
              </h3>
              <p
                className={`${isDark ? "text-gray-300" : "text-gray-600"} px-4`}
              >
                This exclusive deal won’t last long. Make your move now and start your success story.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={closeModal}
            ></div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className={`relative max-w-lg w-full rounded-2xl shadow-2xl overflow-hidden ${
                isDark ? "bg-slate-800 text-gray-200" : "bg-white text-gray-800"
              }`}
            >
              {step === "hint" && (
                <div className="p-8">
                  <h2 className="text-2xl font-bold mb-4">🤫 Here's Your Hint</h2>
                  <p className="mb-6 leading-relaxed">
                    To claim your special offer, remember this phrase:
                    <span className="block mt-2 p-3 text-lg font-mono rounded-md bg-gradient-to-r from-pink-100 to-purple-100 text-gray-800">
                      LEARN-SMART-2025
                    </span>
                    You'll need it if support asks 😉
                  </p>
                  <div className="flex justify-end gap-4">
                    <button
                      onClick={closeModal}
                      className={`px-5 py-2 rounded-lg transition ${
                        isDark
                          ? "bg-slate-700 hover:bg-slate-600"
                          : "bg-gray-200 hover:bg-gray-300"
                      }`}
                    >
                      Cancel
                    </button>
                    <button
                      onClick={confirmClaim}
                      className="px-5 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg transition"
                    >
                      Claim Now
                    </button>
                  </div>
                </div>
              )}

              {step === "loading" && (
                <div className="p-8 flex flex-col items-center">
                  <motion.div
                    className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                  />
                  <p className="mt-4">Processing your claim...</p>
                </div>
              )}

              {step === "success" && (
                <div className="p-8 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    className="mx-auto mb-4 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-3xl"
                  >
                    ✓
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2">Claim Successful!</h3>
                  <p className="mb-6">
                    Your offer has been activated — happy learning! 🎉
                  </p>
                  <button
                    onClick={closeModal}
                    className="px-6 py-3 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:shadow-lg transition"
                  >
                    Done
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default OfferSection;