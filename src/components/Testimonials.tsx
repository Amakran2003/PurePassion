import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Testimonials = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null); 
  const [isVisible, setIsVisible] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  
  // Required minimum swipe distance in pixels
  const minSwipeDistance = 50;
  
  const testimonials = [
    {
      name: 'Marie L.',
      textKey: 'testimonials.reviews.bea',
      rating: 5
    },
    {
      name: 'Thomas R.',
      textKey: 'testimonials.reviews.lucie',
      rating: 5
    },
    {
      name: 'Sarah K.',
      textKey: 'testimonials.reviews.sophie',
      rating: 5
    },
    {
      name: 'Jean et Céline M.',
      textKey: 'testimonials.reviews.jacosteph',
      rating: 5
    },
    {
      name: 'Laurent D.',
      textKey: 'testimonials.reviews.p45560',
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Setup intersection observer to detect when testimonial section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when at least 10% of section is visible
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Auto-scroll testimonials only when visible
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    
    if (isVisible) {
      interval = setInterval(() => {
        nextTestimonial();
      }, 4000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [currentIndex, isVisible]);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Handle touch events for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null); // Reset touchEnd on new touch
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      nextTestimonial();
    } else if (isRightSwipe) {
      prevTestimonial();
    }
  };

  const variants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      position: "absolute" as const
    }),
    center: {
      x: 0,
      opacity: 1,
      position: "relative" as const,
      zIndex: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      position: "absolute" as const
    })
  };

  return (
    <section 
      id="testimonials" 
      className="section-container bg-secondary-light py-20"
      ref={sectionRef}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">{t('testimonials.title')}</h2>
        
        <div className="relative">
          {/* Navigation buttons - hidden on mobile, visible on md screens and above */}
          <div className="absolute inset-y-0 left-0 -ml-4 md:-ml-12 z-10 hidden md:flex items-center">
            <button 
              onClick={prevTestimonial}
              className="bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-primary" />
            </button>
          </div>

          <div className="absolute inset-y-0 right-0 -mr-4 md:-mr-12 z-10 hidden md:flex items-center">
            <button 
              onClick={nextTestimonial}
              className="bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-primary" />
            </button>
          </div>

          {/* Container with fixed height to prevent layout shift - Added touch events */}
          <div 
            ref={containerRef}
            className="overflow-hidden relative bg-white p-8 rounded-lg shadow-lg min-h-[300px] flex items-center justify-center cursor-grab active:cursor-grabbing"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            aria-label="Swipe left or right to navigate testimonials"
          >
            <AnimatePresence custom={direction} initial={false}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  // Faster animation with increased stiffness and reduced duration
                  x: { type: "spring", stiffness: 400, damping: 25 },
                  opacity: { duration: 0.15 }
                }}
                className="w-full"
              >
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="mb-6 text-lg italic text-center">"{t(testimonials[currentIndex].textKey)}"</p>
                <p className="font-semibold text-center text-primary">- {testimonials[currentIndex].name}</p>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Dots indicator - moved directly under the testimonial box */}
          <div className="flex justify-center space-x-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;