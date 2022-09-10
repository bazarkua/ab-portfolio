import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import Skills from '../components/Skills'

export default function Home() {

  return (
    <div>
      <Head>
        <title>Adilbek Bazarkulov</title>
        <meta name="Adilbek Bazarkulov" content="Portfolio" />
        <link rel="icon" href="/logo.png" />
      </Head>
    <main className='max-h-screen overflow-y-scroll snap snap-y snap-mandatory scroll-smooth'>
      <Main className="one" />
      <About className="two" />
      <Skills className="three"/>
      <Projects className="fourth"/>
      <Contact className="fifth"/>
      <Footer className="sixth"/>
    </main>
    
    </div>
  )
}
