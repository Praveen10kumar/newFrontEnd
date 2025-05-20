import React from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon, 
  title, 
  description, 
  delay = 0 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="service-card bg-gradient-to-br from-accent-500 to-customPurple text-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
    >
      <div className="p-6">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white text-accent-500 mb-5 mx-auto">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-center mb-3">{title}</h3>
        <p className="text-white text-opacity-90 text-center">{description}</p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
