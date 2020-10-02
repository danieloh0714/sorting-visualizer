import React from 'react';

import {Button} from '@material-ui/core';


const SortAlgoButtons = ({isSorting, setSelectedAlgo, isSelected}) => {
    return (
        <>
            <Button variant={isSelected('b')} color='primary' disabled={isSorting} onClick={() => setSelectedAlgo('b')}>Bubble Sort</Button>
            <Button variant={isSelected('s')} color='primary' disabled={isSorting} onClick={() => setSelectedAlgo('s')}>Selection Sort</Button>
            <Button variant={isSelected('i')} color='primary' disabled={isSorting} onClick={() => setSelectedAlgo('i')}>Insertion Sort</Button>
            <Button variant={isSelected('m')} color='primary' disabled={isSorting} onClick={() => setSelectedAlgo('m')}>Merge Sort</Button>
            <Button variant={isSelected('q')} color='primary' disabled={isSorting} onClick={() => setSelectedAlgo('q')}>Quick Sort</Button>
        </>
    );
};

export default SortAlgoButtons;
