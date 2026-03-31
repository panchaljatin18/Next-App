'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const slides = [
  { id: 1, title: 'Slide 1', src: '/assets/images/City Skyline.png' },
  { id: 2, title: 'Slide 2', src: '/assets/images/Mountain Landscape.png' },
  { id: 3, title: 'Slide 3', src: '/assets/images/Ocean Waves.png' },
];

export default function CarouselCards() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (current === slides.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrent(0);
      }, 500);
      setTimeout(() => setIsTransitioning(true), 550);
    }
  }, [current]);

  return (
    <section className="relative w-full max-w-2xl  mx-auto mt-10 h-84 overflow-hidden ">
      
      <div className="absolute inset-0 bg-linear-to-r from-black/70 to-transparent z-10 pointer-events-none">
      <div
        className="flex h-full"
        style={{
          transform: `translateX(-${current * 100}%)`,
          transition: isTransitioning ? 'transform 500ms' : 'none'
        }}
      >
        {[...slides, slides[0]].map((slide, index) => (
          <div
            key={index}
            className="relative min-w-full h-full"
          >
            <Image
              src={slide.src}
              alt={slide.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}