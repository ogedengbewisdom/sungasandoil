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
            dispatch(worksActions.showNotification({
                title: "Failed",
                status: "error",
                message: "Failed to fetch media please try again"
            }))
            // Handle error state
        }
    };

    // Rest of your component code

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

    // useEffect(() => {
    //     sendRequest()
    // }, [])

    return (
        <Fragment>
            <EventDetail event={event} onDelete={deleteHandler} />
        </Fragment>
    )
};


// export const getStaticProps = async (context) => {
   
//     const { params } = context;
//     const id = params.mediaId;
//     const response = await fetch(`https://sun-gas.onrender.com/api/our-works/${id}`);
//     const resData = await response.json();
//     if (!resData) {
//         return {
//             notFound: true
//         }
//     }

//     return {
//         props: {
//             event: resData.images
//         },
//         revalidate: 10
//     }
// };

// export const getStaticPaths = async () => {
   
//     const response =  await fetch(`https://sun-gas.onrender.com/api/our-works`);
//     const resData = await response.json();
//     const paths  = resData.images.map(item => ({params: {mediaId: `${item.id}`}}));

//     return {
//         paths: paths,
//         fallback: false
//     }
// };

export default React.memo(MediaDetailPage);