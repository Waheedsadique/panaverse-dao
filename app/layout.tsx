"use client"
import chakraWrapper from '@/component/ChakraWrapper';

import Navbar  from '@/component/Navbar'
import Footer  from '@/component/Footer';
import ChakraWrapper from '@/component/ChakraWrapper';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
     
      <head />
      <body><ChakraWrapper> 
        <Navbar/>
         {children}
         <Footer/>
        </ChakraWrapper> </body>
    </html>
  )
}
