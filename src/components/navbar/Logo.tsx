import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Logo = ({}: Props) => {
  return (

      <Link href={"/"} className="flex items-center gap-x-5">
        <Image src={'/DigitizeSupport.png'} width={60} height={60} alt={'DigitizeSupport - Psychology Health Services'} className='w-auto h-auto'/>
        <h1 className="text-lg hidden md:block tracking-wider">DigitizeSupport</h1>
        <h1 className="text-lg hidden sm:block md:hidden">DigitizeSupport</h1>
      </Link>
  )
}

export default Logo