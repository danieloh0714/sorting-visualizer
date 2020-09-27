import React from 'react';
import {Container} from 'rbx';

const ArrayBars = ({arr}) => (
    <Container>
        {
            arr.map((value, idx) => (
                <div
                    className='array-bar'
                    key={idx}
                    style={{height: `${value}px`}}
                >
                </div>
            ))
        }
    </Container>
);

export default ArrayBars;
