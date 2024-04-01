"use client"
import React from 'react'
import { ConnectWallet,darkTheme,} from "@thirdweb-dev/react"

function Header() {
  return (
    <div className='flex justify-center items-center mt-10 absolute right-0 mr-10'>
   
        <ConnectWallet
        theme={darkTheme({
          colors: {
            accentButtonText: "#ededef",
            primaryButtonBg: "#ff500d",
          },
        })}
        modalSize={"wide"} />
   </div>
  )
}

export default Header