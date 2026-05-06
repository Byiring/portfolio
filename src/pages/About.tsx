import { motion } from 'motion/react';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="max-w-5xl mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="aspect-[4/5] bg-gray-100 overflow-hidden"
        >
          <img
            src="/DSC00090 (1).jpg"
            alt="Byiringiro Heritier"
            className="w-full h-full object-cover object-[25%_0%] grayscale"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h1 className="text-2xl md:text-3xl mb-6 leading-relaxed font-normal">
              BYIRINGIRO HERITIER<br />
              <span className="text-lg md:text-xl font-light text-accent leading-relaxed block">
                Music Producer, Songwriter, Singer & Performer
              </span>
              <span className="text-sm md:text-base font-light text-accent leading-relaxed block">
                Based in Rwanda
              </span>
            </h1>
            <div className="space-y-6 text-sm text-accent leading-relaxed font-light pb-4">
              <p>
                Byiringiro Heritier is a multi-talented music creator serving as producer, songwriter, singer, and performer. He specializes in comprehensive audio production from initial composition through final track creation, while also crafting compelling lyrics and delivering powerful vocal performances. His holistic approach to music combines technical production skills with authentic artistic expression.
              </p>
              <p>
                His artistic proficiency spans the full spectrum of music creation: intricate sound design using cutting-edge digital audio workstations, dynamic beat programming that drives rhythmic energy, heartfelt songwriting that tells meaningful stories, captivating vocal performances that connect with audiences, and engaging stage presence as a performer. He specializes in Afrobeat, Amapiano, and contemporary African genres, blending traditional rhythmic elements with modern production innovation.
              </p>
              <p>
                Currently serving as Production Assistant at the Sherrie Silver Foundation, Byiringiro applies his diverse musical expertise to create impactful audio experiences. His work involves detailed sound design for multimedia projects, complete song production from lyrics to final arrangement, vocal recording and performance, and delivering high-quality audio tracks that meet professional standards. He continues to expand his artistic skills while mentoring emerging musicians in Rwanda's growing music industry.
              </p>
            </div>
          </motion.div>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <h3 className="text-[10px] tracking-[0.3em] font-bold text-fg uppercase mb-6 border-b border-gray-100 pb-2">Experience & Milestones</h3>
            <ul className="grid grid-cols-1 gap-y-4 text-[10px] tracking-widest uppercase font-medium text-accent">
              <li className="flex justify-between items-baseline border-b border-gray-100/50 pb-2">
                <span>Sherrie Silver Foundation (Production Assistant)</span>
                <span className="text-[8px]">Current</span>
              </li>
              <li className="flex justify-between items-baseline border-b border-gray-100/50 pb-2">
                <span>Music In Africa International Conference</span>
                <span className="text-[8px]">Attendee</span>
              </li>
              <li className="flex justify-between items-baseline border-b border-gray-100/50 pb-2">
                <span>Country Records Rwanda</span>
                <span className="text-[8px]">Studio Experience</span>
              </li>
              <li className="flex justify-between items-baseline border-b border-gray-100/50 pb-2">
                <span>Advanced Online Production Certification</span>
                <span className="text-[8px]">Completed</span>
              </li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <h3 className="text-[10px] tracking-[0.3em] font-bold text-fg uppercase mb-6 border-b border-gray-100 pb-2">Resume & Documents</h3>
            <div className="flex flex-col gap-4">
              <a 
                href="/CV.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 px-8 py-4 bg-fg text-bg text-[10px] tracking-[0.4em] font-bold uppercase hover:bg-accent transition-colors"
              >
                Download CV / Portfolio
              </a>
              <a 
                href="/coverletter.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 px-8 py-4 bg-accent text-fg text-[10px] tracking-[0.4em] font-bold uppercase hover:bg-fg transition-colors"
              >
                Download Cover Letter
              </a>
            </div>
          </motion.section>
        </div>
      </div>
    </motion.div>
  );
}
