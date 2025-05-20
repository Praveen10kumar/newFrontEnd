import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Smartphone, 
  LineChart, 
  Cloud, 
  Database, 
  Globe, 
  ShieldCheck, 
  Lightbulb 
} from 'lucide-react';

import Banner from '../components/Banner';
import ChatButton from '../components/ChatButton';

const handleChatClick = () => {
  console.log('Navigating to contact page');
  window.location.href = '/contact';
};

const ServicesPage = () => {
  const bannerImage = "https://images.pexels.com/photos/3182774/pexels-photo-3182774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  
  const services = [
    {
      icon: <Code size={48} className="text-primary-500" />,
      title: "Full Time Service",
      description: "Our Virtual CFO service partners you with a remote team of Accountants & CPAs to guide your business to success.",
      fullDescription: "Our Virtual CFO service partners you up with a remote team of Accountants & CPAs who work with you to help guide your business to success. There is a lot of redundancy so nothing ever stops (even when someone is sick or takes a vacation). Service includes bank relationships, weekly meetings, forecasting, company-wide KPIs, and much more.",
      points: [
        "Custom website design and development",
        "Progressive web applications (PWAs)",
        "E-commerce solutions",
        "Content management systems",
        "API development and integration"
      ]
    },
    {
      icon: <Smartphone size={48} className="text-primary-500" />,
      title: "Controller",
      description: "Professional financial advice for growing businesses that can't afford a full-time Controller.",
      fullDescription: "Our proactive Controller service partners you up with an experienced Controller who works with you to help guide your business to success. If you're a growing business that now needs professional financial advice, but can't afford a full-time Controller, our Controller Services are a perfect fit.",
      points: [
        "Native iOS and Android applications",
        "Cross-platform development",
        "Mobile UI/UX design",
        "App maintenance and support",
        "Performance optimization"
      ]
    },
    {
      icon: <LineChart size={48} className="text-primary-500" />,
      title: "Transactional",
      description: "Traditional accounting services including monthly financial statements and industry comparisons.",
      fullDescription: "Our Transactional service provides you with traditional accounting services such as preparing your monthly financial statements –including balance sheets, industry financial comparisons, and more.",
      points: [
        "Digital transformation planning",
        "Technology roadmapping",
        "Competitive analysis",
        "Market research and insights",
        "Business process optimization"
      ]
    },
    {
      icon: <Cloud size={48} className="text-primary-500" />,
      title: "Cloud Solutions",
      description: "Secure, scalable cloud infrastructure and migration services.",
      fullDescription: "We provide cloud infrastructure and migration services to help businesses leverage the scalability, reliability, and cost-effectiveness of cloud computing. Our cloud solutions are secure, scalable, and tailored to your specific needs.",
      points: [
        "Cloud infrastructure setup and management",
        "Migration to cloud platforms",
        "Serverless architecture",
        "DevOps and continuous integration",
        "Scalable cloud databases"
      ]
    },
    {
      icon: <Database size={48} className="text-primary-500" />,
      title: "Data Analytics",
      description: "Extract valuable insights from data with custom dashboards and reporting systems.",
      fullDescription: "Our data analytics services help businesses extract valuable insights from their data to drive decision-making. We build custom dashboards, reporting systems, and data pipelines that transform raw data into actionable intelligence.",
      points: [
        "Business intelligence dashboards",
        "Data visualization",
        "Predictive analytics",
        "Big data processing",
        "Custom reporting solutions"
      ]
    },
    {
      icon: <Globe size={48} className="text-primary-500" />,
      title: "Digital Marketing",
      description: "Data-driven marketing campaigns that deliver measurable results.",
      fullDescription: "We help businesses reach their target audience and generate leads through strategic digital marketing campaigns. Our data-driven approach ensures that your marketing efforts deliver measurable results.",
      points: [
        "Search engine optimization (SEO)",
        "Pay-per-click (PPC) advertising",
        "Social media marketing",
        "Email marketing campaigns",
        "Conversion rate optimization"
      ]
    },
    {
      icon: <ShieldCheck size={48} className="text-primary-500" />,
      title: "Cybersecurity",
      description: "Protect digital assets and sensitive information with robust security measures.",
      fullDescription: "Our cybersecurity services help businesses protect their digital assets and sensitive information. We implement robust security measures and best practices to mitigate risks and ensure compliance with industry regulations.",
      points: [
        "Security assessments and audits",
        "Vulnerability management",
        "Secure application development",
        "Data protection strategies",
        "Security awareness training"
      ]
    },
    {
      icon: <Lightbulb size={48} className="text-primary-500" />,
      title: "Innovation Consulting",
      description: "Identify opportunities for innovation to stay ahead of the competition.",
      fullDescription: "We help businesses identify opportunities for innovation and develop strategies to stay ahead of the competition. Our innovation consulting services combine creative thinking with technical expertise to drive growth and differentiation.",
      points: [
        "Innovation workshops and ideation",
        "Emerging technology adoption",
        "Proof of concept development",
        "Digital product strategy",
        "Research and development support"
      ]
    }
  ];

  const processes = [
    { number: "01", title: "Assessment & Onboarding", description: "Review systems and align on requirements", fullDescription: "We begin by understanding your current financial processes, tools, and goals. This includes a comprehensive review of your systems, accounts, and business structure to identify gaps and opportunities. We'll align on your specific requirements and tailor a plan accordingly." },
    { number: "02", title: "Software Setup & Migration", description: "Configure accounting software and import data", fullDescription: "We configure or migrate your financial data to robust accounting software (like QuickBooks, Xero, or others). This includes setting up your chart of accounts, tax settings, payroll integration, and importing historical data — ensuring a smooth and secure transition." },
    { number: "03", title: "Cleanup & Catchup", description: "Fix discrepancies and reconcile accounts", fullDescription: "If your books are behind or disorganized, we clean up and bring them current. This involves transaction categorization, fixing discrepancies, and performing multi-dimensional reconciliations across bank accounts, credit cards, loans, and other ledgers." },
    { number: "04", title: "Full-Cycle Bookkeeping", description: "Handle day-to-day financial tracking", fullDescription: "We handle day-to-day bookkeeping including recording receipts, payments, and journal entries. Our services ensure timely, accurate tracking of all financial activities, setting the foundation for insightful reporting and compliance." },
    { number: "05", title: "Payroll Processing", description: "Manage wages, taxes and compliance", fullDescription: "We manage the payroll cycle — calculating wages, taxes, and deductions while ensuring compliance with local laws. Payroll data is accurately recorded in your books for seamless reconciliation and reporting." },
    { number: "06", title: "AP & AR Management", description: "Manage cash flow with invoice handling", fullDescription: "We help you stay on top of your cash flow by managing incoming and outgoing payments. This includes invoice generation, vendor payments, customer follow-ups, and maintaining aging reports for actionable insights." },
    { number: "07", title: "Inventory Management", description: "Track inventory and create projections", fullDescription: "We implement systems for tracking inventory in real-time and create cash flow projections. This helps you avoid stockouts or overstocking, and ensures you have the liquidity needed to operate and grow." },
    { number: "08", title: "Financial Reports", description: "Prepare statements and track KPIs", fullDescription: "We prepare accurate financial statements (P&L, Balance Sheet, Cash Flow Statements) and custom management reports. We also track key performance indicators (KPIs), perform trend analysis, and deliver actionable insights for decision-making." },
    { number: "09", title: "Budgets & Forecasting", description: "Build models and analyze variances", fullDescription: "We work with you to build forward-looking financial models and budgets. Regular variance analysis helps track performance against plans, allowing you to make informed strategic decisions and pivot where needed." },
    { number: "10", title: "Ongoing Support", description: "Provide continuous advisory services", fullDescription: "Our partnership doesn't end with setup. We offer continuous support, compliance checks, and strategic financial advisory to help your business thrive. From investor-ready reports to tax season readiness — we've got you covered." }
  ];

  const [hoveredService, setHoveredService] = useState(null);
  const [hoveredProcess, setHoveredProcess] = useState(null);

  return (
    <div>
      <Banner 
        title="Our Services" 
        subtitle="Accounting & Bookkeeping Solution" 
        backgroundImage={bannerImage}
        height="h-[50vh]"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Offer</h2>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              Our team ensures that bookkeeping & accounting is no more a hassle for you. We provide customized reports using major software like QuickBooks, Xero, Zoho Books, and more.
            </p>
          </motion.div>

          {/* Services grid with cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`rounded-lg border border-gray-200 shadow-lg p-6 flex flex-col md:flex-row gap-6 cursor-pointer transform transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl bg-blue-50`}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="flex-shrink-0 flex items-center justify-center md:justify-start text-primary-500">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-secondary-600 mb-4">
                    {hoveredService === index ? service.fullDescription : service.description}
                  </p>
                  <ul className={`space-y-2 list-disc list-inside text-gray-700 transition-all duration-300 ${hoveredService === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                    
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-primary-100 max-w-2xl mx-auto mb-8">
              Let's discuss how our services can help you achieve your business goals.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/contact"
              className="inline-block bg-white text-primary-800 font-medium px-6 py-3 rounded-md hover:bg-primary-50 transition-colors"
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              We follow a structured approach to ensure that every project is delivered successfully.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
            {processes.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`rounded-lg shadow-md p-6 cursor-pointer transform transition-all duration-300 hover:scale-[1.04] hover:shadow-xl border border-gray-200 ${index % 5 === 0 ? 'bg-indigo-50' : index % 5 === 1 ? 'bg-teal-50' : index % 5 === 2 ? 'bg-rose-50' : index % 5 === 3 ? 'bg-orange-50' : 'bg-cyan-50'}`}
                onMouseEnter={() => setHoveredProcess(index)}
                onMouseLeave={() => setHoveredProcess(null)}
              >
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-500 text-white font-bold text-lg mr-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                </div>
                <p className="text-secondary-600 transition-all duration-300">
                  {hoveredProcess === index ? step.fullDescription : step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ChatButton onClick={handleChatClick} />
    </div>
  );
};

export default ServicesPage;