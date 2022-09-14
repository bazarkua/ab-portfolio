import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import teamupPng from '../public/assets/projects/teamup.png';
import carwormsPng from '../public/assets/projects/carworms.png'
import smallshIcon from '../public/assets/projects/linux.jpeg'
import ProjectItem from './ProjectItem';


const Projects = () => {
  return (
    <div id='projects' className='snap-always snap-start'>
      <div className='w-full md:h-full flex items-center bg-white dark:bg-slate-900'>
      <p className='hidden md:flex bg-gradient-to-r from-rose-300 via-purple-400 to-indigo-500 dark:from-blue-300 via-sky-2800 to-indigo-500 uppercase text-2xl text-center tracking-widest pl-12 pr-14 text-2xl text-white font-normal pt-12 pb-12 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500'>
            PROJECTS
      </p>
    <div className='w-full lg:h-full pb-12 pt-24'>
    <p className='md:hidden uppercase text-2xl text-center tracking-widest pt-0 pl-4 pb-12 text-black dark:text-gray-100'>
            PROJECTS
    </p>
      <div className='max-w-[1240px] mx-auto px-4 pb-26'>
      
        <div className='grid lg:grid-cols-2 gap-16 md:p-12'>
          <ProjectItem
            icon='2'
            title='Social App Prototype'
            backgroundImg={teamupPng}
            projectUrl='/teamup'
            tech='Figma, Heuristic Evaluation, Usablity Testing'
          />
          <ProjectItem
            icon='1'
            title='UI for Rental Cars Database'
            backgroundImg={carwormsPng}
            projectUrl='/carworms'
            tech='ReactJS, SQL, JavaScript, SCSS'
            src1='https://github.com/bazarkua/car-worms-new'
          />
          <ProjectItem 
            icon='1'
            title='Smallsh Mini Linux console'
            backgroundImg={smallshIcon}
            projectUrl='/smallsh'
            tech='C, Unix process API, Unix signal handling, I/O redirection'
            src1='https://github.com/bazarkua/smallsh'
          />
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Projects;
