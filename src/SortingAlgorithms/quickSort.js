import {arrColour, animColour, sortedColour} from '../utils/utils';


const sortSpeed = 10;
const pivotColour = 'brown';
const partitionColour = 'black';

const quickSortAnimations = (arr, arrBars, setIsSorting) => {
    const animations = [];
    quickSort(arr, 0, arr.length - 1, animations);

    for (let i = 0; i < animations.length; i++) {
        const animation = animations[i];
        const action = animation[0];

        if (action === 'check') {
            setTimeout(() => {
                const [_, toColour, barIdx, partitionIdx] = animation;
                arrBars[barIdx].style.backgroundColor = toColour ? animColour : arrColour;
                arrBars[partitionIdx].style.backgroundColor = partitionColour;
            }, i * sortSpeed);
        }
        else if (action === 'swap') {
            setTimeout(() => {
                const [_, barOneIdx, newHeightOne, barTwoIdx, newHeightTwo] = animation;
                const barOne = arrBars[barOneIdx].style;
                const barTwo = arrBars[barTwoIdx].style;
                barOne.height = `${newHeightOne}px`;
                barTwo.height = `${newHeightTwo}px`;
                // barTwo.backgroundColor  = PARTITION_COLOUR;
            }, i * sortSpeed);
        }
        else if (action === 'partitionMove') {
            setTimeout(() => {
                const [_, oldIdx, newIdx] = animation;
                arrBars[oldIdx].style.backgroundColor = arrColour;
                arrBars[newIdx].style.backgroundColor = partitionColour;
            }, i * sortSpeed);
        }
        else if (action === 'partitionStartEnd') {
            setTimeout(() => {
                const [_, toColour, partitionIdx] = animation;
                arrBars[partitionIdx].style.backgroundColor = toColour ? partitionColour : arrColour;
            }, i * sortSpeed);
        }
        else if (action === 'pivot') {
            setTimeout(() => {
                const [_, toColour, pivotIdx] = animation;
                arrBars[pivotIdx].style.backgroundColor = toColour ? pivotColour : arrColour;
            }, i * sortSpeed);
        }
    }

    setTimeout(() => {
        for (let i = 0; i < arrBars.length; i++) {
            arrBars[i].style.backgroundColor = sortedColour;
        }
    }, (animations.length + 3) * sortSpeed);

    setTimeout(() => {
        for (let i = 0; i < arrBars.length; i++) {
            arrBars[i].style.backgroundColor = arrColour;
        }
        setIsSorting(false);
    }, (animations.length + 10) * sortSpeed);
};

const quickSort = (arr, start, end, animations) => {
    if (start < end) {
        const partitionIdx = partition(arr, start, end, animations);
        quickSort(arr, start, partitionIdx - 1, animations);
        quickSort(arr, partitionIdx + 1, end, animations);
    }
};

const partition = (arr, start, end, animations) => {
    const pivot = arr[end];
    animations.push(['pivot', true, end]);

    let partitionIdx = start;
    animations.push(['partitionStartEnd', true, start]);

    for (let i = start; i < end; i++) {
        animations.push(['check', true, i, partitionIdx]);

        if (arr[i] <= pivot) {
            animations.push(['swap', i, arr[partitionIdx], partitionIdx, arr[i]]);
            const temp = arr[i];
            arr[i] = arr[partitionIdx];
            arr[partitionIdx] = temp;

            animations.push(['partitionMove', partitionIdx, partitionIdx + 1]);
            partitionIdx++;
        }
        animations.push(['check', false, i, partitionIdx]);
    }

    animations.push(['swap', end, arr[partitionIdx], partitionIdx, arr[end]]);
    const temp = arr[end];
    arr[end] = arr[partitionIdx];
    arr[partitionIdx] = temp;

    animations.push(['partitionStartEnd', false, partitionIdx]);
    
    animations.push(['pivot', false, end]);

    return partitionIdx;
};

export {quickSortAnimations};
