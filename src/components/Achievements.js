import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
// Star icon component
const StarIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    width="16" 
    height="16" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className="text-blue-400"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const AchievementCard = ({ title, event, date, description, index, logo, techStack }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group"
    >
      {/* Orbital Path Effect */}
      <div className="absolute -left-4 top-1/2 w-8 h-8 border-t-2 border-blue-500/30 rounded-full transform -translate-y-1/2" />
      
      {/* Achievement Card */}
      <div className="ml-8 bg-gray-800/70 backdrop-filter backdrop-blur-lg rounded-xl p-6 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-all duration-500 border border-blue-500/20 hover:border-blue-400/50">
        <div className="flex flex-col space-y-4">
          {/* Header with Logo and Title */}
          <div className="flex items-start gap-4">
            {/* Logo Container with Glow Effect */}
            <div className="relative group-hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 bg-blue-500/20 rounded-lg blur-md group-hover:blur-lg transition-all duration-300" />
              <div className="relative w-20 h-20 bg-gray-900/80 rounded-lg p-2 border border-blue-400/30 overflow-hidden">
                <Image
                  src={`/logos/${logo}`}
                  alt={event}
                  layout="fill"
                  objectFit="contain"
                  className="p-2"
                />
              </div>
            </div>
            
            {/* Title and Date Section */}
            <div className="flex-1">
              <div className="flex items-start justify-between flex-wrap gap-2">
                <h3 className="text-xl font-bold text-blue-300 group-hover:text-blue-200 transition-colors duration-300">
                  {title}
                </h3>
                <div className="flex items-center space-x-1 bg-blue-900/40 px-4 py-1 rounded-full border border-blue-500/30">
                  <StarIcon />
                  <span className="text-sm text-blue-300">{date}</span>
                </div>
              </div>
              <p className="text-lg text-blue-100/80 font-medium mt-1">{event}</p>
            </div>
          </div>

          {/* Description with Space Theme */}
          <div className="relative pl-6 border-l-2 border-blue-500/30">
            <div className="absolute left-0 top-0 w-2 h-2 bg-blue-500 rounded-full -translate-x-[5px]" />
            <p className="text-gray-300/90 leading-relaxed">{description}</p>
          </div>

          {/* Tech Stack & Skills */}
          <div className="flex flex-wrap gap-2 pt-2">
            {techStack.map((tech, idx) => (
              <div 
                key={idx} 
                className="bg-blue-900/30 px-3 py-1 rounded-full border border-blue-500/20 text-sm text-blue-300 flex items-center"
              >
                <span className="mr-1">•</span>
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Achievements = () => {
  const achievements = [
    {
      title: "Top 100 Hackathon 'AI for Impact for APAC Region'",
      event: "Hack2skill",
      date: "Dec 2024",
      logo: "ai_for_impact.png",
      description: "Distinguished among top innovators across the APAC region for developing cutting-edge AI solutions that address real-world challenges. The achievement highlights expertise in creating impactful AI applications with regional significance.",
      techStack: ["Python", "GenAI", "Gemini","VertexAI","DocumentAI","MLOps","Next JS","Elasticsearch"]
    },
    {
      title: "Top 3 Hackathon 'IdeMenyala - Hackathon Untuk Jakarta'",
      event: "Jakarta Innovation Challenge",
      date: "Nov 2024",
      logo: "ide_menyala.png",
      description: "Led a team to create innovative solutions for Jakarta's urban challenges, securing a top-3 position. The project demonstrated exceptional problem-solving abilities and practical implementation of technology for urban development.",
      techStack: ["Python", "FastAPI", "Data Analytics", "GCP", "BigQuery", "Smart City Solutions"]
    },
    {
      title: "Top 30 Telkomsel Tech Titans League Series 3",
      event: "Machine Learning Championship",
      date: "Oct 2021",
      logo: "tech_titans.jpg",
      description: "Excelled in advanced machine learning challenges, showcasing proficiency in developing sophisticated algorithms and models. This achievement reflects deep expertise in applying ML solutions to complex business problems.",
      techStack: ["Machine Learning", "Python", "Scikit-learn", "Neural Networks", "Data Preprocessing", "Model Optimization"]
    },
    {
      title: "Top 30 Telkomsel Tech Titans League Series 1",
      event: "Data Science Competition",
      date: "Sep 2021",
      logo: "tech_titans.jpg",
      description: "Recognized for outstanding performance in data science, demonstrating exceptional skills in data analysis, modeling, and problem-solving. The achievement underscores ability to derive meaningful insights from complex datasets.",
      techStack: ["Data Science", "Python", "Pandas", "Statistical Analysis", "Data Visualization", "Predictive Modeling"]
    },
    {
      title: "Top 100 Telkomsel Tech Titans League Series 1",
      event: "Data Analytics Challenge",
      date: "Oct 2020",
      logo: "tech_titans.jpg",
      description: "Selected among top performers in data analytics, showcasing strong capabilities in transforming raw data into actionable business insights. This recognition highlights expertise in analytical thinking and data-driven decision making.",
      techStack: ["Data Analytics", "SQL", "Business Intelligence", "Data Visualization", "ETL", "Dashboard Development"]
    }
  ];

  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      {/* Background with Space Theme */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/background/background_skill.jpeg"
          alt="Achievements Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-blue-400 mb-6 space-glow neon-text">
            Stellar Achievements
          </h2>
          <p className="text-xl text-blue-300/90 max-w-3xl mx-auto space-glow">
            Embarking on a journey through the digital cosmos, each achievement marks a milestone in our mission to push the boundaries of innovation.
          </p>
        </motion.div>
        
        {/* Achievement Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-500/50 to-transparent" />
          
          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <AchievementCard 
                key={index}
                {...achievement}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;