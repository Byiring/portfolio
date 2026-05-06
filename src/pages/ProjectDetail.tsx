import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { projects } from '../data/projects';
import { ArrowLeft, Play } from 'lucide-react';

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h2 className="text-3xl mb-4">Project not found</h2>
        <Link to="/work" className="text-sm uppercase tracking-widest hover:underline">Back to work</Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-7xl mx-auto"
    >
      <button
        onClick={() => navigate('/work')}
        className="mb-12 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-medium text-accent hover:text-fg transition-colors group"
      >
        <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
        BACK TO WORK
      </button>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
        <div className="md:col-span-8">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-8xl mb-8 leading-[0.9]"
          >
            {project.title}
          </motion.h1>
          
          <div className="space-y-12 mb-12">
            {project.images.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="project-image-container w-full"
              >
                <img
                  src={img}
                  alt={`${project.title} - ${idx}`}
                  className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="md:col-span-4 md:sticky md:top-32 h-fit">
          <div className="space-y-12">
            <section>
              <h3 className="text-[10px] tracking-[0.3em] font-bold text-accent uppercase mb-4">Description</h3>
              <p className="text-sm leading-relaxed text-balance text-accent font-light">
                {project.description}
              </p>
            </section>

            <section>
              <h3 className="text-[10px] tracking-[0.3em] font-bold text-accent uppercase mb-4">Details</h3>
              <dl className="space-y-4 text-[11px] tracking-wider uppercase font-medium">
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <dt className="text-accent">Year</dt>
                  <dd>{project.year}</dd>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <dt className="text-accent">Category</dt>
                  <dd>{project.category}</dd>
                </div>
              </dl>
            </section>

            <section>
              <h3 className="text-[10px] tracking-[0.3em] font-bold text-accent uppercase mb-4">Credits</h3>
              <ul className="space-y-2 text-[11px] tracking-wider uppercase font-medium">
                {project.credits.map((credit, i) => (
                  <li key={i} className="text-accent border-b border-gray-100 pb-2 flex justify-between">
                    <span>{credit}</span>
                  </li>
                ))}
              </ul>
            </section>

            {project.audioUrl && (
              <div className="mt-8">
                <p className="text-[10px] tracking-[0.3em] font-bold text-accent uppercase mb-4">Listen</p>
                <audio 
                  controls 
                  className="w-full h-10 brightness-90 contrast-125 rounded-none"
                  src={project.audioUrl}
                >
                  Your browser does not support the audio element.
                </audio>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
