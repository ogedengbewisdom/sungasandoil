import NoImage from '@/screen/Nomedia'
import Ourworks from '@/screen/Ourworks'
import { worksActions } from '@/store/workslice'
import { useRouter } from 'next/router'
import React, { useState, useEffect, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '@chakra-ui/react'

const MediaPage = () => {
  const [savedImage, setSavedImage] = useState([]);
  const dispatch = useDispatch();
  const notification = useSelector(state => state.show.notification)
  const router = useRouter();
  const homeHandler = () => {
    router.push("/")
  };

  const sendRequest = async () => {
    dispatch(
      worksActions.showNotification({
        title: 'Fetching images',
        message: 'Please wait...',
        status: 'pending',
      })
    )

    try {
      const response = await fetch('https://sun-gas.onrender.com/api/our-works')

      if (!response.ok) {
        throw new Error('Something went wrong')
      }
      const data = await response.json()
  
      if (!data || !data.images) {
        dispatch(
          worksActions.showNotification({
            title: 'Failed',
            message: 'No images available, please try again later',
            status: 'error',
          })
        )
        setTimeout(() => {
          dispatch(worksActions.clearNotification()) // Assuming you have a clearNotification action
        }, 5000) // Clear the notification after 5 seconds
      } else {
        setSavedImage(data.images)
        dispatch(
          worksActions.showNotification({
            title: 'Success',
            message: 'Images fetched successfully',
            status: 'success',
          })
        )
        setTimeout(() => {
          dispatch(worksActions.clearNotification()) // Clear the notification after 5 seconds
        }, 5000)
      }
    } catch (error) {
      dispatch(
        worksActions.showNotification({
          title: 'Failed',
          message: 'Failed to fetch images',
          status: 'error',
        })
      )
    }
  }

  useEffect(() => {
    sendRequest()
  }, [])

  
  if (!savedImage || savedImage.length === 0) {
    return <Fragment>
     {!notification && <NoImage>
       <p>No image please contact the admin to add image and see the beauty of our business</p>
       <Button onClick={homeHandler} cursor={"pointer"} background={"black"}  _hover={{ bg: 'gainsboro', color: "black" }} boxShadow={"0px 2px 7px 0px rgba(5, 50, 131, 0.52)"} color={"rgba(255, 255, 255, 1)"} padding={{base: "0.4rem 1rem", md: "0.7rem 3rem"}} borderRadius={"0.25rem"}>Home</Button>
     </NoImage>}
    </Fragment>
   }
 

  return <Ourworks savedImage={savedImage} />
}

export default MediaPage
