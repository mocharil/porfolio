import React from 'react';
import Image from 'next/image';
import Marquee from './magicui/marquee';
import { motion } from 'framer-motion';
import ShinyButton from './ShinyButton';

const SkillItem = ({ name, icon }) => {
  return (
    <motion.div 
      className="flex flex-col items-center p-4 bg-gray-800 bg-opacity-60 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:bg-gray-700 hover:bg-opacity-80 w-32 backdrop-filter backdrop-blur-sm"
      whileHover={{ scale: 1.05, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative w-20 h-20 mb-3">
        <Image
          src={`/icons/${icon}`}
          alt={name}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <p className="text-sm font-medium text-blue-300 text-center space-glow">{name}</p>
    </motion.div>
  );
};

const Skills = () => {
  const skills = [
    { name: "Python", icon: "Python.png" },
    { name: "MySQL", icon: "Mysql.png" },
    { name: "GCP", icon: "GCP.png" },
    { name: "FastAPI", icon: "FastAPI.png" },
    { name: "Flask", icon: "Flask.png" },
    { name: "MongoDB", icon: "MongoDB.png" },
    { name: "Docker", icon: "Docker.png" },
    { name: "JavaScript", icon: "JavaScript.png" },
    { name: "Airflow", icon: "Airflow.png" },
    { name: "BigQuery", icon: "BigQuery.png" },
    { name: "Elasticsearch", icon: "Elasticsearch.png" },
    { name: "Kibana", icon: "Kibana.png" },
    { name: "Spark", icon: "Spark.png" },
    { name: "Looker", icon: "Looker.png" },
    { name: "Metabase", icon: "Metabase.png" },
    { name: "Redash", icon: "Redash.png" },
    { name: "ArangoDB", icon: "ArangoDB.png" },
    { name: "OpenAI", icon: "ChatGPT.png" },
    { name: "Claude", icon: "Claude.png" },
    { name: "Gemini", icon: "Gemini.png" },
    { name: "Gephi", icon: "Gephi.png" },
    { name: "Java", icon: "Java.png" },
    { name: "Ollama", icon: "Ollama.png" },
    { name: "Selenium", icon: "Selenium.png" },
    { name: "C++", icon: "C.png" },
    { name: "DocumentAI", icon: "Documentai.png" },
    { name: "GCS", icon: "google cloud storage.png" },
    { name: "Vertex AI", icon: "Vertexai.png" },
    { name: "Firebase", icon: "Firebase.png" },
    { name: "CloudRun", icon: "CloudRun.png" },
    { name: "Archer", icon: "Archer.png" },
  ];

  const halfLength = Math.ceil(skills.length / 2);
  const firstRowSkills = skills.slice(0, halfLength);
  const secondRowSkills = skills.slice(halfLength);

  return (
    <section id="skills" className="py-20 overflow-hidden w-full relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="/background/background_skill.jpeg"
          alt="Space Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      </div>
      <div className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="section-title mb-12 text-5xl font-extrabold text-blue-300 opacity-80 space-glow neon-text"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Cosmic Skills & Space-Age Tools
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="mb-8">
            <Marquee className="py-6" pauseOnHover={true} reverse={true} speed={20}>
              {[...firstRowSkills, ...firstRowSkills].map((skill, index) => (
                <div key={`${skill.name}-${index}`} className="mx-3">
                  <SkillItem {...skill} />
                </div>
              ))}
            </Marquee>
          </div>
          <div className="mb-8">
            <Marquee className="py-6" pauseOnHover={true} speed={20}>
              {[...secondRowSkills, ...secondRowSkills].map((skill, index) => (
                <div key={`${skill.name}-${index}`} className="mx-3">
                  <SkillItem {...skill} />
                </div>
              ))}
            </Marquee>
          </div>
        </motion.div>
        <motion.div 
          className="mt-12 text-center px-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-xl text-blue-300 max-w-3xl mx-auto leading-relaxed space-glow">
            Equipped with cutting-edge technology to navigate the data cosmos and uncover hidden insights across the universe. These tools are the backbone of my interstellar data expeditions.
          </p>
        </motion.div>
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <ShinyButton href="/cv/CV Moch Aril Indra Permana.pdf" download className="text-lg">
            Download CV
          </ShinyButton>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
