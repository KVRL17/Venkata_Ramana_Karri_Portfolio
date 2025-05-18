import React, { useState, useEffect, useRef } from 'react';
import { SectionHeading } from './SectionHeading';

export const About: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>('Skills');
  const aboutRef = useRef<HTMLDivElement>(null);
  const tabs = ['Skills', 'Education', 'Experience', 'Certificates', 'Internships'];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  const tabContent = {
    Skills: (
      <div className="space-y-3">
        <p className="flex"><span className="font-semibold w-64">Programming Languages:</span> Java</p>
        <p className="flex"><span className="font-semibold w-64">Web and user interface design:</span> HTML, CSS, JavaScript</p>
        <p className="flex"><span className="font-semibold w-64">Frameworks:</span> React, Node</p>
        <p className="flex"><span className="font-semibold w-64">Database:</span> MySQL</p>
      </div>
    ),
    Experience: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-indigo-400">Puzzle Diplomats – Web Designer & Developer</h3>
          <p className="text-gray-400 italic mb-3">Remote, India | Sep 2024 – Jan 2025</p>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Designed and deployed 3+ responsive websites, improving mobile usability scores by over 40% through performance optimization techniques.</li>
            <li>Enhanced page load speeds by 30% by optimizing images, implementing lazy loading, and eliminating unused JavaScript/CSS.</li>
            <li>Collaborated with designers and clients to deliver all projects 2–3 days ahead of schedule.</li>
          </ul>
        </div>
      </div>
    ),
    Education: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-indigo-400">B.Tech in Information Technology</h3>
          <p className="text-gray-400 italic mb-1">JNTU-GV College of Engineering</p>
          <p className="text-gray-300">2020-2024</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-indigo-400">Intermediate in MPC</h3>
          <p className="text-gray-400 italic mb-1">Sri Chaitanya Junior College, Visakhapatnam</p>
          <p className="text-gray-300">2018-2020</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-indigo-400">SSC</h3>
          <p className="text-gray-400 italic mb-1">Sri Chaitanya Techno School, Anakapalli</p>
          <p className="text-gray-300">2018</p>
        </div>
      </div>
    ),
    Certificates: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-indigo-400">Database Management Systems</h3>
          <p className="text-gray-300">During the course of eight weeks, NTPEL will work with IITs to teach students how to use and execute queries on databases using SQL</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-indigo-400">Java Fundamentals, Oracle Academy</h3>
        </div>
      </div>
    ),
    Internships: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-indigo-400">Datavalley India Pvt Ltd – Full Stack Development Intern</h3>
          <p className="text-gray-400 italic mb-3">Remote, India | Dec 2023 – Apr 2024</p>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Developed full-stack features using Spring Boot, Angular, and Java, reducing API response times by 25%.</li>
            <li>Improved user engagement by 15% by contributing to a real-time multi-module web app.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-indigo-400">Miracle Software Systems – Java Full Stack Intern</h3>
          <p className="text-gray-400 italic mb-3">Bhogapuram, India | May 2023 – Jun 2023</p>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Completed 45-day intensive training in Java, Spring Boot, Angular, and MySQL.</li>
            <li>Built a full-stack capstone web app with login, DB integration, and responsive UI – achieved 100% test pass rate.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-indigo-400">Salesforce Developer Virtual Internship</h3>
          <p className="text-gray-400 italic mb-3">Jul 2022 – Sep 2022</p>
          <p className="text-gray-300">Successfully completed virtual internship program AICTE partnered with Salesforce for a 2-month virtual internship, focusing on crafting applications with Salesforce cloud technology.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-indigo-400">The Sparks Foundation, Web Development Intern</h3>
          <p className="text-gray-400 italic mb-3">Jul 2022 – Jul 2022</p>
          <p className="text-gray-300">I undertook a dynamic one month virtual internship with the Sparks Foundation, specializing in frontend development. During this experience, I crafted a captivating frontend project titled 'Mother_Teresa Foundation'. Developed Payment Gateway Integration</p>
        </div>
      </div>
    )
  };

  return (
    <section id="about" className="py-20 px-4 bg-gray-900">
      <div className="container mx-auto max-w-4xl" ref={aboutRef}>
        <SectionHeading title="About Me" subtitle="Get to know my background and skills" />
        
        <div className="mt-8 text-gray-300 leading-relaxed">
          <p className="text-lg mb-8">
            Dedicated and adaptable IT professional with a strong analytical mindset, seeking a role that
            enables me to contribute my skills to drive organizational growth. I thrive in
            dynamic environments, quickly assimilating new concepts and technologies to drive
            innovation.
          </p>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`px-4 py-2 rounded-md transition-colors duration-300 ${
                  selectedTab === tab
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg min-h-[300px] animate-fade-in">
            {tabContent[selectedTab as keyof typeof tabContent]}
          </div>
        </div>
      </div>
    </section>
  );
};