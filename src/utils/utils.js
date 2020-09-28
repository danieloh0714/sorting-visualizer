import {bubbleSortAnimations} from '../sortingAlgorithms/bubbleSort';
import {selectionSortAnimations} from '../sortingAlgorithms/selectionSort';
import {insertionSortAnimations} from '../sortingAlgorithms/insertionSort';
import {mergeSortAnimations} from '../sortingAlgorithms/mergeSort';
import {quickSortAnimations} from '../sortingAlgorithms/quickSort';


const newArray = () => (
    Array.from({length: 20}, () => Math.floor(Math.random() * (100 - 5 + 1) * 5))
);

const runSortingAlgorithm = (sortingAlgorithm, arr) => {
    const arrBars = document.getElementsByClassName('array-bar');

    if (sortingAlgorithm === 'bubble') {
        bubbleSortAnimations(arr, arrBars);
    }
    else if (sortingAlgorithm === 'selection') {
        selectionSortAnimations(arr, arrBars);
    }
    else if (sortingAlgorithm === 'insertion') {
        insertionSortAnimations(arr, arrBars);
    }
    else if (sortingAlgorithm === 'merge') {
        mergeSortAnimations(arr, arrBars);
    }
    else if (sortingAlgorithm === 'quick') {
        quickSortAnimations(arr, arrBars);
    }
};

const arrColour = 'pink';
const animColour = 'navy';

export {newArray, runSortingAlgorithm,arrColour, animColour};
