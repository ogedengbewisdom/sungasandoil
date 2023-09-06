"use client"
import '@/styles/globals.css'
import Header from "@/screen/Header";
import store from "@/store";
import {ChakraProvider, CSSReset} from "@chakra-ui/react";
import { extendTheme } from '@chakra-ui/react'
import { Global, css } from "@emotion/react";
import { Provider } from "react-redux";


const GlobalStyles = () => (
  
  <Global
    styles={css`
    @import url('https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Roboto:wght@300&family=Urbanist:wght@600&display=swap');
    @font-face {
      font-family: "Clash Display";
      src: url(/clash.ttf);
  }
    
    `}
  />
);





export default function App({ Component, pageProps }) {

  const fonts = {
    heading: `Clash Display`,
    body: "Urbanist",
    text: "Urbanist"
  }

  const theme = extendTheme({fonts})

  return <ChakraProvider theme={theme}>
     <CSSReset />
      <GlobalStyles />
      <Provider store={store}>
    <Header>
    <Component {...pageProps} />
    </Header>
    </Provider>
    </ChakraProvider>
}
