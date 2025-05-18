import React, { useRef, useEffect } from 'react';
import { SectionHeading } from './SectionHeading';
import { Mail, Linkedin, Instagram, Github } from 'lucide-react';

export const Contact: React.FC = () => {
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  const contactLinks = [
    {
      name: 'Email',
      icon: <Mail size={20} />,
      href: 'mailto:venkataramanakarri.official@gmail.com',
      label: 'venkataramanakarri.official@gmail.com'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={20} />,
      href: 'https://www.linkedin.com/in/venkata-ramana-karri/',
      label: 'venkata-ramana-karri'
    },
    // {
    //   name: 'Instagram',
    //   icon: <Instagram size={20} />,
    //   href: 'https://www.instagram.com/official_rk_17/',
    //   label: '@official_rk_17'
    // },
    {
      name: 'GitHub',
      icon: <Github size={20} />,
      href: 'https://github.com/KVRL17',
      label: 'KVRL17'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-black">
      <div className="container mx-auto max-w-4xl" ref={contactRef}>
        <SectionHeading title="Get In Touch" subtitle="Let's connect and discuss opportunities" light />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
            <ul className="space-y-4">
              {contactLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-indigo-400 transition-colors duration-300"
                  >
                    <span className="mr-3 text-indigo-400">{link.icon}</span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-white mb-4">Quick Message</h3>
            <form 
              action="https://formsubmit.co/venkataramanakarri.official@gmail.com" 
              method="POST"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_autoresponse" value="Thank you for reaching out! I will get back to you soon." />
              {/* <input type="hidden" name="_next" value="https://your-portfolio-url.com/thank-you" /> */}
              
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  required
                  className="w-full bg-gray-700 text-white rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Your name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  required
                  className="w-full bg-gray-700 text-white rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Your email"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows={4}
                  required
                  className="w-full bg-gray-700 text-white rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};