import { motion } from 'motion/react';
import { projects } from '../data/projects';
import { Music, Play, Headphones, Volume2 } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [playingAudio, setPlayingAudio] = useState<string | null>(null);

  const toggleAudio = (audioUrl: string) => {
    if (playingAudio === audioUrl) {
      setPlayingAudio(null);
    } else {
      setPlayingAudio(audioUrl);
    }
  };

  return (
    <div className="space-y-20">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-4xl mx-auto"
      >
        <h1 className="text-5xl md:text-8xl mb-8 leading-none font-bold">
          MUSIC PRODUCTION
        </h1>
        <p className="text-lg md:text-xl text-accent font-light leading-relaxed max-w-2xl mx-auto">
          Exploring the intersection of traditional African rhythms and contemporary electronic music production. 
          Each project represents a unique sonic journey through sound design, mixing, and mastering.
        </p>
        <div className="flex justify-center gap-8 mt-8">
          <div className="flex items-center gap-2 text-[10px] tracking-[0.3em] font-medium text-accent uppercase">
            <Music size={14} />
            <span>Audio Available</span>
          </div>
          <div className="flex items-center gap-2 text-[10px] tracking-[0.3em] font-medium text-accent uppercase">
            <Volume2 size={14} />
            <span>Professional Quality</span>
          </div>
        </div>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20"
      >
        {projects.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="h-full group"
          >
            {/* Image Container */}
            <div className="project-image-container aspect-[4/5] mb-8 relative overflow-hidden rounded-lg border border-gray-100">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              
              {/* Audio Indicator */}
              {project.audioUrl && (
                <div className="absolute top-4 right-4 bg-bg/95 backdrop-blur-md p-3 rounded-full border border-fg/30 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Headphones size={18} className="text-fg" />
                </div>
              )}

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-white text-[10px] tracking-[0.3em] font-medium uppercase">
                    <Play size={12} className="group-hover:translate-x-1 transition-transform" />
                    <span>Click to Play</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Project Info */}
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h2 className="text-xl md:text-2xl uppercase tracking-wider font-bold leading-tight">
                    {project.title}
                  </h2>
                </div>
                <span className="text-[10px] font-bold text-accent tracking-widest ml-4 whitespace-nowrap">
                  {project.year}
                </span>
              </div>
              
              <div className="flex items-center justify-between">
                <p className="text-[10px] tracking-[0.25em] font-bold text-accent uppercase">
                  {project.category}
                </p>
                {project.audioUrl && (
                  <div className="flex items-center gap-1 text-[8px] text-accent">
                    <Music size={10} />
                    <span>Audio</span>
                  </div>
                )}
              </div>

              {/* Full Description */}
              <p className="text-sm text-accent leading-relaxed font-light">
                {project.description}
              </p>

              {/* Play Button */}
              {project.audioUrl && (
                <button
                  onClick={() => toggleAudio(project.audioUrl!)}
                  className="flex items-center gap-3 px-6 py-3 bg-fg text-bg text-[10px] tracking-[0.4em] font-bold uppercase hover:bg-accent transition-colors group/btn"
                >
                  {playingAudio === project.audioUrl ? (
                    <>
                      <Volume2 size={14} className="group-hover/btn:scale-110 transition-transform" />
                      Pause
                    </>
                  ) : (
                    <>
                      <Play size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                      Play Track
                    </>
                  )}
                </button>
              )}

              {/* Audio Player */}
              {playingAudio === project.audioUrl && (
                <div className="mt-4">
                  <audio 
                    controls 
                    className="w-full h-10 brightness-90 contrast-125 rounded-none"
                    src={project.audioUrl}
                    autoPlay
                    onEnded={() => setPlayingAudio(null)}
                  >
                    Your browser does not support the audio element.
                  </audio>
                </div>
              )}

              {/* Credits */}
              <div className="pt-4 border-t border-gray-100">
                <p className="text-[8px] tracking-[0.3em] font-bold text-accent uppercase mb-2">Credits</p>
                <ul className="space-y-1">
                  {project.credits.map((credit, i) => (
                    <li key={i} className="text-[9px] text-accent/70 font-light">
                      {credit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Footer Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="border-t border-gray-100 pt-12 text-center"
      >
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div>
            <div className="text-3xl font-bold mb-2">{projects.length}</div>
            <div className="text-[10px] tracking-[0.3em] font-medium text-accent uppercase">Projects</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">{projects.filter(p => p.audioUrl).length}</div>
            <div className="text-[10px] tracking-[0.3em] font-medium text-accent uppercase">Audio Tracks</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">3</div>
            <div className="text-[10px] tracking-[0.3em] font-medium text-accent uppercase">Genres</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
