import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ExperienceItem = ({ experience, isActive, onClick, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`flex items-center w-full cursor-pointer transition-all duration-300 ${isActive ? 'scale-105' : 'hover:scale-102'} mb-8`}
      onClick={onClick}
    >
      <div className="w-full text-center flex justify-center">
        <div className={`inline-block bg-gray-800 bg-opacity-75 backdrop-filter backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-blue-500/50 p-4 border border-gray-700 hover:border-blue-400 transition-all duration-300 relative ${isActive ? 'ring-2 ring-blue-500' : ''}`}
             style={{ width: '500px', height: '150px' }}>
          <div className="flex items-center mb-2">
            <div className="relative w-20 h-20 flex-shrink-0 mr-4">
              <Image
                src={experience.logo}
                alt={experience.company}
                layout="fill"
                objectFit="contain"
                className="rounded-full"
              />
            </div>
            <div className="text-left flex-grow">
              <h3 className="text-lg font-semibold text-blue-300 truncate">{experience.position}</h3>
              <p className="text-lg text-gray-400 truncate">{experience.company}</p>
            </div>
          </div>
          <p className="text-s text-gray-300 text-left">{experience.start_date} - {experience.end_date}</p>
        </div>
      </div>
    </motion.div>
  );
};

const TechIcon = ({ tech }) => {
  const iconPath = `/icons/${tech}.png`;
  return (
    <motion.div 
      className="flex flex-col items-center mx-1 mb-2"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="relative w-8 h-8">
        <Image
          src={iconPath}
          alt={tech}
          width={32}
          height={32}
          objectFit="contain"
        />
      </div>
      <span className="text-xs text-gray-300 mt-4 text-center whitespace-nowrap">{tech}</span>
    </motion.div>
  );
};

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const timelineRef = useRef(null);


  const experiences = [
    {
      company: "PT Pakar Digital Global (Paper.id)",
      logo: "/logos/paper_id.png",
      position: "Senior Data Scientist",
      location: "Sunter, North Jakarta",
      type: "Full-Time",
      start_date: "Jun 2023",
      end_date: "Present",
      responsibilities: [
        "Spearheaded the development and deployment of cutting-edge machine learning models, enhancing decision-making and optimizing business processes.",
        "Automated complex data pipelines and streamlined operational workflows, leading to significant efficiency improvements."
      ],
      tech_stacks: [
        "Python", "Airflow", "MySQL", "Metabase", "Looker", "ArangoDB", "VertexAI", "GCP", "DocumentAI", "BigQuery", "FastAPI", "Flask"
      ],
      projects: [
        {
          name: "Script Legacy Improvement & Python Wrapper Development",
          achievements: [
            "Reduced execution time for error detection by 98.33%, utilizing advanced data processing techniques.",
            "Optimized the master segment table process by 80%, enabling faster data retrieval.",
            "Developed the 'askquinta' Python library for automation and standardized error handling, available on PyPi."
          ]
        },
        {
          name: "Modeling and Deployment Dashboard for Item Classification & User Scoring",
          achievements: [
            "Enhanced classification model accuracy from 76% to 93%, leveraging advanced machine learning algorithms.",
            "Implemented a comprehensive scoring system for user segmentation based on transaction patterns."
          ]
        },
        {
          name: "KYC and KYB NWOW Dashboard and Analysis",
          achievements: [
            "Streamlined KYC/KYB data pipeline, significantly improving access for Operations teams.",
            "Introduced a robust data change tracker to enhance monitoring and compliance tracking."
          ]
        },
        {
          name: "Finance Operation & Bank Statement Analysis Dashboard",
          achievements: [
            "Reduced processing time by 98% through the development of a Flask-based interactive dashboard.",
            "Built automated reconciliation and Source of Fund (SOF) selection systems, minimizing manual errors."
          ]
        },
        {
          name: "OCR DocumentAI & Gemini",
          achievements: [
            "Designed an OCR schema for document processing, covering receipts, invoices, and bank statements.",
            "Deployed the OCR API using Gemini Model, resulting in cost reductions and improved performance."
          ]
        },
        {
          name: "Invoice Validation & KYC/KYB Process Automation",
          achievements: [
            "Implemented advanced detection models for signatures, stamps, and duty stamps in document verification.",
            "Built ID card clarity and face similarity scoring models for streamlined KYC processes."
          ]
        }
      ]
    },
    {
      company: "PT Bukalapak.com",
      logo: "/logos/bukalapak.png",
      position: "Assistant Manager Audit Data Analytics",
      location: "South Jakarta",
      type: "Full-Time",
      start_date: "Jan 2022",
      end_date: "Jun 2023",
      responsibilities: [
         "Enhanced data-driven auditing processes, boosting fraud detection capabilities through data science solutions."
      ],
      tech_stacks: [
        "Python", "Airflow", "MySQL", "Redash", "Looker", "BigQuery", "FastAPI", "Flask", "Archer"
      ],
        projects: [
          {
            name: "Audit Dashboard Automation",
            achievements: [
              "Developed automated dashboards using Redash and Looker, increasing auditing efficiency by 70%."
            ]
          },
          {
            name: "Fraud Analysis & Value Audit",
            achievements: [
              "Identified fraudulent activities and performed syndicate detection using network analysis, mitigating potential risks."
            ]
          }
        ]
    },
    {
      company: "PT Telkom Indonesia",
      logo: "/logos/telkom_indonesia.png",
      position: "Data Scientist",
      location: "South Jakarta",
      type: "Full-Time",
      start_date: "Jan 2020",
      end_date: "Dec 2021",
      responsibilities: [
        "Developed advanced analytics solutions and machine learning models."
      ],
      tech_stacks: [
        "Python", "Elasticsearch", "MySQL", "FastAPI", "Flask", "Docker", "Gephi", "Airflow", "Spark","Kibana","JavaScript"
      ],
      projects: [
        {
          name: "Legal Analytics Dashboard",
          achievements: [
            "Led the development of a complete end-to-end data pipeline, handling data extraction, transformation, modeling, and deployment to production.",
            "Scraped data from over 60+ websites to obtain legal documents in PDF format, using advanced web scraping techniques.",
            "Developed custom OCR models to accurately extract text and metadata from complex PDF documents.",
            "Created a structured data model schema from the OCR output and ingested it into a NoSQL database (Elasticsearch), ensuring high scalability and searchability.",
            "Implemented text analytics models, including similarity analysis, sentiment analysis, relevancy scoring, and a plagiarism checker to assess each paragraph of legal texts.",
            "Built a powerful search engine using Elasticsearch integrated with a microservice architecture, providing an API that supports a front-end dashboard for dynamic legal text exploration and comparison.",
            "Designed and developed the front-end dashboard and microservices, allowing end-users to interactively search, filter, and analyze the extracted legal data."
          ]
        },
        {
          name: "Social Media Analysis",
          achievements: [
             "Performed sentiment and network analysis on social media data to provide actionable insights for strategic decision-making and public sentiment tracking."
          ]
        }
      ]
    },
    {
      company: "PT. Indonesia Indicator",
      logo: "/logos/indonesia indicator.jpg",
      position: "Data Scientist",
      location: "South Jakarta",
      type: "Full-Time",
      start_date: "Mar 2018",
      end_date: "Dec 2019",
      responsibilities: [
        "Focused on data-driven solutions for political and brand analysis."
      ],
      tech_stacks: [
        "Python", "Elasticsearch", "MySQL", "MongoDB", "FastAPI", "Flask", "Gephi", "Java", "JavaScript"
      ],
      projects: [
        {
          name: "Political Campaign Profiling & Brand Analysis",
            achievements: [
              "Analyzed and provided strategic insights for political campaigns, leveraging sentiment analysis and social media data."
            ]
        },
        {
          name: "Social Scoring System & Social Media Analysis",
        achievements: [
          "Developed a social scoring system to assess credit risk based on online behavior patterns, aiding financial decisions."
        ]
        }
      ]
    },
    {
      company: "Glints",
      logo: "/logos/Glints.png",
      position: "Webinar Speaker",
      location: "Online",
      type: "Seminar",
      start_date: "2023",
      end_date: "2023",
      responsibilities: [
       "Conducted a series of 14 educational webinars focused on data science and AI, covering various topics from beginner-level programming to advanced machine learning applications.",
        "Delivered interactive sessions designed to provide practical, real-world applications for students and professionals, helping them advance their technical skills.",
        "Engaged with participants to answer questions, provide in-depth insights, and guide them through hands-on coding exercises to reinforce their learning."
      ],
      tech_stacks: [
        "Python", "MySQL", "BigQuery"
      ],
      projects: [
        {
          name: "Data Science Webinar Series",
          achievements: [
            "Hosted a variety of topics, including 'Python for Beginners', 'SQL Fundamentals', 'Data Wrangling with Pandas', and advanced sessions such as 'Linear Regression and Model Evaluation'.",
            "Developed tailored content for each session, ensuring relevance and value for participants ranging from complete beginners to intermediate-level professionals.",
            "Created interactive case studies and coding challenges, resulting in high engagement and positive feedback, with an average satisfaction score of 4.8/5.",
            "Guided over 500+ participants through practical exercises, boosting their confidence in applying data science techniques to solve business problems."
          ]
        },
        {
          name: "AI-Powered Webinars",
          achievements: [
            "Introduced attendees to AI-related topics such as 'Building Intelligent Assistants with GPT-3' and 'Unlocking the Power of Natural Language Processing (NLP) for Text Analysis'.",
            "Provided live demonstrations on using OpenAI APIs for real-world applications, including personal assistants and intelligent chatbots.",
            "Helped participants bridge the gap between theory and implementation, showcasing practical use cases for AI in business scenarios."
          ]
        }
      ]
    },
    {
      company: "Edspert",
      logo: "/logos/Edspert.png",
      position: "Instructor",
      location: "Online",
      type: "Class",
      start_date: "2023",
      end_date: "2023",
     responsibilities: [
        "Delivered an insightful webinar focused on mastering Microsoft Excel to boost career potential, covering essential features and advanced functionalities.",
        "Guided participants through practical Excel use cases, from data cleaning and analysis to financial modeling, helping them enhance their productivity and decision-making skills.",
        "Engaged with attendees through interactive Q&A sessions, providing solutions to common Excel challenges encountered in the workplace."
      ],
        tech_stacks: [
     "Data Analysis", "Data Visualization", "Google Sheet"
  ],
      projects: [
        {
          name: "Excel for Career Advancement: Mastering Excel to Improve Your Career Potential",
          achievements: [
            "Designed the curriculum to cater to both beginners and intermediate users, ensuring a comprehensive understanding of Excel's capabilities.",
            "Explained complex Excel functions such as VLOOKUP, PivotTables, and data visualization techniques with clarity, enabling participants to apply these skills in their professional roles.",
            "Received positive feedback with a 90% satisfaction rate and requests for more advanced Excel sessions, highlighting the impact of the content."
          ]
        }
      ]
    },
    {
      company: "Rumah Siap Kerja",
      logo: "/logos/Rumah Siap Kerja.jpeg",
      position: "Instructor",
      location: "Online",
      type: "Class",
      start_date: "2023",
      end_date: "2023",
      responsibilities: [
        "Designed and led a comprehensive data visualization class tailored for Prakerja participants, consisting of 5 interactive sessions per batch.",
        "Mentored students through each stage of data analysis and visualization, equipping them with practical skills for career advancement in data-related fields."
      ],
      tech_stacks: [
        "Looker", "Google Sheets", "Data Visualization", "Data Analysis"
      ],
      projects: [
        {
          name: "Visualisasi Data menggunakan Google Looker Data Studio",
          achievements: [
            "Created a structured 5-session curriculum focused on introducing data concepts, analysis techniques, and visualization strategies using Google Looker Data Studio.",
            "Conducted Session 1: Introduction to Data, Big Data, Database Concepts, and the Data Analyst Profession, providing foundational knowledge to participants.",
            "Led Session 2: Data Preparation and Cleaning using Google Sheets, covering essential functions, formulas, and data manipulation techniques.",
            "Explained Session 3: Data Analysis using Analytics Tools, where participants learned basic analytical methods and how to derive insights from data.",
            "Taught Session 4: Data Visualization Techniques, focusing on selecting the right charts, graphs, and visual formats for different data types.",
            "Guided Session 5: Building Dashboards in Google Looker Data Studio, helping participants integrate their visualizations into interactive dashboards for reporting and presentations.",
            "Received positive feedback from Prakerja participants for providing practical skills and a deep understanding of data visualization concepts, with a batch completion rate of over 85%."
          ]
        }
      ]
    },
    {
      company: "Pintarin AI",
      logo: "/logos/Pintarin AI.png",
      position: "Webinar Speaker",
      location: "Online",
      type: "Seminar",
      start_date: "2023",
      end_date: "2023",
      responsibilities: [
        "Presented an engaging webinar titled *'Introduction to Data Science'* aimed at providing a solid foundation for beginners entering the field.",
        "Discussed key concepts, applications, and career pathways in data science, highlighting the importance of data-driven decision making."
      ],
      tech_stacks: [
        "Python", "Pandas", "Matplotlib", "Scikit-learn", "Google Colab"
      ],
      projects: [
        {
          name: "Introduction to Data Science Webinar",
          achievements: [
            "Covered core data science topics including data preprocessing, exploratory data analysis, and basic machine learning concepts.",
            "Demonstrated practical coding examples using Python and Pandas to showcase data manipulation techniques.",
            "Guided participants through building a simple machine learning model using Scikit-learn for hands-on learning.",
            "Explained real-world applications of data science in various industries and shared valuable insights on how to kickstart a career in the field.",
            "Received positive feedback from attendees, with an average satisfaction score of 92% for delivering complex topics in an easily digestible format."
          ]
        }
      ]
    }
    ,   
{
  company: "Plabs",
  logo: "/logos/Plabs.jpeg",
  position: "Project Lead",
  location: "Bandung, West Java",
  type: "Project",
  start_date: "2023",
  end_date: "2023",
  responsibilities: [
    "Led the development of the ECLIP application, which stands for *Electronic Clipping*, for the Biro Administrasi Pimpinan Sekretariat Daerah Provinsi Jawa Barat.",
    "Designed an end-to-end solution to automate news monitoring and reporting for issues related to West Java."
  ],
  tech_stacks: [
    "Python", "Elasticsearch", "Selenium", "BeautifulSoup", "Kibana", "Docker"
  ],
  projects: [
    {
      name: "ECLIP (Electronic Clipping)",
      achievements: [
        "Developed a scraping solution targeting over 300+ news websites to collect the latest news articles related to West Java.",
        "Built a structured data model schema for storing and indexing news articles in Elasticsearch for fast retrieval and search.",
        "Implemented a powerful search engine utilizing Elasticsearch's full-text search and custom ranking to surface the most relevant news articles.",
        "Created a dashboard monitoring system using Kibana to provide real-time analytics on the number of news articles, sentiment analysis, and trend tracking.",
        "Streamlined the process of creating daily and weekly reports for the administrative bureau, reducing manual work by over 70% and improving the accuracy of news monitoring.",
        "Enhanced the platform's usability by building a user-friendly Flask-based web interface for managing and searching news records."
      ]
    }
  ]
}
 ].sort((a, b) => new Date(a.start_date) - new Date(b.start_date));

  useEffect(() => {
    if (timelineRef.current) {
      timelineRef.current.scrollTop = 0;
    }
  }, []);

  const handleExperienceClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
    setIsExpanded(index !== activeIndex);

    const clickedItem = document.getElementById(`experience-${index}`);
    if (clickedItem) {
      clickedItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section id="experience" className="py-20 bg-gradient-radial from-gray-900 via-space-800 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/background/background_experience.jpg"
          layout="fill"
          objectFit="cover"
          quality={100}
          alt="Space background"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      <div className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-12 max-w-8xl mx-auto">
      <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-center text-blue-400 mb-12 space-glow neon-text"
        >
          Cosmic Career Journey
        </motion.h2>
        <div className={`flex flex-col md:flex-row gap-8 transition-all duration-500 ${isExpanded ? 'md:translate-x-[-5%]' : ''}`}>
          <motion.div 
            className={`md:w-1/2 mx-auto transition-all duration-500 ${isExpanded ? 'md:w-[45%]' : ''}`}
            layout
          >
            <div className="relative overflow-y-auto max-h-[70vh] scrollbar-hide" ref={timelineRef}>
              {experiences.map((exp, index) => (
                <div id={`experience-${index}`} key={index}>
                  <ExperienceItem 
                    experience={exp} 
                    isActive={index === activeIndex}
                    onClick={() => handleExperienceClick(index)}
                    index={index}
                  />
                </div>
              ))}
            </div>
          </motion.div>
          <AnimatePresence>
            {activeIndex !== null && (
              <motion.div 
                key="details"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.3 }}
                className={`md:w-1/2 transition-all duration-500 ${isExpanded ? 'md:w-[55%]' : 'md:w-0 md:overflow-hidden'}`}
              >
                <div className="bg-gray-800 bg-opacity-75 backdrop-filter backdrop-blur-sm rounded-lg p-4 relative max-w-6xl mx-auto overflow-y-auto max-h-[70vh] scrollbar-hide">
                  <motion.button 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => { setActiveIndex(null); setIsExpanded(false); }}
                    className="absolute top-2 right-2 text-gray-400 hover:text-white"
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </motion.button>
                  <div className="flex flex-col items-center mb-4">
                    <motion.div 
                      className="relative w-24 h-24 sm:w-32 sm:h-32 mb-2"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    >
                      <Image
                        src={experiences[activeIndex].logo}
                        alt={experiences[activeIndex].company}
                        layout="fill"
                        objectFit="contain"
                        className="rounded-full"
                      />
                    </motion.div>
                    <motion.h3 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-xl sm:text-2xl font-semibold text-blue-300 text-center"
                    >
                      {experiences[activeIndex].position}
                    </motion.h3>
                    <motion.p 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-lg sm:text-xl text-gray-300 text-center"
                    >
                      {experiences[activeIndex].company}
                    </motion.p>
                  </div>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-sm sm:text-base text-gray-300 mb-2 text-center"
                  >
                    {experiences[activeIndex].location} | {experiences[activeIndex].type}
                  </motion.p>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-sm sm:text-base text-gray-300 mb-4 text-center"
                  >
                    {experiences[activeIndex].start_date} - {experiences[activeIndex].end_date}
                  </motion.p>
                  <motion.h4 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-sm sm:text-lg font-semibold text-blue-300 mb-2"
                  >
                    Responsibilities:
                  </motion.h4>
                  <motion.ul 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="list-disc list-inside mb-4 text-sm sm:text-base text-gray-300"
                  >
                    {experiences[activeIndex].responsibilities.map((resp, index) => (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                      >
                        {resp}
                      </motion.li>
                    ))}
                  </motion.ul>
                  {experiences[activeIndex].tech_stacks && (
                    <>
                      <motion.h4 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 }}
                        className="text-sm sm:text-lg font-semibold text-blue-300 mb-2"
                      >
                        Tech Stack:
                      </motion.h4>
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9 }}
                        className="flex flex-wrap justify-center gap-2 mb-4"
                      >
                        {experiences[activeIndex].tech_stacks.map((tech, index) => (
                          <TechIcon key={index} tech={tech} />
                        ))}
                      </motion.div>
                    </>
                  )}
                  {experiences[activeIndex].projects && experiences[activeIndex].projects.length > 0 && (
                    <>
                      <motion.h4 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1 }}
                        className="text-sm sm:text-lg font-semibold text-blue-300 mb-2"
                      >
                        Projects:
                      </motion.h4>
                      {experiences[activeIndex].projects.map((project, index) => (
                        <motion.div 
                          key={index} 
                          className="mb-2"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.1 + index * 0.1 }}
                        >
                          <h5 className="text-sm sm:text-base font-semibold text-blue-200 mb-1">{project.name}</h5>
                          <ul className="list-disc list-inside">
                            {project.achievements.map((achievement, idx) => (
                              <li key={idx} className="text-sm sm:text-base text-gray-300">{achievement}</li>
                            ))}
                          </ul>
                        </motion.div>
                      ))}
                    </>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
     
    </section>
  );
};

export default Experience;
