import React, {useState} from 'react';

import {Button, ButtonGroup} from '@material-ui/core';
import {runSortingAlgorithm} from '../utils/utils';


const Buttons = ({arr, newArray, speeds, isSorting, setIsSorting}) => {
    const [selectedAlgo, setSelectedAlgo] = useState('');

    const isSelected = (algo) => {
        if (algo === selectedAlgo) return 'outlined';
        return 'contained';
    };

    return (
        <div style={{textAlign: 'center', marginTop: '2%'}}>
            <ButtonGroup>
                <Button variant='contained' color='default' disabled={isSorting} onClick={() => newArray()}>New Array</Button>
                <Button variant={isSelected('b')} color='primary' disabled={isSorting} onClick={() => setSelectedAlgo('b')}>Bubble Sort</Button>
                <Button variant={isSelected('s')} color='primary' disabled={isSorting} onClick={() => setSelectedAlgo('s')}>Selection Sort</Button>
                <Button variant={isSelected('i')} color='primary' disabled={isSorting} onClick={() => setSelectedAlgo('i')}>Insertion Sort</Button>
                <Button variant={isSelected('m')} color='primary' disabled={isSorting} onClick={() => setSelectedAlgo('m')}>Merge Sort</Button>
                <Button variant={isSelected('q')} color='primary' disabled={isSorting} onClick={() => setSelectedAlgo('q')}>Quick Sort</Button>
                <Button
                    variant='contained'
                    color='secondary'
                    disabled={isSorting || selectedAlgo === ''}
                    onClick={() => runSortingAlgorithm(selectedAlgo, arr, setIsSorting, speeds)}
                >
                    Sort
                </Button>
            </ButtonGroup>
        </div>
    );
};

export default Buttons;
