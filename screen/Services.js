import {Box, Heading, SimpleGrid, Text, Image} from "@chakra-ui/react";
import React from 'react';
import { getSearvices } from "@/helper/helperApi";

const Services = () => {
  const services = getSearvices()

  return (
    <Box as="section" m={{base: "2.06rem 0", md: "2rem 0",lg: "-8rem 0 1rem 0", xl: "-4rem 0 1rem 0"}}>
              <Heading textAlign={"center"} fontSize={{base: "1.4rem", md:"3rem"}} fontWeight={"600"} color={"black"} lineHeight={"normal"} mb={{base: "3rem",lg: "2rem"}}>What we do</Heading>
     <SimpleGrid as='main' gridTemplateColumns={{base: "1fr", md:"2fr 2fr", lg: "500px 500px"}}  gridGap={{base: "3rem 4rem", md: "5rem 0rem"}} alignItems={"center"} justifyContent={"center"} justifyItems={"center"}>
      {services.map(item => <Box key={item.id} width={{base: 270, md: 350, lg: 450}}>
        <Image src={item.src} alt={item.alt} width={{base:500, md: 400}} height={{base: 350, md: 450}} />
        <Text color= '#111010' fontSize={{base: "0.6rem", md:"1.2rem"}}  fontWeight="500" lineHeight="125%">{item.alt}</Text>
      </Box>)}
     </SimpleGrid>
    </Box>
  )
}

export default React.memo(Services)