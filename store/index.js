
import { configureStore } from "@reduxjs/toolkit";
import workSlice from "./workslice";

const store  = configureStore({
    reducer: {
        show: workSlice.reducer
    }
})

export default store