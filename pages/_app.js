import Navbar from '../components/Navbar';
import '../styles/globals.css';
import Router from 'next/router'
import NProgress from 'nprogress'
import { useState, useEffect } from 'react'
import Loading from '../components/Loading'

Router.events.on('routeChangeStart', (url) => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() =>{
    setTimeout(() =>{
      setIsLoading(false);
    }, 2500);
  })
  return (
    <div>
        {isLoading == true?
        <Loading/>:
        <>
        <Navbar />
        <Component {...pageProps} />
        </>}
    </div>
  );
}

export default MyApp;
