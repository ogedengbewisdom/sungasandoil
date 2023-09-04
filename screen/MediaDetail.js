
import React from 'react'
import { Button, Image, CardFooter, Text, Card, CardBody } from '@chakra-ui/react'
import NoImage from './Nomedia'
import { getAuthToken } from '@/util/authUtil'

const EventDetail = ({event, onDelete}) => {

  const getToken = getAuthToken()

  if (!event) {
    return <NoImage>
      <p>Loading</p>
    </NoImage>
  }

  return (
<Card maxW={{base: "sm", md: "md", lg:'lg'}} display={"flex"} margin={"5rem auto"} as="section">

<Image
  objectFit='cover'
  src={event.image}
  alt={event.alt}
  borderRadius="1rem"
/>

<CardBody as="article">
      <Text>
        {event.description}
      </Text>
</CardBody>

<CardFooter
  justify='center'
  flexWrap='wrap'
 
>
{getToken && <Button as="button" onClick={onDelete} cursor={"pointer"} background={"black"}  _hover={{ bg: 'gainsboro', color: "black" }} boxShadow={"0px 2px 7px 0px rgba(5, 50, 131, 0.52)"} color={"rgba(255, 255, 255, 1)"} padding={{base: "0.4rem 1rem", md: "0.7rem 3rem"}} borderRadius={"0.25rem"}>Delete</Button>}
</CardFooter>
</Card>
  )
}

export default React.memo(EventDetail)