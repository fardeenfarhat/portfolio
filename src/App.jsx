import "./App.css";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import Technologies from "./components/Technologies.jsx";
import Experience from "./components/Experience.jsx";

function App() {
  return (
    <>
      <div className="overflow-x-hidden text-neutral-300 antialiased font-inter smooth-scroll">
        {/* Enhanced Background */}
        <div className="fixed top-0 left-0 right-0 bottom-0 -z-10 h-full w-full">
          <div className="relative h-full w-full bg-gradient-to-br from-black via-gray-900 to-black">
            {/* Animated gradient orbs */}
            <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb15,#000)] animate-float"></div>
            <div className="absolute right-[-20%] top-[20%] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle_300px_at_50%_50%,#a855f710,#000)] animate-float" style={{animationDelay: '2s'}}></div>
            <div className="absolute left-[-10%] bottom-[10%] h-[800px] w-[800px] rounded-full bg-[radial-gradient(circle_350px_at_50%_50%,#ec489910,#000)] animate-float" style={{animationDelay: '4s'}}></div>
            
            {/* Subtle grid pattern */}
            <div className="absolute inset-0 opacity-30" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row min-h-screen">
          <Hero />
          <div className="lg:ml-[35%] w-full">
            <Technologies />
            <Experience />
            <Projects />
          </div>
        </div>
        
        {/* Footer */}
        <div className="lg:ml-[33%]">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
