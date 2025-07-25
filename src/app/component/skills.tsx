'use client';

import React from 'react';
import { Oswald } from 'next/font/google';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { rationale } from './nav';

gsap.registerPlugin(ScrollTrigger);

export const oswald = Oswald({
  weight: ['200', '300', '400', '500', '600', '700'],
  display: 'swap',
  subsets: ['latin'],
});

const skills = [
  { id: 1, text: '3D Motion' },
  { id: 2, text: 'Landing Page' },
  { id: 3, text: 'Mobile Design' },
  { id: 4, text: 'Logo and Branding' },
];

const Skills = () => {
  const liRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(liRefs.current, {
      y: 100,
      duration: 1,
      opacity: 0,
      stagger: 0.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
        markers: false,
      },
    });
  });

  return (
    <section
      className='bg-green overflow-hidden h-screen'
      ref={containerRef}>
      <main className='pt-[6rem]'>
        <h3
          className={`${rationale.className} antialiased px-20 text-3xl uppercase tracking-widest text-white pb-10`}>
          What I Do
        </h3>
        <div className='w-screen relative left-1/2 right-1/2 -mx-[50vw] text-white'>
          <ul
            className={`${oswald.className} antialiased font-semibold flex flex-col border-t border-b border-gray-700 w-full [perspective:800px] [transform-style:preserve-3d]`}>
            {skills.map((skill, i) => (
              <li
                className={` uppercase text-8xl py-4 px-20  w-full  ${
                  i < skills.length - 1 ? ' border-b border-gray-700' : ''
                }`}
                key={skill.id}>
                <h2
                  className=''
                  ref={(el) => {
                    liRefs.current[i] = el;
                  }}>
                  {skill.text}
                </h2>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </section>
  );
};

export default Skills;
