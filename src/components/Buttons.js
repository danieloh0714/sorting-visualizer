import React, {useState} from 'react';
import {Button} from 'rbx';
import {newArray, runSortingAlgorithm} from '../utils/utils';


const Buttons = ({arr, setArr}) => {
    const [selectedAlgo, setSelectedAlgo] = useState('');
    const [isSorting, setIsSorting] = useState(false);

    return (
        <Button.Group>
            <Button color='info' disabled={isSorting} onClick={() => {setArr(newArray)}}>New Array</Button>
            <Button color='warning' disabled={isSorting} onClick={() => setSelectedAlgo('bubble')}>Bubble Sort</Button>
            <Button color='warning' disabled={isSorting} onClick={() => setSelectedAlgo('selection')}>Selection Sort</Button>
            <Button color='warning' disabled={isSorting} onClick={() => setSelectedAlgo('insertion')}>Insertion Sort</Button>
            <Button color='warning' disabled={isSorting} onClick={() => setSelectedAlgo('merge')}>Merge Sort</Button>
            <Button color='warning' disabled={isSorting} onClick={() => setSelectedAlgo('quick')}>Quick Sort</Button>
            <Button color='danger' disabled={selectedAlgo === '' || isSorting} onClick={() => runSortingAlgorithm(selectedAlgo, arr, setIsSorting)}>Sort</Button>
        </Button.Group>
    )
};

export default Buttons;
