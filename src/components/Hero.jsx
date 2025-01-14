import Picture from "../assets/Profilepic.jpg";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { GrDocumentDownload } from "react-icons/gr";
import { SiGmail } from "react-icons/si";
import { IoLocation } from "react-icons/io5";
import { useState } from "react";
import myfile from "../assets/Files/FardeenFarhat_CV.pdf"

const hero = () => {
  const [showPopup, setShowPopup] = useState(false);
  const copytext = () => {
    navigator.clipboard.writeText("fardeenfarhat@gmail");
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

  const downlaodcv = () => {
    const link = document.createElement("a");
    link.href = myfile; 
    link.download = "FardeenFarhat_CV.pdf";
    link.click();
  };

  return (
    <div
      className="lg:fixed top-0 ring-2 ring-gray-600 ring-opacity-40 w-screen lg:w-2/6 min-h-full pb-10 lg:h-screen backdrop-blur-lg rounded-br-[100px] flex flex-col gap-4 lg:rounded-r-xl
"
    >
      <div className="flex justify-center items-center max-w-[400px] lg:w-auto lg:max-w-[400px] px-10 mt-10 mx-auto">
        <img className="rounded-xl xl:rounded-full" src={Picture} alt="profilePicture" />
      </div>
      <div className="flex justify-center items-center text-white font-thin text-6xl mx-auto px-6 text-center antialiased">
        <h1>Fardeen Farhat</h1>
      </div>
      <div className="text-base flex items-center justify-center gap-2 cursor-pointer hover:scale-110 duration-500 relative" onClick={copytext}>
          <SiGmail className="opacity-65"/> <span className="opacity-65">fardeenfarhat@gmail.com</span>
          {showPopup && (
        <div className="absolute top-0 bg-green-500 text-white px-6 py-2 rounded shadow-lg animate-fade-in-out">
          Email copied to clipboard!
        </div>
      )}
        </div>
      <div className="flex justify-center items-center px-10 text-white text-md  text-opacity-50">
        <IoLocation />
        <p>Lahore, Pakistan</p>
      </div>
      <div className="flex justify-center items-center text-white text-lg max-w-[400px] mx-auto mt-4 px-10">
        <p>
        I am a 6th semester student studying Artificial Intelligence, with a keen interest in learning how AI works. I also enjoy web development and building simple, functional websites in my free time.
        </p>
      </div>
      <div className="flex justify-center items-center flex-wrap text-white text-3xl mt-4 mx-auto gap-6 px-10">
        <FaLinkedin 
        className="hover:scale-125 duration-500 hover:text-gray-600 cursor-pointer box-shadow-[8px_8px_15px_rgba(0,0,0,0.2),-8px_-8px_15px_rgba(255,255,255,0.2)]"
          onClick={() =>
            window.open("https://www.linkedin.com/in/fardeen-farhat/")
          }
        />
        <FaGithub
          className="hover:scale-125 duration-500 hover:text-gray-600 cursor-pointer box-shadow-[8px_8px_15px_rgba(0,0,0,0.2),-8px_-8px_15px_rgba(255,255,255,0.2)]"
          onClick={() => window.open("https://github.com/fardeenfarhat")}
        />
        <GrDocumentDownload className="hover:scale-125 duration-500 hover:text-gray-600 cursor-pointer box-shadow-[8px_8px_15px_rgba(0,0,0,0.2),-8px_-8px_15px_rgba(255,255,255,0.2)]"
          onClick={downlaodcv}/>
      </div>
    </div>
  );
};

export default hero;
