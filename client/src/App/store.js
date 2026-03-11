import {configureStore} from '@reduxjs/toolkit'
import listingReducer from './feature/listingSlice'

export const store = configureStore({
    reducer: {
        listing: listingReducer
    }
})