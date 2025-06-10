import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FileBarChart,   // for Virtual CFO
  Receipt,        // for Controller Services
  BookText,       // for Transactional Accounting
  CloudCog,       // for Cloud Accounting Setup
  FileText,       // for Financial Reporting & Analysis
  Banknote,       // for Tax Preparation & Planning
  ShieldCheck,    // for Compliance & Audit Support (unchanged, appropriate)
  BarChart3       // for Business Advisory Services
} from 'lucide-react';


import Banner from '../components/Banner';
import ChatButton from '../components/ChatButton';
import { Navigate } from 'react-router-dom';

const ServicesPage = () => {
  const navigate = useNavigate();

  const bannerImage = "https://images.pexels.com/photos/3182774/pexels-photo-3182774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  
  const services = [
  {
    icon: <FileBarChart size={48} className="text-primary-500" />,
    title: "Virtual CFO",
    description: "Strategic financial leadership without the cost of a full-time CFO.",
    fullDescription: "Our Virtual CFO service gives you access to strategic financial guidance from experienced professionals. Ideal for growing businesses that need expert oversight on financial planning, forecasting, budgeting, and KPI tracking without hiring a full-time executive.",
    points: [
      "Cash flow forecasting",
      "Budgeting and planning",
      "Financial KPI development",
      "Investor reporting",
      "Monthly strategy sessions"
    ]
  },
  {
    icon: <Receipt size={48} className="text-primary-500" />,
    title: "Controller Services",
    description: "Experienced Controllers to oversee your accounting operations.",
    fullDescription: "Our Controller service provides accurate financial oversight and helps manage accounting teams, processes, and compliance. Ideal for businesses ready to upgrade from a bookkeeper to structured financial management.",
    points: [
      "Monthly close and reconciliations",
      "Process improvement and documentation",
      "Internal controls and compliance",
      "Oversight of bookkeeping team",
      "GAAP-compliant reporting"
    ]
  },
  {
    icon: <BookText size={48} className="text-primary-500" />,
    title: "Transactional Accounting",
    description: "Reliable and accurate daily bookkeeping and financial records.",
    fullDescription: "Our Transactional service ensures that your books are always up to date. We handle your routine financial entries, reconciliations, and reporting with accuracy and timeliness.",
    points: [
      "Accounts payable and receivable",
      "Bank and credit card reconciliations",
      "Monthly financial statements",
      "Expense tracking",
      "Industry benchmark comparisons"
    ]
  },
  {
    icon: <CloudCog size={48} className="text-primary-500" />,
    title: "Cloud Accounting Setup",
    description: "Modern cloud-based accounting solutions tailored for your business.",
    fullDescription: "We set up and optimize cloud accounting systems like QuickBooks Online and Xero, enabling secure, real-time access to your financials and improved workflow efficiency.",
    points: [
      "QuickBooks and Xero setup",
      "Cloud system migration",
      "App integrations and automations",
      "User training and support",
      "Custom chart of accounts"
    ]
  },
  {
    icon: <FileText size={48} className="text-primary-500" />,
    title: "Financial Reporting & Analysis",
    description: "Insightful reports to support informed business decisions.",
    fullDescription: "We provide detailed financial reporting and custom dashboards to help you understand performance, track trends, and make strategic decisions with confidence.",
    points: [
      "Monthly and quarterly reporting",
      "Custom dashboards",
      "Variance analysis",
      "Cash flow reports",
      "Performance trend insights"
    ]
  },
  {
    icon: <Banknote size={48} className="text-primary-500" />,
    title: "Tax Preparation & Planning",
    description: "Strategic planning and accurate tax filing for peace of mind.",
    fullDescription: "We handle both individual and business tax preparation with year-round planning strategies to minimize liabilities and avoid surprises at tax time.",
    points: [
      "Business and personal tax prep",
      "Quarterly estimated taxes",
      "Tax-saving strategies",
      "IRS compliance support",
      "Filing for multiple states"
    ]
  },
  {
    icon: <ShieldCheck size={48} className="text-primary-500" />,
    title: "Compliance & Audit Support",
    description: "Ensure financial compliance and prepare confidently for audits.",
    fullDescription: "We support your business in staying compliant with regulatory requirements, including audit preparation, internal reviews, and financial documentation.",
    points: [
      "Audit preparation and liaison",
      "Internal control setup",
      "1099/Payroll compliance",
      "Sales tax filings",
      "Financial policy documentation"
    ]
  },
  {
    icon: <BarChart3 size={48} className="text-primary-500" />,
    title: "Business Advisory Services",
    description: "Financial strategy and advisory to support business growth.",
    fullDescription: "Beyond the books, our advisory services help you understand the financial impact of business decisions. We assist with strategic planning, pricing models, mergers, and more.",
    points: [
      "Business model analysis",
      "Pricing and margin strategy",
      "Break-even and ROI analysis",
      "Growth planning",
      "Exit strategy consulting"
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
    <div className='pt-20'>
      <Banner 
        title="Our Services" 
        subtitle="Accounting & Bookkeeping Solution" 
        backgroundImage={bannerImage}
        height="h-[50vh]"
      />

      <section className="py-16 md:py-24 bg-blue-100">
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

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-blue-100">
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
                className="rounded-lg shadow-md p-6 cursor-pointer transform transition-all duration-300 hover:scale-[1.04] hover:shadow-xl border border-gray-200 bg-gradient-to-br from-indigo-50 to-purple-50"

                onMouseEnter={() => setHoveredProcess(index)}
                onMouseLeave={() => setHoveredProcess(null)}
              >
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-500 text-blue-600 font-bold text-lg mr-4">
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

      <ChatButton />
    </div>
  );
};

export default ServicesPage;