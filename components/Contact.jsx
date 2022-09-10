import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

const Contact = () => {

  return (
    <div id="contact" className='bg-[#eff7f6] bg-white snap-always snap-start pt-24'>
       <p className='md:hidden uppercase text-2xl text-center tracking-widest'>
            CONTACT
        </p>
    <div className='w-full flex items-center lg:h-full pb-24'>
      <p className='hidden md:flex uppercase text-2xl text-center tracking-widest pl-12 text-2xl font-normal'>
            CONTACT
      </p>
      
      <div className='max-w-[1240px] m-auto px-2 w-full h-full flex justify-center'>
      
          {/* left */}
          {/* right */}
          <div className='col-span-6 w-[60%] h-auto rounded-3xl lg:p-12 md:mr-48 bg-[#ffff] border-gradient-t-instagram-gradient-white border-transparent border-solid border-[1px]'>
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
                    className='rounded-xl p-3 flex text-black border-solid border border-[#d2d7df]'
                    type='email'
                    name='email'
                    placeholder='example@email.com'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Message</label>
                  <textarea
                    className='rounded-3xl p-3 text-black border-solid border border-[#d2d7df]'
                    rows='10'
                    name='message'
                    placeholder='your message...'
                  ></textarea>
                </div>
                <div className='w-full text-center'>
                <button className='text-gray-700 shadow-sm shadow-[#7371fc] p-2 mt-4 hover:border-[#eff7f6] hover:bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 ease-in duration-1000 hover:text-gray-100'>
                  Send Message
                </button>
                </div>
              </form>
            </div>
          </div>
      </div>
    </div>
  </div>
  );
};

export default Contact;
