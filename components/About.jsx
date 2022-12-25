import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.png';
import { TypeAnimation } from 'react-type-animation';

const About = () => {
  return (
    <div id='about' className='snap-start snap-always'>
    <div className='w-full lg:h-screen md:h-full flex items-center bg-white dark:bg-slate-900 pt-12 pb-36'>
    <p className='bg-gradient-to-r from-rose-300 via-purple-400 to-indigo-500 dark:from-blue-300 via-sky-2800 to-indigo-500 hidden md:flex uppercase text-2xl text-center tracking-widest pt-12 pb-12 pl-12 pr-14 text-2xl font-normal text-white'>
            ABOUT
    </p>
      <div className='text-lg text-black dark:text-white max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 rounded-3xl p-20 tracking-widest'>
        <div className='col-span-2'>
        <p className='md:hidden uppercase text-2xl text-center tracking-widest pt-0 pl-4'>
            ABOUT
        </p>
          <p className='pt-6 py-2'>
          Hi there! My name is Adilbek and I am a Computer Science student at Oregon State University in the United States. I am originally from Kyrgyzstan and have always had a fascination with science and technology. This led me to pursue a degree in Computer Science and I am now fortunate enough to be studying at a top university in the field.
          </p>
          <p className='py-2'>
          I am very excited to be studying at OSU and learning from some of the best computer science professors in the world. In addition to my studies, I also work part-time as a teaching assistant helping other students learn programming. I really enjoy being able to share my knowledge with others and help them achieve their goals.
          </p>
          <p className='py-2'>
          In my free time, I enjoy playing volleyball with friends and staying up-to-date on the latest technology trends. My ultimate dream is to become a software engineer and make a positive impact on the world through my work. I believe that technology has the power to solve some of the biggest problems facing society today, and I want to be a part of that solution.
          </p>
        </div>
        <div className='w-full h-auto m-auto rounded-3xl flex items-center 
        justify-center p-4 hover:scale-110 ease-in duration-300 hover:shadow-[#ffff] ease-in duration-300'>
          <Image src={AboutImg} className='rounded-2xl' alt='/' />
        </div>
      </div>
    </div>
  </div>
  );
};

export default About;
