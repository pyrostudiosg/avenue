import React from 'react';
import Single from '../assets/single.png';
import Double from '../assets/double.png';
import Triple from '../assets/triple.png';
import Card from './Card';

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        <Card 
          image={Single} 
          type="Single User" 
          price="$149" 
          storage="500 GB Storage" 
          user="1 Granted User" 
          usage="Send up to 2 GB"
        />
        <Card 
          image={Double} 
          type="Double User" 
          price="$199" 
          storage="1 TB Storage" 
          user="2 Granted Users" 
          usage="Send up to 10 GB"
        />
        <Card 
          image={Triple} 
          type="Triple User" 
          price="$299" 
          storage="2 TB Storage" 
          user="3 Granted Users" 
          usage="Send up to 20 GB"
        />
      </div>
    </div>
  );
};

export default Cards;
