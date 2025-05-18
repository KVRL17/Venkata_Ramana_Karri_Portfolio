import React, { useRef, useEffect } from 'react';
import { SectionHeading } from './SectionHeading';
import { Calendar } from 'lucide-react';

export const Activities: React.FC = () => {
  const activitiesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );

    if (activitiesRef.current) {
      observer.observe(activitiesRef.current);
    }

    return () => {
      if (activitiesRef.current) {
        observer.unobserve(activitiesRef.current);
      }
    };
  }, []);

  return (
    <section id="activities" className="py-20 px-4 bg-gray-900">
      <div className="container mx-auto max-w-4xl" ref={activitiesRef}>
        <SectionHeading title="Activities" subtitle="My involvements and contributions" />
        
        <div className="mt-12">
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-indigo-500/20 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-indigo-600 rounded-full mr-4">
                <Calendar size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Main Coordinator</h3>
                <p className="text-indigo-400">ITYUKTA 2K23 Technical Fest</p>
              </div>
            </div>
            
            <div className="ml-16">
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Led the organization and execution of the technical fest</li>
                <li>Managed teams and ensured successful event delivery</li>
                <li>
                  Website: 
                  <a 
                    href="https://www.ityukta2k23.org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:text-indigo-300 ml-2"
                  >
                    www.ityukta2k23.org
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};