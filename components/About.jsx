import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const About = () => {
  return (
    <div id='about'>

      <div className='h-[100px]'>

</div>  
    <p className='uppercase text-2xl text-center tracking-widest pt-1'>
            ABOUT
    </p>
    <div className='h-[100px]'>

</div>
    <div className='w-full md:h-screen p-2 flex items-center bg-[#36b0ff] mb-1 shadow-2xl'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 shadow-2xl rounded-2xl p-20 bg-white'>
        <div className='col-span-2'>
          <p className='py-2'>
            ...Introducing my self...
          </p>
          <p className='py-2'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam et, soluta laborum ducimus 
            nam impedit eum adipisci reiciendis veniam fugit excepturi itaque minus minima vitae qui voluptatibus 
            repellendus rem alias?
          </p>
          <p className='py-2'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam et, soluta laborum ducimus 
            nam impedit eum adipisci reiciendis veniam fugit excepturi itaque minus minima vitae qui voluptatibus 
            repellendus rem alias?
          </p>
        </div>
        <div className='w-full h-auto m-auto rounded-2xl flex items-center 
        justify-center p-4 hover:scale-110 ease-in duration-300 hover:shadow-[#ffff] ease-in duration-300 hover:shadow-2xl ease-in duration-300'>
          <Image src={AboutImg} className='rounded-2xl' alt='/' />
        </div>
      </div>
    </div>
    <div className='h-[100px]'>

</div>
    <p className='uppercase text-2xl text-center tracking-widest pt-1'>
            Experience
    </p>
    <div className='h-[100px]'>

</div>
     {/* Timeline */}
     <section className="w-full bg-[#36b0ff] shadow-2xl">
                  <VerticalTimeline>
                              <VerticalTimelineElement
                                  className="vertical-timeline-element--work"
                                  contentStyle={{ background: 'white', color: 'black' }}
                                  contentArrowStyle={{ borderRight: '7px solid  white' }}
                                  date={2022}
                                  iconStyle={{ background: '#36b0ff', color: 'white' }}>
                                  <h3 className="vertical-timeline-element-title">SDE</h3>
                                  <h4 className="vertical-timeline-element-subtitle">Corvallis, OR</h4>
                                  <p>
                                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error porro reiciendis laboriosam rerum incidunt 
                                      quos natus eaque, veniam tempore ducimus at provident quia facilis corrupti aperiam. At, minima voluptatibus! Sint?
                                  </p>
                              </VerticalTimelineElement>
                              <VerticalTimelineElement
                                  className="vertical-timeline-element--work"
                                  contentStyle={{ background: 'white', color: 'black' }}
                                  contentArrowStyle={{ borderRight: '7px solid  white' }}
                                  date={2022}
                                  iconStyle={{ background: '#36b0ff', color: 'white' }}>
                                  <h3 className="vertical-timeline-element-title">SDE</h3>
                                  <h4 className="vertical-timeline-element-subtitle">Corvallis, OR</h4>
                                  <p>
                                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error porro reiciendis laboriosam rerum incidunt 
                                      quos natus eaque, veniam tempore ducimus at provident quia facilis corrupti aperiam. At, minima voluptatibus! Sint?
                                  </p>
                              </VerticalTimelineElement>
                  </VerticalTimeline>
              </section>
          </div>
  );
};

export default About;
