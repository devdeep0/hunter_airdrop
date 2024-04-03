"use client"
import React from 'react'
import { ConnectWallet,darkTheme,} from "@thirdweb-dev/react"
import { Button } from "@/Components/ui/button"


function Header() {
  return (
    <div className='absolute h-auto mt-5 w-full flex justify-end  items-center'>
      <div className='flex flex-col gap-5 mr-10'>

        <ConnectWallet
        theme={darkTheme({
          colors: {
            accentButtonText: "#ededef",
            primaryButtonBg: "#ff500d",
          },
        })}
        modalSize={"wide"} />

<button className="px-4 py-2 rounded-md border border-black bg-[#0c0a12] text-white text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
        Mistle Toadz Airdrop
      </button>

      <button className="px-4 py-2 rounded-md border border-black bg-[#7ab89d] text-white text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
        Gi Toadz Airdrop
      </button>
        </div>
   </div>
  )
}

export default Header