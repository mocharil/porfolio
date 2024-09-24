import React from 'react';
import Image from 'next/image';
import TextRevealByWord from './TextRevealByWord';
import { motion } from 'framer-motion';

const AboutMe = () => {
  const missionBriefText = `Greetings, fellow space explorers! I'm Moch. Aril Indra Permana, a Senior Data Scientist on a mission to navigate the vast universe of information. With a background in Physics and extensive experience in data science, I've embarked on countless data-driven adventures, charting new territories in machine learning and advanced analytics.`;

  return (
    <section id="about" className="relative py-12 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/background/mission_background.jpg"
          alt="Space Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      </div>
      <div className="relative z-10 w-3/4 h-full max-w-1xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="section-title mb-4 neon-text"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Mission Brief
        </motion.h2>
        <div className="text-white">
          <TextRevealByWord text={missionBriefText} className="mb-4 text-xl lg:text-2xl" />
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-xl lg:text-2xl leading-relaxed space-glow">
              My expertise lies in piloting cutting-edge technologies and methodologies to extract cosmic insights from complex datasets. I've successfully launched numerous scalable solutions that propel businesses to new heights and enhance decision-making processes across the galaxy.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
              <motion.div
                className="card hover:bg-opacity-90 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <h3 className="text-2xl font-semibold mb-3 text-blue-300">Cosmic Skills</h3>
                <ul className="list-none space-y-2 text-lg">
                  <li className="flex items-center space-x-2">
                    <span className="text-blue-400">🚀</span>
                    <span>Intergalactic Machine Learning</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-purple-400">🌌</span>
                    <span>Nebula Data Analytics</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-400">🤖</span>
                    <span>Artificial Intelligence Navigation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-red-400">💥</span>
                    <span>Big Data Supernova Processing</span>
                  </li>
                </ul>
              </motion.div>
              <motion.div
                className="card hover:bg-opacity-90 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <h3 className="text-2xl font-semibold mb-3 text-blue-300">Space-Age Tools</h3>
                <ul className="list-none space-y-2 text-lg">
                  <li className="flex items-center space-x-2">
                    <span className="text-yellow-400">🐍</span>
                    <span>Python, R, SQL Propulsion Systems</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-blue-400">🧠</span>
                    <span>TensorFlow, PyTorch, Scikit-learn Warp Drives</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-orange-400">🐘</span>
                    <span>Hadoop, Spark Quantum Computers</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-cyan-400">☁️</span>
                    <span>Cloud Platforms (AWS, GCP) Space Stations</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;