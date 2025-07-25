'use client';

import gsap from 'gsap';
import { Menu } from 'lucide-react';
import { useEffect } from 'react';
import { Rationale } from 'next/font/google';

export const rationale = Rationale({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

export default function Navbar() {
  useEffect(() => {
    gsap.from('.heading1', {
      x: -300,
      opacity: 0,
      duration: 1.5,
    });
    gsap.from('.menu', {
      y: -200,
      opacity: 0,
      duration: 1.5,
      delay: 0,
    });
    gsap.from('.heading2', {
      x: 50,
      opacity: 0,
      duration: 1.5,
      delay: 0,
    });
  });
  return (
    <header
      className={`${rationale.className} p-[2.5rem] text-2xl font-semibold overflow-hidden antialiased  bg-black`}>
      <nav className='flex justify-between items-center gap-4'>
        <h3 className={`${rationale.className} heading1 uppercase`}>
          Toronto, Canada
        </h3>
        <Menu
          size={30}
          className='menu'
        />
        <h3 className='heading2'>08 : 06 : 54</h3>
      </nav>
    </header>
  );
}
