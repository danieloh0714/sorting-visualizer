import React from 'react';

import {Button} from '@material-ui/core';


const SortButton = ({isSorting, selectedAlgo, sort}) => (
    <Button
        variant='contained'
        color='secondary'
        disabled={isSorting || selectedAlgo === ''}
        onClick={() => sort()}
    >
        Sort
    </Button>
);

export default SortButton;
