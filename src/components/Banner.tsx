import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface BannerProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  height?: string;
}

const Banner: React.FC<BannerProps> = ({ 
  title, 
  subtitle, 
  backgroundImage, 
  height = 'h-[70vh]' 
}) => {
  const bannerRef = useRef<HTMLDivElement>(null);
  const textCarouselItems = [
    "Innovative Solutions",
    "Cutting-Edge Technology",
    "Expert Consultation",
    "Strategic Planning",
    "Transformative Results"
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!bannerRef.current) return;
      const scrollPosition = window.scrollY;
      const translateY = scrollPosition * 0.4;
      bannerRef.current.style.transform = `translateY(${translateY}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`relative overflow-hidden ${height} w-full`}
      style={{ 
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div 
        className="absolute inset-0 bg-secondary-900/60"
        ref={bannerRef}
      ></div>
      
      <div className="absolute inset-0 flex items-center justify-center text-center px-4">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
          >
            {title}
          </motion.h1>
          
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-white mb-8"
            >
              {subtitle}
            </motion.p>
          )}
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-8 overflow-hidden"
          >
            <div className="absolute w-full animate-text-slide">
              {textCarouselItems.map((item, index) => (
                <div 
                  key={index} 
                  className="h-8 flex items-center justify-center text-customPurple text-3xl font-semibold"
                >
                  {item}
                </div>
              ))}
              <div 
                className="h-8 flex items-center justify-center text-customPurple text-3xl font-semibold"
              >
                {textCarouselItems[0]}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;