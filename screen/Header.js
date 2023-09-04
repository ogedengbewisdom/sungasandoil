'use client'
import React, { useEffect, useState} from 'react';
import {Box, Button, List, ListItem, Image} from "@chakra-ui/react"
import {motion, AnimatePresence} from "framer-motion"
import { useRouter } from 'next/router';
import { Link } from '@chakra-ui/next-js';
import { useSelector, useDispatch } from 'react-redux';
import { worksActions } from '@/store/workslice';
import Notification from './Notification';
import { CloseIcon} from "@chakra-ui/icons"
import { getAuthToken } from '@/util/authUtil';

const Header = (props) => {
  // const [show, setShow] = useState(false);
  const [auth, setAuth] = useState()
  const notification = useSelector(state => state.show.notification)
  const show = useSelector((state )=> state.show.show)
  const dispatch = useDispatch()
  const getAuth = getAuthToken()

const router = useRouter();

  useEffect(() => {
    if (!getAuth) {
      return
    }
    setAuth(getAuth)
  }, [getAuth, setAuth])
const showinMediaHandler = () => {
  if(router.pathname === "/media") {
    return true
  }
}

const showinMedia = showinMediaHandler()


const logoutHandler = () => {
  localStorage.removeItem("token")
  setAuth(false)
  router.push("/")
};

const adminHandler = () => {
  router.push("/authentication")
};

const homeHandler = () => {
  router.push("/")
};

  
    const showHandler = () => {
      // setShow(prev => !prev)
      dispatch(worksActions.showHambugger())
    };
    


  return (
    <AnimatePresence>
    <motion.header initial= {{opacity: 0, y: 15}}
    animate={{opacity: 1, y: 0}}
    exit={{opacity: 0, y: 15}}
    transition={{delay: 0.08, duration: 0.3}}>
       {notification && <Notification title={notification.title} status={notification.status} message={notification.message} />}
    <Box as="header" display={"flex"} alignItems={"center"} justifyContent={"space-between"} margin={{base: "1.06rem 1.31rem", md: "2rem", lg: "2rem 9.34rem "}} >
      <Box maxH={"10rem"} maxW={"3rem"}>
            <Image onClick={homeHandler} src="/icons/logo.png" alt="sun oil & gas" width={"50"} height={"50"} w={{base: "5rem"}} h={{base: "6rem"}} />
            </Box>
            {!showinMedia && <Box display={{base: "none", md: "flex"}} flexDirection={{base: "column", medium: "row"}}>
                <Link href="/#aboutus" style={{margin: "0 1.5rem 0 0", fontSize: "1.4rem", fontWeight: "600", color:"#000"}}>About us</Link>
                <Link href="/#contact" style={{margin: "0 1.5rem", fontSize: "1.4rem", fontWeight: "600", color:"#000"}}>Contact</Link>
                <Link href="/media" style={{margin: "0 1.5rem 0 0", fontSize: "1.4rem", fontWeight: "600", color:"#000"}}>Our works</Link>
                {auth && <Link href="/upload" style={{margin: "0 1.5rem 0 0", fontSize: "1.4rem", fontWeight: "600", color:"#000"}}>Upload</Link>}
            </Box>}
            {!auth && <Button onClick={adminHandler} display={{base: "none", md: "block"}} cursor={"pointer"} background={"black"}  _hover={{ bg: 'gainsboro', color: "black" }} boxShadow={"0px 2px 7px 0px rgba(5, 50, 131, 0.52)"} color={"rgba(255, 255, 255, 1)"} padding={{base: "0.4rem 1rem", md: "0.7rem 3rem"}} borderRadius={"0.25rem"}>Admin</Button>}
            {auth && <Button onClick={logoutHandler} display={{base: "none", md: "block"}} cursor={"pointer"} background={"black"}  _hover={{ bg: 'gainsboro', color: "black" }} boxShadow={"0px 2px 7px 0px rgba(5, 50, 131, 0.52)"} color={"rgba(255, 255, 255, 1)"} padding={{base: "0.4rem 1rem", md: "0.7rem 3rem"}} borderRadius={"0.25rem"}>Logout</Button>}
            {show && <List as={motion.ul} boxShadow={"0px 2px 7px 0px rgba(5, 50, 131, 0.52)"} 
             initial= {{opacity: 0, x: 15}}
             animate={{opacity: 1, x: 0}}
             transition={{delay: 0.08, duration: 0.5}}
            >
              <ListItem borderBottom={"1px solid"} p={"0.5rem 2rem"} display={"flex"} bg={"transparent"} justifyContent={"flex-end"} ><CloseIcon onClick={showHandler} w={5} h={5} /></ListItem>
              <ListItem borderBottom={"1px solid"} p={"0.5rem 2rem"}><Link href={"/"}>Home</Link></ListItem>
              <ListItem borderBottom={"1px solid"} p={"0.5rem 2rem"}><Link href={"/media"}>Our Works</Link></ListItem>
              <ListItem borderBottom={"1px solid"} p={"0.5rem 2rem"}><Link href={"/#contact"}>Contact Us</Link></ListItem>
              {auth && <ListItem borderBottom={"1px solid"}  p={"0.5rem 2rem"}><Link href={"/upload"}>Upload</Link></ListItem>}
              {!auth && <ListItem  p={"0.5rem 2rem"}><Link href={"/authentication"}>Admin</Link></ListItem>}
              {auth && <ListItem onClick={logoutHandler} p={"0.5rem 2rem"} cursor="pointer">Logout</ListItem>}
            </List>}
            {!show && <Image onClick={showHandler} display={{base: "block", md: "none"}} src="/images/icons/Menu.png" alt="hamburgermenu" width={39} height={50} />}
        
    </Box>
        <main>{props.children}</main>
    </motion.header>
    </AnimatePresence>
  )
}

export default React.memo(Header);