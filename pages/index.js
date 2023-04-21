import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


import { ethers } from 'ethers';



import Navbar from './Navbar';






export default function Home() {

const handleSign = async ()=>{
  const web3 = new ethers.providers.Web3Provider(window.ethereum)

const message = "Sign this message to log in to our app" 

const adrr = await web3.getSigner().getAddress();
const  signature = await web3.getSigner().signMessage(message)



const recoveredAdrr = ethers.utils.verifyMessage(message,signature)


console.log('Recovered adrr ------- ',recoveredAdrr);

if(recoveredAdrr.toLowerCase() === '0x2FB95E6da466a16440e5789d15d376BC196af109'.toLowerCase()){
  console.log('Real owner ------------')
}
}




  return (
    
        <div className="bg-gradient-to-b h-screen from-[#114357] to-[#f29492]">
        <Navbar/>
        <button onClick={handleSign}>sign</button>
        </div>
     
  )
}
