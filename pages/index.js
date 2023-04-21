import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


import { ethers } from 'ethers';



import Navbar from './Navbar';
import { useState } from 'react';






export default function Home() {

const [isLoginSuccess,setIsLoginSuccess] = useState(false)




  return (
    
        <div className="bg-gradient-to-b h-screen from-[#114357] to-[#f29492]">
        <Navbar setIsLoginSuccess={setIsLoginSuccess} />
        <div className='p-10'>
        {isLoginSuccess ? <p>Login successfully</p>:<p>Not Login</p>}
     
        </div>
        </div>
     
  )
}
