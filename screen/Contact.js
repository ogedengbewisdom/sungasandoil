
import {Box, Heading, Card, CardBody, CardHeader, CardFooter, SimpleGrid, Text, Image} from "@chakra-ui/react"
import React from 'react'

const Contact = () => {
  return (
    <Box display={"flex"} justifyContent={"center"} flexDir={"column"} alignItems={"center"} mt={{base: "0.7rem", md: "1.5rem"}}>
        <Heading id="contact">Contact us</Heading>
        
 <SimpleGrid spacing={4} templateColumns={{base: "1fr", md: "300px 300px 300px"}} mt={{base: "1.4rem", md:"3rem"}}>

        <Card display={"flex"} flexDir={"column"} justifyContent={"center"} alignItems={"center"}>
    <CardHeader>
      <Image src="/icons/Email.png" alt="email address" width={50} height={50} />
    </CardHeader>
    <CardBody>
      <Text color= "#111010" textAlign={"center"} fontSize={{base: "1.1rem", md: "1.68rem"}} fontStyle={"normal"} fontWeight={"700"} lineHeight={"137%"}>Email</Text>
    </CardBody>
    <CardFooter display={"flex"} flexDir={"column"} justifyContent={"center"} alignItems={"center"}>
    <Text color= "#111010" textAlign={"center"} fontSize={{base: "0.7rem", md: "1.1rem"}} fontStyle={"normal"} fontWeight={"600"} lineHeight={"137%"}>Send us an Email Via:</Text>
      <Text color= "#111010" textAlign={"center"} fontSize={{base: "0.7rem", md: "1.1rem"}} fontStyle={"normal"} fontWeight={"600"} lineHeight={"137%"}>sungasoil60@gmail.com</Text>
    </CardFooter>
  </Card>

  <Card display={"flex"} flexDir={"column"} justifyContent={"center"} alignItems={"center"}>
    <CardHeader>
      <Image src="/icons/Phone.png" alt="Phone number" width={50} height={55} />
    </CardHeader>
    <CardBody display={"flex"} flexDir={"column"} justifyContent={"center"} alignItems={"center"}>
      <Text textAlign={"center"} color= "#111010" fontSize={{base: "1.1rem", md: "1.68rem"}} fontStyle={"normal"} fontWeight={"700"} lineHeight={"137%"}>PHONE NUMBER</Text>
      <Text color= "#111010" textAlign={"center"} fontSize={{base: "0.7rem", md: "1.1rem"}} fontStyle={"normal"} fontWeight={"600"} lineHeight={"137%"}>Call or text us Via:</Text>
    </CardBody>
    <CardFooter display={"flex"} flexDir={"column"} alignItems={"center"}>
      <Text color= "#111010" textAlign={"center"} fontSize={{base: "0.7rem", md: "1.1rem"}} fontStyle={"normal"} fontWeight={"600"} lineHeight={"137%"}>07041009010</Text>
      <Text color= "#111010" textAlign={"center"} fontSize={{base: "0.7rem", md: "1.1rem"}} fontStyle={"normal"} fontWeight={"600"} lineHeight={"137%"}>or</Text>
      <Text color= "#111010" textAlign={"center"} fontSize={{base: "0.7rem", md: "1.1rem"}} fontStyle={"normal"} fontWeight={"600"} lineHeight={"137%"}>09048080400</Text>
    </CardFooter>
  </Card>


  <Card display={"flex"} flexDir={"column"} justifyContent={"center"} alignItems={"center"}>
    <CardHeader>
      <Image src="/icons/Location.png" alt="Phone number" width={50} height={55} />
    </CardHeader>
    <CardBody display={"flex"} flexDir={"column"} justifyContent={"center"} alignItems={"center"}>
      <Text textAlign={"center"} color= "#111010" fontSize={{base: "1.1rem", md: "1.68rem"}} fontStyle={"normal"} fontWeight={"700"} lineHeight={"137%"}>MAIN OFFICE</Text>

    </CardBody>
    <CardFooter display={"flex"} flexDir={"column"} alignItems={"center"}>
    <Text color= "#111010" textAlign={"center"} fontSize={{base: "0.7rem", md: "1.1rem"}} fontStyle={"normal"} fontWeight={"600"} lineHeight={"137%"}>15 Ikot Iko Off Ikot Akpan Abia, Enen Nsit Road, Uyo, Akwa-Ibom.</Text>
    </CardFooter>
  </Card>  
</SimpleGrid>
    </Box>
  )
}

export default Contact