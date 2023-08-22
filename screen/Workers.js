import {Box, chakra, Heading, Text, Button, Image} from "@chakra-ui/react"
import { motion } from "framer-motion";

import React from 'react'

const Workers = () => {

  return (
    <Box display={"flex"} mt={"1rem"} justifyContent={"space-between"} alignItems={"center"} mb={"2rem"}>
        <Box  ml={{base: "1.38rem",md: "3.5rem", lg: "9.31rem"}}>
            <Box mb={"1.6rem"} width={{md: "60%"}}>
                <Heading as="h2" color="#B6B3B3" fontSize={{base: "1.7rem", md:"3rem"}} fontWeight={"700"}>Fueling Progress with Premium Gas Solutions</Heading>
            </Box>
            <Box mb={"1.6rem"} w={{md: "60%"}}>
                <Text fontSize={{base: "1rem", md: "1.7rem"}} lineHeight={"137%"} fontWeight="600">Discover a comprehensive range of gas supplies, from argon to oxygen and acetylene, 
                    tailored to power industries and innovation.
                     Partner with us for your gas needs and experience excellence in every molecule.
                </Text>
            </Box>
            <Button cursor={"pointer"} background={"black"}  _hover={{ bg: 'gainsboro', color: "black" }} boxShadow={"0px 2px 7px 0px rgba(5, 50, 131, 0.52)"} color={"rgba(255, 255, 255, 1)"} padding={{base: "0.4rem 1rem", md: "0.7rem 3rem"}} borderRadius={"0.25rem"}>Contact Us</Button>
        </Box>
        <Box display={{base: "none", md: "block"}} position={"relative"} maxW={"20rem"} width={"50%"}>
        <Image as={motion.img} initial={{opacity: 0}} animate={{y: [0,-40, 0], opacity: 1}} transition={{delay: 1, duration: 7}} src="/icons/elipse2.png" alt="Elipse" width={"100"}  height={"50"} position={"absolute"} top={0} right={250} zIndex={4}  />
        <Image as={motion.img} initial={{opacity: 0}}  animate={{y: [0,40,-110, 0], opacity: [0.3, 0.6, 1]}} transition={{delay: 0.55, duration:10}} src="/images/workerss.png" alt="Sun Oil & Gas" width={"200"} height={"200"}  position={"absolute"} top={18} right={60} zIndex={5} />
        {/* <Image as={motion.img} initial={{opacity: 0}} animate={{y: [0,30, 0], opacity: 1}} transition={{delay: 1.7, duration: 7}} src="/icons/elipse1.png" alt="Elipse1" width={"160"} height={"50"} position={"absolute"} top={139.9} left={220.9} zIndex={3} />
        <Image as={motion.img} initial={{opacity: 0, x: 0}} animate={{opacity: 1, x: 0}} transition={{delay: 0.15}} src="/icons/factory.png"  alt="factory" width={"130"} height={"140"} position={"absolute"} top={0} left={40} zIndex={2} /> */}
        <Image as={motion.img} initial={{opacity: 0}}  animate={{y: [0,40,-110, 0], opacity: [0.3, 0.6, 1]}} transition={{delay: 0.55, duration:10}} src="/icons/oilrig.png"  alt="oilrig" width={"100"} height={"130"} position={"absolute"} top={20} right={40} zIndex={1} />
        </Box>
        
    </Box>
  )
}

export default Workers;