import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  LineChart, 
  Smartphone, 
  Cloud, 
  Database 
} from 'lucide-react';

import Banner from '../components/Banner';
import ServiceCard from '../components/ServiceCard';
import ScrollSection from '../components/ScrollSection';
import ChatButton from '../components/ChatButton';

 const handleChatClick = () => {
    // For demonstration purposes only - would use react-router in a real app
    console.log('Navigating to contact page');
    window.location.href = '/contact';
  };

const HomePage: React.FC = () => {
  const bannerImage = "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  const scrollSectionBg = "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  
  const whyChooseUsPoints = [
    "One Stop Solution : If you want high-quality Bookeeping, Accounting, Virtual CFO, System Setup & Migration services, we have it.",
    "Affordable : Rendering value based pricing so it stays win win for both of us.",
    "Secured Data : Your financial data is our bread. You can trust us with your financial data, because we take food seriously.",
    "Custom-Tailored Services : Our team is all-set to provide well-crafted solutions for your unique business needs.",
    "Technologically Efficient : Singhal Nitin & Associates chooses the tech-savvy approach to automate your business and provide effective solutions.",
    "Skilled Specialists : With CAs, CPAs, MBAs and other experienced expert personnel on our side, you get the best."
  ];

  return (
    <div>
      <Banner 
        title="Bookkeeping & Accounting Services" 
        subtitle="Get Best Services for Everyone" 
        backgroundImage={bannerImage}
      />
      
      <section className="py-16 md:py-24 bg-[rgb(231,230,125)]">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              We provide comprehensive digital solutions to help your business thrive in the modern marketplace.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <ServiceCard 
              icon={<Code size={32} />}
              title="Accounting and Bookkeeping"
              description="Chart of Accounts Preparation, Invoices & Expenses posting.."
              delay={0.1}
            />
            <ServiceCard 
              icon={<Smartphone size={32} />}
              title="Accounting Software Migration"
              description="Migration from Xero, QB online, Sage, Netsuite, etc."
              delay={0.2}
            />
            <ServiceCard 
              icon={<LineChart size={32} />}
              title="Accounts Receivable"
              description="Invoice Processing, Lodgement, Reconciliations & aging analysis, etc."
              delay={0.3}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:w-2/3 mx-auto">
            <ServiceCard 
              icon={<Cloud size={32} />}
              title="Virtual CFO Services"
              description="Virtual CFO services are provided according to the needs of the client. Sometimes, there is no need for a full-time skilled CFO professional."
              delay={0.4}
            />
            <ServiceCard 
              icon={<Database size={32} />}
              title="Management Reporting"
              description="Income Statement, Cash Flow Statement, Profit & Loss Statements, KPI Indicators, etc."
              delay={0.5}
            />
          </div>
        </div>
      </section>
      
      <ScrollSection 
        backgroundImage={scrollSectionBg}
        title="Why Work With Us"
        points={whyChooseUsPoints}
      />
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your business?</h2>
            <p className="text-secondary-600 max-w-2xl mx-auto mb-8">
              Let's discuss how our innovative solutions can help you achieve your goals.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/contact"
              className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-medium px-6 py-3 rounded-md transition-colors"
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </div>
      </section>

      <ChatButton onClick={handleChatClick} />
    </div>
  );
};

export default HomePage;