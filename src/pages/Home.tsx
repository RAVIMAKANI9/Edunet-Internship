import React from 'react';
import { Hero } from '../components/Hero';
import { Tours } from '../components/Tours';
import { About } from '../components/About';
import { Booking } from '../components/Booking';

export const Home = () => {
  return (
    <>
      <Hero />
      <Tours />
      <About />
      <Booking />
    </>
  );
};