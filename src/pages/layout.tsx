import { Inter } from 'next/font/google'
import React from "react";
import NavComponent from '../../components/nav';
import Footer from '../../components/footet';
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <NavComponent/>
      <main className={inter.className}>{children}
      </main>
    <Footer/>
    
    </>
  )
}
