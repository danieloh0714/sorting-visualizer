import React, {useState} from 'react';
import {Button, ButtonGroup} from '@material-ui/core';
import {newArray, runSortingAlgorithm} from '../utils/utils';


const Buttons = ({arr, setArr, arrSize, toggleSize}) => {
    const [selectedAlgo, setSelectedAlgo] = useState('');
    const [isSorting, setIsSorting] = useState(false);
    const speedsMany = [[10, 0, 100], [10, 30, 200], [50, 0, 25], [10, 30, 200], [10, 30, 200]];
    const speedsFew = [[100, 0, 5], [100, 0, 5], [200, 0, 5], [100, 0, 5], [100, 0, 5]];
    const speeds = arrSize === 'few' ? speedsFew : speedsMany;

    const isSelected = (algo) => {
        if (algo === selectedAlgo) return 'outlined';
        return 'contained';
    };

    return (
        <ButtonGroup>
            <Button variant='contained' color='default' disabled={isSorting} onClick={() => {setArr(newArray(arrSize))}}>New Array</Button>
            <Button variant={isSelected('bubble')} color='primary' disabled={isSorting} onClick={() => setSelectedAlgo('bubble')}>Bubble Sort</Button>
            <Button variant={isSelected('selection')} color='primary' disabled={isSorting} onClick={() => setSelectedAlgo('selection')}>Selection Sort</Button>
            <Button variant={isSelected('insertion')} color='primary' disabled={isSorting} onClick={() => setSelectedAlgo('insertion')}>Insertion Sort</Button>
            <Button variant={isSelected('merge')} color='primary' disabled={isSorting} onClick={() => setSelectedAlgo('merge')}>Merge Sort</Button>
            <Button variant={isSelected('quick')} color='primary' disabled={isSorting} onClick={() => setSelectedAlgo('quick')}>Quick Sort</Button>
            <Button
                variant='contained'
                color='secondary'
                disabled={selectedAlgo === '' || isSorting}
                onClick={() => runSortingAlgorithm(selectedAlgo, arr, setIsSorting, speeds)}
            >
                Sort
            </Button>
            <Button onClick={() => toggleSize()}>Size</Button>
        </ButtonGroup>
    )
};

export default Buttons;
