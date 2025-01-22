import React from 'react'
import Hero from './Hero';
import Table from './Table';
import Product from './Toppicks';
import AsguardSofa from './AsguardSofa';
import Blog from './Blog';
import Insta from './Insta';

export default function Home() {
  return (
    <div className='w-full -[5052px]'>
      <Hero />
      <Table />
      <Product/>
      <AsguardSofa />
      <Blog />
      <Insta />
    </div>
  );
}
