import Link from 'next/link';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import React, { useState, useEffect, useRef } from 'react'
import BIRDS from 'vanta/dist/vanta.birds.min'
import { TypeAnimation } from 'react-type-animation';

const Main = (props) => {
  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)

  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(BIRDS({
        el: myRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: 0xffffff,
        color1: 0x1c00f5,
        color2: 0xfafafa,
        speedLimit: 3.00,
        separation: 60.00,
        alignment: 30.00,
        cohesion: 100.00
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return <div ref={myRef}>
    
    <div id='home' className='w-full h-screen flex justify-center items-center text-center snap-always snap-start'>
      <div className='w-screen h-screen'>
      
      {/* Scene here */}

        <div className='absolute fixed top-[50%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h1 className="py-4 text-gray-800">
              Hi, I&#39;m <span className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'> Adilbek </span>
          </h1>
              <h2 className='text-transparent bg-clip-text bg-gradient-to-r from-sky-700 to-violet-500'>
                <TypeAnimation sequence={['A Computer Scientist', 3000, 'A Software Developer', 3000, 'A Enthuasist', 3000]}
                               wrapper="div"
                               cursor={true}
                               repeat={Infinity}/>
              </h2>
          <p className='py-4 text-gray-700'>
            I’m open for new opportunities!
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto text-black'>
                <a
                  href='https://www.linkedin.com/in/bazarkua'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full p-3 cursor-pointer hover:text-white hover:scale-110 ease-in duration-300 hover:hover:bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 ease-in duration-300'>
                    <FaLinkedinIn className='text-2xl' />
                  </div>
                </a>
                <a
                  href='https://github.com/bazarkua'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full p-3 cursor-pointer hover:text-white hover:scale-110 ease-in duration-300 hover:hover:bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 ease-in duration-300'>
                    <FaGithub  className='text-2xl'/>
                  </div>
                </a>
                <Link href='/#contact'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full p-3 cursor-pointer hover:text-white hover:scale-110 ease-in duration-300 hover:hover:bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 ease-in duration-300'
                  >
                    <AiOutlineMail className='text-2xl'/>
                  </div>
                </Link>
              </div>
        </div>
        
      </div>
      </div>
  </div>
}




export default Main;
