import {bubbleSortAnimations} from '../sortingAlgorithms/bubbleSort';
import {selectionSortAnimations} from '../sortingAlgorithms/selectionSort';
import {insertionSortAnimations} from '../sortingAlgorithms/insertionSort';
import {mergeSortAnimations} from '../sortingAlgorithms/mergeSort';
import {quickSortAnimations} from '../sortingAlgorithms/quickSort';


const newArray = (arrSize) => (
    Array.from({length: arrSize === 'few' ? 20 : 100}, () => Math.floor(Math.random() * (100 - 5 + 1) * 5))
);

const runSortingAlgorithm = (sortingAlgorithm, arr, setIsSorting, sortSpeeds) => {
    const arrBars = document.getElementsByClassName('array-bar');
    setIsSorting(true);

    if (sortingAlgorithm === 'bubble') {
        bubbleSortAnimations(arr, arrBars, setIsSorting, sortSpeeds[0]);
    }
    else if (sortingAlgorithm === 'selection') {
        selectionSortAnimations(arr, arrBars, setIsSorting, sortSpeeds[1]);
    }
    else if (sortingAlgorithm === 'insertion') {
        insertionSortAnimations(arr, arrBars, setIsSorting, sortSpeeds[2]);
    }
    else if (sortingAlgorithm === 'merge') {
        mergeSortAnimations(arr, arrBars, setIsSorting, sortSpeeds[3]);
    }
    else if (sortingAlgorithm === 'quick') {
        quickSortAnimations(arr, arrBars, setIsSorting, sortSpeeds[4]);
    }
};

const arrColour = 'navy';
const animColour = 'pink';
const sortedColour = 'greenyellow';

export {newArray, runSortingAlgorithm, arrColour, animColour, sortedColour};
