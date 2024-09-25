import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const ShinyButton = dynamic(() => import('./ShinyButton'), { ssr: false });

const ContactItem = ({ icon, label, value, link }) => (
  <div className="flex items-center mb-6 hover:bg-blue-900 hover:bg-opacity-30 p-2 rounded-lg transition duration-300">
    <Image src={`/icons/${icon}`} alt={label} width={32} height={32} className="mr-4" />
    <div>
      <strong className="text-blue-300 text-lg">{label}:</strong>{' '}
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-lg hover:text-blue-400 transition duration-300">
          {value}
        </a>
      ) : (
        <span className="text-lg">{value}</span>
      )}
    </div>
  </div>
);

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="/background/background_contact.jpg"
          alt="Contact Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-5xl font-bold text-center text-blue-400 mb-12 glow-text">Communication Hub</h2>
        <div className="max-w-4xl mx-auto text-white">
          <p className="text-center mb-12 text-xl">
            Ready to embark on an interstellar data journey? Transmit your message across the cosmos!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-900 bg-opacity-50 p-8 rounded-lg backdrop-filter backdrop-blur-sm border border-blue-500 border-opacity-30">
              <h3 className="text-3xl font-semibold mb-6 text-blue-300">Cosmic Coordinates</h3>
              <ContactItem 
                icon="email.png"
                label="Subspace Frequency" 
                value="arilindra21@gmail.com" 
                link="mailto:arilindra21@gmail.com"
              />
              <ContactItem 
                icon="WhatsApp.png" 
                label="Space-Time Communicator" 
                value="+6282118454945" 
                link="https://api.whatsapp.com/send?phone=6282118454945&text=Hi%20Aril"
              />
              <ContactItem 
                icon="location.png" 
                label="Galactic Sector" 
                value="Jakarta, Indonesia" 
              />
            </div>
            <div className="bg-gray-900 bg-opacity-50 p-8 rounded-lg backdrop-filter backdrop-blur-sm border border-blue-500 border-opacity-30">
              <h3 className="text-3xl font-semibold mb-6 text-blue-300">Interstellar Networks</h3>
              <ContactItem 
                icon="linkedin.png" 
                label="LinkedIn Nebula" 
                value="Moch. Aril Indra Permana" 
                link="https://www.linkedin.com/in/moch-aril-indra-permana-52887b138/"
              />
              <ContactItem 
                icon="github.png" 
                label="GitHub Galaxy" 
                value="Mocharil" 
                link="https://github.com/Mocharil"
              />
              <ContactItem 
                icon="instagram.png"
                label="Instagram Constellation" 
                value="@moch_ariel" 
                link="https://www.instagram.com/moch_ariel/"
              />
            </div>
          </div>
          <div className="mt-16 text-center">
            <ShinyButton
              href="https://api.whatsapp.com/send?phone=6282118454945&text=Hi%20Aril"
              className="text-xl"
            >
              Launch Message Pod
            </ShinyButton>
          </div>
        </div>
      </div>
      <style jsx>{`
        .glow-text {
           color: #fff;
            text-shadow:
                0 0 5px #fff,
                0 0 10px #fff,
                0 0 20px #fff,
                0 0 40px #0ff,
                0 0 80px #0ff,
                0 0 90px #0ff,
                0 0 100px #0ff,
                0 0 150px #0ff;
        }
      `}</style>
    </section>
  );
};

export default Contact;

