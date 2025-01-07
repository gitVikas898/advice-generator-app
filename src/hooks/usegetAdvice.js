import { useEffect } from 'react';
import {API_LINK} from '../utils/constants'
import { useDispatch } from 'react-redux';
import { addAdvice } from '../utils/adviceSlice';

export const usegetAdvice = () =>{

    const dispatch = useDispatch();

    const getData = async()=>{
        const response = await fetch(API_LINK);
        const data = await response.json();
        dispatch(addAdvice(data.slip));
    }

    useEffect(()=>{
        getData();
    },[])


    return { fetchNewAdvice: getData };
}