'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
gsap.registerPlugin(ScrollSmoother);

export default function SmoothScrollWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const smootherRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (smootherRef.current) {
      ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
        smooth: 2,
        effects: true,
      });
    }
  }, []);

  return (
    <div
      id='smooth-wrapper'
      ref={smootherRef}>
      <div id='smooth-content'>{children}</div>
    </div>
  );
}
