import {Box, Heading, Text, Button, Image} from "@chakra-ui/react"
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const Workers = () => {

  return (
    <Box display={"flex"}  justifyContent={"space-between"} alignItems={"center"}  as="section" mt={{base: "1rem", md: "1rem", lg: "-8rem", xl: "-5rem"}}>
        <Box  ml={{base: "1.38rem",md: "3.5rem", lg: "9.31rem"}} as="article">
            <Box mb={"1.6rem"} width={{md: "60%"}} as="header">
                <Heading as="h2" color="#000" fontSize={{base: "1.7rem", md:"3rem", lg: "3rem", "xl": "4.06rem"}} fontWeight={"600"} width={{base: "100%", md: "100%"}}>Fueling Progress with Premium Gas Solutions</Heading>
            </Box>
            <Box mb={"1.5rem"} width={{base: "100%",md:"50%"}} as="main">
                <Text fontSize={{base: "1rem"}} lineHeight={"137%"} color={"#000"} fontWeight="600">Discover a comprehensive range of gas supplies, from argon to oxygen and acetylene, 
                    tailored to power industries and innovation.
                     Partner with us for your gas needs and experience excellence in every molecule.
                </Text>
            </Box>
            <Button as='button' cursor={"pointer"} background={"black"}  _hover={{ bg: 'gainsboro', color: "black" }} boxShadow={"0px 2px 7px 0px rgba(5, 50, 131, 0.52)"} color={"rgba(255, 255, 255, 1)"} padding={{base: "0.4rem 1rem", md: "0.7rem 3rem"}} borderRadius={"0.25rem"}><Link href={"/#contact"}>Contact Us</Link></Button>
        </Box>
        <Box display={{base: "none", lg: "block"}} width={"50%"} as="aside">
        <motion.img initial={{opacity: 0, y: 100, x: 150}}  animate={{x: 100, y:180, opacity: 1}} transition={{duration:2}} src="/icons/elipse2.png" alt="Elipse" width={"80"}  height={"70"}  />
        <motion.img initial={{opacity: 0, y: 500, x: -250}}  animate={{x: -140, y:330, opacity: 1}} transition={{duration:2}} src="/icons/elipse1.png" alt="Elipse1" width={"80"} height={"70"}  display={{base: "none", xl: "block"}}  />
        <motion.div initial={{opacity: 0, y: 0, x: -250}} animate={{opacity: 1, x: -200, y: 50}} transition={{duration: 2}}><Image src="/icons/factory.png"  alt="factory" width={"120"} height={"175"} /></motion.div>
        <motion.div initial={{opacity: 0, y: -20, x: 0}}  animate={{x: -20, opacity: 1}} transition={{duration:3}}><Image src="/icons/oilrig.png"  alt="oilrig" width={"120"} height={"175"} /></motion.div>
        <motion.div initial={{opacity: 0, y: -200, x: -120}}  animate={{y: -308, opacity: 1}} transition={{duration:2}}><Image src="/images/workerss.png" alt="Sun Oil & Gas" width={"300"} height={"300"} display={{base: "none", lg: "block"}} /></motion.div>
        </Box>
        
    </Box>
  )
}

export default React.memo(Workers);