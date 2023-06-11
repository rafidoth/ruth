import React from 'react';

const Input = ({ handleFunction, type, name,placeholder, inputType }) => {

  let inputField;
  let optionArray = [
    'Select an option',
    'Web Application Development',
    'Android Application Development',
    'iOS Application Development',
    'Desktop Application Development',
    'Front End Engineering',
    'Backend Engineering',
    'Machine Learning',
    'Blockchain Development',
    'Data Science',
    'Data Visualization',
    'Data Analysis',
  ]

  if(inputType == 'normal'){
    inputField = <input onChange={handleFunction} type={type} placeholder={placeholder} name={name} className='bg-transparent rounded-full border border-black/[0.1] dark:border-white/[.1] px-5 py-3 focus:outline-none ' />
  }else if(inputType == 'optional'){
    inputField = 
      <select onChange={handleFunction} className='bg-white dark:bg-ruth-bg-900 rounded-full border border-black/[0.1] dark:border-white/[.1] px-5 py-3 focus:outline-none '>
        {optionArray.map(item =>{
      return <option key={item} value={item.trim()}>{item}</option>
    })}
      </select>
      
  }else if(inputType=='textarea'){
    inputField = <textarea onChange= {handleFunction} className='bg-white dark:bg-ruth-bg-900 rounded-3xl border border-black/[0.1] dark:border-white/[.1] px-5 py-3 focus:outline-none' rows={10} cols={30} placeholder='Enter your idea'></textarea>
  }


  return (
    <>
        {inputField}
    </>
  );
};

export  {Input};
