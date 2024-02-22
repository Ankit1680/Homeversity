import React from 'react';

function CentralContent() {
  return (
    <div className='h-[60%] text-white w-full p-[20px] flex flex-col justify-between'>
      <div className='h-[60%] w-full text-[8vw] font-bold tracking-tighter leading-none'>
        <h1 className='mb-4'>FIND <span className='bg-gradient-to-l from-yellow-500'>YOUR</span></h1>
        <h1 className='mb-4'>DREAM</h1>
      </div>
      <h3 className=' mt-[60px] text-lg font-semibold leading-none mb-8'>Sit amet consectetur adipisicing elit. Magni, ipsum. Sapiente magnam fugiat voluptate alias!</h3>
      <button className='text-white bg-zinc-800 px-10 py-4 font-semibold tracking-tighter text-xl w-fit rounded-full hover:text-black hover:bg-white duration-[0.5s]'>Explore</button>
    </div>
  );
}

export default CentralContent;
