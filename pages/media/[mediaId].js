import EventDetail from "@/screen/MediaDetail";
import { worksActions } from "@/store/workslice";
import { useRouter } from "next/router";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";



const MediaDetailPage = () => {
    const dispatch = useDispatch()
    const [event, setEvent] = useState();
    const router = useRouter();
    const mediaId = router.query.mediaId;
    
    useEffect(() => {
        if (mediaId) {
            sendRequest();
        }
    }, [mediaId]);

    const sendRequest =  async () => {
        dispatch(worksActions.showNotification({
            title: "Fetching...",
            status: "pending",
            message: "Fetching individual media data please wait"
        }))
        try {
            const response = await fetch(`https://sun-gas.onrender.com/api/our-works/${mediaId}`);
            if (!response.ok) {
                dispatch(worksActions.showNotification({
                    title: "Failed",
                    status: "error",
                    message: "Failed to fetch media please try again"
                }))
            }
            const resData = await response.json()
            if (!resData || resData.length === 0) {
                // Handle loading state or empty response
            }
            setEvent(resData.images)
            dispatch(worksActions.showNotification({
                title: "Success",
                status: "success",
                message: "Media Fetched successfully"
            })) 
            setTimeout(() => {
                dispatch(worksActions.clearNotification()) // Assuming you have a clearNotification action
              }, 5000) // Clear the notification after 5 seconds
        } catch(error) {
            // Handle error state
            dispatch(worksActions.showNotification({
                title: "Failed",
                status: "error",
                message: "Failed to fetch media please try again"
            }))
      
        }
    };

    const deleteHandler = async () => {
        dispatch(worksActions.showNotification({
            title: "Deleting...",
            status: "pending",
            message: "Deleting media please wait"
        }))
        try {
            const response = await fetch(`https://sun-gas.onrender.com/api/delete/${mediaId}`, {
                method: "DELETE"
            }) 
            if (!response.ok) {
                throw new Error ("Something went wrong try again later")
            }
            dispatch(worksActions.showNotification({
                title: "Deleted",
                status: "success",
                message: "Media deleted successfully"
            }))

            setTimeout(() => {
                dispatch(worksActions.clearNotification()) // Clear the notification after 5 seconds
              }, 5000)
              router.push("/media")
        }
        catch(error) {
            dispatch(worksActions.showNotification({
                title: "Failed",
                status: "error",
                message: "failed to delete media please try again"
            }))
        }
    }

    return (
        <Fragment>
            <EventDetail event={event} onDelete={deleteHandler} />
        </Fragment>
    )
};


export default React.memo(MediaDetailPage);