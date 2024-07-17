import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import img from "./assets/photo.jpg"
import { GoHome } from "react-icons/go";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-white h-screen w-screen flex overflow-hidden'>
      <div className="min-w-max h-screen border-r-[1px] border-gray-200 text-black p-10">
        <div className='py-2 flex gap-4 items-center '>
          <img className='rounded h-16' src={img} alt="" />
          <div>
            <p className='text-lg font-semibold text-slate-800'>Snehasis Debbarman</p>
            <p className='text-sm text-slate-600'>UI Developer</p>
          </div>
        </div>
        <div className='py-8'>
          <div className='flex gap-2 items-center'>
            <GoHome />
            <p className='text-xs font-light'>Home</p>
          </div>
        </div>
      </div>
      {/* main section */}
      <div className="container p-10 w-full">
        <div className="max-w-max text-xs  bg-green-100 text-green-500 rounded px-4 py-2">Available for Work</div>
        <div className='pt-10 pb-6'>
          <h2 className='text-5xl font-semibold'>Hey There!</h2>
          <h3 className='text-5xl font-semibold pt-4'>I'm Snehasis...</h3>
        </div>
        <div className='w-1/2 text-lg font-extralight'>
          I'm  a passionate web designer dedicated to crafting visually stunning and user-friendly websites.
        </div>
      </div>

    </div>
  )
}

export default App
