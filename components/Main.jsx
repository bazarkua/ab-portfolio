import Link from 'next/link';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import React, { useState, useEffect, useRef } from 'react'
import WAVES from 'vanta/dist/vanta.waves.min'
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
      setVantaEffect(WAVES({
        el: myRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xa80f0,
        shininess: 7.77,
        waveHeight: 77.00,
        waveSpeed: 0.75,
        zoom: 0.7
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return <div ref={myRef}>
    
    <div id='home' className='w-full h-screen flex justify-center items-center text-center'>
      <div className='w-screen h-screen'>
      
      {/* Scene here */}

        <div className='absolute fixed top-[50%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h1 className="py-4 text-gray-100">
              Hi, I&#39;m <span className='text-white'> Adilbek </span>
          </h1>
              <h2 className='text-gray-100'>
                <TypeAnimation sequence={['A Computer Scientist', 3000, 'A Software Engineer', 3000, 'A Enthuasist', 3000]}
                               wrapper="div"
                               cursor={true}
                               repeat={Infinity}/>
              </h2>
          <p className='py-4 text-gray-200'>
            I’m open for new opportunities!
          </p>
        </div>
      </div>
      </div>
  </div>
}




export default Main;
