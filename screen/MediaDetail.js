
import React, { Fragment } from 'react';
import { Button, Image, CardFooter, Text, Card, CardBody } from '@chakra-ui/react';
import NoImage from './Nomedia';
import { getAuthToken } from '@/util/authUtil';
import {useSelector} from "react-redux";
import { useRouter } from 'next/router';

const MediaDetail = ({media, onDelete}) => {

  const notification = useSelector(state => state.show.notification);
  const router = useRouter();
  const getToken = getAuthToken();

  const homeHandler = () => {
    router.push("/")
  };

  if (!media) {
    return (
      <Fragment>
          {!notification && <NoImage>
          <p>404 - page not found</p>
          <Button onClick={homeHandler} cursor={"pointer"} background={"black"}  _hover={{ bg: 'gainsboro', color: "black" }} mt="1rem" boxShadow={"0px 2px 7px 0px rgba(5, 50, 131, 0.52)"} color={"rgba(255, 255, 255, 1)"} padding={{base: "0.4rem 1rem", md: "0.7rem 3rem"}} borderRadius={"0.25rem"}>Home</Button>
          </NoImage>}
      </Fragment>
    )
  }

  return (
<Card maxW={{base: "sm", md: "md", lg:'lg'}} display={"flex"} margin={"5rem auto"} as="section" borderTopRadius="1rem">

<Image
  objectFit='cover'
  src={media.image}
  alt={media.alt}
  borderTopRadius="1rem"
  height={"450px"}
/>

<CardBody as="article">
      <Text>
        {media.description}
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

export default React.memo(MediaDetail)