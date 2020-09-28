import React from 'react';
import {Button} from 'rbx';
import {bubbleSortAnimations} from '../sortingAlgorithms/bubbleSort';
import {selectionSortAnimations} from '../sortingAlgorithms/selectionSort';
import {insertionSortAnimations} from '../sortingAlgorithms/insertionSort';
import {mergeSortAnimations} from '../sortingAlgorithms/mergeSort';
import {quickSortAnimations} from '../sortingAlgorithms/quickSort';
import {newArray} from '../utils/utils';


const Buttons = ({arr, setArr}) => {
    const arrBars = document.getElementsByClassName('array-bar');

    return (
        <Button.Group>
            <Button color='info' onClick={() => {setArr(newArray)}}>New Array</Button>
            <Button color='warning' onClick={() => bubbleSortAnimations(arr, arrBars)}>Bubble Sort</Button>
            <Button color='warning' onClick={() => selectionSortAnimations(arr, arrBars)}>Selection Sort</Button>
            <Button color='warning' onClick={() => insertionSortAnimations(arr, arrBars)}>Insertion Sort</Button>
            <Button color='warning' onClick={() => mergeSortAnimations(arr, arrBars)}>Merge Sort</Button>
            <Button color='warning' onClick={() => quickSortAnimations(arr, arrBars)}>Quick Sort</Button>
        </Button.Group>
    )
};

export default Buttons;
