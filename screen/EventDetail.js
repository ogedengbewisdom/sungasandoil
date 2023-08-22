

import React from 'react'
import { Button, Image, CardFooter, Text, Card, CardBody } from '@chakra-ui/react'

const EventDetail = ({event}) => {


  return (
<Card maxW={{base: "sm", md: "md", lg:'lg'}} display={"flex"} margin={"5rem auto"}>

<Image
  objectFit='cover'
  src={event.src}
  alt='Chakra UI'
  borderRadius="1rem"
/>

<CardBody>
      <Text>
        {event.description}
      </Text>
</CardBody>

<CardFooter
  justify='center'
  flexWrap='wrap'
 
>
<Button type='submit' cursor={"pointer"} background={"black"}  _hover={{ bg: 'gainsboro', color: "black" }} boxShadow={"0px 2px 7px 0px rgba(5, 50, 131, 0.52)"} color={"rgba(255, 255, 255, 1)"} padding={{base: "0.4rem 1rem", md: "0.7rem 3rem"}} borderRadius={"0.25rem"}>Delete</Button>
</CardFooter>
</Card>
  )
}

export default EventDetail