"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThirdwebProvider,  metamaskWallet, embeddedWallet, smartWallet, localWallet,rabbyWallet, okxWallet, coinbaseWallet,walletConnect, safeWallet } from "@thirdweb-dev/react"
import { Toaster } from "@/Components/ui/toaster"

const inter = Inter({ subsets: ["latin"] });
/*
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
*/
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThirdwebProvider
      activeChain="ethereum"
      clientId="55c0b05e3a7598077f4538efbbab8eb7"
     supportedWallets={[
      embeddedWallet({   
        auth: {options: ["email", "google", "facebook", "apple"],},   
        recommended: true, }),
      metamaskWallet({
        recommended: true,
      }),
        smartWallet(metamaskWallet(), {
          factoryAddress: "0x...",
          gasless: true,
        }),
        localWallet({
          persist: true,
        }),
        rabbyWallet({
          projectId: "YOUR_PROJECT_ID",
          recommended: true,
        }),
        okxWallet({
          projectId: "YOUR_PROJECT_ID",
          recommended: true,
        }),
        coinbaseWallet({
          qrmodal: "custom",
          recommended: true,
        }),
        walletConnect({
          projectId: "your_project_id",
          qrModal: "custom", // or "walletConnect"
          qrModalOptions: {
            themeMode: "dark",
          },
          recommended: true,
        }),
        safeWallet({
          personalWallets: [
            metamaskWallet(),
            coinbaseWallet(),
            walletConnect(),
          ],
        }),
      ]}
    >

       {children}
      
       </ThirdwebProvider>
       <Toaster />
        </body>
    </html>
  );
}
