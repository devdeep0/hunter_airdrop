"use client"
import React, { useState, useEffect } from 'react';
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { useAddress } from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { Meteors } from "@/Components/ui/meteors";
import { CONTRACT_ADDRESSES } from "../utils/constants";
import { ConnectWallet,darkTheme,} from "@thirdweb-dev/react"
import axios from "axios"
import Image from 'next/image';


import { Button } from "@/Components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/Components/ui/dialog"
import { Input } from "@/Components/ui/input"
import { Label } from "@/Components/ui/label"
import { id } from 'ethers/lib/utils';
import { log } from 'console';




const Main: React.FC = () => {
  const walletAddress = useAddress(); // Correctly use the hook at the top level
  
  const [nftBalance, setNftBalance] = useState<number | null>(null);
  const [contadd , setcontadd] = useState({
    contractaddress : ""
  })
  
  const fetchNFTBalance = async () => {
    if (!walletAddress) return; // Ensure walletAddress is not null or undefined

    try {
      if (window.ethereum) {
        const sdk = new ThirdwebSDK(new ethers.providers.Web3Provider(window.ethereum));
        const contract = await sdk.getContract(CONTRACT_ADDRESSES.nftContract);
        const balance = await contract.erc721.balanceOf(walletAddress);
        setNftBalance(balance.toNumber());
      }
    } catch (error) {
      console.error("Failed to fetch NFT balance:", error);
      setNftBalance(null); // Reset or handle the error as appropriate
    }
  };

  const Setaddress = async () => {
    try {
     
      const response = await axios.post("/contract", contadd)
      console.log("signup success", response.data);
      
    } catch (error:any) {
      console.log("failed to get");
      
    }
  }
  
  function handleInputChange(e:any) {
    // Assuming setContadd is your state updater function
    setcontadd({ ...contadd, contractaddress: e.target.value });
  }
  return (
    <div className=' h-screen w-screen flex flex-col justify-center items-center' style={{
      backgroundImage: "url('/sold_desktop.20ec5a55.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      
      {walletAddress ? (
        <>
         <div>
         <div className="">
      <div className=" w-full relative max-w-xs">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>
 
          <h1 className="font-bold text-xl text-white mb-4 relative z-50">
           Balance
          </h1>
 
          <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
            Check if you have got enough balance!
          </p>
          
          <button className="p-[3px] relative"  onClick={fetchNFTBalance}>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
        <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
        Check Balance
        </div>
      </button>

      { nftBalance !== null && (
    <>
      
      {nftBalance === 0 ? (
        <>
        <p className='text-white'>NFT Balance: {nftBalance}</p>
        <p className='text-red-600'>Sorry, you are not eligible for this!</p>
        </>
      ) : (
        <>
         <Dialog > 
         <span className='text-white '>yay! You are eligible for your ERC-20 </span>
      <DialogTrigger asChild>
       <span className='text-red-600 cursor-pointer'>claim it</span>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-[425px]">
      <form method='POST'>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            
            <Label htmlFor="name" className="text-right">
              Sol Wallet Address
            </Label>
            <Input onChange={handleInputChange}  value={contadd.contractaddress}  id="solcontract" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={Setaddress} >Done</Button>
         
        </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
        </>
      )}
    </>
  )
}
          
         {/* Meaty part - Meteor effect */}
         <Meteors number={20} />
        </div>
      </div>
    </div>
     
    </div>
         
          
        </>
      ) : (
        <div className="">
      <div className=" w-full relative max-w-xs">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>
 
          <h1 className="font-bold text-xl text-white mb-4 relative z-50">
            Please Connect Your Wallet
          </h1>
 
          <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
            Please connect your wallet in order to have more access to our features!
          </p>
 
          <ConnectWallet
        theme={darkTheme({
          colors: {
            accentButtonText: "#ededef",
            primaryButtonBg: "#ff500d",
          },
        })}
        modalSize={"wide"} />
 
          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
    </div>
      )}
    </div>
  );
}

export default Main;
