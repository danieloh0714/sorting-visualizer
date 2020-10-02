import React from 'react';


const ArrayBars = ({arr, arrSize}) => (
    <div id='bars'>
        {
            arr.map((value, idx) => (
                <div
                    class='array-bar'
                    key={idx}
                    style={{height: `${value}px`, width: arrSize === 'few' ? `2%` : `.5%`}}
                >
                </div>
            ))
        }
    </div>
);

export default ArrayBars;
