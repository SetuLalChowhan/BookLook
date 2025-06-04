import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import BannerImage from "@/assets/images/Banner.png";

const FullScreenAnimation = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Show for 3 seconds, then slide out for 1 second
    const showTimer = setTimeout(() => {
      setIsVisible(false);
    }, 3000); // Total animation time: 3s visible + 1s sliding

    return () => clearTimeout(showTimer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[1000] bg-cover bg-center"
          style={{ backgroundImage: `url(${BannerImage})` }}
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          exit={{ x: "-100%" }}
          transition={{
            duration: 1,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 2, // Wait 2 seconds before starting slide
          }}
        >
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center p-4"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white font-serif mb-3">
                Tuli's <span className="text-amber-300">Book Store</span>
              </h1>
              <motion.p
                className="text-lg text-white/90"
                initial={{ y: 10 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Where stories come alive...
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FullScreenAnimation;
