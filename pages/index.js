import Head from 'next/head'
import Main from '../components/main/Main'
import { GoogleTagManager } from '@next/third-parties/google'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Vajram Vivera | 3/4 BHK Apartment at North Bangalore</title>
        <meta charset="utf-8"/>
        <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
        <meta name="description" content="Vajram Vivera is a premium Apartment project on Kogilu Main Road in Bangalore North. The project spans 6.2 Acres of land." />
        <meta name="keywords" content="Vajram Vivera,Vajram Vivera North Bangalore,Vajram Vivera price, Vajram Vivera location,Vajram Vivera Reviews,Vajram Group,Vajram Vivera Kogilu,Vajram Vivera Rachenahalli, Vajram Vivera Brochures"/>
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sumadhuraepitome.in.net/"></link>
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="shortlink" href="https://sumadhuraepitome.in.net/"></link>
      </Head>

      <Main />
      <GoogleTagManager gtmId='AW-16606057285' />
    </div>
  )
}
