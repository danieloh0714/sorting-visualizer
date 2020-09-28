import React, {useState} from 'react';
import {Button, ButtonGroup} from '@material-ui/core';
import {newArray, runSortingAlgorithm} from '../utils/utils';


const Buttons = ({arr, setArr}) => {
    const [selectedAlgo, setSelectedAlgo] = useState('');
    const [isSorting, setIsSorting] = useState(false);

    const isSelected = (algo) => {
        if (algo === selectedAlgo) return 'outlined';
        return 'contained';
    };

    return (
        <ButtonGroup>
            <Button variant='contained' color='default' disabled={isSorting} onClick={() => {setArr(newArray)}}>New Array</Button>
            <Button variant={isSelected('bubble')} color='primary' disabled={isSorting} onClick={() => setSelectedAlgo('bubble')}>Bubble Sort</Button>
            <Button variant={isSelected('selection')} color='primary' disabled={isSorting} onClick={() => setSelectedAlgo('selection')}>Selection Sort</Button>
            <Button variant={isSelected('insertion')} color='primary' disabled={isSorting} onClick={() => setSelectedAlgo('insertion')}>Insertion Sort</Button>
            <Button variant={isSelected('merge')} color='primary' disabled={isSorting} onClick={() => setSelectedAlgo('merge')}>Merge Sort</Button>
            <Button variant={isSelected('quick')} color='primary' disabled={isSorting} onClick={() => setSelectedAlgo('quick')}>Quick Sort</Button>
            <Button variant='contained' color='secondary' disabled={selectedAlgo === '' || isSorting} onClick={() => runSortingAlgorithm(selectedAlgo, arr, setIsSorting)}>Sort</Button>
        </ButtonGroup>
    )
};

export default Buttons;
