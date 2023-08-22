
import { Box, Card, Heading, Text,Image, SimpleGrid } from '@chakra-ui/react'

const About = () => {


  return (

    <Box mt={"2rem"}>
        
        <SimpleGrid spacing={4} templateColumns={{base: "1fr", md: "1fr 1fr", lg: "5fr 4fr"}} m={"auto"} justifyContent={"center"} alignItems={"center"} width={"80%"}>
            <Card boxShadow={"none"} >
            <Heading id='aboutus' textAlign={{base: "center", md: "start"}} mb={"2.1rem"} color={"#000"} fontSize={{base: "1.75rem", md:"3.5rem"}} fontWeight={"700"}>About us</Heading>
           <Text  fontStyle={"normal"} lineHeight={"166%"} fontSize={{base: "1rem", md:"1.1rem", lg: "1.5rem"}} fontWeight={"600"} color={"#000"} mb={{base: "2rem"}}>At Sun Oil & Gas, we are more than just a business;
                 we are the architects of energy solutions that power progress and innovation across industries.
                With a relentless commitment to excellence, we have established ourselves as a leading provider of gas supplies, 
                industrial materials, and specialized services in the oil and gas sector.
      </Text >
            </Card>
            <Card boxShadow={"none"} >
            <Image  src="/images/shutterstock.png" alt='shutterstock' width="400" height="350" objectFit={"cover"} borderRadius='3rem' />
            </Card>
        </SimpleGrid>
    </Box>
  )
}

export default About;