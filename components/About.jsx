import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';
import { TypeAnimation } from 'react-type-animation';

const About = () => {
  return (
    <div id='about' className='snap-always snap-start'>
    <div className='w-full md:h-full flex items-center bg-[#eff7f6] bg-white pt-36 pb-36'>
    <p className='hidden md:flex uppercase text-2xl text-center tracking-widest pt-0 pl-12 text-2xl font-normal'>
            ABOUT
    </p>
      <div className='text-lg text-gray-800 max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 rounded-3xl p-20 bg-[#ffff] tracking-widest border-gradient-t-instagram-gradient-white border-transparent border-solid border-[1.5px]'>
        <div className='col-span-2'>
        <p className='md:hidden uppercase text-2xl text-center tracking-widest pt-0 pl-4'>
            ABOUT
        </p>
          <p className='pt-6 py-2'>
          My name is Adilbek Bazarkulov, I'm a student software developer currently studying at Oregon State University.
          </p>
          <p className='py-2'>
          I believe that on the way to creating a great product, passion and enthusiasm go hand in hand with attention to small details. 
          I've always wanted to use my creative energy and skills to create products that would have a positive impact on people. 
          It has always fascinated me that technical skills combined with a great idea become such a powerful tool for creativity.
          </p>
          <p className='py-2'>
          I'm currently a full-time student and working part-time as a Teaching Assistant for CS372 (Computer Networks) course at the College of 
          Engineering, Oregon State University. In my free time, I strive to learn something new and expand my knowledge of Computer Science on my own. 
          I also enjoy going out and playing volleyball with my friends.
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