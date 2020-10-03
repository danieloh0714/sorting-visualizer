import React from 'react';

import {Button} from '@material-ui/core';


const NewArrayButton = ({isSorting, newArray}) => (
    <Button variant='contained' color='secondary' disabled={isSorting} onClick={() => newArray()}>New Array</Button>
);

export default NewArrayButton;
