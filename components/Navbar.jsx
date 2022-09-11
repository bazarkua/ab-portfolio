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


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('black');
  const [linkColor, setLinkColor] = useState('#ffff');
  // const [position, setPosition] = useState('fixed')
  // const router = useRouter();

  // useEffect(() => {
  //   if (
  //     router.asPath === '/property' ||
  //     router.asPath === '/crypto' ||
  //     router.asPath === '/netflix' ||
  //     router.asPath === '/twitch'
  //   ) {
  //     setNavBg('transparent');
  //     setLinkColor('#ecf0f3');
  //   } else {
  //     setNavBg('#ecf0f3');
  //     setLinkColor('#1f2937');
  //   }
  // }, [router]);

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
      <div className='justify-between items-center w-full h-full px-14 2xl:px-16'>
        <div>
          <ul style={{ color: `${linkColor}` }} className='hidden md:flex pt-6 flex flex-row'>
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
            <li className='row-5 ml-10 text-xl relative group hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ease-in duration-500'>
            <Menu>
            <span>
              <Menu.Button className='font-light text-white text-xl hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ease-in duration-500'>Resume</Menu.Button>
            </span>
                <Menu.Items className='fixed flex flex-col text-gray-100 bg-black opacity-[1] rounded-2xl p-4'>
                  <Menu.Item>
                    {({ active }) => (
                    <a
                        className={`${active && 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ease-in duration-500'} text-[17px] py-2`}
                        href="Adilbek-Bazarkulov-CV.pdf" title="Adilbek Bazarkulov CV"
                      >
                        View
                      </a>
                    )}
                  </Menu.Item>
                <Menu.Item>
                 {({ active }) => (
                    <a
                     className={`${active && 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ease-in duration-500'} text-[17px] py-2`}
                     href="Adilbek-Bazarkulov-CV.pdf" download="Adilbek-Bazarkulov-CV.pdf"
                    >
                      Download
                    </a>
                  )}
                 </Menu.Item>
             </Menu.Items>
            </Menu>
            <span className="absolute -bottom-1 top-6 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-600  transition-all group-hover:w-full"></span>
            </li>
            <li className="row-6 ml-10 text-xl relative group hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ease-in duration-500">
              <Link href="/#contact">
              <span>Contact</span>
              </Link>
              <span className="absolute -bottom-1 top-6 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-600  transition-all group-hover:w-full"></span>
            </li>
            <li className='xl:ml-[47%] lg:ml-[33%] md:ml-[12%] sm:ml-[17%] text-white text-xl'>
            <button>
          
            <CgDarkMode
              size={25}
              className='cursor-pointer'
              style={{ color: 'white'}}
            />
          
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
            <AiOutlineMenu size={25} style={{ color: 'white'}} />
          </div>
        </div>
          {/* Hamburger Icon */}
          <button className='pt-6 row-2 md:hidden'>
          
            <CgDarkMode
              size={25}
              className='cursor-pointer'
              style={{ color: 'white'}}
            />
          
        </button>
        </div>
          
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
        <div style={{ backgroundColor: `${navBg}` }}
          className={
            nav
              ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
            <div className='flex'>
              <div
                onClick={handleNav}
                className='rounded-full text-xl p-2 cursor-pointer text-gray-700 relative left-[95%] hover:scale-110 ease-in duration-300'>
                <AiOutlineClose
                style={{ color: 'white'}} />
              </div>
            </div>
          <div className='py-1 flex flex-col text-gray-100 h-screen'>
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
            <li className="relative group w-[30%] pt-6">
              <span>
              <Menu>
              <Menu.Button className='font-light text-white uppercase hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ease-in duration-500'>Resume</Menu.Button>
                <Menu.Items className='flex flex-col text-gray-100 opacity-[1] rounded-2xl p-4'>
                  <Menu.Item>
                    {({ active }) => (
                    <a
                        className={`${active && ''} text-[17px] py-3`}
                        href="Adilbek-Bazarkulov-CV.pdf" title="Adilbek Bazarkulov CV"
                      >
                        View
                      </a>
                    )}
                  </Menu.Item>
                <Menu.Item>
                 {({ active }) => (
                    <a
                     className={`${active && ''} text-[17px] py-3`}
                     href="Adilbek-Bazarkulov-CV.pdf" download="Adilbek-Bazarkulov-CV.pdf"
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
