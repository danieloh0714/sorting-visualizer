import React, {useState} from 'react';
import {Button} from 'rbx';
import {newArray, runSortingAlgorithm} from '../utils/utils';


const Buttons = ({arr, setArr}) => {
    const [selectedAlgo, setSelectedAlgo] = useState('');

    return (
        <Button.Group>
            <Button color='info' onClick={() => {setArr(newArray)}}>New Array</Button>
            <Button color='warning' onClick={() => setSelectedAlgo('bubble')}>Bubble Sort</Button>
            <Button color='warning' onClick={() => setSelectedAlgo('selection')}>Selection Sort</Button>
            <Button color='warning' onClick={() => setSelectedAlgo('insertion')}>Insertion Sort</Button>
            <Button color='warning' onClick={() => setSelectedAlgo('merge')}>Merge Sort</Button>
            <Button color='warning' onClick={() => setSelectedAlgo('quick')}>Quick Sort</Button>
            <Button color='danger' disabled={selectedAlgo === ''} onClick={() => runSortingAlgorithm(selectedAlgo, arr)}>Sort</Button>
        </Button.Group>
    )
};

export default Buttons;
