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
      <p className='hidden md:flex uppercase text-2xl text-center tracking-widest pl-12 pr-14 pb-12 pt-12 text-black text-2xl font-normal bg-gradient-to-r from-indigo-200 via-fuchsia-200 to-white'>
            CONTACT
      </p>
      
      <div className='max-w-[1240px] m-auto px-2 w-full h-full flex justify-center lg:pr-12 md:pr-12 sm:pr-0'>
      
          {/* left */}
          {/* right */}
          <div className='col-span-6 w-[80%] md:w-[60%] h-auto rounded-2xl lg:p-12 md:mr-48 bg-gradient-to-r from-white via-blue-200 to-sky-200'>
            <div className='p-4'>
              <form
                action='https://getform.io/f/2f824084-b279-451b-b47f-005b64c522cc'
                method='POST'
                encType='multipart/form-data'
              >
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input
                    className='rounded-md p-3 flex text-black border-solid border border-[#d2d7df]'
                    type='email'
                    name='email'
                    placeholder='example@email.com'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Message</label>
                  <textarea
                    className='rounded-md p-3 text-black border-solid border border-[#d2d7df]'
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
