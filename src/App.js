import React, {useState} from 'react';
import './App.css';
import 'rbx/index.css';
import {Button, Container, Title} from 'rbx';
import {mergeSortAnimations} from './sortingAlgorithms/mergeSort.js';
import {selectionSortAnimations} from './sortingAlgorithms/selectionSort.js';
import {bubbleSortAnimations} from './sortingAlgorithms/bubbleSort.js';


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

const App = () => {
    const [arr, setArr] = useState(newArray);
    const arrBars = document.getElementsByClassName('array-bar');

    return (
        <Container>
            <Title>Sorting Visualizer</Title>
            <Button.Group>
                <Button onClick={() => setArr(newArray)}>New Array</Button>
                <Button onClick={() => mergeSortAnimations(arr, arrBars)}>Merge Sort</Button>
                <Button onClick={() => selectionSortAnimations(arr, arrBars)}>Selection Sort</Button>
                <Button onClick={() => bubbleSortAnimations(arr, arrBars)}>Bubble Sort</Button>
            </Button.Group>
            <ArrayBars arr={arr} />
        </Container>
    );
};

export default App;
