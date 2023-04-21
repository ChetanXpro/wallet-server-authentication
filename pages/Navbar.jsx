import React from 'react'

import { ethers } from 'ethers';


const Navbar = ({setIsLoginSuccess,setUpdates}) => {
    
const handleSign = async ()=>{


    if (typeof window.ethereum !== "undefined"){


   
    const web3 = new ethers.providers.Web3Provider(window.ethereum)
  
  const message = "Sign this message to log in to our app" 
  
  const adrr = await web3.getSigner().getAddress();
  const  signature = await web3.getSigner().signMessage(message)


  
  
  
  const recoveredAdrr = ethers.utils.verifyMessage(message,signature)
  
  
  
  
  if(recoveredAdrr.toLowerCase() === '0x2FB95E6da466a16440e5789d15d376BC196af109'.toLowerCase()){
    setIsLoginSuccess(true)

 
  }else{
    setIsLoginSuccess(false)
  }

}else{
     alert("MetaMask not installed")
}
  }
  
  
  return (
    <div className='mx-auto  flex p-4 items-center justify-end'> <button className='border border-red-300 px-9 py-2' onClick={handleSign}>Login with wallet</button></div>
  )
}

export default Navbar