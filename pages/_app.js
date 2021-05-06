import Head from 'next/head'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Hostaway</title>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <link rel="stylesheet" href="/css/index.css" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
