import {bubbleSortAnimations} from '../sortingAlgorithms/bubbleSort';
import {selectionSortAnimations} from '../sortingAlgorithms/selectionSort';
import {insertionSortAnimations} from '../sortingAlgorithms/insertionSort';
import {mergeSortAnimations} from '../sortingAlgorithms/mergeSort';
import {quickSortAnimations} from '../sortingAlgorithms/quickSort';


const generateArray = (arrSize) => (
    Array.from({length: arrSize}, () => Math.floor(Math.random() * (100 - 5 + 1) * 5))
);

const runSelectedAlgo = (selectedAlgo, arr, setIsSorting, speeds) => {
    const arrBars = document.getElementsByClassName('array-bar');
    setIsSorting(true);

    if (selectedAlgo === 'b') {
        bubbleSortAnimations(arr, arrBars, setIsSorting, speeds[0]);
    }
    else if (selectedAlgo === 's') {
        selectionSortAnimations(arr, arrBars, setIsSorting, speeds[1]);
    }
    else if (selectedAlgo === 'i') {
        insertionSortAnimations(arr, arrBars, setIsSorting, speeds[2]);
    }
    else if (selectedAlgo === 'm') {
        mergeSortAnimations(arr, arrBars, setIsSorting, speeds[3]);
    }
    else if (selectedAlgo === 'q') {
        quickSortAnimations(arr, arrBars, setIsSorting, speeds[4]);
    }
};

const speedsSlow = [[100, 0, 5], [100, 2, 7], [200, 0, 5], [100, 2, 7], [100, 2, 7]];
const speedsFast = [[10, 0, 100], [10, 30, 130], [20, 0, 50], [10, 30, 130], [10, 30, 130]];

const arrColour = 'navy';
const animColour = 'pink';
const sortedColour = 'greenyellow';

export {generateArray, runSelectedAlgo, speedsSlow, speedsFast, arrColour, animColour, sortedColour};
