import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock, Globe, Mail } from 'lucide-react';

import Banner from '../components/Banner';
import ChatButton from '../components/ChatButton';

const AboutPage: React.FC = () => {
  const bannerImage =
    'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';

  const stats = [
    { icon: <Clock size={28} />, value: '10+', label: 'Years of Experience' },
    { icon: <Users size={28} />, value: '100+', label: 'Satisfied Clients' },
    { icon: <Award size={28} />, value: '250+', label: 'Projects Completed' },
    { icon: <Globe size={28} />, value: '15+', label: 'Countries Served' },
  ];

  return (
    <div className="bg-gray-50 text-gray-800 pt-20">
      <Banner
        title="About Singhal Nitin & Associates"
        subtitle="Get to know our company and our mission"
        backgroundImage={bannerImage}
        height="h-[50vh]"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="w-20 h-1 bg-primary-500 mb-6"></div>
              <p className="text-gray-700 mb-4">
                Established in 2013, Singhal Nitin & Associates was formed with the vision of being a "Global Accountancy Company". With time, SNA has emerged as a all-encompassing accountant with a team of qualified and dedicated professionals. Our accounting team utilizes online technology to help scale up your business by managing your Bookkeeping and Accounting, with a personalized touch.
              </p>
              <p className="text-gray-700 mb-4">
                Be it Bookeeping, Accounting, Virtual CFO, System Setup & Migration services, you name it, SNA has it. We are skilled in providing comprehensive financial services to small & medium-sized business owners, CPA Firms & Accounting practice owners.
              </p>
              <p className="text-gray-700">
                Over the years, we've had the privilege of working with clients ranging from startups to Fortune 500 companies, helping them navigate the ever-evolving digital landscape and achieve lasting success.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Team working together"
                className="rounded-lg shadow-xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-500 rounded-lg -z-10"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent-500 rounded-lg -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Letter from CEO Section */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative bg-white p-8 md:p-12 rounded-lg shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-100 rounded-bl-3xl -z-10 transform translate-x-4 -translate-y-4"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent-100 rounded-tr-3xl -z-10 transform -translate-x-4 translate-y-4"></div>
              
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center text-white mr-4">
                  <Mail size={28} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary-900">A Letter From Our CEO</h2>
              </div>
              
              <div className="mb-8 italic text-gray-600 text-lg">
                Dear Valued Clients and Partners,
              </div>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  When I founded Singhal Nitin & Associates in 2013, I had a vision to create an accounting firm that would transcend traditional boundaries and embrace the digital future. Today, I'm proud to say that we've not only realized that vision but continue to expand upon it each day.
                </p>
                
                <p>
                  Our journey began with a simple promise: to provide exceptional accounting services with unwavering integrity and a personal touch. Over the years, we've grown from a small local practice to a global team serving clients across continents, but that core promise remains unchanged.
                </p>
                
                <p>
                  What sets us apart is our commitment to innovation. We've embraced technology not as a replacement for human expertise, but as a powerful tool that enables our team to deliver more value, insights, and strategic guidance to your business. By combining cutting-edge accounting systems with our team's deep professional knowledge, we've created a service model that truly addresses the complexities of modern business.
                </p>
                
                <p>
                  As we look to the future, our focus remains on your success. Whether you're a small business owner navigating growth challenges, a CPA firm seeking reliable back-office support, or an enterprise requiring sophisticated financial analysis, our team is dedicated to being your trusted financial partner.
                </p>
                
                <p>
                  I personally invite you to experience the SNA difference. Our doors—both physical and virtual—are always open, and we welcome the opportunity to demonstrate how our services can transform your financial operations and contribute to your lasting success.
                </p>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="font-script text-2xl text-primary-800 mb-1">Nitin Singhal</div>
                <div className="text-gray-600">Founder & CEO, Singhal Nitin & Associates</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission & Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Transform your future goals by identifying profit-impacting aspects to build long-term business relationships.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-primary-50 p-8 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold mb-4 text-primary-700">Our Mission</h3>
              <p className="text-gray-700">
                Continue transitioning from traditional business practices to holistic & technology-driven digitized processes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-primary-50 p-8 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold mb-4 text-primary-700">Our Vision</h3>
              <p className="text-gray-700">
                Remain relevant to all businesses & be the most trusted chartered accountant firm in Bangalore and India.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
            {['Innovation', 'Excellence', 'Integrity', 'Collaboration', 'Client Focus', 'Continuous Learning'].map(
              (value, index) => (
                <motion.div
                  key={value}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-accent-50 p-4 rounded-lg shadow-sm text-center"
                >
                  <h4 className="font-medium text-primary-900">{value}</h4>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-primary-900 text-white">
        <div className="container mx-auto px-4">
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
                  <div className="bg-primary-800 p-3 rounded-full">{stat.icon}</div>
                </div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-primary-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section with updated layout */}
      <section className="py-16 md:py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the visionary behind Singhal Nitin & Associates.
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/3"
            >
              <div className="relative overflow-hidden rounded-lg shadow-xl">
                <img
                  src='../src/assets/img1.jpg'
                  alt="Nitin Singhal - CEO"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-full lg:w-2/3 max-h-[60vh] overflow-y-auto"
            >
              <div className="bg-gradient-to-br from-white to-primary-50 p-6 md:p-8 rounded-lg shadow-lg h-full">
                <h3 className="text-2xl font-bold mb-2 text-primary-700">Nitin Singhal</h3>
                <p className="text-md font-semibold mb-1">Chartered Accountant & Founder</p>
                <p className="text-sm text-primary-600 mb-4">Certified QuickBooks ProAdvisor & Xero Advisor</p>
                
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Nitin is a qualified Chartered Accountant with close to a decade of successful experience. He is also a CFA USA Level 2 candidate and a certified QuickBooks and Xero expert.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Prior to starting his own CA firm, Nitin worked at PricewaterhouseCoopers, Mumbai and various local CA firms.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Backed by his experience serving clients across the UK, US, Australia, and India, he is skilled in business transformation and professional advisory.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Nitin's interests include traveling abroad, working out, and entrepreneurship.
                  </p>
                  
                  <div className="pt-4 border-t border-primary-100">
                    <h4 className="text-lg font-semibold mb-2 text-primary-700">Areas of Expertise</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      <li className="flex items-center text-sm text-gray-700">
                        <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                        Financial Analysis
                      </li>
                      <li className="flex items-center text-sm text-gray-700">
                        <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                        Business Advisory
                      </li>
                      <li className="flex items-center text-sm text-gray-700">
                        <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                        QuickBooks & Xero
                      </li>
                      <li className="flex items-center text-sm text-gray-700">
                        <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                        Tax Planning
                      </li>
                      <li className="flex items-center text-sm text-gray-700">
                        <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                        International Accounting
                      </li>
                      <li className="flex items-center text-sm text-gray-700">
                        <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                        Digital Transformation
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-primary-50 p-8 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-bold mb-4 text-primary-700">Singhal Nitin & Associates Team</h3>
            <p className="text-gray-700">
              Our team mainly includes graduates and post-graduate in accounting and finance streams, who have fantastic communication skills. They hold a minimum experience of 2 years to 10 years in the industry. All our experts are highly trained, and they complete all the bookkeeping assignments with many hands of experts, and of course, they meet all the deadlines. Hence you can choose our team for all types of work. Our highly skilled team comprises graduate and post-graduate. They are well versed with English communication skills and have experience levels ranging from 2 years to 10 years in the industry. We have created a delivery team of highly trained accountants to carry out bookkeeping assignments with considerable hands of expertise and conversant with the latest guidelines.
            </p>
          </motion.div>
        </div>
      </section>

      <ChatButton />
    </div>
  );
};

export default AboutPage;