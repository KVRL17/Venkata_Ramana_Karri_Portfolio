import React, { useState, useRef, useEffect } from 'react';
import { SectionHeading } from './SectionHeading';
import { ExternalLink, Github } from 'lucide-react';
import { projectsData } from '../data/projects';

export const Projects: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  return (
    <section id="projects" className="py-20 px-4 bg-black">
      <div className="container mx-auto max-w-6xl" ref={projectsRef}>
        <SectionHeading title="My Projects" subtitle="A showcase of my work and achievements" light />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projectsData.map((project, index) => (
            <div 
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-indigo-500/20 hover:translate-y-[-5px]"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="h-48 bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white px-4 text-center">{project.project_title}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-6 h-24 overflow-hidden">{project.description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2">
                    {project.technologies && project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="inline-block px-3 py-1 text-xs font-semibold bg-gray-700 text-gray-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                        title="View Code"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.visit && (
                      <a 
                        href={project.visit} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                        title="Live Demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};