

import { Box, FormControl, FormLabel, Input, Stack, Textarea, Button } from '@chakra-ui/react'
import { useRouter } from 'next/router';
import React from 'react';
import {useForm} from "react-hook-form";

const Upload = () => {

  const router = useRouter()

  const form = useForm({
    defaultValues: {
      file: "",
      description: ""
    },
    mode: "onBlur"
  });
  const {register, formState, handleSubmit, reset} = form;
  const {errors, isSubmitSuccessful, isSubmitted, isSubmitting} = formState


  const subitImageFileHandler = (data) => {
    console.log(data);
    router.push("/media")
  };
  return (
    <Box width={"90%"} maxW={"45rem"} margin={"5rem auto"}>
        <form onSubmit={handleSubmit(subitImageFileHandler)}>
            <Stack spacing={3} display={"flex"} flexDir={"column"} alignItems={"center"} justifyContent={"center"}>
            <FormControl display={"flex"} flexDir={"column"} width={"100%"} marginTop={"1.7rem"}>
                <FormLabel htmlFor='file'>Select Image</FormLabel>
                <Input type="file" id="file" placeholder='Select an Image to uplad' 
                {...register("file", {
                  required: {
                    value: true,
                    message: "Select valid image file"
                  }
                })}
                />

            {isSubmitted && (
                  <p style={{color: "Green"}}>Uploading Successfully!</p>
                )}
                {isSubmitting && <p style={{color: "Green"}}>Uploading...</p>}
                {errors && !isSubmitSuccessful && <p style={{color: "red"}}>{errors.file?.message}</p>}
            </FormControl>

            <FormControl display={"flex"} flexDir={"column"} width={"100%"} marginTop={"1.7rem"}>
                <FormLabel htmlFor='description'>Description</FormLabel>
                <Textarea id="description" placeholder='How can we help' {...register("description", {
                  required: {
                    value: true,
                    message: "Field must not be empty"
                  }
                })} />

               {isSubmitted && (
                  <p style={{color: "Green"}}>Description added Successfully</p>
                )}
                {errors && !isSubmitSuccessful && <p style={{color: "red"}}>{errors.description?.message}</p>}
            </FormControl>
            <Button type='submit' cursor={"pointer"} background={"black"}  _hover={{ bg: 'gainsboro', color: "black" }} boxShadow={"0px 2px 7px 0px rgba(5, 50, 131, 0.52)"} color={"rgba(255, 255, 255, 1)"} padding={{base: "0.4rem 1rem", md: "0.7rem 3rem"}} borderRadius={"0.25rem"}>Upload</Button>
            </Stack>
        </form>
    </Box>
  )
}

export default Upload