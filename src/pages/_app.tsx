import React from 'react'
import { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import '../styles/tailwind.scss'
import '../styles/global.scss'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  )
}

export default MyApp
