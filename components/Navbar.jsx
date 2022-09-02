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
      <div className='flex justify-between shadow-xl items-center w-full h-full px-2 2xl:px-16'>
        <Link href='/'>
          <a className='hover:scale-110 ease-in-out duration-500'>
            <Image
              src={NavLogo}
              alt='/'
              width='100'
              height='100'
              className='cursor-pointer opacity-60'
            />
          </a>
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className='hidden md:flex text-lg uppercase tracking-widest'>
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
            className='md:hidden'
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
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
          <div >
            <div className='flex w-full items-center justify-between'>
              <Link href='/'>
                <a>
                  <Image
                    src={NavLogo}
                    width='87'
                    height='87'
                    alt='/'
                    className='opacity-50'
                  />
                </a>
              </Link>
              <div
                onClick={handleNav}
                className='rounded-full shadow-lg p-3 cursor-pointer text-white'
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
            </div>
          </div>
          <div className='py-1 flex flex-col text-white'>
            <ul className='uppercase'>
              <Link href='/'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Home
                </li>
              </Link>
              <Link href='/#about'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  About
                </li>
              </Link>
              <Link href='/#skills'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Skills
                </li>
              </Link>
              <Link href='/#projects'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Projects
                </li>
              </Link>
              <Link href='/resume'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Resume
                </li>
              </Link>
              <Link href='/#contact'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Contact
                </li>
              </Link>
            </ul>
            <div className='pt-10'>
              <p className='uppercase tracking-widest text-white'>
                Let&#39;s Connect
              </p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
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
