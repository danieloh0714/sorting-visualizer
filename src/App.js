import React, {useState} from 'react';
import './App.css';
import 'rbx/index.css';
import {Button, Container, Title} from 'rbx';
import {getMergeSort} from './SortingAlgorithms/mergeSort.js';
import {getSelectionSort} from './SortingAlgorithms/selectionSort.js';
import {getBubbleSort} from './SortingAlgorithms/bubbleSort.js';


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

const mergeSort = arr => {
    const animations = getMergeSort(arr);
    const arrBars = document.getElementsByClassName('array-bar');
    for (let i = 0; i < animations.length; i++) {
        if (animations[i][2]) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrBars[barOneIdx].style;
            const barTwoStyle = arrBars[barTwoIdx].style;
            const colour = i % 3 == 0 ? 'pink' : 'olive';
            setTimeout(() => {
                barOneStyle.backgroundColor = colour;
                barTwoStyle.backgroundColor = colour;
            }, i * 10);
        }
        else {
            setTimeout(() => {
                const [barOneIdx, newHeight] = animations[i];
                const barOneStyle = arrBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
            }, i * 10);
        }
    }
};

const selectionSort = arr => {
    const animations = getSelectionSort(arr);
    const arrBars = document.getElementsByClassName('array-bar');
    for (let i = 0; i < animations.length; i++) {
        if (animations[i][2]) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrBars[barOneIdx].style;
            const barTwoStyle = arrBars[barTwoIdx].style;
            const colour = i % 4 == 0 ? 'pink' : 'olive';
            setTimeout(() => {
                barOneStyle.backgroundColor = colour;
                barTwoStyle.backgroundColor = colour;
            }, i * 50);
        }
        else {
            setTimeout(() => {
                const [barOneIdx, newHeight] = animations[i];
                const barOneStyle = arrBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
            }, i * 50);
        }
    }
};

const bubbleSort = arr => {
    const animations = getBubbleSort(arr);
    const arrBars = document.getElementsByClassName('array-bar');
    for (let i = 0; i < animations.length; i++) {
        if (animations[i][2]) {
            const [barOneIdx, barTwoIdx,_ , toColour] = animations[i];
            const barOneStyle = arrBars[barOneIdx].style;
            const barTwoStyle = arrBars[barTwoIdx].style;
            const colour = toColour == 'colour' ? 'pink' : 'olive';
            setTimeout(() => {
                barOneStyle.backgroundColor = colour;
                barTwoStyle.backgroundColor = colour;
            }, i * 50);
        }
        else {
            setTimeout(() => {
                const [barOneIdx, newHeightOne, _, barTwoIdx, newHeightTwo] = animations[i];
                const barOneStyle = arrBars[barOneIdx].style;
                barOneStyle.height = `${newHeightOne}px`;
                const barTwoStyle = arrBars[barTwoIdx].style;
                barTwoStyle.height = `${newHeightTwo}px`;
            }, i * 50);
        }
    }
};

const App = () => {
    const [arr, setArr] = useState(newArray);

    return (
        <Container>
            <Title>Sorting Visualizer</Title>
            <Button.Group>
                <Button onClick={() => setArr(newArray)}>New Array</Button>
                <Button onClick={() => mergeSort(arr)}>Merge Sort</Button>
                <Button onClick={() => selectionSort(arr)}>Selection Sort</Button>
                <Button onClick={() => bubbleSort(arr)}>Bubble Sort</Button>
            </Button.Group>
            <ArrayBars arr={arr} />
        </Container>
    );
};

export default App;
