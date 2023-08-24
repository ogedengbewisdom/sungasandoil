import {Box, chakra, Heading, Text, Button, Image} from "@chakra-ui/react"
import { motion } from "framer-motion";

import React from 'react'

const Workers = () => {

  return (
    <Box display={"flex"} mt={"1rem"} justifyContent={"space-between"} alignItems={"center"} position={"relative"}>
        <Box  ml={{base: "1.38rem",md: "3.5rem", lg: "9.31rem"}} >
            <Box mb={"1.6rem"} width={{md: "60%"}}>
                <Heading as="h2" color="#000" fontSize={{base: "1.7rem", md:"3rem", lg: "4.06rem"}} fontWeight={"600"} width={{base: "100%", md: "100%"}}>Fueling Progress with Premium Gas Solutions</Heading>
            </Box>
            <Box mb={"1.5rem"} width={{base: "100%",md:"50%"}}>
                <Text fontSize={{base: "1rem"}} lineHeight={"137%"} color={"#000"} fontWeight="600">Discover a comprehensive range of gas supplies, from argon to oxygen and acetylene, 
                    tailored to power industries and innovation.
                     Partner with us for your gas needs and experience excellence in every molecule.
                </Text>
            </Box>
            <Button cursor={"pointer"} background={"black"}  _hover={{ bg: 'gainsboro', color: "black" }} boxShadow={"0px 2px 7px 0px rgba(5, 50, 131, 0.52)"} color={"rgba(255, 255, 255, 1)"} padding={{base: "0.4rem 1rem", md: "0.7rem 3rem"}} borderRadius={"0.25rem"}>Contact Us</Button>
        </Box>
        <Box display={{base: "none", lg: "block"}} width={"50%"}>
        <motion.div initial={{opacity: 0}} animate={{y: [0,-40, 0], opacity: 1}} transition={{delay: 0.4, duration: 3}}><Image src="/icons/elipse2.png" alt="Elipse" width={"100"}  height={"70"} position={"absolute"} top={"-10px"} right={"230px"}  /></motion.div>
        
        <motion.div initial={{opacity: 0}} animate={{ opacity: 1}} transition={{delay: 1, duration: 3}}><Image  src="/icons/elipse1.png" alt="Elipse1" width={"160"} height={"70"} position={"absolute"} bottom={"165px"} right={"500px"} display={{base: "none", xl: "block"}}  /></motion.div>
        <motion.div initial={{opacity: 0, x: 0}} animate={{opacity: 1, x: 0}} transition={{delay: 0.15}}><Image src="/icons/factory.png"  alt="factory" width={"130"} height={"175"} position={"absolute"} top={"1px"} right={"350px"} /></motion.div>
        <motion.div initial={{opacity: 0}}  animate={{y: [10, 0],opacity: [0.3, 0.6, 1]}} transition={{delay: 0.55, duration:1}}><Image src="/icons/oilrig.png"  alt="oilrig" width={"120"} height={"175"} position={"absolute"} top={"127px"} right={"140px"}  /></motion.div>
        <motion.div initial={{opacity: 0}}  animate={{y: [10, 0, 10], opacity: [0.3, 0.6, 1]}} transition={{delay: 0.55, duration:2}}><Image src="/images/workerss.png" alt="Sun Oil & Gas" width={"300"} height={"300"} display={{base: "none", xl: "block"}}  position={"absolute"} bottom={"-97px"} right={"200px"} /></motion.div>
        </Box>
        
    </Box>
  )
}

export default Workers;