
import { Box, SimpleGrid, Image, Text, Heading } from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js';
import React from 'react';


const Ourworks = ({savedImage}) => {

  return (
    <Box mb={"4rem"}>
      <Heading m={{base: "4rem 0", md: "4rem 3rem", lg: "4rem 9rem"}} textAlign={{base: "center", md: "start"}} whiteSpace={"nowrap"}>Our Previous Works</Heading>
        <SimpleGrid display="grid" gridTemplateColumns={"repeat(auto-fit, minmax(20rem, 1fr))"}  gridGap={"2rem"}  justifyItems={"center"}>
        {savedImage.map(item => <Box key={item.id} height={"100%"} display={"flex"} flexDirection="column" width={{base: 280, md: 400}} boxShadow="0 0 10px rgba(0, 0, 0, 0.2)" alignContent="center" justifyContent="center"  borderTopRadius="0.9rem">
            <Link href={`/media/${item.id}`} ><Image src={item.image} alt={item.alt} width={{base:500, md: 400}} height={{base: 320, md: 300, lg: 400}} objectFit='cover'  borderTopRadius="0.9rem" /></Link>
            <Box flex={1} padding={'0 1rem 0.5rem 1rem'} display={'flex'} flexDir={"column"} justifyContent="space-between">
                <Text color= '#111010' fontSize={{base: "1.2rem", md:"1.2rem"}}  fontWeight="500" lineHeight="125%" mt={"0.7rem"} textAlign={"justify"}>{item.description.slice(0,70) + "..."}</Text>
            </Box>

        </Box>)}
        </SimpleGrid>
    </Box>
  )
}

export default React.memo(Ourworks)