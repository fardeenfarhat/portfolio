import "./App.css";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import Technologies from "./components/Technologies.jsx";

function App() {
  return (
    <>
      <div className="overflow-x-hidden text-neutral-300 antialiased">
        <div className="fixed top-0 left-0 right-0 bottom-0 -z-10 h-full w-full">
          <div className="relative h-full w-full bg-black">
            <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row">
          <Hero />
          <div className="lg:ml-[35%] w-full">
            <Technologies />
            <Projects />
          </div>
        </div>
          <div className="lg:ml-[33%]">
            <Footer />
          </div>
      </div>
    </>
  );
}

export default App;
