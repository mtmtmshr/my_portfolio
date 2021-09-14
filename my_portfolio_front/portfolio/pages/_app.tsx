import { AppProps } from 'next/app'
import '../styles/globals.css'
import {useEffect } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
    // スクロールバーを常に表示
    useEffect( () => { document.querySelector("body").classList.add("overflow-y-scroll") });
    return <Component {...pageProps} />
}

export default MyApp
