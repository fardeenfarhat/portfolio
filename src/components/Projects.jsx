import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import content from "../../content.json";

const Projects = () => {
  const [projects, setProjects] = useState(null);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [animationClass, setAnimationClass] = useState("animate-fade-in-up");

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
    }, 500);
  };

  return (
    <div className="p-2 flex flex-col gap-10 border-neutral-800 mt-10 my-auto">
      <h1 className="my-6 text-center text-5xl font-thin">Projects</h1>
      <div className="grid grid-cols-auto gap-10 m-auto p-5 w-full">
        {content.map((project, index) => (
          <div
            key={index}
            onClick={() => openModel(project)}
            className="flex flex-col gap-5 p-6 border-4 border-neutral-700 w-[350px] rounded-2xl lg:hover:scale-110 duration-500 lg:hover:shadow-[8px_8px_15px_rgba(0,0,0,0.2),-8px_-8px_15px_rgba(255,255,255,0.2)] lg:hover:bg-neutral-800 cursor-pointer m-auto h-full"
          >
            <div className="h-[150px] w-full overflow-hidden rounded-t-2xl flex justify-center items-center">
              <img className="cover scale-110" src={project.image} alt="" />
            </div>
            <h1 className="text-3xl font-thin">{project.name}</h1>
            <p className="line-clamp-3 opacity-55">{project.sh_description}</p>
            <div className="flex gap-2">
              {project.technologies.map((tech, index) => (
                <p
                  key={index}
                  className="text-purple-400 bg-neutral-900 rounded-2xl p-2 px-4"
                >
                  {tech}
                </p>
              ))}
            </div>
          </div>
        ))}
        {isModelOpen && projects && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
            <div
              className={`backdrop-blur-lg bg-black p-8 rounded-2xl w-[500px] h-[80%] overflow-y-scroll scrollbar-thin scrollbar-thumb-purple-600 scrollbar-track-neutral-200 scrollbar-thumb-rounded-lg flex flex-col gap-4 border-4 border-neutral-800 ${animationClass}`}
            >
              <button
                onClick={closeModel}
                className="absolute top-4 right-4 text-4xl"
              >
                &times;
              </button>
              <h2 className="text-4xl font-bold text-center">
                {projects.name}
              </h2>
              <div className="relative w-full mt-4 rounded-2xl border-4 border-neutral-800">
                <img
                  className="rounded-2xl w-full"
                  src={projects.image}
                  alt={projects.name}
                />
                <button className="absolute inset-0 flex items-center justify-center gap-2 text-2xl bg-black bg-opacity-60 lg:md:bg-opacity-60 text-white rounded-2xl transition duration-300 ease-in-out lg:md:opacity-50 lg:md:hover:opacity-100 lg:md:hover:bg-opacity-70" onClick={() => window.open(projects.link, "_blank")}>
                  <FaGithub className="hover:scale-110 transition-transform duration-300"/>
                  View on GitHub
                </button>
              </div>
              <div
                className="mt-4"
                dangerouslySetInnerHTML={{ __html: projects.description }}
              />
              <div className="flex flex-col gap-4 mt-4">
                <h3 className="text-xl font-semibold">Technologies:</h3>
                <div className="flex gap-2">
                  {projects.technologies.map((tech, index) => (
                    <p
                      key={index}
                      className="text-purple-400 bg-neutral-800 rounded-2xl p-2 px-4"
                    >
                      {tech}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
