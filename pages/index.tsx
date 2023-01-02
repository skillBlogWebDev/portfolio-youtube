import Head from 'next/head'
import About from '../components/About/About'
import Contact from '../components/Contact/Contact'
import Hero from '../components/Hero/Hero'
import Portfolio from '../components/Portfolio/Portfolio'
import Skills from '../components/Skills/Skills'
import Layout from '../components/Layout/Layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type='image/svg' sizes='32x32' href="/img/logo.svg" />
      </Head>
      <Layout>
        <main>
          <Hero />
          <About />
          <Skills />
          <Portfolio />
          <Contact />
        </main>
      </Layout>
      <div className="background-animation">
        <div id="ball-one"></div>
        <div id="ball-two"></div>
        <div id="ball-three"></div>
      </div>
    </>
  )
}
