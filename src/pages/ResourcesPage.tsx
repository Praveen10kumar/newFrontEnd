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
      title: "10 Emerging Technology Trends to Watch in 2025",
      excerpt: "Discover the cutting-edge technologies that will shape businesses and society in the coming year, from quantum computing to extended reality experiences.",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      author: "Alex Johnson",
      date: "July 15, 2025",
      readTime: "8 min read",
      category: "Technology"
    },
    {
      title: "The Complete Guide to Digital Transformation",
      excerpt: "Learn how businesses can successfully navigate the digital transformation journey with practical strategies, case studies, and actionable insights.",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      author: "Sophia Chen",
      date: "June 28, 2025",
      readTime: "12 min read",
      category: "Strategy"
    },
    {
      title: "Cybersecurity Essentials for Small Businesses",
      excerpt: "Protect your small business from cyber threats with these essential security practices, tools, and protocols designed for organizations with limited IT resources.",
      image: "https://images.pexels.com/photos/60504/security-protection-privacy-policy-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      author: "Marcus Williams",
      date: "June 10, 2025",
      readTime: "6 min read",
      category: "Security"
    },
    {
      title: "Building a Customer-Centric Digital Experience",
      excerpt: "Explore strategies for creating digital experiences that put customers at the center, driving engagement, loyalty, and business growth.",
      image: "https://images.pexels.com/photos/1560932/pexels-photo-1560932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      author: "Emma Rodriguez",
      date: "May 22, 2025",
      readTime: "9 min read",
      category: "UX Design"
    },
    {
      title: "How AI is Revolutionizing Data Analytics",
      excerpt: "Explore the transformative impact of artificial intelligence on data analytics and how businesses can leverage AI-powered insights for competitive advantage.",
      image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      author: "David Kumar",
      date: "May 8, 2025",
      readTime: "7 min read",
      category: "Analytics"
    },
    {
      title: "The Future of Work: Remote Collaboration Tools",
      excerpt: "Discover the most effective tools and practices for remote team collaboration that can boost productivity, communication, and employee satisfaction.",
      image: "https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      author: "Olivia Martinez",
      date: "April 17, 2025",
      readTime: "10 min read",
      category: "Productivity"
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
      
      <ChatButton onClick={handleChatClick} />
    </div>
  );
};

export default ResourcesPage;