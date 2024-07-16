import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ image, type, price, storage, user, usage }) => {
  return (
    <div className='w-full bg-gray-100 shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
      <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={image} alt={type} />
      <h2 className='text-2xl font-bold text-center py-8'>{type}</h2>
      <p className='text-center text-4xl font-bold'>{price}</p>
      <div className='text-center font-medium'>
        <p className='py-2 border-b mx-8 mt-8'>{storage}</p>
        <p className='py-2 border-b mx-8'>{user}</p>
        <p className='py-2 border-b mx-8'>{usage}</p>
      </div>
      <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] mx-auto my-6 px-6 py-3'>Start Trial</button>
    </div>
  );
};

export default Card;
