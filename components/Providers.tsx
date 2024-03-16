'use client'
import { ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'
const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider attribute='class' enableSystem storageKey='theme'>
      {children}
    </ThemeProvider>
  )
}

export default Providers
