import experienceData from '../../experience.json';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState, useRef, useEffect } from 'react';

const ExperienceCard = ({ exp, isActive }) => (
  <div className={`bg-black/60 border border-neutral-700/50 rounded-xl p-5 shadow-lg backdrop-blur-md text-left flex flex-col ${isActive ? '' : 'h-full overflow-hidden'}`}>
    <span className="text-lg font-semibold font-poppins gradient-text text-shadow block mb-1">{exp.title}</span>
    <div className="flex items-center gap-2 mb-2 flex-wrap">
      <span className="text-sm font-semibold text-gray-300 font-inter">{exp.company}</span>
      <span className="text-gray-500">•</span>
      <span className="text-sm text-gray-500 font-inter">{exp.location}</span>
    </div>
    <span className="text-xs text-purple-300 font-inter block mb-3">{exp.period}</span>
    <p className={`text-white/90 font-inter text-sm leading-relaxed mb-4 ${isActive ? '' : 'line-clamp-3'}`}>{exp.description}</p>
    {isActive && exp.technologies && (
      <div className="flex flex-wrap gap-2 justify-start mt-auto pt-2">
        {exp.technologies.map((tech, i) => (
          <span key={i} className="px-3 py-1 rounded-full bg-purple-700/20 text-purple-300 text-xs font-medium font-inter border border-purple-700/30">
            {tech}
          </span>
        ))}
      </div>
    )}
  </div>
);

const Experience = () => {
  const [current, setCurrent] = useState(0);
  const [minHeight, setMinHeight] = useState(0);
  const activeCardRef = useRef(null);
  const total = experienceData.length;
  const prevIdx = (current - 1 + total) % total;
  const nextIdx = (current + 1) % total;

  // After each card renders, measure it and lock in the max height seen so far
  useEffect(() => {
    if (activeCardRef.current) {
      const h = activeCardRef.current.offsetHeight;
      setMinHeight(prev => Math.max(prev, h));
    }
  }, [current]);

  const prev = () => setCurrent(prevIdx);
  const next = () => setCurrent(nextIdx);

  return (
    <div className="p-6 flex flex-col gap-6 border-neutral-800 my-auto pb-10">
      <h1 className="my-4 mb-4 text-center text-5xl lg:text-6xl font-poppins font-light gradient-text text-shadow">
        Experience
      </h1>

      {/* Peek carousel */}
      <div className="overflow-hidden max-w-2xl mx-auto w-full">
        <div className="flex items-start gap-4 sm:-mx-16">

          {/* Prev peek — hidden on mobile */}
          <div
            onClick={prev}
            style={{ height: minHeight || undefined }}
            className="hidden sm:block w-48 shrink-0 opacity-40 blur-[1px] cursor-pointer hover:opacity-55 transition-all duration-300"
          >
            <ExperienceCard exp={experienceData[prevIdx]} isActive={false} />
          </div>

          {/* Active card — measured via ref, container locks to max height */}
          <div
            key={current}
            style={{ minHeight: minHeight || undefined }}
            className="flex-1 min-w-0 animate-fade-in-up"
          >
            <div ref={activeCardRef}>
              <ExperienceCard exp={experienceData[current]} isActive={true} />
            </div>
          </div>

          {/* Next peek — hidden on mobile */}
          <div
            onClick={next}
            style={{ height: minHeight || undefined }}
            className="hidden sm:block w-48 shrink-0 opacity-40 blur-[1px] cursor-pointer hover:opacity-55 transition-all duration-300"
          >
            <ExperienceCard exp={experienceData[nextIdx]} isActive={false} />
          </div>
        </div>
      </div>

      {/* Arrows + dots */}
      <div className="flex items-center justify-center gap-4 mt-1">
        <button
          onClick={prev}
          className="w-9 h-9 rounded-full border border-neutral-700/50 bg-black/30 flex items-center justify-center text-white hover:border-purple-500/60 hover:text-purple-400 hover:bg-purple-500/10 transition-all duration-300"
        >
          <FaChevronLeft />
        </button>

        <div className="flex gap-2 items-center">
          {experienceData.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? 'bg-purple-400 w-5' : 'bg-neutral-600 hover:bg-neutral-400 w-2'
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="w-9 h-9 rounded-full border border-neutral-700/50 bg-black/30 flex items-center justify-center text-white hover:border-purple-500/60 hover:text-purple-400 hover:bg-purple-500/10 transition-all duration-300"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Experience;
