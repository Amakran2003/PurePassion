import { motion } from 'framer-motion';

const SplashScreen = () => {
  return (
    <motion.div 
      className="fixed inset-0 flex items-center justify-center bg-sand z-50 px-4"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="flex flex-col items-center w-full max-w-md"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          duration: 0.8,
          ease: "easeOut"
        }}
      >
        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-primary mb-4 text-center">
          Le Safran Oriental
        </h1>
        <motion.div 
          className="h-1 bg-primary rounded-full w-16 sm:w-24"
          initial={{ width: "20%" }}
          animate={{ width: "80%" }}
          transition={{ duration: 1, delay: 0.4 }}
        />
        <p className="mt-4 text-text italic text-center text-sm sm:text-base">
          Cuisine orientale & méditerranéenne
        </p>
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen;
