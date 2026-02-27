import Picture from "../assets/Profilepic.jpg";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { GrDocumentDownload } from "react-icons/gr";
import { SiGmail } from "react-icons/si";
import { IoLocation } from "react-icons/io5";
import { useState } from "react";
import myfile from "../assets/Files/FardeenFarhat_CV.pdf";

const Hero = () => {
  const [showPopup, setShowPopup] = useState(false);
  const copytext = () => {
    navigator.clipboard.writeText("fardeenfarhat@gmail.com");
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
    <div className="lg:fixed top-0 ring-2 ring-gray-600/40 w-full lg:w-2/6 min-h-full pb-10 lg:h-screen backdrop-blur-custom rounded-br-[100px] flex flex-col gap-6 lg:rounded-r-xl glass-card animate-slide-in">
      {/* Profile Picture */}
      <div className="flex justify-center items-center max-w-[400px] lg:w-auto lg:max-w-[400px] px-10 mt-12 mx-auto">
        <div className="relative group">
          <img 
            className="rounded-2xl xl:rounded-full w-56 h-56 lg:w-64 lg:h-64 object-cover shadow-2xl hover-lift transition-all duration-500" 
            src={Picture} 
            alt="Fardeen Farhat" 
          />
          <div className="absolute inset-0 rounded-2xl xl:rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute inset-0 rounded-2xl xl:rounded-full ring-4 ring-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </div>
      
      {/* Name */}
      <div className="flex justify-center items-center text-white font-poppins font-light text-5xl lg:text-6xl mx-auto px-6 text-center antialiased">
        <h1 className="gradient-text text-shadow">Fardeen Farhat</h1>
      </div>
      
      {/* Email */}
      <div className="text-base flex items-center justify-center gap-3 cursor-pointer hover:scale-105 duration-300 relative group" onClick={copytext}>
        <SiGmail className="opacity-70 group-hover:opacity-100 transition-opacity"/> 
        <span className="opacity-70 group-hover:opacity-100 transition-opacity font-inter">fardeenfarhat@gmail.com</span>
        {showPopup && (
          <div className="absolute -top-12 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg animate-fade-in-up text-sm font-medium">
            Email copied to clipboard!
          </div>
        )}
      </div>
      
      {/* Location */}
      <div className="flex justify-center items-center px-10 text-white text-md opacity-60 font-inter">
        <IoLocation className="mr-2" />
        <p>Lahore, Pakistan</p>
      </div>
      
      {/* Bio */}
      <div className="flex justify-center items-center text-white text-lg max-w-[400px] mx-auto mt-2 px-10">
        <p className="font-inter leading-relaxed text-center">
          I am a 8th semester student studying <span className="gradient-text font-medium">Artificial Intelligence</span>, with a keen interest in learning how AI works. I also enjoy <span className="gradient-text font-medium">web development</span> and building simple, functional websites in my free time.
        </p>
      </div>
      
      {/* Social Links */}
      <div className="flex justify-center items-center flex-wrap text-white text-3xl mt-6 mx-auto gap-8 px-10">
        <FaLinkedin 
          className="hover:scale-125 duration-300 hover:text-purple-400 cursor-pointer hover-lift"
          onClick={() => window.open("https://www.linkedin.com/in/fardeen-farhat/", "_blank")}
        />
        <FaGithub
          className="hover:scale-125 duration-300 hover:text-purple-400 cursor-pointer hover-lift"
          onClick={() => window.open("https://github.com/fardeenfarhat", "_blank")}
        />
        <GrDocumentDownload 
          className="hover:scale-125 duration-300 hover:text-purple-400 cursor-pointer hover-lift"
          onClick={downlaodcv}
        />
      </div>
    </div>
  );
};

export default Hero;
