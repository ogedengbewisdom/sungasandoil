

import { worksActions } from '@/store/workslice';
import { FormControl, FormLabel, Input, Box, Heading, Button, Stack } from '@chakra-ui/react'
import { useRouter } from 'next/router';
import React, {useEffect} from 'react';
import { useForm} from "react-hook-form";
import { useDispatch } from 'react-redux';

const AuthForm = () => {

  const router = useRouter()
  const dispatch = useDispatch()



  const form = useForm({
    defaultValues: {
      username: "",
      password: ""
    },
    mode: "onBlur"
  });
  const {register, formState, handleSubmit, reset} = form;
  const {errors, isSubmitted, isSubmitSuccessful} = formState;

  const submitAuthenticationHandler = async(data) => {

    dispatch(worksActions.showNotification({
      title: "Logging",
      status: "pending",
      message: "Admin validation please wait..."
    }))
   
    try {
      const response = await fetch("https://sun-gas.onrender.com/api/login", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        },
      })
      if (!response.ok) {
        throw new Error("Something went wrong")
      }
      const resData = await response.json()
      const token = resData.admin._id
      localStorage.setItem("token", token)
      router.push("/upload")
      // dispatch(worksActions.setAuthentication(token))

      dispatch(worksActions.showNotification({
        title: "Success",
        status: "success",
        message: "Logged in successfully"
      }))
      setTimeout(() => {
        dispatch(worksActions.clearNotification()) // Clear the notification after 5 seconds
      }, 5000)

    } catch(error) {
      dispatch(worksActions.showNotification({
        title: "Failed",
        status: "error",
        message: "Login failed"
      }))
    }

  
    // router.push("/upload")

  }

  useEffect( () => {
    if(isSubmitted) {
      reset()
    }
  }, [isSubmitSuccessful, reset])
  
  return (
    <Box width={"90%"} maxW={"45rem"} margin={"5rem auto"}>
        <Heading lineHeight={"138%"} textAlign={"center"} color={"#000"} fontSize={{base: "1.3rem", md:"1.9rem"}} fontWeight={"600"}>Enter admin Credentials</Heading>
        <form noValidate onSubmit={handleSubmit(submitAuthenticationHandler)}>
            <Stack spacing={3} display={"flex"} flexDir={"column"} alignItems={"center"} justifyContent={"center"}>
            <FormControl display={"flex"} flexDir={"column"} width={"100%"} marginTop={"1.7rem"}>
                <FormLabel htmlFor='username'>User name</FormLabel>
                <Input  type="text" id="username" placeholder="Enter Admin ID" autoComplete="username" 
                {...register("username", {
                  required: {
                    value: true,
                    message: "Enter a valid Admin Id!"
                  }
                })} 
                />
                {errors &&<p style={{color: "red"}}>{errors.username?.message}</p>}
            </FormControl>

            <FormControl display={"flex"} flexDir={"column"} width={"100%"} marginTop={"1.7rem"}>
                <FormLabel htmlFor='password'>Password</FormLabel>
                <Input  type="password" id="password" placeholder="Password" autoComplete="password"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Enter a valid admin Password!"
                    },
                    validate: (fieldValue) => fieldValue.trim().length > 5 || "Password must greater than 5!"
                  })}
                />
                {errors && <p style={{color: "red"}}>{errors.password?.message}</p>}
            </FormControl>
            <Button type='submit' cursor={"pointer"} background={"black"}  _hover={{ bg: 'gainsboro', color: "black" }} boxShadow={"0px 2px 7px 0px rgba(5, 50, 131, 0.52)"} color={"rgba(255, 255, 255, 1)"} padding={{base: "0.4rem 1rem", md: "0.7rem 3rem"}} borderRadius={"0.25rem"}>Login</Button>
            </Stack>
        </form>
    </Box>
  )
}

export default React.memo(AuthForm)