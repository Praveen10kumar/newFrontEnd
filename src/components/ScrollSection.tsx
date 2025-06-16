import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ScrollSectionPoint {
  icon: React.ReactNode;
  text: string;
}

interface ScrollSectionProps {
  backgroundImage: string;
  title: string;
  points: ScrollSectionPoint[];
}

const ScrollSection: React.FC<ScrollSectionProps> = ({
  backgroundImage,
  title,
  points
}) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <div ref={ref} className="relative min-h-[80vh] flex items-center overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          scale
        }}
      >
        <div className="absolute inset-0 bg-primary-900/80"></div>
      </motion.div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          <div className="w-20 h-1 bg-accent-500 mx-auto"></div>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 flex items-center"
            >
              <span className="text-accent-400 font-bold text-2xl mr-4 flex-shrink-0">
                {point.icon}
              </span>
              <p className="text-white text-lg">{point.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollSection;
