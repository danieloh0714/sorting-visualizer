import {bubbleSortAnimations} from '../sortingAlgorithms/bubbleSort';
import {selectionSortAnimations} from '../sortingAlgorithms/selectionSort';
import {insertionSortAnimations} from '../sortingAlgorithms/insertionSort';
import {mergeSortAnimations} from '../sortingAlgorithms/mergeSort';
import {quickSortAnimations} from '../sortingAlgorithms/quickSort';


const newArray = () => (
    Array.from({length: 200}, () => Math.floor(Math.random() * (100 - 5 + 1) * 5))
);

const runSortingAlgorithm = (sortingAlgorithm, arr, setIsSorting) => {
    const arrBars = document.getElementsByClassName('array-bar');
    setIsSorting(true);

    if (sortingAlgorithm === 'bubble') {
        bubbleSortAnimations(arr, arrBars, setIsSorting);
    }
    else if (sortingAlgorithm === 'selection') {
        selectionSortAnimations(arr, arrBars, setIsSorting);
    }
    else if (sortingAlgorithm === 'insertion') {
        insertionSortAnimations(arr, arrBars, setIsSorting);
    }
    else if (sortingAlgorithm === 'merge') {
        mergeSortAnimations(arr, arrBars, setIsSorting);
    }
    else if (sortingAlgorithm === 'quick') {
        quickSortAnimations(arr, arrBars, setIsSorting);
    }
};

const arrColour = 'pink';
const animColour = 'navy';
const sortedColour = 'greenyellow';

export {newArray, runSortingAlgorithm, arrColour, animColour, sortedColour};
