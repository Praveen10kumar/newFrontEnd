import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Gift, Share2, Zap, Award, Users, Smartphone, CheckCircle, HelpCircle } from 'lucide-react';

import Banner from '../components/Banner';
import ChatButton from '../components/ChatButton';

const ReferralPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'client' | 'partner'>('client');
  
  const bannerImage = 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const clientRewards = [
    { 
      title: "₹5,000 Cash Reward", 
      description: "Receive ₹5,000 for each successful client referral that signs up for our services",
      icon: <Gift className="w-10 h-10 text-indigo-500" />
    },
    { 
      title: "Annual Tax Filing", 
      description: "Get complimentary annual tax filing service for 5 successful referrals",
      icon: <CheckCircle className="w-10 h-10 text-emerald-500" />
    },
    { 
      title: "Premium Support", 
      description: "Enjoy priority support and dedicated account manager for active referrers",
      icon: <Users className="w-10 h-10 text-amber-500" />
    }
  ];

  const partnerRewards = [
    { 
      title: "20% Commission", 
      description: "Earn 20% commission on first-year billings for each successful business referral",
      icon: <Zap className="w-10 h-10 text-fuchsia-500" />
    },
    { 
      title: "Co-Branding Opportunities", 
      description: "Access co-marketing opportunities and joint webinars with our team",
      icon: <Award className="w-10 h-10 text-cyan-500" />
    },
    { 
      title: "Partner Resources", 
      description: "Get exclusive access to educational resources and partner events",
      icon: <Smartphone className="w-10 h-10 text-violet-500" />
    }
  ];

  const steps = [
    {
      number: 1,
      title: "Sign Up",
      description: "Register for our referral program through your client dashboard or contact your account manager"
    },
    {
      number: 2,
      title: "Refer",
      description: "Share your unique referral link or code with friends, family, or business associates"
    },
    {
      number: 3,
      title: "Track",
      description: "Monitor your referrals and rewards through our easy-to-use dashboard"
    },
    {
      number: 4,
      title: "Earn",
      description: "Receive your rewards once your referral becomes a client and completes their first service"
    }
  ];

  const testimonials = [
    {
      quote: "I've referred three business associates to SNA, and the process couldn't have been easier. The rewards are generous, and my referrals are happy with the service.",
      name: "Rajiv Mehta",
      title: "Business Owner",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      quote: "As a partner, the referral program has been a great way to add value to my clients while generating additional revenue for my practice.",
      name: "Priya Sharma",
      title: "Financial Advisor",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  const faqs = [
    {
      question: "How long does it take to receive my referral reward?",
      answer: "Rewards are processed within 30 days after your referral completes their first month of service with us."
    },
    {
      question: "Is there a limit to how many people I can refer?",
      answer: "No, there is no limit to the number of referrals you can make. The more you refer, the more you can earn!"
    },
    {
      question: "Do referrals expire?",
      answer: "Referrals are valid for 90 days from the date the referral link is clicked or the referral code is used."
    },
    {
      question: "Can I refer businesses from outside India?",
      answer: "Yes, we welcome international referrals. We serve clients globally and will honor rewards for qualifying international referrals."
    }
  ];

  return (
    <div className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 text-gray-800 pt-20">
      <Banner
        title="Refer & Earn Rewards"
        subtitle="Share the benefits of exceptional accounting services and get rewarded"
        backgroundImage={bannerImage}
        height="h-[50vh]"
      />

      {/* Program Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              Choose Your Referral Program
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer two distinct referral programs designed for different needs. Select the one that's right for you.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row justify-center mb-8 space-y-4 md:space-y-0 md:space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`py-3 px-6 rounded-full font-medium transition-all duration-300 ${
                  activeTab === 'client' 
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg' 
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-indigo-300'
                }`}
                onClick={() => setActiveTab('client')}
              >
                Client Referral Program
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`py-3 px-6 rounded-full font-medium transition-all duration-300 ${
                  activeTab === 'partner' 
                    ? 'bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow-lg' 
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-purple-300'
                }`}
                onClick={() => setActiveTab('partner')}
              >
                Partner Referral Program
              </motion.button>
            </div>
            
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-xl shadow-xl"
            >
              {activeTab === 'client' ? (
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-indigo-700">Client Referral Program</h3>
                  <p className="text-gray-600 mb-6">
                    Refer friends, family, or business associates to our services and earn rewards for each successful referral.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    {clientRewards.map((reward, index) => (
                      <motion.div
                        key={index}
                        variants={fadeIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -5 }}
                        className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-lg shadow-md border border-indigo-100"
                      >
                        <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm mb-4">
                          {reward.icon}
                        </div>
                        <h4 className="text-xl font-semibold mb-2 text-indigo-800">{reward.title}</h4>
                        <p className="text-gray-600">{reward.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ) : (
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-purple-700">Partner Referral Program</h3>
                  <p className="text-gray-600 mb-6">
                    For accounting professionals, financial advisors, and business consultants looking to offer additional value to their clients.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    {partnerRewards.map((reward, index) => (
                      <motion.div
                        key={index}
                        variants={fadeIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -5 }}
                        className="bg-gradient-to-br from-purple-50 to-fuchsia-50 p-6 rounded-lg shadow-md border border-purple-100"
                      >
                        <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm mb-4">
                          {reward.icon}
                        </div>
                        <h4 className="text-xl font-semibold mb-2 text-purple-800">{reward.title}</h4>
                        <p className="text-gray-600">{reward.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="mt-10 flex justify-center">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center space-x-2 py-3 px-8 rounded-full text-white font-medium shadow-lg ${
                    activeTab === 'client' 
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600' 
                      : 'bg-gradient-to-r from-purple-600 to-fuchsia-600'
                  }`}
                >
                  <Share2 size={20} />
                  <span>Start Referring Now</span>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our referral process is simple and straightforward. Follow these steps to start earning rewards.
            </p>
          </motion.div>

          <motion.div 
            className="max-w-5xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Progress Line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-fuchsia-500 transform -translate-x-1/2 z-0"></div>
              
              <div className="space-y-12 relative z-10">
                {steps.map((step, index) => (
                  <motion.div 
                    key={index}
                    variants={fadeIn}
                    className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
                  >
                    <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                      <h3 className="text-xl font-bold mb-2 text-gray-800">
                        <span className={`inline-block ${index % 2 === 0 ? 'bg-gradient-to-r from-indigo-600 to-purple-600' : 'bg-gradient-to-r from-purple-600 to-fuchsia-600'} text-white w-8 h-8 rounded-full text-center leading-8 mr-2`}>
                          {step.number}
                        </span>
                        {step.title}
                      </h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                    
                    <div className="my-4 md:my-0 w-full md:w-0">
                      <div className="w-12 h-12 rounded-full bg-white border-4 border-purple-500 mx-auto flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-purple-500"></div>
                      </div>
                    </div>
                    
                    <div className="w-full md:w-1/2"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials
      <section className="py-16 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from those who have already benefited from our referral program.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="flex items-start mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our referral program.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="grid gap-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 shadow-md"
                >
                  <div className="flex items-start">
                    <div className="mr-4 flex-shrink-0 mt-1">
                      <HelpCircle className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-gray-800">{faq.question}</h4>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Earning?</h2>
            <p className="text-indigo-100 mb-8 text-lg">
              Join our referral program today and start earning rewards for sharing the services you already love.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-indigo-700 py-3 px-8 rounded-full font-medium shadow-lg flex items-center space-x-2 mx-auto"
            >
              <Share2 size={20} />
              <span>Join the Referral Program</span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      <ChatButton />
    </div>
  );
};

export default ReferralPage;