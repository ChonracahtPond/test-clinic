import Image from 'next/image'
import RootLayout from './layout'
import Card from '../../components/card'

export default function Home() {
  return (
    <RootLayout>
   <div>
      
        <h1 className="text-4xl font-bold">Hello World</h1> 
        
        
        <div className='flex ...'>
        <Card/> <Card/>
        </div>

       
   </div>
   </RootLayout>
  )
}
