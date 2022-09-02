import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import teamupPng from '../public/assets/projects/teamup.png';
import carwormsPng from '../public/assets/projects/carworms.png'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects'>
        <div className='h-[100px]'>

        </div>
      <p className='uppercase text-2xl text-center tracking-widest pt-1'>
        Projects
      </p>
      <div className='h-[100px]'>

</div>
    <div className='w-full lg:h-full bg-[#36b0ff] p-2 pb-24 pt-24 shadow-2xl'>
      <div className='max-w-[1240px] mx-auto px-4 pb-24'>
        <div className='grid md:grid-cols-2 gap-16'>
          <ProjectItem
            title='Social App Prototype'
            backgroundImg={teamupPng}
            projectUrl='/teamup'
            tech='Figma'
          />
          <ProjectItem
            title='UI for Rental Cars Database'
            backgroundImg={carwormsPng}
            projectUrl='/carworms'
            tech='ReactJs SQL'
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Projects;
