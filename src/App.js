import React, {useState} from 'react';
import './App.css';
import 'rbx/index.css';
import {Button, Container, Title} from 'rbx';
import {bubbleSortAnimations} from './sortingAlgorithms/bubbleSort.js';
import {selectionSortAnimations} from './sortingAlgorithms/selectionSort.js';
import {insertionSortAnimations} from './sortingAlgorithms/insertionSort.js';
import {mergeSortAnimations} from './sortingAlgorithms/mergeSort.js';
import {heapSortAnimations} from './sortingAlgorithms/heapSort.js'

const ARRAY_COLOUR = 'olive';
const ANIMATION_COLOUR = 'pink';

const newArray = () => (
    Array.from({length: 100}, () => Math.floor(Math.random() * (100 - 5 + 1) * 5))
);

const ArrayBars = ({arr}) => (
    <Container>
        {
            arr.map((value, idx) => (
                <div
                    className='array-bar'
                    key={idx}
                    style={{height: `${value}px`}}
                >
                </div>
        ))}
    </Container>
);

const Buttons = ({arr, setArr}) => {
    const arrBars = document.getElementsByClassName('array-bar');

    return (
        <Button.Group>
            <Button color='info' onClick={() => {setArr(newArray)}}>New Array</Button>
            <Button color='warning' onClick={() => bubbleSortAnimations(arr, arrBars, ARRAY_COLOUR, ANIMATION_COLOUR)}>Bubble Sort</Button>
            <Button color='warning' onClick={() => selectionSortAnimations(arr, arrBars, ARRAY_COLOUR, ANIMATION_COLOUR)}>Selection Sort</Button>
            <Button color='warning' onClick={() => insertionSortAnimations(arr, arrBars, ARRAY_COLOUR, ANIMATION_COLOUR)}>Insertion Sort</Button>
            <Button color='warning' onClick={() => mergeSortAnimations(arr, arrBars, ARRAY_COLOUR, ANIMATION_COLOUR)}>Merge Sort</Button>
        </Button.Group>
    )
};

const App = () => {
    const [arr, setArr] = useState(newArray);

    return (
        <Container>
            <Title>Sorting Visualizer</Title>
            <Buttons arr={arr} setArr={setArr} />
            <ArrayBars arr={arr} />
        </Container>
    );
};

export default App;
