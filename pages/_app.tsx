import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from 'styles/globalST'
import theme from 'styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>
          PokCompi
        </title>
      </Head>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>

  )
}
export default MyApp
