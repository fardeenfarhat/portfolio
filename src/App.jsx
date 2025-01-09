import './App.css'
import Hero from './components/hero.jsx'

function App() {

  return (
    <>
    <div className='fixed top-0 left-0 right-0 bottom-0 z-[-1]'>
      <div className="relative h-full w-full bg-black">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
        </div>
    </div>
        <div className='container'>
          <Hero />
        </div>  
    </>
  )
}

export default App
