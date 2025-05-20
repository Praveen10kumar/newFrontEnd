import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock, Globe } from 'lucide-react';

import Banner from '../components/Banner';
import ChatButton from '../components/ChatButton';

const handleChatClick = () => {
  console.log('Navigating to contact page');
  window.location.href = '/contact';
};

const AboutPage: React.FC = () => {
  const bannerImage = "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  const stats = [
    { icon: <Clock size={28} />, value: "10+", label: "Years of Experience" },
    { icon: <Users size={28} />, value: "100+", label: "Satisfied Clients" },
    { icon: <Award size={28} />, value: "250+", label: "Projects Completed" },
    { icon: <Globe size={28} />, value: "15+", label: "Countries Served" }
  ];

  const teamMembers = [
    {
      name: "Nitin Singhal",
      position: "CEO & Founder",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Miguel parker",
      position: "CTO",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Jack Sparrow",
      position: "Design Director",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Jon Snow",
      position: "Lead Developer",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  return (
    <div className="bg-gray-50">
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
                Established in 2013, Singhal Nitin & Associates was formed with the vision of being a “Global Accountancy Company”. With time, SNA has emerged as a all-encompassing accountant with a team of qualified and dedicated professionals. Our accounting team utilizes online technology to help scale up your business by managing your Bookkeeping and Accounting, with a personalized touch.
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
              At Innovate Solutions, we're guided by a set of core values that define who we are and how we work.
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
                To empower businesses through innovative technology solutions that drive growth, enhance efficiency, and create exceptional user experiences.
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
                To be the go-to partner for businesses seeking to thrive in the digital age, known for our technical excellence, creative thinking, and client-focused approach.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
            {["Innovation", "Excellence", "Integrity", "Collaboration", "Client Focus", "Continuous Learning"].map((value, index) => (
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
            ))}
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
                  <div className="bg-primary-800 p-3 rounded-full">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-primary-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the talented individuals who drive our company forward.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white hover:bg-accent-50 transition duration-300 rounded-lg overflow-hidden shadow-md"
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-gray-600">{member.position}</p>
                </div>
              </motion.div>
            ))}
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
              Our team mainly includes graduates and post-graduate in accounting and finance streams, who have fantastic communication skills...
            </p>
          </motion.div>
        </div>
      </section>

      <ChatButton onClick={handleChatClick} />
    </div>
  );
};

export default AboutPage;
