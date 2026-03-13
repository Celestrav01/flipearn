import {configureStore} from '@reduxjs/toolkit'
import listingReducer from './feature/listingSlice'
import chatReducer from './feature/chatSlice'

export const store = configureStore({
    reducer: {
        listing: listingReducer,
        chat: chatReducer
    }
})