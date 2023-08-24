import { eventById } from "@/helper/helperApi";
import EventDetail from "@/screen/EventDetail";
import { worksActions } from "@/store/workslice";
import { Heading, } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState, useEffect, Fragment } from "react";
import { useDispatch } from "react-redux";


const MediaDetailPage = ({event}) => {
    const dispatch = useDispatch()

    const router = useRouter();
    const mediaId = router.query.mediaId;
  
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


export const getStaticProps = async (context) => {
    const { params } = context;
    const id = params.mediaId;
    const response = await fetch(`https://sun-gas.onrender.com/api/our-works/${id}`);
    const resData = await response.json();
    if (!resData) {
        return {
            notFound: true
        }
    }
    
    return {
        props: {
            event: resData.images
        },
        revalidate: 10
    }
};

export const getStaticPaths = async () => {
    const response =  await fetch(`https://sun-gas.onrender.com/api/our-works`);
    const resData = await response.json();
    const paths  = resData.images.map(item => ({params: {mediaId: `${item.id}`}}));

    return {
        paths: paths,
        fallback: false
    }
};

export default MediaDetailPage;