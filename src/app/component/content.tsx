'use client';

import Image from 'next/image';
import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import image from '@/assets/woman.jpg';
import { anton, bebasNeue } from './main';
import {
  FaBehance,
  FaDribbble,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa6';
import Link from 'next/link';
import { oswald } from './skills';

gsap.registerPlugin(ScrollTrigger);

const Content = () => {
  const mainRef = useRef(null);
  const imageContainerRef = useRef(null);
  const AboutRef = useRef(null);
  const AboutTextRef = useRef(null);
  const nameRef = useRef(null);
  const bioRef = useRef(null);
  const buttonRef = useRef(null);
  const SocialRef1 = useRef(null);
  const SocialRef2 = useRef(null);
  const SocialRef3 = useRef(null);
  const SocialRef4 = useRef(null);
  const SocialRef5 = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainRef.current,
        start: 'top top',
        scrub: 2,
        pin: true,
      },
    });

    tl.set(imageContainerRef.current, {
      position: 'absolute',
      top: 0,
      left: '50%',
      width: '100%',
      height: '100vh',
      zIndex: 20,
      x: '-50%',
    });

    tl.to(imageContainerRef.current, {
      width: 500,
      height: '100%',
      position: 'relative',
      bottom: '20px',
      top: '0px',
      left: '50%',
      x: '-50%',
      ease: 'power2.inOut',
      duration: 1.5,
    })
      .from(
        AboutRef.current,
        {
          scaleY: 0,
          opacity: 0,
          ease: 'expo.in',
          duration: 1.5,
        },
        '-=1.5'
      ) // Start 1.5s before the image animation ends
      .from(
        AboutTextRef.current,
        {
          y: -200,
          x: -200,
          opacity: 0,
          ease: 'expo.in',
          duration: 1.5,
        },
        '-=1.2'
      )
      .from(
        nameRef.current,
        {
          scaleX: 0,
          opacity: 0,
          ease: 'expo.in',
          duration: 1.5,
        },
        '-=1.2'
      )
      .from(
        bioRef.current,
        {
          y: 200,
          x: -200,
          opacity: 0,
          ease: 'expo.in',
          duration: 1.5,
        },
        '-=1.2'
      )
      .from(
        buttonRef.current,
        {
          y: 200,
          opacity: 0,
          ease: 'expo.in',
          duration: 1.5,
        },
        '-=1.2'
      )
      .from(SocialRef1.current, { x: 200, opacity: 0, duration: 1.5 }, '-=1.2') // Start 1.2s before the previous animation ends
      .from(SocialRef2.current, { x: 100, opacity: 0, duration: 1.5 }, '-=1.2') // Start 1.2s before the previous animation ends
      .from(
        SocialRef3.current,
        { scale: 0, opacity: 0, duration: 1.5 },
        '-=1.2'
      ) // Start 1.2s before the previous animation ends
      .from(SocialRef4.current, { x: -100, opacity: 0, duration: 1.5 }, '-=1.2') // Start 1.2s before the previous animation ends
      .from(
        SocialRef5.current,
        { x: -200, opacity: 0, duration: 1.5 },
        '-=1.2'
      ); // Start 1.2s before the previous animation ends
  }, []);

  return (
    <article
      className='h-screen '
      ref={mainRef}>
      <main className=' relative h-screen pb-10'>
        <section className='grid grid-cols-3 relative h-screen  px-20 '>
          <div className='flex flex-col justify-between '>
            <div className='flex flex-col gap-20 pt-28'>
              <h4
                ref={AboutRef}
                className={`${bebasNeue.className} antialiased text-3xl tracking-wide font-extralight block`}>
                ABOUT ME
              </h4>

              <p
                ref={AboutTextRef}
                className={`${oswald.className} antialiased text-5xl text-balance uppercase leading-20 text-gray-400 font-semibold tracking-tight`}>
                I deliver exceptional user experiences across various platforms
              </p>
            </div>
            <div className='flex flex-col gap-4 justify-end  '>
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
          <div
            ref={imageContainerRef}
            style={{ pointerEvents: 'none' }}
            className='flex justify-end items-end pb-6 px-6'>
            <Image
              src={image}
              alt='billy'
              className='w-full h-[90%] object-cover rounded-3xl '
              draggable={false}
            />
          </div>
          <div className='flex flex-col justify-end items-start  gap-6 px-4 pb-6'>
            <h4
              className={`${anton.className} antialiased text-5xl font-semibold`}
              ref={nameRef}>
              Jessica <span className='text-green-400'>Scott</span>
            </h4>
            <p
              className={`${bebasNeue.className} antialiased text-gray-400 text-xl tracking-wider text-balance leading-10 `}
              ref={bioRef}>
              As a UI/UX designer with four years of experience, I&apos;ve
              consistently pour my heart and soul into creating products that
              not only look great but feel amazing to use. Currently, I work as
              a Senior designer at Dreamies Studio.
            </p>
            <div ref={buttonRef}>
              <button className='mt-4 px-6 py-2 border border-white rounded-full text-white hover:bg-white hover:text-black transition'>
                LEARN MORE
              </button>
            </div>
          </div>
        </section>
      </main>
    </article>
  );
};

export default Content;
