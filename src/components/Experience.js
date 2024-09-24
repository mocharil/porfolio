import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { XMarkIcon } from '@heroicons/react/24/solid';

const ExperienceItem = ({ experience, isActive, onClick }) => {
  return (
    <div 
      className={`flex items-center w-full cursor-pointer transition-all duration-300 ${isActive ? 'scale-105' : 'hover:scale-102'} mb-8`}
      onClick={onClick}
    >
      <div className="w-full text-center flex justify-center">
        <div className="inline-block bg-gray-800 bg-opacity-75 backdrop-filter backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-blue-500/50 p-4 border border-gray-700 hover:border-blue-400 transition-all duration-300 relative">
          <div className="flex items-center mb-2">
            <div className="relative w-12 h-12 flex-shrink-0 mr-3">
              <Image
                src={experience.logo}
                alt={experience.company}
                layout="fill"
                objectFit="contain"
                className="rounded-full"
              />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-blue-300 truncate">{experience.position}</h3>
              <p className="text-xs text-gray-400 truncate">{experience.company}</p>
            </div>
          </div>
          <p className="text-xs text-gray-300">{experience.start_date} - {experience.end_date}</p>
        </div>
      </div>
    </div>
  );
};

const TechIcon = ({ tech }) => {
  const iconPath = `/icons/${tech}.png`;
  return (
    <div className="flex flex-col items-center mx-1 mb-2">
      <div className="relative w-8 h-8">
        <Image
          src={iconPath}
          alt={tech}
          width={32}
          height={32}
          objectFit="contain"
        />
      </div>
      <span className="text-xs text-gray-300 mt-1">{tech}</span>
    </div>
  );
};

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const timelineRef = useRef(null);
  const rocketRef = useRef(null);

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
        "Develop and deploy machine learning models and advanced analytics solutions.",
        "Optimize script execution, enhance classification models, and streamline operational processes."
      ],
      tech_stacks: [
        "Python", "Airflow", "MySQL", "Metabase", "Looker", "ArangoDB", "VertexAI", "GCP", "DocumentAI", "BigQuery", "FastAPI", "Flask"
      ],
      projects: [
        {
          name: "Script Legacy Improvement & Python Wrapper Development",
          achievements: [
            "Reduced execution time for error seeding detection by 98.33%.",
            "Optimized master segment table process by 80%.",
            "Developed 'askquinta' library, indexed on PyPi."
          ]
        },
        {
          name: "Modeling and Deployment Dashboard for Item Classification & User Scoring",
          achievements: [
            "Increased classification model accuracy from 76% to 83%.",
            "Developed scoring system based on business type and product transactions."
          ]
        },
        {
          name: "KYC and KYB NWOW Dashboard and Analysis",
          achievements: [
            "Optimized data pipeline for easier Ops team access.",
            "Introduced data change tracker for improving monitoring."
          ]
        },
        {
          name: "Finance Operation & Bank Statement Analysis Dashboard",
          achievements: [
            "Reduced process time by 98% with a Flask-based dashboard.",
            "Developed automated reconciliation and Source of Fund selection."
          ]
        },
        {
          name: "OCR DocumentAI & Gemini",
          achievements: [
            "Designed OCR schema and annotated data for receipts, invoices, and bank statements.",
            "Deployed OCR API with Gemini Model, enhancing performance and reducing costs."
          ]
        },
        {
          name: "Invoice Validation & KYC/KYB Process Automation",
          achievements: [
            "Implemented detection of signatures, stamps, and duty stamps.",
            "Developed ID card clarity scoring and face similarity scoring."
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
        "Enhanced data-driven auditing processes and fraud detection mechanisms."
      ],
      tech_stacks: [
        "Python", "Airflow", "MySQL", "Redash", "Looker", "BigQuery", "FastAPI", "Flask", "Archer"
      ],
      projects: [
        {
          name: "Audit Dashboard Automation",
          achievements: [
            "Developed automated dashboards for auditing using Redash and Looker."
          ]
        },
        {
          name: "Fraud Analysis & Value Audit",
          achievements: [
            "Identified fraudulent activities and implemented network analysis to detect syndicates."
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
        "Python", "Elasticsearch", "MySQL", "FastAPI", "Flask", "Docker", "Gephi", "Airflow", "Spark"
      ],
      projects: [
        {
          name: "Legal Analytics Dashboard",
          achievements: [
            "Scraped data from 60+ websites and developed OCR models to extract legal documents."
          ]
        },
        {
          name: "Social Media Analysis",
          achievements: [
            "Performed sentiment analysis and network analysis for decision-making insights."
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
            "Conducted profiling for political campaigns and provided insights on social media strategies."
          ]
        },
        {
          name: "Social Scoring System & Social Media Analysis",
          achievements: [
            "Developed a social scoring system for assessing credit risk using social media data."
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
        "Delivered a comprehensive webinar on advanced data science topics.",
        "Engaged with participants to answer questions and provide insights on industry trends."
      ],
      projects: [
        {
          name: "Data Science in Practice: From Theory to Application",
          achievements: [
            "Presented real-world case studies demonstrating the practical application of data science.",
            "Introduced attendees to cutting-edge tools and methodologies in the field.",
            "Received positive feedback with a 95% satisfaction rate from participants."
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
        "Designed and delivered comprehensive courses on data science and machine learning.",
        "Mentored students through hands-on projects and real-world problem-solving."
      ],
      projects: [
        {
          name: "Machine Learning Bootcamp",
          achievements: [
            "Developed a 12-week curriculum covering fundamental to advanced ML concepts.",
            "Guided students in building end-to-end ML projects using industry-standard tools.",
            "Achieved a 90% course completion rate with high student satisfaction scores."
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
        "Led classes on data science fundamentals and career preparation strategies.",
        "Provided personalized guidance to students transitioning into data-related careers."
      ],
      projects: [
        {
          name: "Data Science Career Jumpstart Program",
          achievements: [
            "Created a comprehensive curriculum blending technical skills with job market insights.",
            "Conducted mock interviews and portfolio reviews to enhance students' job readiness.",
            "Helped 80% of program graduates secure data-related positions within 6 months."
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
        "Presented cutting-edge topics in AI and machine learning to a diverse audience.",
        "Facilitated discussions on the ethical implications and future trends of AI technology."
      ],
      projects: [
        {
          name: "AI Revolution: Navigating the Future of Technology",
          achievements: [
            "Delivered an engaging presentation on the latest advancements in AI and their practical applications.",
            "Conducted a live Q&A session, addressing complex AI concepts in an accessible manner.",
            "Inspired attendees to explore AI integration in their respective fields, as reflected in post-webinar surveys."
          ]
        }
      ]
    },
    {
      company: "Plabs",
      logo: "/logos/Plabs.jpeg",
      position: "Project Lead",
      location: "Bandung, West Java",
      type: "Project",
      start_date: "2023",
      end_date: "2023",
      responsibilities: [
        "Led the development of the ECLIP application for Biro Administrasi Pimpnan Sekretariat Daerah Provinsi Jawa Barat."
      ],
      projects: [
        {
          name: "ECLIP (Electronic Classification and Imaging Processing)",
          achievements: [
            "Developed an application for efficient document management and processing.",
            "Implemented features for document classification and imaging processing.",
            "Streamlined administrative processes for the West Java Provincial Secretariat.",
            "Reduced document processing time by 60% and improved accuracy of classification by 40%."
          ]
        }
      ]
    } ].sort((a, b) => new Date(a.start_date) - new Date(b.start_date));


  useEffect(() => {
    if (timelineRef.current) {
      timelineRef.current.scrollTop = 0;
    }
  }, []);

  // useEffect(() => {
  //   if (rocketRef.current && activeIndex !== null) {
  //     const activeItem = document.getElementById(`experience-${activeIndex}`);
  //     if (activeItem) {
  //       const rect = activeItem.getBoundingClientRect();
  //       const scrollY = window.scrollY || window.pageYOffset;
  //       const targetTop = rect.top + scrollY;
  //       rocketRef.current.style.transform = `translateY(${targetTop}px)`;
  //     }
  //   }
  // }, [activeIndex]);

  const handleExperienceClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
    setIsExpanded(index !== activeIndex);

    // Scroll to the clicked item
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
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center text-blue-400 mb-12 space-glow neon-text">Flight Log</h2>
        <div className={`flex flex-col md:flex-row gap-8 transition-all duration-500 ${isExpanded ? 'md:translate-x-[-5%]' : ''}`}>
          <div className={`md:w-1/2 mx-auto transition-all duration-500 ${isExpanded ? 'md:w-[45%]' : ''}`}>
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-500 transform -translate-x-1/2"></div>
            <div className="relative overflow-y-auto max-h-[70vh] scrollbar-hide" ref={timelineRef}>
              {experiences.map((exp, index) => (
                <div id={`experience-${index}`} key={index}>
                  <ExperienceItem 
                    experience={exp} 
                    isActive={index === activeIndex}
                    onClick={() => handleExperienceClick(index)}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className={`md:w-1/2 transition-all duration-500 ${isExpanded ? 'md:w-[55%]' : 'md:w-0 md:overflow-hidden'}`}>
            {activeIndex !== null && (
              <div className="bg-gray-800 bg-opacity-75 backdrop-filter backdrop-blur-sm rounded-lg p-4 relative max-w-6xl mx-auto overflow-y-auto max-h-[70vh] scrollbar-hide">
                <button 
                  onClick={() => { setActiveIndex(null); setIsExpanded(false); }}
                  className="absolute top-2 right-2 text-gray-400 hover:text-white"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
                <div className="flex flex-col items-center mb-4">
                  <div className="relative w-24 h-24 sm:w-32 sm:h-32 mb-2">
                    <Image
                      src={experiences[activeIndex].logo}
                      alt={experiences[activeIndex].company}
                      layout="fill"
                      objectFit="contain"
                      className="rounded-full"
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-blue-300 text-center">{experiences[activeIndex].position}</h3>
                  <p className="text-lg sm:text-xl text-gray-300 text-center">{experiences[activeIndex].company}</p>
                </div>
                <p className="text-sm sm:text-base text-gray-300 mb-2 text-center">{experiences[activeIndex].location} | {experiences[activeIndex].type}</p>
                <p className="text-sm sm:text-base text-gray-300 mb-4 text-center">{experiences[activeIndex].start_date} - {experiences[activeIndex].end_date}</p>
                <h4 className="text-sm sm:text-lg font-semibold text-blue-300 mb-2">Responsibilities:</h4>
                <ul className="list-disc list-inside mb-4 text-sm sm:text-base text-gray-300">
                  {experiences[activeIndex].responsibilities.map((resp, index) => (
                    <li key={index}>{resp}</li>
                  ))}
                </ul>
                {experiences[activeIndex].tech_stacks && (
                  <>
                    <h4 className="text-sm sm:text-lg font-semibold text-blue-300 mb-2">Tech Stack:</h4>
                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                      {experiences[activeIndex].tech_stacks.map((tech, index) => (
                        <TechIcon key={index} tech={tech} />
                      ))}
                    </div>
                  </>
                )}
                {experiences[activeIndex].projects && experiences[activeIndex].projects.length > 0 && (
                  <>
                    <h4 className="text-sm sm:text-lg font-semibold text-blue-300 mb-2">Projects:</h4>
                    {experiences[activeIndex].projects.map((project, index) => (
                      <div key={index} className="mb-2">
                        <h5 className="text-sm sm:text-base font-semibold text-blue-200 mb-1">{project.name}</h5>
                        <ul className="list-disc list-inside">
                          {project.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-sm sm:text-base text-gray-300">{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <div
        ref={rocketRef}
        className={`fixed right-0 w-24 h-24 md:w-32 md:h-32 z-20 transition-all duration-500 ${
          isExpanded ? 'md:right-[55%]' : ''
        }`}
        style={{ transition: 'transform 0.5s ease-in-out' }}
      >
        <Image
          src="/background/rocket.gif"
          layout="fill"
          objectFit="contain"
          alt="Rocket"
        />
      </div>
    </section>
  );
};

export default Experience;
