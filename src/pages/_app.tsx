import '@/styles/globals.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

import NavBar from '@/components/navbar'

export default function App( { Component, pageProps } : AppProps ) {

  return (
    <>
    <Head>
      <title>Zarco</title>
      <meta name="description" content="Gael Zarco- Full Stack Software Engineer from Sin City" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    
    <main className={`cursor-default ${inter.className} flex min-h-screen flex-col items-center p-14 max-md:p-10 max-sm:p-5 max-sm:pt-5 bg-black text-white`}>
      <div className="sticky top-0 z-10 pt-5 w-full max-w-5xl items-center font-mono text-sm lg:flex">
          <NavBar />
      </div>
      <Component {...pageProps} />
    </main>
    </>
  )
}
