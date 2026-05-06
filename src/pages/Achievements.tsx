import { motion } from 'motion/react';
import { Download, Award } from 'lucide-react';

const certificates = [
  {
    id: 'acces-2024',
    title: 'ACCES 2024 MASTERCLASSES',
    issuer: 'Music In Africa Foundation',
    date: '16 November 2024',
    description: 'Prestigious masterclass participation covering advanced music business strategies including digital music distribution platforms, music publishing rights, royalty maximization techniques, and global songwriting revenue streams. This intensive training provided insights into the African music industry\'s commercial landscape and international market expansion strategies.',
    image: '/Byringiro Heritier (1).pdf',
    type: 'pdf'
  },
    ];

export default function Achievements() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="max-w-6xl mx-auto"
    >
      <div className="mb-20">
        <h1 className="text-5xl md:text-8xl mb-8 leading-none">ACHIEVEMENTS.</h1>
        <p className="text-sm md:text-base text-accent font-light max-w-2xl leading-relaxed">
          A collection of certifications and recognition markers from my journey in music production and sound engineering. Continuous learning is at the heart of my craft.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        {certificates.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.2 }}
            className="group"
          >
            {cert.image && cert.type === 'pdf' ? (
              <div className="aspect-[4/3] bg-gray-50 mb-8 border border-gray-100 overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 mx-auto mb-6 bg-fg text-bg rounded-lg flex items-center justify-center">
                      <Download size={32} />
                    </div>
                    <h4 className="text-lg font-bold text-fg mb-2">{cert.title}</h4>
                    <p className="text-sm text-accent mb-4">Certificate PDF</p>
                    <p className="text-xs text-accent/70 mb-6">Click below to view the full certificate document</p>
                  </div>
                </div>
              </div>
            ) : cert.image ? (
              <div className="project-image-container aspect-[4/3] bg-gray-50 mb-8 border border-gray-100">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-contain p-4 grayscale group-hover:grayscale-0 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
            ) : (
              <div className="aspect-[4/3] bg-gray-50 mb-8 flex flex-col items-center justify-center border border-gray-100 p-12 text-center group-hover:bg-gray-100 transition-colors duration-700">
                <Award size={48} className="text-gray-200 mb-6" />
                <p className="text-[10px] tracking-[0.3em] font-bold text-gray-300 uppercase">Certificate Document Coming Soon</p>
              </div>
            )}

            <div className="space-y-4">
              <div className="flex justify-between items-start border-b border-gray-100 pb-2">
                <div>
                  <h3 className="text-xl md:text-2xl uppercase tracking-wider">{cert.title}</h3>
                  <p className="text-[10px] tracking-[0.2em] font-bold text-accent mt-1">{cert.issuer}</p>
                </div>
                <span className="text-[10px] font-medium text-accent tracking-widest">{cert.date}</span>
              </div>
              
              <p className="text-xs leading-relaxed text-accent font-light">
                {cert.description}
              </p>

              {cert.image && cert.type === 'pdf' ? (
                <a 
                  href={cert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center gap-3 text-[9px] tracking-[0.4em] font-bold uppercase hover:text-fg transition-colors group/btn"
                >
                  <Download size={14} className="group-hover/btn:translate-y-0.5 transition-transform" />
                  View Certificate PDF
                </a>
              ) : (
                <button 
                  onClick={() => alert('Certificate document will be available soon.')}
                  className="mt-4 flex items-center gap-3 text-[9px] tracking-[0.4em] font-bold uppercase hover:text-fg transition-colors group/btn"
                >
                  <Download size={14} className="group-hover/btn:translate-y-0.5 transition-transform" />
                  View Full Document
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
