import React from 'react'

import patternDivider from '../utils/pattern-divider-desktop.svg'

import dice from '../utils/icon-dice.svg'
import { usegetAdvice } from '../hooks/usegetAdvice'

const Advice = ({advice,id}) => {

    usegetAdvice();
  return (
    <div className='advice-box'>
        <div>
            <h3>Advice # "{id}"</h3>
        </div>

        <div>
            <p>{advice}</p>
        </div>

        <div>
           <div>
                <img src={patternDivider} alt="" />
           </div>
        </div>
        <div className='circle'>
            <img src={dice} alt="" />
        </div>
    </div>
  )
}
export default Advice