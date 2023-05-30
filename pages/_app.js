import '@/styles/globals.css'
import Router from 'next/router'
import { useState, useEffect } from 'react'

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const start = () => {
      console.log('start')
      setLoading(true)
    }
    const end = () => {
      console.log('findished')
      setLoading(false)
    }
    Router.events.on('routeChangeStart', start)
    Router.events.on('routeChangeComplete', end)
    Router.events.on('routeChangeError', end)
    return () => {
      Router.events.off('routeChangeStart', start)
      Router.events.off('routeChangeComplete', end)
      Router.events.off('routeChangeError', end)
    }
  }, [])
  // return <>{loading ? <h1>Loading...</h1> : <Component {...pageProps} />}</>

  return <Component {...pageProps} />
}
