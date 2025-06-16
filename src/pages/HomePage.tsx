import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  FileText,
  Shuffle,
  CreditCard,
  Briefcase,
  BarChart2,
  Award,
  Users,
  Clock,
  Globe,
  DollarSign,
  Shield,
  Settings,
  Cpu
} from 'lucide-react';

import Banner from '../components/Banner';
import ServiceCard from '../components/ServiceCard';
import ScrollSection from '../components/ScrollSection';
import ChatButton from '../components/ChatButton';
import AnimatedCounter from '../components/AnimatedCounter';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, threshold: 0.3 });

  const bannerImage = "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  const scrollSectionBg = "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  
  const whyChooseUsPoints = [
  {
    icon: <FileText size={32} className="text-primary-600" />,
    text: "One Stop Solution : If you want high-quality Bookkeeping, Accounting, Virtual CFO, System Setup & Migration services, we have it."
  },
  {
    icon: <DollarSign size={32} className="text-primary-600" />,
    text: "Affordable : Rendering value based pricing so it stays win win for both of us."
  },
  {
    icon: <Shield size={32} className="text-primary-600" />,
    text: "Secured Data : Your financial data is our bread. You can trust us with your financial data, because we take food seriously."
  },
  {
    icon: <Settings size={32} className="text-primary-600" />,
    text: "Custom-Tailored Services : Our team is all-set to provide well-crafted solutions for your unique business needs."
  },
  {
    icon: <Cpu size={32} className="text-primary-600" />,
    text: "Technologically Efficient : Singhal Nitin & Associates chooses the tech-savvy approach to automate your business and provide effective solutions."
  },
  {
    icon: <Users size={32} className="text-primary-600" />,
    text: "Skilled Specialists : With CAs, CPAs, MBAs and other experienced expert personnel on our side, you get the best."
  }
];

  const stats = [
    { icon: <Clock size={28} />, value: 10, suffix: '+', label: 'Years of Experience' },
    { icon: <Users size={28} />, value: 100, suffix: '+', label: 'Satisfied Clients' },
    { icon: <Award size={28} />, value: 250, suffix: '+', label: 'Projects Completed' },
    { icon: <Globe size={28} />, value: 15, suffix: '+', label: 'Countries Served' },
  ];

  return (
    <div className='pt-20'>
      <Banner 
        title="Bookkeeping & Accounting Services" 
        subtitle="Get Best Services for Everyone" 
        backgroundImage={bannerImage}
      />
      
      <section className="py-16 md:py-24 bg-blue-100">
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
              icon={<FileText size={32} />}
              title="Accounting and Bookkeeping"
              description="Chart of Accounts Preparation, Invoices & Expenses posting.."
              delay={0.1}
            />
            <ServiceCard 
              icon={<Shuffle size={32} />}
              title="Accounting Software Migration"
              description="Migration from Xero, QB online, Sage, Netsuite, etc."
              delay={0.2}
            />
            <ServiceCard 
              icon={<CreditCard size={32} />}
              title="Accounts Receivable"
              description="Invoice Processing, Lodgement, Reconciliations & aging analysis, etc."
              delay={0.3}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:w-2/3 mx-auto">
            <ServiceCard 
              icon={<Briefcase size={32} />}
              title="Virtual CFO Services"
              description="Virtual CFO services are provided according to the needs of the client. Sometimes, there is no need for a full-time skilled CFO professional."
              delay={0.4}
            />
            <ServiceCard 
              icon={<BarChart2 size={32} />}
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

      {/* Statistics Section with Animated Counters */}
      <section ref={statsRef} className="py-16 md:py-20 bg-primary-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Track Record</h2>
            <p className="text-primary-200 max-w-2xl mx-auto">
              Numbers that speak for our commitment to excellence and client satisfaction.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-primary-800 p-3 rounded-full text-primary-200 hover:bg-primary-700 transition-colors duration-300">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-4xl font-bold mb-2 text-white">
                  <AnimatedCounter 
                    end={stat.value} 
                    suffix={stat.suffix}
                    isVisible={isStatsInView}
                    duration={2.5}
                  />
                </div>
                <div className="text-primary-200 text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center ">
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
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}
              className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-medium px-6 py-3 rounded-md transition-colors">
              Get in Touch
            </motion.button>
          </motion.div>
        </div>
      </section>

      <ChatButton />
    </div>
  );
};

export default HomePage;