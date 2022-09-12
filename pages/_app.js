import Navbar from '../components/Navbar';
import '../styles/globals.css';
import { useState, useEffect } from 'react'
import Loading from '../components/Loading'
import {ThemeProvider} from 'next-themes'

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
        <div>
        <Navbar />
        <ThemeProvider attribute='class'>
          <Component {...pageProps}/>
        </ThemeProvider>
        </div>}
    </div>
  );
}

export default MyApp;
