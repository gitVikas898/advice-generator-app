import { configureStore } from '@reduxjs/toolkit';
import adviceReducer from './adviceSlice'

const adviceStore = configureStore({
    reducer:{
        adivce:adviceReducer,
    }
})

export default adviceStore