import React from 'react';

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4 bg-black relative z-10'>
      <div className='lg:col-span-2 my-4'>
        <p className='font-FuturaLight text-2xl text-[#989898]'>
          If you have a project or collaboration in mind, please reach out to us at
        </p>
        <a
          href='https://mail.google.com/mail/?view=cm&fs=1&to=info@pyrostudiosg.com'
          className='text-white font-FuturaBold text-2xl underline relative z-10'
        >
          info@pyrostudiosg.com
        </a>
      </div>
    </div>
  );
};

export default Newsletter;
