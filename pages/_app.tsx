import '@/styles/globals.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"

export default function App({
  Component,
  pageProps: { session, ...pageProps }
}: AppProps) {

  return (
    <SessionProvider session={session}>
      <Head>
        <title>ClipCraft - Clip, Create, Share</title>
        <meta name="title" content="ClipCraft - Clip, Create, Share" />
        <meta name="description" content="Clip out interesting bits of your photo and remove the background" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* <!-- Primary Meta Tags --> */}


        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://clipcraft.studio/" />
        <meta property="og:title" content="ClipCraft - Clip, Create, Share" />
        <meta property="og:description" content="Clip out interesting bits of your photo and remove the background" />
        <meta property="og:image" content="https://objectstorage.ca-toronto-1.oraclecloud.com/p/ojOKJ0J1wcI5Rw7ioFY5nwIZialA43XcKAMhwoLij9Kgp7oPbV5sTPw3JTdx2-ts/n/yzpjtx1indjl/b/clip-craft-studio-assets/o/icon-512x512.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://clipcraft.studio/" />
        <meta property="twitter:title" content="ClipCraft - Clip, Create, Share" />
        <meta property="twitter:description" content="Clip out interesting bits of your photo and remove the background" />
        <meta property="twitter:image" content="https://objectstorage.ca-toronto-1.oraclecloud.com/p/ojOKJ0J1wcI5Rw7ioFY5nwIZialA43XcKAMhwoLij9Kgp7oPbV5sTPw3JTdx2-ts/n/yzpjtx1indjl/b/clip-craft-studio-assets/o/icon-512x512.png" />

      </Head>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
