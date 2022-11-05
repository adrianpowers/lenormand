import React from 'react';
import frame from '../../images/frame1.png';
import './Hand.css';

const Hand = () => {

    return(
        <div className='handContainer'>
            <div className='cards card1'>
                <img src={frame} alt='back of first card' className='handImg' />
            </div>
            <div className='cards card1'>
                <img src={frame} alt='back of first card' className='handImg' />
            </div>
        </div>
    )
}

export default Hand;