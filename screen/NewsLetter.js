import React from 'react'
import {Box, FormControl, Input, Textarea, Button, Stack, Heading} from "@chakra-ui/react"
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { worksActions } from '@/store/workslice'

const NewsLetter = () => {

  const dispatch = useDispatch();

    const form = useForm({
        defaultValues: {
            name: "",
            email: "",
            message: ""
        }
    });
    const {register, handleSubmit} = form;
    
    const submiHandler = async (data) => {
      dispatch(worksActions.showNotification({
        title: "Sending...",
        status: "pending",
        message: "Please wait sending email"
      }))
      
        try {
            const response = await fetch("https://sun-gas.onrender.com/api/contact", {
              method: "POST",
              body: JSON.stringify(data),
              headers: {
                "Content-Type": "application/json"
              },
            })
            
            if (!response.ok) {
              throw new Error("Something went wrong")
            }
            dispatch(worksActions.showNotification({
              title: "Sent",
              status: "success",
              message: "Email sent successfully"
            }))
            setTimeout(() => {
              dispatch(worksActions.clearNotification()) // Clear the notification after 5 seconds
            }, 5000)
  
          } catch(error) {
            dispatch(worksActions.showNotification({
              title: "Failed",
              status: "error",
              message: "Failed to send email try again later"
            }))
          }
      
      
    };
    
  return (
    <Box width={"80%"} maxW={"40rem"} margin={"4rem auto"}>
        <Heading fontSize={"1.2rem"} fontStyle={"normal"} fontWeight={600} lineHeight={"137.5%"} mb={"2.88rem"} textAlign={"center"}>You can message our team directly using this form below and get response within 24hours.</Heading>
    <Box mt={"2.88rem"} boxShadow={"0px 4px 4px 0px rgba(0, 0, 0, 0.25)"} padding={"3.71875rem 1.5625rem 3.65625rem 1.5625rem"}>
        <Heading color="#000" fontSize="1.125rem" fontWeight="500" lineHeight={"120%"} >Send us an Email</Heading>
        <form onSubmit={handleSubmit(submiHandler)}>
            <Stack spacing={3} display={"flex"} flexDir={"column"} alignItems={"center"} justifyContent={"center"}>
            <FormControl display={"flex"} flexDir={"column"} width={"100%"} marginTop={"1.7rem"}>
                <Input type="text" id='name'  placeholder='Your name' {...register("name", {
                  required: {
                    value: true,
                    message: "Your name is required"
                  }
                })}  />
            </FormControl>
            <FormControl display={"flex"} flexDir={"column"} width={"100%"} marginTop={"1.7rem"}>
                <Input type="email" id='email' placeholder='Your email' {...register("email", {
                  required: {
                    value: true,
                    message: "Your email is required"
                  }
                })} />
            </FormControl>
            <FormControl display={"flex"} flexDir={"column"} width={"100%"} marginTop={"1.7rem"}>
               <Textarea  placeholder='How can we help' id="message" {...register("message", {
                  required: {
                    value: true,
                    message: "Your message is required"
                  }
                })} />
            </FormControl>
            <Button type='submit' cursor={"pointer"} background={"black"}  _hover={{ bg: 'gainsboro', color: "black" }} boxShadow={"0px 2px 7px 0px rgba(5, 50, 131, 0.52)"} color={"rgba(255, 255, 255, 1)"} padding={{base: "0.4rem 1rem", md: "0.7rem 3rem"}} borderRadius={"0.25rem"}>Submit</Button>
            </Stack>
        </form>
    </Box>
    </Box>
  )
}

export default NewsLetter