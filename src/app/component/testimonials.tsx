import React from 'react';
import svg from '@/assets/file.svg';
import { rationale } from './nav';
import man from '@/assets/man.jpg';
import Image from 'next/image';
import { VscQuote } from 'react-icons/vsc';

const Testimonials = () => {
  return (
    <section className='relative'>
      <div className='container w-full mx-auto pt-[8rem] h-screen '>
        <h2
          className={`${rationale.className} antialiased uppercase tracking-wider text-4xl text-shadow-white/30 text-shadow-lg`}>
          What They said
        </h2>
        <div className='flex justify-between gap-16 pt-20 '>
          {/* Left Column */}
          <div className='flex flex-col items-start gap-20 '>
            <h2
              className={`${rationale.className} text-xl tracking-wider w-1/2 indent-12 text-gray-400`}>
              It&apos;s a great way to get a sense of what it looks like to work
              with me. Here, you&apos;ll find firsthand accounts from people who
              have experienced my services.
            </h2>
          </div>

          {/* Right Column */}
          <div className=' flex justify-end items-start flex-col gap-10 relative'>
            <p className='text-3xl tracking-wider leading-14 uppercase z-[1]'>
              Jess did an amazing job designing our websites.
              <span className='text-green-400'> it looks great!</span>
            </p>
            <div className='flex gap-6 items-end '>
              <Image
                src={man}
                alt='man'
                className='w-24 h-24 z-[1] object-cover'
              />
              <div className='z-[1]'>
                <h6 className='text-lg tracking-wider'>Mark Leverton</h6>
                <p className='text-gray-400 text-sm tracking-wider'>
                  CEO of REM Tech
                </p>
              </div>

              <VscQuote
                size={120}
                className='absolute -top-12 -left-12 text-gray-900/100 '
              />
            </div>
          </div>
        </div>
      </div>
      <Image
        src={svg}
        alt='svg logo'
        width={400}
        className='absolute -bottom-30 -left-20 '
      />
    </section>
  );
};

export default Testimonials;
