import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

const Contact = () => {

  return (
    <div id="contact" className='text-gray-100'>
        <div className='h-[100px]'>

        </div>
      <p className='uppercase text-2xl text-center tracking-widest pt-1 text-black'>
        CONTACT
      </p>
      <div className='h-[100px]'></div>
    <div className='w-full lg:h-full bg-[#36b0ff] shadow-2xl'>
      <div className='max-w-[1240px] m-auto px-2 pt-24 w-full h-full'>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl rounded-xl p-4'>
            <div className='lg:p-4'>
              <div>
                <h2 className='py-2'>Adilbek Bazarkulov</h2>
                <p>Software Engineer</p>
                <p className='py-4'>
                  I am available for new opportunites
                </p>
              </div>
              <div>
                <p className='uppercase pt-8'>Connect With Me</p>
                <div className='flex items-center justify-between py-10'>
                  <a
                    href='https://www.linkedin.com/in/bazarkua/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href='https://github.com/bazarkua'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaGithub />
                    </div>
                  </a>

                  <div className='rounded-full shadow-lg p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <a href='mailto:bazarkua@oregonstate.edu'>
                    <AiOutlineMail />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className='col-span-3 w-full h-auto rounded-xl lg:p-4'>
            <div className='p-4'>
              <form
                action='https://getform.io/f/08ebcd37-f5b5-45be-8c13-714f011ce060'
                method='POST'
                encType='multipart/form-data'
              >
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input
                    className='rounded-lg p-3 flex text-black'
                    type='email'
                    name='email'
                    placeholder='example@email.com'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Message</label>
                  <textarea
                    className='rounded-lg p-3 text-black'
                    rows='10'
                    name='message'
                    placeholder='type your message here :)'
                  ></textarea>
                </div>
                <div className='w-full text-center'>
                <button className='shadow-2xl p-2 mt-4 text-gray-100 hover:bg-gradient-to-r from-[#00B3E8] to-[#0070FA]'>
                  Send Message
                </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center'>
          <Link href='/'>
            <a>
              <div className='rounded-full shadow-lg p-4 cursor-pointer hover:scale-110 ease-in duration-300 animate-bounce w-full h-full'>
                <HiOutlineChevronDoubleUp 
                  className='text-[#ffff]'
                  size={25}
                />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Contact;
