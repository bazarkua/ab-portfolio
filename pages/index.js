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
        <title>Adilbek Bazarkulov | Portfolio Website</title>
        <meta name="description" content="I’m a Computer Scientist" />
        <link rel="icon" href="/logo.png" />
      </Head>
    <Main />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Footer/>
    </div>
  )
}
