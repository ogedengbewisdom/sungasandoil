
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    show: false,
    notification: null,
    isAuthenticated: false
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
        },
        setAuthentication(state, action) {
            state.isAuthenticated = action.payload
        }

    }
})

export const worksActions = workSlice.actions

export default workSlice;