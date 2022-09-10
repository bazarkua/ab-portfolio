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
      <div className='w-full md:h-full flex items-center bg-[#eff7f6] bg-white'>
      <p className='hidden md:flex uppercase text-2xl text-center tracking-widest pl-12 text-2xl font-normal pt-12'>
            PROJECTS
      </p>
    <div className='w-full lg:h-full bg-[#eff7f6] bg-white pb-12 pt-48'>
    <p className='md:hidden uppercase text-2xl text-center tracking-widest pt-0 pl-4 pb-12'>
            PROJECTS
    </p>
      <div className='max-w-[1240px] mx-auto px-4 pb-24'>
      
        <div className='grid md:grid-cols-2 gap-16 md:p-12'>
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
