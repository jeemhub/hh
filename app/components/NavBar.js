'use client'
 
import Link from 'next/link'
import { useState } from 'react'
 
export default function NavBar() {
    const [toggle,settoggle]=useState(false); 
//  #3B450D
//  #96AB46
  return (
    <>
      {/* //desctop */}
    <div className='w-screen md:flex flex-row justify-start items-center py-10 px-5 bg-red-500 text-black gap-4 font-bold text-3xl hidden' >
      <Link href='#'>
        <h1>Home</h1>
      </Link>
      <Link href='#'>
        <h1>About</h1>
      </Link>
      <Link href='#'>
        <h1>Contact</h1>
      </Link>
      <Link href='#'>
        <h1>FQS</h1>
      </Link>
    </div>
    {/*mobile*/}
    <div className='flex flex-col md:hidden'>
      <div className='flex flex-row justify-between items-center py-5 px-3'>
        <h1 className='font-bold'>Neepula</h1>
        <button onClick={()=>{
          settoggle(!toggle);
        }}>
          {toggle?'close':'open'}
        </button>
      </div>
    {
      toggle ?<div className='flex flex-col gap-8 w-full items-center h-screen justify-center pb-24 text-3xl border-solid border-b-white border-b-2'>
          <Link href='#'>
        <h1 className=' border-solid border-b-white border-b-2 pb-4'>Home</h1>
      </Link>
      <Link href='#'>
        <h1 className=' border-solid border-b-white border-b-2 pb-4'>About</h1>
      </Link>
      <Link href='#'>
        <h1 className=' border-solid border-b-white border-b-2 pb-4'>Contact</h1>
      </Link>
      <Link href='#'>
        <h1 className=' border-solid border-b-white border-b-2 pb-4'>FQS</h1>
      </Link>
      </div>:<></>
    }
        </div>
     
    </>

  )
}