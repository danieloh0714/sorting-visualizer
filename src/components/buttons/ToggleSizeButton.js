import React from 'react';

import {Button} from '@material-ui/core';


const ToggleSizeButton = ({isSorting, toggleSize}) => (
    <div style={{textAlign: 'center', marginTop: '2%'}}>
        <Button variant='contained' color='secondary' disabled={isSorting} onClick={() => toggleSize()}>Toggle Size</Button>
    </div>
);

export default ToggleSizeButton;
