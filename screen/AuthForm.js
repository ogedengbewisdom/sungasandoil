

import { FormControl, FormLabel, Input, Box, Heading, Button, Stack } from '@chakra-ui/react'
import { useRouter } from 'next/router';
import React, {useEffect} from 'react';
import { useForm} from "react-hook-form";

const AuthForm = () => {

  const router = useRouter()

  const form = useForm({
    defaultValues: {
      adminId: "",
      password: ""
    },
    mode: "onBlur"
  });
  const {register, formState, handleSubmit, reset} = form;
  const {errors, isSubmitted, isSubmitSuccessful} = formState;

  const submitAuthenticationHandler = (data) => {
    // console.log(data)
    router.push("/upload")

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
                <FormLabel htmlFor='name'>User name</FormLabel>
                <Input  type="text" id="adminId" placeholder="Enter Admin ID" 
                {...register("adminId", {
                  required: {
                    value: true,
                    message: "Enter a valid Admin Id!"
                  }
                })} 
                />
                {errors &&<p style={{color: "red"}}>{errors.adminId?.message}</p>}
            </FormControl>

            <FormControl display={"flex"} flexDir={"column"} width={"100%"} marginTop={"1.7rem"}>
                <FormLabel htmlFor='password'>Password</FormLabel>
                <Input  type="password" id="password" placeholder="Password" 
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

export default AuthForm