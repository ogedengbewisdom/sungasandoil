import { eventById } from "@/helper/helperApi";
import EventDetail from "@/screen/EventDetail";
import { Heading, } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState, useEffect, Fragment } from "react";


const MediaDetailPage = () => {
    const router = useRouter();
    const eventId = router.query.mediaId;
    const event = eventById(eventId)
    if (!event) {
        return <p>No Event</p>
    }
  

    return (
        <Fragment>
            <EventDetail event={event} />
        </Fragment>
    )
};

export default MediaDetailPage;