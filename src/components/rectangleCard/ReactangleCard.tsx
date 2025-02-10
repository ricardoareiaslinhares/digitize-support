import React from 'react'
import Image from 'next/image'
type Props = {}

const ReactangleCard = (props: Props) => (
    <div className='w-full min-h-[400px] flex flex-1 flex-col'>
        
    <Image
      width={0}
      height={0}
      //loading='lazy'
      priority={true}
      sizes="100vw"
      src="/hero.jpg"
      alt="hero"
      className="bg-cover bg-center bg-no-repeat absolute -z-1 object-cover w-[500px] h-[300px] brightness-90 transition-transform duration-200"
    />
    
    </div>
)

export default ReactangleCard