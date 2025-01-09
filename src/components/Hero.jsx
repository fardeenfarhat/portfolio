import Picture from '../assets/Profilepic.jpg'
import {FaLinkedin, FaGithub} from 'react-icons/fa'
import { IoLocation } from "react-icons/io5";

const hero = () => {
  return (
    <div className='ring-2 ring-gray-600 ring-opacity-10 ring-offset-3 ring-offset-gray-900 w-screen lg:w-2/6 min-h-full pb-10 lg:h-screen backdrop-blur-lg rounded-br-[100px] flex flex-col gap-4 lg:rounded-r-xl'>
        <div className='flex justify-center items-center max-w-[400px] lg:w-auto lg:max-w-[400px] px-10 mt-10 mx-auto'>
            <img className='rounded-xl xl:rounded-full' src={Picture} alt="" />
        </div>
      <div className='flex justify-center items-center text-white font-thin text-6xl mx-auto px-6 text-center'>
        <h1>Fardeen Farhat</h1>
      </div>
      <div className='flex justify-center items-center px-10 text-white text-md mt-4 mx-auto'>
        <IoLocation/>
        <p>Lahore, Pakistan</p>
      </div>
      <div className='flex justify-center items-center text-white text-lg max-w-[400px] mx-auto mt-4 px-10'>
        <p>
            I'm a software engineer with a passion for building scalable and efficient systems. I'm always looking for new challenges and opportunities to learn and grow.
        </p>
      </div>
        <div className='flex justify-center items-center text-white text-2xl mt-4 mx-auto gap-6 px-10'>
                <FaLinkedin/>
                <FaGithub/>
        </div>
    </div>
  )
}

export default hero
