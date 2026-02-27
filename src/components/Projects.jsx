import { useState, useEffect } from "react";
import { FaGithub, FaChevronDown, FaChevronUp } from "react-icons/fa";
import content from "../../content.json";

function getInitials(name) {
  return name
    .split(" ")
    .map(word => word[0])
    .join("")
    .toUpperCase();
}

const Projects = () => {
  const [projects, setProjects] = useState(null);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [animationClass, setAnimationClass] = useState("animate-fade-in-up");
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (isModelOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isModelOpen]);

  const openModel = (project) => {
    setIsModelOpen(true);
    setProjects(project);
  };

  const closeModel = () => {
    setAnimationClass("animate-fade-out-down");
    setTimeout(() => {
      setIsModelOpen(false);
      setProjects(null);
      setAnimationClass("animate-fade-in-up");
    }, 300);
  };

  // Handler for overlay click
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModel();
    }
  };

  const displayedProjects = showAll ? content : content.slice(0, 3);

  return (
    <div className="p-6 flex flex-col gap-6 border-neutral-800 mt-6 my-auto mx-auto pb-10">
      <h1 className="my-4 mb-4 text-center text-5xl lg:text-6xl font-poppins font-light gradient-text text-shadow">
        Projects
      </h1>
      <div className="grid grid-cols-auto gap-8 m-auto p-5 w-full max-w-7xl">
        {displayedProjects.map((project, index) => (
          <div
            key={index}
            onClick={() => openModel(project)}
            className="flex flex-col gap-6 p-6 border border-neutral-700/50 w-full rounded-2xl hover-lift glass-card cursor-pointer m-auto h-full group animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="h-[180px] w-full overflow-hidden rounded-xl flex justify-center items-center relative">
              <img 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                src={project.image} 
                alt={project.name} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <h2 className="text-2xl lg:text-3xl font-poppins font-medium text-white group-hover:gradient-text transition-all duration-300">
              {project.name}
            </h2>
            <p className="line-clamp-3 opacity-70 font-inter leading-relaxed">
              {project.sh_description}
            </p>
            <div className="flex gap-2 flex-wrap">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="text-purple-400 bg-neutral-900/50 rounded-full p-2 px-4 text-sm font-inter font-medium border border-purple-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      {content.length > 3 && (
        <button
          className="mx-auto mt-4 px-7 py-3 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 text-white font-inter font-semibold shadow-xl flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-purple-400/60"
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
      {/* Enhanced Modal */}
      {isModelOpen && projects && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50 p-4" onClick={handleOverlayClick}>
          <div
            className={`relative backdrop-blur-lg bg-black/90 p-8 rounded-2xl w-[500px] max-w-[90vw] h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-purple-600 scrollbar-track-neutral-200 scrollbar-thumb-rounded-lg flex flex-col gap-4 border border-neutral-700/50 ${animationClass} glass-card`}
          >
            <button
              onClick={closeModel}
              className="absolute top-4 right-4 text-3xl text-white hover:text-purple-400 transition-colors duration-300 z-20"
            >
              &times;
            </button>
            
            <div className="flex items-center justify-between pr-12 mb-2">
              <h2 className="text-3xl lg:text-4xl font-poppins font-medium gradient-text text-shadow mb-2">
                {projects.name}
              </h2>
              <button 
                className="flex items-center gap-2 bg-transparent border border-purple-500/50 text-purple-400 hover:bg-purple-500/10 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 font-inter text-sm"
                onClick={() => window.open(projects.link, "_blank")}
              >
                <FaGithub className="text-lg" />
                <span>GitHub</span>
              </button>
            </div>
            {/* Thin gradient line separator below heading */}
            <div className="w-full h-0.5 mb-2 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 opacity-80" />
            <div
              className="mt-0 font-inter leading-relaxed text-white/90"
              dangerouslySetInnerHTML={{ __html: projects.description }}
            />
            
            <div className="flex flex-col gap-4 mt-6">
              <h3 className="text-xl font-poppins font-medium gradient-text">Technologies Used:</h3>
              <div className="flex gap-2 flex-wrap">
                {projects.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="text-purple-400 bg-neutral-800/50 rounded-full p-2 px-4 text-sm font-inter font-medium border border-purple-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
