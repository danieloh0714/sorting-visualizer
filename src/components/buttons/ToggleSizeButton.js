import React from 'react';

import {Button} from '@material-ui/core';


const ToggleSizeButton = ({isSorting, toggleSize}) => (
    <Button variant='contained' color='secondary' disabled={isSorting} onClick={() => toggleSize()}>Toggle Size</Button>
);

export default ToggleSizeButton;
