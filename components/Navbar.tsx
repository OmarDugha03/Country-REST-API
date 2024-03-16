'use client'
import { moon, sun } from '@/public'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = ({}) => {
  const { setTheme, resolvedTheme } = useTheme()
  function handleTheming() {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <nav className='sticky top-0 z-10 w-full backdrop-blur-lg backdrop-filter'>
      <div className=' mx-auto border-b-[0.3px] border-slate-400 bg-slate-200 bg-opacity-30 p-5 shadow-lg backdrop-blur-lg backdrop-filter dark:bg-slate-950 dark:bg-opacity-50 md:justify-around md:p-10'>
        <div className='flex items-center justify-between'>
          <h1 className='text-lg font-black tracking-wider md:text-2xl lg:text-4xl'>
            <Link href='/'>Where In the World ?</Link>
          </h1>
          {resolvedTheme === 'light' ? (
            <Image
              onClick={handleTheming}
              className='rotate-0 cursor-pointer transition-all duration-300 md:h-9 md:w-9'
              src={moon}
              width={20}
              height={20}
              alt='icons'
            />
          ) : (
            <Image
              onClick={handleTheming}
              className='rotate-180 cursor-pointer transition-all duration-300 md:h-9 md:w-9'
              width={20}
              height={20}
              src={sun}
              alt='icons'
            />
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
