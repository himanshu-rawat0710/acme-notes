// src/components/HeroSection.tsx
import React from 'react';
import CTAButton from './unitComponents/CTAButton';
import AnimHeroImage from './Icons/AnimHeroImage';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="h-screen bg-background-100 flex pt-[72px]">
      <div className="container mx-auto px-4 text-center pt-[10vh] flex flex-col">
        <h2 className="text-5xl font-extrabold text-primary-600 mb-4">
          Welcome to Acme Note
        </h2>
        <p className="text-xl text-secondary-600 mb-8">
          The best way to take and organize your notes online.
        </p>
        <div>
          <CTAButton>Start for free</CTAButton>
        </div>
        {/* <AnimHeroImage /> */}
        <div className='h-[calc(100%-160px)] flex justify-center max-h-screen'>
          <Image src="/images/hero-image-v1.png" alt="hero-image" width={700} height={700} className='w-auto h-[100%] object-contain' />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
