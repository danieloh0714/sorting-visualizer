import React from 'react';
import {Button} from 'rbx';
import {bubbleSortAnimations} from '../sortingAlgorithms/bubbleSort.js';
import {selectionSortAnimations} from '../sortingAlgorithms/selectionSort.js';
import {insertionSortAnimations} from '../sortingAlgorithms/insertionSort.js';
import {mergeSortAnimations} from '../sortingAlgorithms/mergeSort.js';
import {quickSortAnimations} from '../sortingAlgorithms/quickSort.js';
import {newArray} from '../utils/newArray.js';


const ARRAY_COLOUR = 'olive';
const ANIMATION_COLOUR = 'pink';


const Buttons = ({arr, setArr}) => {
    const arrBars = document.getElementsByClassName('array-bar');

    return (
        <Button.Group>
            <Button color='info' onClick={() => {setArr(newArray)}}>New Array</Button>
            <Button color='warning' onClick={() => bubbleSortAnimations(arr, arrBars, ARRAY_COLOUR, ANIMATION_COLOUR)}>Bubble Sort</Button>
            <Button color='warning' onClick={() => selectionSortAnimations(arr, arrBars, ARRAY_COLOUR, ANIMATION_COLOUR)}>Selection Sort</Button>
            <Button color='warning' onClick={() => insertionSortAnimations(arr, arrBars, ARRAY_COLOUR, ANIMATION_COLOUR)}>Insertion Sort</Button>
            <Button color='warning' onClick={() => mergeSortAnimations(arr, arrBars, ARRAY_COLOUR, ANIMATION_COLOUR)}>Merge Sort</Button>
            <Button color='warning' onClick={() => quickSortAnimations(arr, arrBars, ARRAY_COLOUR, ANIMATION_COLOUR)}>Quick Sort</Button>
        </Button.Group>
    )
};

export default Buttons;
