import React from 'react'

import patternDivider from '../utils/pattern-divider-desktop.svg'

import dice from '../utils/icon-dice.svg'
import { usegetAdvice } from '../hooks/usegetAdvice'

const Advice = ({advice,id}) => {
  const { fetchNewAdvice } = usegetAdvice();
  return (
    <div className='advice-box'>
        {id ? <h3>Advice #{id}</h3> : <h3>Loading...</h3>}
       {advice ? <p>"{advice}"</p> : <p>Loading...</p>} 
        <div className='img-holder'>
            <img src={patternDivider} alt="" className='img'/>
        </div>

        <div className='circle' onClick={fetchNewAdvice}>
            <img src={dice} alt="" />
        </div>
    </div>
  )
}
export default Advice