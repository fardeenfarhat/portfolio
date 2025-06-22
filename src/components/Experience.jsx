import experienceData from '../../experience.json';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState } from 'react';

const Experience = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedExperiences = showAll ? experienceData : experienceData.slice(0, 3);

  return (
    <div className="p-6 flex flex-col gap-6 border-neutral-800 my-auto pb-10">
      <h1 className="my-4 mb-4 text-center text-5xl lg:text-6xl font-poppins font-light gradient-text text-shadow">
        Experience
      </h1>
      <div className="w-full">
        <div className="flex flex-wrap justify-center gap-6 mt-2 w-full">
          {displayedExperiences.map((exp, idx) => (
            <div key={idx} className="bg-black/60 border border-neutral-700/50 rounded-xl p-6 shadow-lg hover:shadow-purple-700/20 transition-all duration-300 backdrop-blur-md text-left min-w-[220px] max-w-[340px] flex-1 flex flex-col">
              <span className="text-xl font-semibold font-poppins gradient-text text-shadow block mb-1">{exp.title}</span>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-semibold text-gray-300 font-inter">{exp.company}</span>
                <span className="text-gray-500">•</span>
                <span className="text-sm text-gray-500 font-inter">{exp.location}</span>
              </div>
              <span className="text-xs text-purple-300 font-inter block mb-3">{exp.period}</span>
              <p className="text-white/90 font-inter text-sm leading-relaxed mb-4 flex-grow">{exp.description}</p>
              {exp.technologies && (
                <div className="flex flex-wrap gap-2 justify-start mt-auto">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-purple-700/20 text-purple-300 text-xs font-medium font-inter border border-purple-700/30">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        {experienceData.length > 3 && (
          <button
            className="mx-auto mt-8 px-7 py-3 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 text-white font-inter font-semibold shadow-xl flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-purple-400/60"
            onClick={() => setShowAll((prev) => !prev)}
          >
            {showAll ? (
              <>
                Show Less <FaChevronUp className="ml-1 text-base" />
              </>
            ) : (
              <>
                Show More <FaChevronDown className="ml-1 text-base animate-bounce" />
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default Experience; 