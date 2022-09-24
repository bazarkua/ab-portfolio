import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
// import { useRouter } from 'next/router';
import NavLogo from '../public/assets/fav.svg'
import {MdDarkMode, MdLightMode} from 'react-icons/md';
import { CgDarkMode } from 'react-icons/cg';
import { Menu } from '@headlessui/react'
import { useTheme } from 'next-themes';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('black');
  const [linkColor, setLinkColor] = useState('#ffff');
  const [theme, setTheme] = useState(null)
  useEffect(() =>{
    if(window.matchMedia('(prefers-color-scheme:dark)').matches){
      setTheme('dark');
    }else{
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    if(theme === 'dark'){
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark'
    }else{
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
    }
  }, [theme]);
  
  const handleThemeSwitch = () => {
    //
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  const handleNav = () => {
    setNav(!nav);
  };
  
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}`, opacity:"0.90"}}
      className={
        shadow
          ? 'fixed w-full h-20 bg-[#F8F7FF] shadow-[#ffff] z-[100] ease-in-out duration-300'
          : 'fixed w-full h-20 z-[100]'
      }
    >
      <div className='justify-between items-center w-full h-full px-14 2xl:px-16 bg-gray-100 dark:bg-gray-900'>
        <div>
          <ul className='hidden md:flex pt-6 flex flex-row text-black dark:text-white'>
          <li className="row-1 ml-10 text-xl relative group hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ease-in duration-500">
              <Link href="/#home">
              <span>Home</span>
              </Link>
              <span className="absolute -bottom-1 top-6 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-600  transition-all group-hover:w-full"></span>
            </li>
            <li className="row-2 ml-10 text-xl relative group hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ease-in duration-500">
              <Link href="/#about">
              <span>About</span>
              </Link>
              <span className="absolute -bottom-1 top-6 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-600  transition-all group-hover:w-full"></span>
            </li>
            <li className="row-3 ml-10 text-xl relative group hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ease-in duration-500">
              <Link href="/#skills">
              <span>Skills</span>
              </Link>
              <span className="absolute -bottom-1 top-6 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-600  transition-all group-hover:w-full"></span>
            </li>
            <li className="row-4 ml-10 text-xl relative group hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ease-in duration-500">
              <Link href="/#projects">
              <span>Projects</span>
              </Link>
              <span className="absolute -bottom-1 top-6 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-600  transition-all group-hover:w-full"></span>
            </li>
            {/*<li className='row-5 ml-10 text-xl relative group hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ease-in duration-500'>
            <Menu>
            <span>
              <Menu.Button className='font-light dark:text-white text-xl border-none shadow-none hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ease-in duration-500'>Resume</Menu.Button>
            </span>
                <Menu.Items className='fixed flex text-black flex-col bg-gray-100 dark:bg-gray-900 dark:text-white opacity-[1] rounded-2xl p-4'>
                  <Menu.Item>
                    {({ active }) => (
                    <a
                        className={`${active && 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ease-in duration-500'} text-[17px] py-2`}
                        href="Adilbek-Bazarkulov-Resume.pdf" title="Adilbek Bazarkulov Resume"
                      >
                        View
                      </a>
                    )}
                  </Menu.Item>
                <Menu.Item>
                 {({ active }) => (
                    <a
                     className={`${active && 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ease-in duration-500'} text-[17px] py-2`}
                     href="Adilbek-Bazarkulov-Resume.pdf" download="Adilbek-Bazarkulov-Resume.pdf"
                    >
                      Download
                    </a>
                  )}
                 </Menu.Item>
             </Menu.Items>
            </Menu>
            <span className="absolute -bottom-1 top-6 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-600  transition-all group-hover:w-full"></span>
            </li>
                 */}
            <li className="row-6 ml-10 text-xl relative group hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ease-in duration-500">
              <Link href="/#contact">
              <span>Contact</span>
              </Link>
              <span className="absolute -bottom-1 top-6 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-600  transition-all group-hover:w-full"></span>
            </li>
            <li className='text-white text-xl'>
            <button 
            type='button'
            onClick={handleThemeSwitch}
            className='fixed z-10 right-8 text-white text-2xl'
            >
                {theme == 'dark' ? <MdLightMode/> : <MdDarkMode style={{color:'black'}}/> }
            </button>
            
        </li>
            
          </ul>
          <div className='flex flex-row'>
          <div className='row-1 text-white text-xl md:hidden pt-6 pr-[80%]'>
            
        <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className='md:hidden'
          >
            <AiOutlineMenu size={25} className='text-black dark:text-gray-100' />
          </div>
        </div>
          
        </div>
        <button 
            type='button'
            onClick={handleThemeSwitch}
            className='fixed z-10 right-12 top-6 text-white text-2xl md:hidden'
            >
                {theme == 'dark' ? <MdLightMode/> : <MdDarkMode style={{color:'black'}}/> }
            </button>
        </div>
        
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-full bg-black/70' : ''
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-gray-100 dark:bg-slate-900 p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
            <div className='flex'>
              <div
                onClick={handleNav}
                className='rounded-full text-xl p-2 cursor-pointer text-gray-700 relative left-[95%] hover:scale-110 ease-in duration-300'>
                <AiOutlineClose
               className='text-black dark:text-gray-100' />
              </div>
            </div>
          <div className='py-1 flex flex-col text-black dark:text-gray-100 h-screen'>
            <ul className='uppercase md:text-2xl py-8'>
            <li className="relative group w-[30%] pt-6 hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ease-in duration-500" onClick={() => setNav(false)}>
              <Link href="/#home">
              <span>Home</span>
              </Link>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-600  transition-all group-hover:w-full"></span>
            </li>
            <li className="relative group w-[30%] pt-6 hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ease-in duration-500" onClick={() => setNav(false)}>
              <Link href="/#about">
              <span>About</span>
              </Link>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-600 transition-all group-hover:w-full"></span>
            </li>
            <li className="relative group w-[30%] pt-6 hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ease-in duration-500" onClick={() => setNav(false)}>
              <Link href="/#skills">
              <span>Skills</span>
              </Link>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-600 transition-all group-hover:w-full"></span>
            </li>
            <li className="relative group w-[30%] pt-6 hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ease-in duration-500" onClick={() => setNav(false)}>
              <Link href="/#projects">
              <span>Projects</span>
              </Link>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-600 transition-all group-hover:w-full"></span>
            </li>
            {/*
            <li className="relative group w-[30%] pt-6">
              <span>
              <Menu>
              <Menu.Button className='font-light border-none shadow-none text-black dark:text-gray-100 uppercase hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ease-in duration-500'>Resume</Menu.Button>
                <Menu.Items className='flex flex-col text-black dark:text-gray-100 opacity-[1] rounded-2xl p-4'>
                  <Menu.Item>
                    {({ active }) => (
                    <a
                        className={`${active && ''} text-[15px] py-3`}
                        href="Adilbek-Bazarkulov-Resume.pdf" title="Adilbek Bazarkulov Resume"
                      >
                        View
                      </a>
                    )}
                  </Menu.Item>
                <Menu.Item>
                 {({ active }) => (
                    <a
                     className={`${active && ''} text-[15px] py-3`}
                     href="Adilbek-Bazarkulov-Resume.pdf" download="Adilbek-Bazarkulov-Resume.pdf"
                    >
                      Download
                    </a>
                  )}
                 </Menu.Item>
             </Menu.Items>
            </Menu>
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-600 transition-all group-hover:w-full"></span>
            </li>
                 */}
            <li className="relative group w-[30%] pt-6 hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ease-in duration-500" onClick={() => setNav(false)}>
              <Link href="/#contact">
              <span>Contact</span>
              </Link>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-600 transition-all group-hover:w-full"></span>
            </li>
            </ul>
            <div className='pt-6'>
              <p className='uppercase tracking-widest text-gray-100  text-center bg-gradient-to-r from-purple-400 to-pink-600 ease-in duration-500'>
                Let&#39;s Connect
              </p>
              <div className='flex items-center justify-between my-4'>
                <a
                  href='https://www.linkedin.com/in/bazarkua'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full p-3 cursor-pointer hover:text-white hover:scale-110 ease-in duration-300 hover:hover:bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 ease-in duration-300'>
                    <FaLinkedinIn className='text-xl' />
                  </div>
                </a>
                <a
                  href='https://github.com/bazarkua'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full p-3 cursor-pointer hover:text-white hover:scale-110 ease-in duration-300 hover:hover:bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 ease-in duration-300'>
                    <FaGithub  className='text-xl'/>
                  </div>
                </a>
                <Link href='/#contact'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full p-3 cursor-pointer hover:text-white hover:scale-110 ease-in duration-300 hover:hover:bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 ease-in duration-300'
                  >
                    <AiOutlineMail className='text-xl'/>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
