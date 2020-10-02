import React from 'react';
import {Container} from '@material-ui/core';

const ArrayBars = ({arr, arrSize}) => (
    <Container>
        {
            arr.map((value, idx) => (
                <div
                    className='array-bar'
                    key={idx}
                    style={{height: `${value}px`, width: arrSize === 'few' ? `2%` : `.5%`}}
                >
                </div>
            ))
        }
    </Container>
);

export default ArrayBars;
