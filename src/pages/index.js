import React, { useRef, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import AboutMe from '../components/AboutMe';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import HonorsAwards from '../components/HonorsAwards';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ShinyButton from '../components/ShinyButton';
import ChatBot from '../components/ChatBot';
import { motion } from 'framer-motion';

export default function Home() {
  const missionBriefRef = useRef(null);

  const scrollToMissionBrief = () => {
    missionBriefRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const createStars = () => {
      const starsContainer = document.createElement('div');
      starsContainer.className = 'fixed inset-0 pointer-events-none z-0';
      for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        starsContainer.appendChild(star);
      }
      document.body.appendChild(starsContainer);
    };

    createStars();
  }, []);

  return (
    <div className="bg-black text-white min-h-screen cosmic-bg">
      <Head>
        <title>Moch. Aril Indra Permana - Data Scientist Portfolio</title>
        <meta name="description" content="Senior Data Scientist portfolio showcasing expertise in machine learning, data analytics, and AI solutions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="pt-16">
        <section className="h-screen flex items-center justify-center bg-[url('/background/background_mission.jpg')] bg-cover bg-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <motion.h1 
              className="text-6xl font-bold mb-4 space-glow neon-text"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Moch. Aril Indra Permana
            </motion.h1>
            <motion.p 
              className="text-2xl mb-8 text-blue-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Data Scientist Exploring the Universe of Information
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <ShinyButton onClick={scrollToMissionBrief} className="text-lg">
                Launch into My Work
              </ShinyButton>
            </motion.div>
          </div>
          <motion.div
            className="absolute bottom-10 right-10 w-32 h-32"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <Image
              src="/background/rocket.gif"
              alt="Rocket"
              layout="fill"
              objectFit="contain"
            />
          </motion.div>
        </section>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="gate-effect"
          ref={missionBriefRef}
        >
          <AboutMe />
          <Experience />
          <Skills />
          <HonorsAwards />
          <Contact />
        </motion.div>
      </main>

      <Footer />
      <ChatBot />
    </div>
  );
}