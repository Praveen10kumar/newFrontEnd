import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import Banner from '../components/Banner';
import BlogCard from '../components/BlogCard';
import FAQSection from '../components/FAQSection';
import ResourceSidebar from '../components/ResourceSidebar';
import ResourceTabs from '../components/ResourceTabs';
import ChatButton from '../components/ChatButton';

const ResourcesPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('blogs');
  const [isMobile, setIsMobile] = useState(false);
  
  // In a real app, this would come from a router
  const handleChatClick = () => {
    // For demonstration purposes only - would use react-router in a real app
    console.log('Navigating to contact page');
    window.location.href = '/contact';
  };

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  const bannerImage = "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  
  const blogPosts = [
  {
    title: "Top 10 Bookkeeping Tips for Small Businesses in 2025",
    excerpt: "Stay on top of your finances with these essential bookkeeping strategies designed to help small business owners stay organized and compliant.",
    image: "https://images.pexels.com/photos/6693655/pexels-photo-6693655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    author: "Emma Walker",
    date: "July 15, 2025",
    readTime: "6 min read",
    category: "Bookkeeping"
  },
  {
    title: "How to Choose the Right Accounting Software",
    excerpt: "From QuickBooks to Xero, we compare the most popular accounting platforms to help you find the best fit for your business.",
    image: "https://images.pexels.com/photos/6693644/pexels-photo-6693644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    author: "Liam Patel",
    date: "July 1, 2025",
    readTime: "7 min read",
    category: "Technology"
  },
  {
    title: "Understanding Financial Statements: A Beginner’s Guide",
    excerpt: "Learn how to read and interpret income statements, balance sheets, and cash flow statements to make smarter financial decisions.",
    image: "https://images.pexels.com/photos/6693673/pexels-photo-6693673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    author: "Sophia Lin",
    date: "June 20, 2025",
    readTime: "8 min read",
    category: "Finance"
  },
  {
    title: "Tax Planning Strategies Every Business Should Know",
    excerpt: "Minimize your tax burden legally and efficiently with these proactive tax planning tips for entrepreneurs and small business owners.",
    image: "https://images.pexels.com/photos/4386369/pexels-photo-4386369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    author: "James Nguyen",
    date: "May 30, 2025",
    readTime: "9 min read",
    category: "Tax"
  },
  {
    title: "Cash Flow Management: Keep Your Business Financially Healthy",
    excerpt: "Master your cash flow with proven techniques to ensure your business has enough liquidity to meet its obligations and grow sustainably.",
    image: "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    author: "Natalie Brooks",
    date: "May 15, 2025",
    readTime: "7 min read",
    category: "Cash Flow"
  },
  {
    title: "Why Monthly Reconciliation Is Crucial for Your Business",
    excerpt: "Avoid financial surprises by learning the importance of monthly bank reconciliations and how they contribute to financial accuracy.",
    image: "https://images.pexels.com/photos/6693670/pexels-photo-6693670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    author: "Carlos Rivera",
    date: "April 28, 2025",
    readTime: "5 min read",
    category: "Operations"
  }
];

  return (
    <div>
      <Banner 
        title="Resources" 
        subtitle="Insights, guides, and answers to help your business thrive" 
        backgroundImage={bannerImage}
        height="h-[40vh]"
      />
      
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {isMobile && (
              <ResourceTabs 
                activeSection={activeSection}
                onSectionChange={setActiveSection}
              />
            )}

            <div className="flex flex-col md:flex-row gap-8">
              {!isMobile && (
                <div className="md:w-1/4">
                  <ResourceSidebar 
                    activeSection={activeSection}
                    onSectionChange={setActiveSection}
                  />
                </div>
              )}
              
              <div className="md:w-3/4">
                {activeSection === 'blogs' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="mb-8">
                      <h2 className="text-3xl font-bold mb-6">Latest Blog Posts</h2>
                      <p className="text-gray-600 mb-8">
                        Stay up to date with the latest trends, insights, and best practices in technology and digital innovation.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                        {blogPosts.map((post, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                          >
                            <BlogCard {...post} />
                          </motion.div>
                        ))}
                      </div>
                      
                      <div className="mt-10 text-center">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-primary-600 text-white font-medium px-6 py-3 rounded-md hover:bg-primary-700 transition-colors"
                        >
                          View All Blog Posts
                        </motion.button>
                      </div>
                    </div>
                    
                    <div className="mt-16">
                      <FAQSection />
                    </div>
                  </motion.div>
                )}
                
                {activeSection === 'faqs' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="mb-8">
                      <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
                      <p className="text-gray-600 mb-8">
                        Find quick answers to common questions about our services, process, and approach.
                      </p>
                      
                      <FAQSection />
                    </div>
                    
                    <div className="mt-16 bg-gray-50 rounded-lg p-8 border border-gray-200">
                      <h3 className="text-xl font-semibold mb-4">Still Have Questions?</h3>
                      <p className="text-gray-600 mb-6">
                        Our team is ready to help you find the answers you need. Reach out to us for personalized assistance.
                      </p>
                      <motion.a
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        href="/contact"
                        className="inline-block bg-primary-600 text-white font-medium px-6 py-3 rounded-md hover:bg-primary-700 transition-colors"
                      >
                        Contact Us
                      </motion.a>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-primary-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-primary-100 max-w-2xl mx-auto mb-8">
              Get the latest insights, tips, and resources delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 rounded-md flex-grow text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-300"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-800 font-medium px-6 py-3 rounded-md hover:bg-primary-50 transition-colors"
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

export default ResourcesPage;