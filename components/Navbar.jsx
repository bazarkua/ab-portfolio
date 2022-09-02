import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
// import { useRouter } from 'next/router';
import NavLogo from '../public/assets/fav.svg'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#36b0ff');
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
      style={{ backgroundColor: `${navBg}`}}
      className={
        shadow
          ? 'fixed w-full h-20 shadow-xl shadow-[#ffff] z-[100] ease-in-out duration-300'
          : 'fixed w-full h-20 z-[100]'
      }
    >
      <div className='flex absolute relative lg:left-[50%] top-[50%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white p-2'>
        <div>
          <ul style={{ color: `${linkColor}` }} className='hidden xl:flex text-xl uppercase'>
            <li className="m-16 relative group">
              <Link href="/">
              <span>Home</span>
              </Link>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
            </li>
            <li className="m-16 relative group">
              <Link href="/#about">
              <span>About</span>
              </Link>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
            </li>
            <li className="m-16 relative group">
              <Link href="/#skills">
              <span>Skills</span>
              </Link>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
            </li>
            <li className="m-16 relative group">
              <Link href="/#projects">
              <span>Projects</span>
              </Link>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
            </li>
            <li className="m-16 relative group">
              <Link href="/resume">
              <span>Resume</span>
              </Link>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
            </li>
            <li className="m-16 relative group">
              <Link href="/#contact">
              <span>Contact</span>
              </Link>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className='xl:hidden'
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? 'xl:hidden fixed left-0 top-0 w-full h-full bg-black/70' : ''
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
                className='rounded-full shadow-lg p-3 cursor-pointer text-white relative left-[95%]'>
                <AiOutlineClose />
              </div>
            </div>
          <div className='py-1 flex flex-col text-white h-screen'>
            <ul className='uppercase md:text-2xl py-8'>
            <li className="relative group w-[30%] py-4" onClick={() => setNav(false)}>
              <Link href="/">
              <span>Home</span>
              </Link>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
            </li>
            <li className="relative group w-[30%] py-4" onClick={() => setNav(false)}>
              <Link href="/#about">
              <span>About</span>
              </Link>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
            </li>
            <li className="relative group w-[30%] py-4" onClick={() => setNav(false)}>
              <Link href="/#skills">
              <span>Skills</span>
              </Link>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
            </li>
            <li className="relative group w-[30%] py-4" onClick={() => setNav(false)}>
              <Link href="/#projects">
              <span>Projects</span>
              </Link>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
            </li>
            <li className="relative group w-[30%] py-4" onClick={() => setNav(false)}>
              <Link href="/resume">
              <span>Resume</span>
              </Link>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
            </li>
            <li className="relative group w-[30%] py-4" onClick={() => setNav(false)}>
              <Link href="/#contact">
              <span>Contact</span>
              </Link>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
            </li>
            </ul>
            <div className='pt-1'>
              <p className='uppercase tracking-widest text-white text-center'>
                Let&#39;s Connect
              </p>
              <div className='flex items-center justify-between my-4'>
                <a
                  href='https://www.linkedin.com/in/bazarkua'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href='https://github.com/bazarkua'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaGithub />
                  </div>
                </a>
                <Link href='/#contact'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                  >
                    <AiOutlineMail />
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
