import React from 'react';
import { motion } from 'framer-motion';
import FAQItem from './FAQItem';

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer a comprehensive range of digital services including web development, mobile app development, cloud solutions, cybersecurity, data analytics, digital marketing, and innovation consulting. Each service is tailored to meet the specific needs of our clients."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity, scope, and requirements. A simple website might take 4-6 weeks, while a complex web application could take 3-6 months. During our initial consultation, we'll provide a more accurate timeline based on your specific project needs."
    },
    {
      question: "What is your development process?",
      answer: "Our development process follows an agile methodology with seven key phases: Discovery, Planning, Design, Development, Testing, Deployment, and Support. We emphasize collaboration, regular communication, and iterative development to ensure your project meets your expectations."
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes, we offer various support and maintenance packages to ensure your digital solutions continue to perform optimally. These packages can include regular updates, security patches, performance monitoring, and technical support."
    },
    {
      question: "How do you handle project pricing?",
      answer: "We offer flexible pricing models including fixed price, time and materials, and retainer arrangements. The appropriate model depends on your project's nature, scope, and requirements. We provide detailed proposals with transparent pricing before any work begins."
    },
    {
      question: "Can you work with our existing systems and technologies?",
      answer: "Yes, we have experience integrating with a wide range of existing systems and technologies. We perform a thorough analysis of your current infrastructure to ensure seamless integration and minimal disruption to your operations."
    }
  ];

  return (
    <section className="bg-white rounded-lg shadow-md p-6 md:p-8">
      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl font-bold mb-6 text-gray-800"
      >
        Frequently Asked Questions
      </motion.h2>
      <div className="space-y-1">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <FAQItem 
              question={faq.question} 
              answer={faq.answer} 
              initiallyOpen={index === 0}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;