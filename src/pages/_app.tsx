import '@/styles/globals.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import { AnimatePresence } from 'framer-motion'

import NavBar from '@/components/navbar'

export default function App( { Component, pageProps, router } : AppProps ) {

  return (
    <>
    <Head>
      <title>Zarco</title>
      <meta name="description" content="Gael Zarco- Full Stack Software Engineer from Sin City" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    
    <main className={`cursor-default ${inter.className} flex min-h-screen flex-col items-center bg-black text-white`}>
      <div className="sticky top-0 z-10 w-full items-center text-sm">
          <NavBar />
      </div>
      <AnimatePresence>
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
    </main>
    </>
  )
}
