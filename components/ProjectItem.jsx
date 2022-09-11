import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFigma, FaGithub } from 'react-icons/fa';
import { CgFileDocument } from 'react-icons/cg';

const ProjectItem = ({icon, title, backgroundImg, tech, projectUrl, src1}) => {

{/* Conditional Rendering for Icons */}
function Icons(props) {
  const Icon = props.Icon;
  if (Icon == 1) {
    return (
      <div>
      <div className='hidden group-hover:block absolute top-[80%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
          
      <a
                    href='https://github.com/bazarkua/car-worms-new'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full p-2 cursor-pointer hover:text-white hover:scale-110 ease-in duration-300 hover:hover:bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 ease-in duration-300'>
                      <FaGithub className='text-4xl'/>
                    </div>
                  </a>
      </div>
      </div>
    );
  }
  if (Icon == 2){
  return <div>
    <div className='hidden group-hover:block absolute top-[80%] left-[55%] translate-x-[-50%] translate-y-[-50%]'>
          
    <a
                href='https://docs.google.com/document/d/1x5nt1r5BHSA5ZAna_1sC-_2sUk0HyO-mzBycDTH36nM/edit?usp=sharing'
                target='_blank'
                rel='noreferrer'
              >
                <div className='rounded-full p-2 cursor-pointer hover:text-white hover:scale-110 ease-in duration-300 hover:hover:bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 ease-in duration-300'>
                  <CgFileDocument className='text-4xl'/>
                </div>
              </a>
    </div>
    <div className='hidden group-hover:block absolute top-[80%] left-[45%] translate-x-[-50%] translate-y-[-50%]'>
          
    <a
                href='https://www.figma.com/proto/N6cf92Mj0u2yR5ggp2DY8s/CS352-B-Team?node-id=55%3A289&starting-point-node-id=55%3A289 '
                target='_blank'
                rel='noreferrer'
              >
                <div className='rounded-full p-2 cursor-pointer hover:text-white hover:scale-110 ease-in duration-300 hover:hover:bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 ease-in duration-300'>
                  <FaFigma className='text-4xl'/>
                </div>
              </a>
    </div>
  </div>
  }
}

  return (
    <div className='bg-transparent relative flex items-center justify-center h-full bg-white w-full rounded-xl group hover:bg-gradient-to-r from-white via-fuchsia-200 to-indigo-200 ease-in duration-1000'>
    
    <Image className='rounded-xl group-hover:opacity-10' src={backgroundImg} alt='/' 
    width={1440}
    height={890}/> 
    <div className='hidden group-hover:block absolute top-[30%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
      <h3 className='text-xl font-light text-black tracking-wider text-center text-md pb-10'>{title}</h3>
    </div>
 
    <Icons Icon={icon}/>

    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <p className='text-center text-black text-sm'>{tech}</p>
    </div>
    
 </div>
  )
}

export default ProjectItem