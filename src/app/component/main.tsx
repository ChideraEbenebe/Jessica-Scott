'use client';

import React, { useRef } from 'react';
import { Bebas_Neue, Anton } from 'next/font/google';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

export const anton = Anton({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
});

const Main = () => {
  const slide1Ref = useRef(null);
  const slide2Ref = useRef(null);
  const slide3Ref = useRef(null);
  const slide4Ref = useRef(null);
  const mainRef = useRef(null);
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          // trigger: mainRef.current,
          start: '40% center',
          end: 'bottom center',
          toggleActions: 'play none none reverse',
          pin: mainRef.current,
          scrub: 2,
          markers: false,
        },
      });
      tl.fromTo(
        slide1Ref.current,
        {
          y: 0,
          opacity: 1,
          ease: 'power1.inOut',
          duration: 4,
        },
        {
          y: 150,
          opacity: 0,
        }
      );
      tl.fromTo(
        slide2Ref.current,
        {
          y: 0,
          opacity: 1,
          ease: 'power1.inOut',
          duration: 4,
        },
        {
          y: 150,
          opacity: 0,
        }
      );
      tl.fromTo(
        slide3Ref.current,
        {
          y: 0,
          opacity: 1,
          ease: 'power1.inOut',
          duration: 4,
        },
        {
          y: 150,
          opacity: 0,
        }
      );
      tl.fromTo(
        slide4Ref.current,
        {
          scaleX: 1,
          opacity: 1,
          ease: 'power1.inOut',
          duration: 4,
        },
        {
          scaleX: 0,
          opacity: 0,
        }
      );
    },
    { scope: container }
  );

  return (
    <main
      className=' p-6 pt-[7.5rem] h-screen bg-black '
      ref={mainRef}>
      <section className='flex flex-col gap-4 section'>
        <h2
          className={`${anton.className} text-green-400 uppercase text-[2.5rem] text-center`}>
          Hi, I&apos;m Jess!
        </h2>
        <div className={`${bebasNeue.className} antialiased `}>
          <div
            className='text-[8rem] text-center tracking-[-3px] slide uppercase  leading-[0.95] overflow-hidden'
            ref={container}>
            <h1
              className=''
              ref={slide1Ref}>
              Creating Intuitive
            </h1>
          </div>
          <div className='text-[8rem] text-center tracking-[-3px] slide uppercase  leading-[0.95] overflow-hidden'>
            <h1 ref={slide2Ref}>and engaging</h1>
          </div>
          <div className='text-[8rem] text-center tracking-[-3px] slide uppercase  leading-[0.95] overflow-hidden'>
            <h1 ref={slide3Ref}>digital products</h1>
          </div>
        </div>
        <div
          className={`${anton.className} antialiased `}
          ref={slide4Ref}>
          <div className={`text-center font-extralight text-xl mb-2 `}>
            <p>I&apos;m an UI/UX designer on a mission to make digital</p>
          </div>
          <div className={`text-center font-extralight text-xl  `}>
            <p>experiences more delightful</p>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Main;
