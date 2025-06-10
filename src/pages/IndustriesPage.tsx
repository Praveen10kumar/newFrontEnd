import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

import Banner from '../components/Banner';
import IndustryCard from '../components/IndustryCard';
import IndustrySidebar from '../components/IndustrySidebar';
import IndustryTabs from '../components/IndustryTabs';
import TestimonialCarousel from '../components/TestimonialCarousel';
import ChatButton from '../components/ChatButton';
import ServiceComparisonTool from '../components/ServiceComparisonTool';

const industryKeys = [
  'retail',
  'healthcare',
  'construction',
  'technology',
  'professional',
  'nonprofit'
];

const IndustriesPage: React.FC = () => {
  const [activeIndustry, setActiveIndustry] = useState('retail');
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  // Unified scroll and active industry setter
  const goToIndustry = useCallback((industry: string) => {
    setActiveIndustry(industry);
    setTimeout(() => {
      const el = document.getElementById(industry);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  }, []);

  // Listen for hash changes (including direct navigation and navbar clicks)
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (industryKeys.includes(hash)) {
      goToIndustry(hash);
    }
  }, [location.hash, goToIndustry]);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const bannerImage = "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  return (
    <div className="bg-gradient-to-b from-cyan-50 to-white min-h-screen pt-20">
      <Banner
        title="Industries We Serve"
        subtitle="Specialized accounting and bookkeeping solutions for your specific industry needs"
        backgroundImage={bannerImage}
        height="h-[40vh]"
      />

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {isMobile && (
              <IndustryTabs
                activeIndustry={activeIndustry}
                onIndustryChange={goToIndustry}
              />
            )}

            <div className="flex flex-col md:flex-row gap-8">
              {!isMobile && (
                <div className="md:w-1/4">
                  <IndustrySidebar
                    activeIndustry={activeIndustry}
                    onIndustryChange={goToIndustry}
                  />
                </div>
              )}

              <div className="md:w-3/4">
                <motion.div
                  key={activeIndustry}
                  id={activeIndustry}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-xl shadow-sm p-8 border border-cyan-100"
                >
                  <IndustryContent industry={activeIndustry} />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="mt-12"
                >
                  <h2 className="text-2xl font-bold mb-6 text-gray-800">What Our Clients Say</h2>
                  <TestimonialCarousel industry={activeIndustry} />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="mt-12"
                >
                  <h2 className="text-2xl font-bold mb-6 text-gray-800">Service Comparison</h2>
                  <ServiceComparisonTool industry={activeIndustry} />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-r from-cyan-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Get Industry-Specific Insights
            </h2>
            <p className="text-cyan-50 max-w-2xl mx-auto mb-8">
              Subscribe to our newsletter for tailored financial tips and regulatory updates for your industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 rounded-md flex-grow text-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-300"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-cyan-700 font-medium px-6 py-3 rounded-md hover:bg-cyan-50 transition-colors"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <ChatButton />
    </div>
  );
};

const IndustryContent: React.FC<{ industry: string }> = ({ industry }) => {
  const industries = {
    retail: {
      title: "Retail & E-Commerce",
      description: "From inventory management to sales tax compliance, we help retail businesses optimize their financial operations and maintain accurate records.",
      benefits: [
        "Inventory valuation and tracking",
        "Sales tax compliance across multiple jurisdictions",
        "Point-of-sale system integration",
        "Cash flow forecasting for seasonal fluctuations",
        "Cost of goods sold analysis"
      ],
      image: "https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    healthcare: {
      title: "Healthcare & Medical",
      description: "We understand the complexities of healthcare billing, insurance reimbursements, and regulatory compliance that medical practices face.",
      benefits: [
        "Medical billing reconciliation",
        "Insurance reimbursement tracking",
        "HIPAA-compliant financial records",
        "Practice expense management",
        "Healthcare-specific tax planning"
      ],
      image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    construction: {
      title: "Construction & Contracting",
      description: "Our specialized services for construction businesses include job costing, contract accounting, and compliance with industry-specific regulations.",
      benefits: [
        "Project-based accounting and job costing",
        "Progress billing management",
        "Contractor license bond compliance",
        "Equipment depreciation tracking",
        "Certified payroll processing"
      ],
      image: "https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    technology: {
      title: "Technology & SaaS",
      description: "We help tech companies navigate the unique financial challenges of subscription models, R&D tax credits, and investor reporting.",
      benefits: [
        "Revenue recognition for subscription models",
        "R&D tax credit documentation",
        "Stock option and equity compensation tracking",
        "Investor-ready financial reporting",
        "SaaS metrics and KPI monitoring"
      ],
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    professional: {
      title: "Professional Services",
      description: "Law firms, consultancies, and other service-based businesses benefit from our expertise in time tracking, billing, and profitability analysis.",
      benefits: [
        "Time and billing system integration",
        "Client trust account management",
        "Partner equity and compensation tracking",
        "Utilization and realization rate analysis",
        "Professional liability insurance tracking"
      ],
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    nonprofit: {
      title: "Nonprofit & Associations",
      description: "We specialize in fund accounting, grant management, and helping nonprofits maintain their tax-exempt status through proper financial practices.",
      benefits: [
        "Fund accounting and restricted fund tracking",
        "Grant compliance and reporting",
        "Form 990 preparation and filing",
        "Donor management and reporting",
        "Board-ready financial statements"
      ],
      image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  };

  const currentIndustry = industries[industry as keyof typeof industries];

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{currentIndustry.title}</h2>
          <p className="text-gray-600 mb-6">{currentIndustry.description}</p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">How We Help</h3>
          <ul className="space-y-2 mb-6">
            {currentIndustry.benefits.map((benefit, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-start"
              >
                <span className="text-cyan-500 mr-2">✓</span>
                <span>{benefit}</span>
              </motion.li>
            ))}
          </ul>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium px-6 py-3 rounded-md hover:from-cyan-600 hover:to-blue-700 transition-all shadow-md"
          >
            Request Industry-Specific Consultation
          </motion.button>
        </div>

        <div className="md:w-1/2">
          <motion.div
            className="rounded-xl overflow-hidden shadow-md h-[300px] md:h-[400px]"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={currentIndustry.image}
              alt={currentIndustry.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <IndustryCard
          title="Specialized Bookkeeping"
          description="Industry-specific chart of accounts and financial tracking tailored to your business needs."
          icon="BookOpen"
        />
        <IndustryCard
          title="Compliance Support"
          description="Stay compliant with industry-specific regulations and reporting requirements."
          icon="Shield"
        />
        <IndustryCard
          title="Strategic Advisory"
          description="Data-driven insights to help you make better financial decisions for your industry."
          icon="LineChart"
        />
      </div>
    </div>
  );
};

export default IndustriesPage;
