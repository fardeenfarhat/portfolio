import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { SiMysql } from "react-icons/si";

const Technologies = () => {
  return (
    <div className="p-2 flex flex-col gap-10 border-neutral-800 mt-10 my-auto">
      <h1 className="my-6 text-center text-5xl font-thin">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4 gap-y-10">
        <div className="rounded-2xl p-4 border-4 border-neutral-700 animate-bounce">
          <RiReactjsLine className="text-7xl text-react" />
          <h1 className="text-center mt-2">React</h1>
        </div>
        <div className="rounded-2xl p-4 border-4 border-neutral-700 animate-bounce [animation-delay:0.2s]">
          <FaNodeJs className="text-7xl text-nodejs" />
          <h1 className="text-center mt-2">NodeJS</h1>
        </div>
        <div className="rounded-2xl p-4 border-4 border-neutral-700 animate-bounce [animation-delay:0.3s]">
          <SiPython className="text-7xl text-python" />
          <h1 className="text-center mt-2">Python</h1>
        </div>
        <div className="rounded-2xl p-4 border-4 border-neutral-700 animate-bounce [animation-delay:0.4s]">
          <SiMongodb className="text-7xl text-mongodb" />
          <h1 className="text-center mt-2">MongoDB</h1>
        </div>
        <div className="rounded-2xl p-4 border-4 border-neutral-700 animate-bounce [animation-delay:0.5s]">
          <SiTailwindcss className="text-7xl text-tailwind" />
          <h1 className="text-center mt-2">TailwindCSS</h1>
        </div>
        <div className="rounded-2xl p-4 border-4 border-neutral-700 animate-bounce [animation-delay:0.6s]">
          <TbBrandCpp className="text-7xl text-cpp" />
          <h1 className="text-center mt-2">C++</h1>
        </div>
        <div className="rounded-2xl p-4 border-4 border-neutral-700 animate-bounce [animation-delay:0.7s]">
          <SiJavascript className="text-7xl text-javascript" />
          <h1 className="text-center mt-2">JavaScript</h1>
        </div>
        <div className="rounded-2xl p-4 border-4 border-neutral-700 animate-bounce [animation-delay:0.8s]">
          <SiMysql className="text-7xl text-mysql" />
          <h1 className="text-center mt-2">MySQL</h1>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
