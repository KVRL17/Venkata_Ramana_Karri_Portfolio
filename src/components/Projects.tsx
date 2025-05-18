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
              className="bg-[#1f1f1f] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="h-48 bg-[#2d2d2d] flex items-center justify-center">
                <h3 className="text-xl font-semibold text-white px-4 text-center">{project.project_title}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-4 h-24 overflow-hidden">{project.description}</p>
                <div className="flex justify-between items-center mt-4">
                  {/* <div className="flex flex-wrap gap-2">
                    {project.technologies && project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium bg-gray-700 text-gray-200 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div> */}
                  <div className="flex space-x-3">
                    {project.github && (
                      <button
                        onClick={() => window.open(project.github, "_blank", "noopener,noreferrer")}
                        className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 transition-colors duration-300"
                        title="View Code"
                      >
                        View Code
                      </button>
                    )}
                    {project.visit && (
                      <button
                        onClick={() => window.open(project.visit, "_blank", "noopener,noreferrer")}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-gray-500 transition-colors duration-300"
                        title="Live Demo"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </button>
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