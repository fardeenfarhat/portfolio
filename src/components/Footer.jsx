const Footer = () => {
  return (
    <footer className="bg-black/50 backdrop-blur-sm text-gray-300 py-8 px-6 border-t border-neutral-700/30">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        
        <div className="mb-4 md:mb-0">
          <h1 className="text-xl font-poppins font-medium text-white gradient-text">
            Fardeen Farhat
          </h1>
          <p className="text-sm text-gray-400 font-inter mt-1">
            AI Enthusiast & Web Developer
          </p>
        </div>
        
        <div className="text-sm text-gray-400 mt-4 md:mt-0 font-inter">
          © {new Date().getFullYear()} Fardeen Farhat. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
