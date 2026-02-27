import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiTailwindcss, SiJavascript, SiPython, SiMysql, SiFastapi, SiPandas, SiScikitlearn, SiPytorch } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { FaNodeJs, FaDocker, FaAws, FaGitAlt } from "react-icons/fa";

const Technologies = () => {
  const techStack = [
    // Row 1 — Core AI / Python
    { icon: SiPython, name: "Python", color: "text-python", delay: "0.1s" },
    { icon: SiPytorch, name: "PyTorch", color: "text-pytorch", delay: "0.2s" },
    { icon: SiScikitlearn, name: "Scikit-learn", color: "text-scikitlearn", delay: "0.3s" },
    { icon: SiPandas, name: "Pandas", color: "text-pandas", delay: "0.4s" },
    { icon: SiFastapi, name: "FastAPI", color: "text-fastapi", delay: "0.5s" },
    // Row 2 — Systems & Backend
    { icon: TbBrandCpp, name: "C++", color: "text-cpp", delay: "0.6s" },
    { icon: SiJavascript, name: "JavaScript", color: "text-javascript", delay: "0.7s" },
    { icon: FaNodeJs, name: "NodeJS", color: "text-nodejs", delay: "0.8s" },
    { icon: SiMongodb, name: "MongoDB", color: "text-mongodb", delay: "0.9s" },
    { icon: SiMysql, name: "MySQL", color: "text-mysql", delay: "1.0s" },
    // Row 3 — Web & DevOps
    { icon: RiReactjsLine, name: "React", color: "text-react", delay: "1.1s" },
    { icon: SiTailwindcss, name: "TailwindCSS", color: "text-tailwind", delay: "1.2s" },
    { icon: FaDocker, name: "Docker", color: "text-docker", delay: "1.3s" },
    { icon: FaAws, name: "AWS", color: "text-aws", delay: "1.4s" },
    { icon: FaGitAlt, name: "Git", color: "text-git", delay: "1.5s" },
  ];

  return (
    <div className="p-6 flex flex-col gap-6 border-neutral-800 mt-6 my-auto pb-10">
      <h1 className="my-4 mb-4 text-center text-5xl lg:text-6xl font-poppins font-light gradient-text text-shadow">
        Technologies
      </h1>
      <div className="grid grid-cols-3 md:grid-cols-5 gap-6 items-center justify-center max-w-4xl mx-auto">
        {techStack.map((tech, index) => (
          <div 
            key={index}
            className="rounded-xl p-4 border border-neutral-700/30 bg-black/10 backdrop-blur-sm hover-lift group animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex flex-col items-center gap-2">
              <tech.icon 
                className={`text-5xl lg:text-6xl ${tech.color} group-hover:scale-110 transition-transform duration-300`} 
              />
              <h2 className="text-center text-sm font-inter font-medium text-white group-hover:text-purple-300 transition-colors duration-300">
                {tech.name}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
