import React from 'react';

const Input = ({ handleFunction, type, name,placeholder }) => {
  return (
    <>
        <input onChange={handleFunction} required type={type} placeholder={placeholder} name={name} className='bg-transparent rounded-full border border-black/[0.1] dark:border-white/[.1] px-5 py-3 focus:outline-none ' />
    </>
  );
};

export  {Input};