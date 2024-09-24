import React from 'react';

const AwardItem = ({ title, issuer, date, description }) => (
  <div className="bg-gray-800 rounded-lg p-6 mb-6 hover:shadow-lg transition-all duration-300">
    <h3 className="text-xl font-semibold text-blue-300 mb-2">{title}</h3>
    <p className="text-gray-400 mb-2">{issuer} | {date}</p>
    <p className="text-gray-300">{description}</p>
  </div>
);

const HonorsAwards = () => {
  const awards = [
    {
      title: "Galactic Data Explorer Award",
      issuer: "Interstellar Data Science Association",
      date: "2023",
      description: "Recognized for groundbreaking contributions in exploring and analyzing complex datasets across the universe."
    },
    {
      title: "AI Innovation Supernova",
      issuer: "Cosmic Machine Learning Institute",
      date: "2022",
      description: "Awarded for developing revolutionary AI algorithms that push the boundaries of space-time data processing."
    },
    // Add more awards here...
  ];

  return (
    <section id="awards" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-6xl font-bold text-center text-blue-400 mb-12 space-glow neon-text">Stellar Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {awards.map((award, index) => (
            <AwardItem key={index} {...award} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-300">
            These cosmic accolades represent milestones in my journey through the data universe, each one a testament to the innovative solutions and discoveries made along the way.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HonorsAwards;