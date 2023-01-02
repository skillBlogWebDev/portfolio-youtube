import Head from 'next/head'
import Layout from '../../components/Layout/Layout'
import PolicyContent from '../../components/PolicyContent/PolicyContent'

export default function PersonalDataPolicy() {
  return (
    <>
      <Head>
        <title>Portfolio | Personal data policy</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type='image/svg' sizes='32x32' href="/img/logo.svg" />
      </Head>
        <Layout>
            <main>
                <PolicyContent />
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
