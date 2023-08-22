// import Image from "next/image";
import {Box, Heading, SimpleGrid, Text, Image} from "@chakra-ui/react";
import React from 'react';
import { getSearvices } from "@/helper/helperApi";

const Services = () => {
  const services = getSearvices()

  return (
    <Box m={{base: "2.06rem 0", md: "3.06rem 0"}}>
      <Box >
        <Box>
          <svg xmlns="http://www.w3.org/2000/svg" width="110" height="114" viewBox="0 0 110 114" fill="none">
                <ellipse cx="55" cy="57" rx="55" ry="57" fill="#ABABBC" fillOpacity="0.35"/>
          </svg>
        </Box>
              <Heading textAlign={"center"} fontSize={{base: "1.7rem", md:"4rem"}} fontWeight={"600"} color={"black"} lineHeight={"normal"}>What we do</Heading>
        <Box>
          <svg xmlns="http://www.w3.org/2000/svg" width="75" height="77" viewBox="0 0 75 77" fill="none">
              <ellipse cx="37.5" cy="38.5" rx="37.5" ry="38.5" fill="#ABABBC" fillOpacity="0.35"/>
          </svg>
         </Box>
     </Box>
     <SimpleGrid gridTemplateColumns={{base: "1fr", md:"2fr 2fr", lg: "500px 500px"}}  gridGap={{base: "3rem 4rem", md: "5rem 0rem"}} alignItems={"center"} justifyContent={"center"} justifyItems={"center"}>
      {services.map(item => <Box key={item.id} width={{base: 300, md: 350, lg: 450}}>
        <Image src={item.src} alt={item.alt} width={{base:500, md: 400}} height={{base: 420, md: 500}} />
        <Text color= '#111010' fontSize={{base: "1.2rem", md:"1.68rem"}}  fontWeight="500" lineHeight="125%">{item.alt}</Text>
      </Box>)}
     </SimpleGrid>
    </Box>
  )
}

export default Services