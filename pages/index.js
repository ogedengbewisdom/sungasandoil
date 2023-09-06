import Head from 'next/head';
import { Inter } from 'next/font/google';
import Workers from '@/screen/Workers';
import Services from '@/screen/Services';
import About from '@/screen/About';
import Previouswork from '@/screen/Previouswork';
import Contact from '@/screen/Contact';
import NewsLetter from '@/screen/NewsLetter';
import React from 'react';

const inter = Inter({ subsets: ['latin'] })

 const Homes = () => {
 
  return (
    <>
      <Head>
        <title>SunOil&Gas</title>
        <meta name="description" content="sun oil and gas is the best place for your products" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter.className}>
       
        <Workers />
        <Services />
        <About />
        <Previouswork />
        <Contact />
        <NewsLetter />
      </main>
    </>
  )
}

export default Homes