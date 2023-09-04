import { worksActions } from '@/store/workslice';
import { Box, FormControl, FormLabel, Input, Stack, Textarea, Button } from '@chakra-ui/react'
import { useRouter } from 'next/router';
import React from 'react';
import {useForm} from "react-hook-form";
import { useDispatch } from 'react-redux';

const Upload = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const form = useForm({
    defaultValues: {
      image: "",
      description: ""
    },
    mode: "onBlur"
  });
  const {register, formState, handleSubmit, reset} = form;
  const {errors, isSubmitSuccessful, isSubmitted, isSubmitting} = formState

  const subitImageFileHandler = async (data) => {
    
    dispatch(worksActions.showNotification({
      title: "Uploading...",
      status: "pending",
      message: "uploading images please wait"
    }))
    const formData = new FormData();
    formData.append("image", data.image[0]); 
    formData.append("description", data.description);
    try {
      const response = await fetch("https://sun-gas.onrender.com/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      dispatch(worksActions.showNotification({
        title: "Uploaded",
        status: "success",
        message: "image uploaded successfully"
      }))
      setTimeout(() => {
        dispatch(worksActions.clearNotification()) 
      }, 5000)

  
      reset(); 
    } catch (error) {
      dispatch(worksActions.showNotification({
        title: "Failed",
        status: "error",
        message: "An error occured please try again"
      }))
      setTimeout(() => {
        dispatch(worksActions.clearNotification()) 
      }, 5000)
      
    }

  
    // router.push("/media");
  };

  return (
    <Box width={"90%"} maxW={"45rem"} margin={"5rem auto"} as='article'>
        <form encType="multipart/form-data" onSubmit={handleSubmit(subitImageFileHandler)}>
            <Stack spacing={3} display={"flex"} flexDir={"column"} alignItems={"center"} justifyContent={"center"}>
            <FormControl display={"flex"} flexDir={"column"} width={"100%"} marginTop={"1.7rem"}>
                <FormLabel htmlFor='image'>Select Image</FormLabel>
                <Input type="file" id="image" placeholder='Select an Image to upload' autoComplete="image" 
                {...register("image", {
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
                {errors && !isSubmitSuccessful && <p style={{color: "red"}}>{errors.image?.message}</p>}
            </FormControl>

            <FormControl display={"flex"} flexDir={"column"} width={"100%"} marginTop={"1.7rem"}>
                <FormLabel htmlFor='description'>Description</FormLabel>
                <Textarea id="description" placeholder='How can we help' autoComplete="description" {...register("description", {
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
            <Button as='button' type='submit' cursor={"pointer"} background={"black"}  _hover={{ bg: 'gainsboro', color: "black" }} boxShadow={"0px 2px 7px 0px rgba(5, 50, 131, 0.52)"} color={"rgba(255, 255, 255, 1)"} padding={{base: "0.4rem 1rem", md: "0.7rem 3rem"}} borderRadius={"0.25rem"}>Upload</Button>
            </Stack>
        </form>
    </Box>
  )
}

export default React.memo(Upload)