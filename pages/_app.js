import Header from "@/screen/Header";
import {ChakraProvider} from "@chakra-ui/react";
import { extendTheme } from '@chakra-ui/react'



export default function App({ Component, pageProps }) {

  const fonts = {
    body: `Urbanist`,
    text: "Urbanist",
    heading: `Clash Display`
  
  }

  const theme = extendTheme({fonts})
  return <ChakraProvider >
    <Header />
    <Component {...pageProps} />
    </ChakraProvider>
}

// theme={extendTheme({
//   fonts: {
//     Heading: `Clash Display`,
//     body: "Clash Display",
//     Text: `"Urbanist"`
//   }
// })}