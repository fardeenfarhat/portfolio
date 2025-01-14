const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 px-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        
        <div className="mb-4 md:mb-0">
          <h1 className="text-lg font-semibold text-white">Fardeen Farhat</h1>
          <p className="text-sm text-gray-400">AI Enthusiast & Web Developer</p>
        </div>
        
        <div className="text-sm text-gray-400 mt-4 md:mt-0">
          © {new Date().getFullYear()} Fardeen Farhat. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
