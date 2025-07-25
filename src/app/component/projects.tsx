'use client';

import React, { useRef } from 'react';
import { bebasNeue } from './main';
import Link from 'next/link';
import Image from 'next/image';
import phone from '@/assets/phone.jpg';
import laptop from '@/assets/laptop.jpg';
import lotion from '@/assets/lotion.jpg';
import { MdArrowOutward } from 'react-icons/md';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { rationale } from './nav';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  useGSAP(() => {
    gsap.from(textRef.current, {
      y: 60,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 40%',
        toggleActions: 'play none none reverse',
      },
    });
    gsap.from(buttonRef.current, {
      scaleX: 0,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 40%',
        toggleActions: 'play none none reverse',
      },
    });
  });

  return (
    <section
      className='bg-black text-gray-400 font-sans'
      ref={containerRef}>
      <div className='container mx-auto w-full'>
        <div className='flex items-center justify-between gap-16'>
          {/* Left Column */}
          <div className='flex flex-col items-start gap-20'>
            <h2
              className={`${rationale.className} text-4xl uppercase tracking-widest text-white`}>
              My Projects
            </h2>

            <Link
              href={'#'}
              ref={buttonRef}
              className={`${bebasNeue.className} antialiased rounded-full px-12 py-3 border border-gray-600 text-center uppercase tracking-wider hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition-colors duration-300`}>
              View All Projects
            </Link>
          </div>

          {/* Right Column */}
          <div className='w-1/2 flex justify-end items-start flex-col'>
            <p
              className='text-lg leading-relaxed indent-12 tracking-wider'
              ref={textRef}>
              These are some of my favorite projects that showcases a diverse
              range of projects where I've prioritized user experience and
              visual aesthetics. Each project reflects my dedication to creating
              seamless and delightful digital experiences.
            </p>
          </div>
        </div>

        {/* images */}
        <div className='grid grid-cols-3 gap-6 pt-[6rem]'>
          <div className='relative group'>
            <Image
              alt='image of phone'
              className='h-full rounded-2xl'
              src={phone}
            />

            <div className='bg-white/10 backdrop-blur-xl w-24 h-24 scale-0 group-hover:scale-100 grid place-items-center rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black transition-all duration-500'>
              <MdArrowOutward size={40} />
            </div>
          </div>
          <div className='relative group'>
            <Image
              alt='lptop'
              className='h-full object-cover rounded-2xl'
              src={laptop}
            />
            <div className='bg-white/10 backdrop-blur-xl w-24 h-24 scale-0 group-hover:scale-100 grid place-items-center rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black transition-all duration-500'>
              <MdArrowOutward size={40} />
            </div>
          </div>
          <div className='relative group'>
            <Image
              alt='lotion'
              className='h-full rounded-2xl'
              src={lotion}
            />
            <div className='bg-white/10 backdrop-blur-xl w-24 h-24 scale-0 group-hover:scale-100 grid place-items-center rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black transition-all duration-500'>
              <MdArrowOutward size={40} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
