import { configureStore } from '@reduxjs/toolkit';
import adviceReducer from './adviceSlice'

const adviceStore = configureStore({
    reducer:{
        adviceStore:adviceReducer,
    }
})

export default adviceStore