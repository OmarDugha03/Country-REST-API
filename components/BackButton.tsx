'use client'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import back from '../public/move-left.svg'
import backW from '../public/move-leftW.svg'
import { useTheme } from 'next-themes'
interface BackButtonProps {}

const BackButton: FC<BackButtonProps> = ({}) => {
  const { resolvedTheme } = useTheme()

  return (
    <div className='m-4 flex h-10 w-28 items-center justify-center rounded-lg bg-slate-100 shadow-lg dark:bg-slate-500 lg:ml-12 lg:mt-12 '>
      <Link
        href='/'
        className='flex items-center justify-between font-medium leading-relaxed tracking-widest'
      >
        {resolvedTheme === 'dark' ? (
          <Image src={backW} className='mx-4' alt='back Icon' />
        ) : (
          <Image className='mx-4' src={back} alt='back Icon' />
        )}
        back
      </Link>
    </div>
  )
}

export default BackButton
