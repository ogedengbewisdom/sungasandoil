
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    show: false,
    notification: null
}

const workSlice = createSlice({
    name: "workimages",
    initialState,
    reducers: {
        replace(state, action) {
            state.items = action.payload.items
        },
        showHambugger(state, action) {
            state.show = !state.show
        },
        showNotification(state, action) {
            state.notification = {
                title: action.payload.title,
                status: action.payload.status,
                message: action.payload.message
            }
        },
        clearNotification(state, action) {
            state.notification = null
        }

    }
})

export const worksActions = workSlice.actions

export default workSlice;