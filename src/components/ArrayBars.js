import React from 'react';

import {arrColour} from '../utils/utils';


const ArrayBars = ({arr, arrSize}) => (
    <div className='bars'>
        {arr.map((value, idx) => (
                <div
                    className='array-bar'
                    key={idx}
                    style={{backgroundColor: arrColour, height: `${value}px`, width: arrSize === 20 ? '2%' : '.5%'}}
                >
                </div>
        ))}
    </div>
);

export default ArrayBars;
