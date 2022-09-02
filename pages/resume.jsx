import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Adilbek | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Adilbek Bazarkulov</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/bazarkua/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/bazarkua'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              1 <span className='px-1'>|</span> 2{' '}
              <span className='px-1'>|</span> 3
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>4 </p>
            <p className='py-2'>Web Development</p>
            <p>Software Engineering</p>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, officiis maxime nisi facere veritatis odit aperiam, 
          non voluptate sunt alias deleniti id doloribus assumenda. Magnam at iste neque mollitia porro.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Python
            <span className='px-2'>|</span>C++
            <span className='px-2'>|</span>C
            <span className='px-2'>|</span> HTML <span className='px-2'>|</span>
            CSS <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span> Firebase
          </p>
          <p className='py-2'>
            <span className='font-bold'>Ipsum</span>
            <span className='px-2'>|</span>Lorem
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              Oregon State University
            </span>
            <span className='px-2'>|</span>Corvallis, OR
          </p>
          <p className='py-1 italic'>Computer Science Teaching Assistant (2021 - Current)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, ea amet ullam provident sequi assumenda 
              nulla qui sunt architecto necessitatibus sed delectus blanditiis quis quae neque molestiae beatae saepe magnam?
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, ea amet ullam provident sequi assumenda 
              nulla qui sunt architecto necessitatibus sed delectus blanditiis quis quae neque molestiae beatae saepe magnam?
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, ea amet ullam provident sequi assumenda 
              nulla qui sunt architecto necessitatibus sed delectus blanditiis quis quae neque molestiae beatae saepe magnam?
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, ea amet ullam provident sequi assumenda 
              nulla qui sunt architecto necessitatibus sed delectus blanditiis quis quae neque molestiae beatae saepe magnam?
            </li>
          </ul>
        </div>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>AflaTelecom, Megacom</span>
            <span className='px-2'>|</span>Bishkek, Kyrgyzstan
          </p>
          <p className='py-1 italic'>Software Engineer Intern (June 2021 - September 2021)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, ea amet ullam provident sequi assumenda 
              nulla qui sunt architecto necessitatibus sed delectus blanditiis quis quae neque molestiae beatae saepe magnam?
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, ea amet ullam provident sequi assumenda 
              nulla qui sunt architecto necessitatibus sed delectus blanditiis quis quae neque molestiae beatae saepe magnam?
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, ea amet ullam provident sequi assumenda 
              nulla qui sunt architecto necessitatibus sed delectus blanditiis quis quae neque molestiae beatae saepe magnam?
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, ea amet ullam provident sequi assumenda 
              nulla qui sunt architecto necessitatibus sed delectus blanditiis quis quae neque molestiae beatae saepe magnam?
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
