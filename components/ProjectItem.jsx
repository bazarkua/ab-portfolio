import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProjectItem = ({title, backgroundImg, tech, projectUrl}) => {
  return (
    <div className='relative flex items-center justify-center h-full bg-white w-full shadow-xl rounded-xl group hover:bg-gradient-to-r from-[#00B3E8] to-[#0070FA]'>
    <Image className='rounded-xl group-hover:opacity-10' src={backgroundImg} alt='/' /> 
    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
        <p className='pb-4 pt-2 text-white text-center'>{tech}</p>
        <Link href={projectUrl}>
            <p className='hover:bg-blue-300 focus:outline-none focus:ring focus:ring-violet-300 text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer hover:scale-110 ease-in-out'>More Info</p>
        </Link>
    </div>
 </div>
  )
}

export default ProjectItem