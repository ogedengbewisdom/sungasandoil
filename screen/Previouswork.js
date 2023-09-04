
import {Box, Heading, Image, Button, Text} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from 'react'
import {motion} from "framer-motion"
import { OurWorks } from "@/helper/helperApi";
import { useRouter } from "next/router"


const Previouswork = () => {
    const [width, setWidth] = useState(0);
    const carousel = useRef();
    const router = useRouter()

    useEffect( () => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, []);
    const dummyImages = OurWorks();

    const navigateHandler = () => {
        router.push("/media")
    };
    
  return (
    <Box as="article">
        <Heading textAlign={"center"} color={"#111010"} fontSize={{base: "1.75rem", md: "3rem"}} fontStyle={"normal"} lineHeight={"normal"} mt={{base: "4rem",md: "5rem"}} fontWeight={600}>Our Previous Works</Heading>
        <Box as={motion.div} whileTap={{cursor: "grabbing"}} cursor={"grab"} overflow={"hidden"} ref={carousel}>
            <Box as={motion.div}  drag="x" dragConstraints={{right: 0, left: -width}} display={"flex"}>
            {dummyImages.map( (image) => {
                    return (
                        <Box as={motion.div}  key={image.id} minH={{base: "24rem", md: "30rem"}} minW={{base: "20rem", md:"25rem"}} padding={"40px 20px"}>
                            <Image src={image.src} alt={image.alt} width={400} height={350} />
                        </Box>
                    )
                })}
            </Box>
        </Box>

        <Box m={"3rem 0"} display={"flex"} alignItems={"center"} flexDir={"column"} mb={"3rem"}>
                <Text fontSize={"1.18rem"} fontStyle={"normal"} fontWeight={600} lineHeight={"137.5%"} textAlign={"center"} mb={{base: "0.9rem", md: "1.2rem"}}>Click here to view more images of our great works</Text>
                <Button onClick={navigateHandler} cursor={"pointer"} background={"black"}  _hover={{ bg: 'gainsboro', color: "black" }} boxShadow={"0px 2px 7px 0px rgba(5, 50, 131, 0.52)"} color={"rgba(255, 255, 255, 1)"} padding={{base: "0.4rem 1rem", md: "0.7rem 3rem"}} borderRadius={"0.25rem"}>View more</Button>
         </Box>
    </Box>
  )
}


export default React.memo(Previouswork);