import Image from 'next/image';
import React from 'react';
import Html from '../public/assets/skills/html.png';
import {skills} from "./SkillsList";

const Skills = () => {
  return (
    <div id='skills' className='snap-always snap-start'>
   
    <div className='w-full md:h-full flex items-center bg-[#eff7f6] bg-white pt-24'>
    <p className='hidden md:flex uppercase text-2xl text-center tracking-widest pt-0 pl-12 text-2xl font-normal'>
            SKILLS
    </p>
      <div className='max-w-[1240px] m-auto flex flex-col justify-center'>
      <p className='md:hidden uppercase text-2xl text-center tracking-widest pt-0 pl-4'>
            SKILLS
        </p>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-8 p-20 pt-24 pt-24 rounded-3xl'> 
            {skills && skills.map ( n => ( 
              <div key={n.id} className='cursor-pointer p-6 border-gradient-t-instagram-gradient-white border-transparent border-solid border-[1px] bg-[#ffff] rounded-3xl group hover:bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 ease-in duration-300 hover:text-white hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={`/assets/skills/${n.title}.png`} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3 className='font-normal'>{n.name}</h3>
                  <h3 className='hidden group-hover:block font-normal'>{n.experience}</h3>
                </div>
              </div>
              </div>  
            ))}         
        </div>
      </div>
    </div>
    </div>
  );
};

export default Skills;
