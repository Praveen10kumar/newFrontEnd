import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock,Facebook, Twitter, Instagram, Linkedin  } from 'lucide-react';

import Banner from '../components/Banner';
import ContactForm from '../components/ContactForm';
import ChatButton from '../components/ChatButton';

 const handleChatClick = () => {
    // For demonstration purposes only - would use react-router in a real app
    console.log('Navigating to contact page');
    window.location.href = '/contact';
  };

const ContactPage: React.FC = () => {
  const bannerImage = "https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  
  const contactInfo = [
    {
      icon: <MapPin size={24} className="text-primary-500" />,
      title: "Our Location",
      details: "C-399 Pareek College Road Near Sindhi Camp,Jaipur – 302016 INDIA"},
    {
      icon: <Phone size={24} className="text-primary-500" />,
      title: "Phone Number",
      details: "+1 (555) 123-4567"
    },
    {
      icon: <Mail size={24} className="text-primary-500" />,
      title: "Email Address",
      details: "Contact@Singhalnitinassociates.com"
    },
    {
      icon: <Clock size={24} className="text-primary-500" />,
      title: "Business Hours",
      details: "Monday - Friday: 9:00 AM - 6:00 PM"
    }
  ];

  return (
    <div className='bg-blue-50 pt-20'>
      <Banner 
        title="Contact Us" 
        subtitle="We'd love to hear from you" 
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              Have a question or want to discuss a project? We're here to help! Fill out the form below or use the contact information to reach out to us.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
            
            <div>
              <div className="bg-secondary-50 rounded-xl p-6 md:p-8 shadow-sm mb-8">
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex"
                    >
                      <div className="flex-shrink-0 mt-1">
                        {item.icon}
                      </div>
                      <div className="ml-4">
                        <h4 className="font-medium text-secondary-900 mb-1">{item.title}</h4>
                        <p className="text-secondary-600">{item.details}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-primary-600 text-white rounded-xl p-6 md:p-8 shadow-md"
              >
                <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
                <p className="mb-6">
                  Follow us on social media to stay updated with our latest news, projects, and insights.
                </p>
                  <div className="flex space-x-4">
                    {[
                      { name: 'facebook', url: 'https://www.facebook.com/nitin.singhal.75098?mibextid=wwXIfr&rdid=054tPrbFgnT2hw0N&share_url=https%253A%252F%252Fwww.facebook.com%252Fshare%252F1C1CVydtwN%252F%253Fmibextid%253DwwXIfr#' },
                      { name: 'twitter', url: '#' },
                      { name: 'instagram', url: '#' },
                      { name: 'linkedin', url: 'http://linkedin.com/in/nitinn-singhal' },
                    ].map((platform) => (
                      <a
                        key={platform.name}
                        href={platform.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                        aria-label={`Follow us on ${platform.name}`}
                      >
                        <span className="capitalize">{platform.name[0]}</span>
                      </a>
                    ))}
                  </div>

              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-secondary-600 max-w-2xl mx-auto mb-12">
              Find answers to commonly asked questions about our services and processes.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            {[
              {
                question: "What types of businesses do you work with?",
                answer: "We work with a wide range of businesses—from startups and solo entrepreneurs to established small and mid-sized companies. Our clients include e-commerce shops, law firms, healthcare practices, real estate agencies, and nonprofits."
              },
              {
                question: "Do you work with businesses in all states?",
                answer: "Yes, we serve clients across the United States. Our cloud-based accounting tools and virtual team allow us to support businesses regardless of location while staying compliant with local tax regulations."
              },
              {
                question: "What bookkeeping software do you use?",
                answer: "We primarily use QuickBooks Online and Xero, but we’re also experienced with platforms like FreshBooks, Wave, and NetSuite. We recommend tools based on what’s best for your specific business needs."
              },
              {
                question: "Can you work with my existing accountant or tax preparer?",
                answer: "Absolutely. We often collaborate with in-house accountants or external CPAs and tax professionals to ensure seamless financial reporting and compliance for our clients."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-lg font-semibold mb-3 text-secondary-900">{faq.question}</h3>
                <p className="text-secondary-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-secondary-600 max-w-2xl mx-auto mb-8">
              Let's collaborate to bring your ideas to life. Contact us today to schedule a consultation.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-medium px-6 py-3 rounded-md transition-colors"
            >
              Get Started
            </motion.a>
          </motion.div>
        </div>
      </section>

      <ChatButton />
    </div>
  );
};

export default ContactPage;