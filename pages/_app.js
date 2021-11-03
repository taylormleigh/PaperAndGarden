import '../styles.css'
import Head from "next/head";

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <link rel="icon" href="/favicon.png" />
    </Head>
    <Component {...pageProps} />
  </>
)

export default MyApp;