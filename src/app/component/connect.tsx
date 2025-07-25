'use client';

import React, { useRef } from 'react';
import { rationale } from './nav';
import Link from 'next/link';
import { bebasNeue } from './main';
import {
  FaBehance,
  FaDribbble,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa6';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Connect = () => {
  const SocialRef1 = useRef(null);
  const SocialRef2 = useRef(null);
  const SocialRef3 = useRef(null);
  const SocialRef4 = useRef(null);
  const SocialRef5 = useRef(null);
  const containerRef = useRef(null);
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,

        scrub: 2,
      },
    });
    tl.from(SocialRef1.current, { x: 200, opacity: 0, duration: 1.5 }, 0)
      .from(SocialRef2.current, { x: 100, opacity: 0, duration: 1.5 }, '-=1.2')
      .from(
        SocialRef3.current,
        { scale: 0, opacity: 0, duration: 1.5 },
        '-=1.2'
      )
      .from(SocialRef4.current, { x: -100, opacity: 0, duration: 1.5 }, '-=1.2')
      .from(
        SocialRef5.current,
        { x: -200, opacity: 0, duration: 1.5 },
        '-=1.2'
      );
  });
  return (
    <section ref={containerRef}>
      <div className='container w-full mx-auto pt-[8rem] h-screen flex flex-col justify-between pb-20'>
        <div>
          <h2
            className={`${rationale.className} antialiased uppercase tracking-wider text-4xl text-shadow-white/30 text-shadow-lg`}>
            Got a project in mind?
          </h2>
          <div className='flex justify-between gap-16 pt-20 '>
            {/* Left Column */}
            <div className='flex flex-col items-start gap-20 '>
              <h2
                className={`${rationale.className} text-7xl text-shadow-lg text-shadow-white/30 tracking-wide uppercase text-green-400`}>
                lets connect
              </h2>
            </div>

            {/* Right Column */}
            <div className=' flex justify-end items-start flex-col gap-10 relative'>
              <Link
                href={'#'}
                className={`${bebasNeue.className} antialiased rounded-full px-8 py-4 border border-gray-600 text-center uppercase tracking-wider hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition-colors duration-300 text-lg`}>
                Send Me A Message
              </Link>
            </div>
          </div>
        </div>

        <div className='flex justify-between'>
          <div>
            <h6 className='uppercase text-2xl pb-6'>
              Jessica <span className='text-green-400'>Scott</span>
            </h6>

            <p className='text-balance text-xl text-gray-400  tracking-wider pb-24'>
              I&apos;m a UI/UX designer on a mission to make <br /> digital
              experiences more delightful.
            </p>

            <p className='text-gray-400 uppercase'>
              &copy; Jessica scott. 2024 all rights reserved{' '}
            </p>
          </div>
          <div className='flex flex-col justify-between'>
            <div className='flex justify-between gap-24 tracking-wider text-xl'>
              <Link
                href={'#'}
                className='uppercase'>
                what i do
              </Link>
              <Link
                href={'#'}
                className='uppercase'>
                my projects
              </Link>
              <Link
                href={'#'}
                className='uppercase'>
                testimonials
              </Link>
              <Link
                href={'#'}
                className='uppercase'>
                About me
              </Link>
            </div>
            <div className='flex justify-between items-center text-gray-400 pb-6'>
              <Link
                href={'#'}
                ref={SocialRef1}>
                <FaBehance size={30} />
              </Link>
              <Link
                href={'#'}
                ref={SocialRef2}>
                <FaDribbble size={30} />
              </Link>
              <Link
                href={'#'}
                ref={SocialRef3}>
                <FaInstagram size={30} />
              </Link>
              <Link
                href={'#'}
                ref={SocialRef4}>
                <FaLinkedinIn size={30} />
              </Link>
              <Link
                href={'#'}
                ref={SocialRef5}>
                <FaYoutube size={30} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
