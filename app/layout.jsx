// import { Layout } from '@/components/dom/Layout'
import '@/global.css'
import '@/App.css'
import "@/home.css"
// import { AnimatePresence } from 'framer-motion'
export const metadata = {
  title: 'Onixx Studio',
  description: 'Creative and unique web development agency',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='antialiased'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body
      // suppressHydrationWarning
      >
        {/* To avoid FOUT with styled-components wrap Layout with StyledComponentsRegistry https://beta.nextjs.org/docs/styling/css-in-js#styled-components */}

        {children}
      </body>
    </html>
  )
}
