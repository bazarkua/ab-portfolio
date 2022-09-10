import Navbar from '../components/Navbar';
import '../styles/globals.css';
import { useState, useEffect } from 'react'
import Loading from '../components/Loading'

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
        <Component {...pageProps}/>
        </div>}
    </div>
  );
}

export default MyApp;
