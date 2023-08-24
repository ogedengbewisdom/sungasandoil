
import { Box, SimpleGrid, Image, Text, Heading } from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js';


const Ourworks = ({savedImage}) => {

  return (
    <Box mb={"4rem"}>
      <Heading m={{base: "4rem 0", md: "4rem 3rem", lg: "4rem 9rem"}} textAlign={{base: "center", md: "start"}} whiteSpace={"nowrap"}>Our Previous Works</Heading>
        <SimpleGrid gridTemplateColumns={{base: "1fr", md:"200px 200px 200px"}}  gridGap={{base: "3rem 4rem", md: "5rem 9rem 26rem", lg: "3rem 10rem"}} alignItems={"center"} justifyContent={"center"} justifyItems={"center"}>
        {savedImage.map(item => <Box key={item.id} width={{base: 280, md: 200, lg: 200, xl: 350}}>
            <Link href={`/media/${item.id}`} ><Image src={item.image} alt={item.alt} width={{base:500, md: 400}} height={{base: 320, md: 300, lg: 400}}  borderRadius={"0.9rem"}/></Link>
            <Text color= '#111010' fontSize={{base: "1.2rem", md:"1.2rem"}}  fontWeight="500" lineHeight="125%" mt={"0.7rem"}>{item.description}</Text>
        </Box>)}
        </SimpleGrid>
    </Box>
  )
}

export default Ourworks