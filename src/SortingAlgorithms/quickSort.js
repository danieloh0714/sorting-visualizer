import {arrColour, animColour, sortedColour} from '../utils/utils';


const pivotColour = 'orange';
const partitionColour = 'gold';

const quickSortAnimations = (arr, arrBars, setIsSorting, speeds) => {
    const sortSpeed = speeds[0];

    const animations = [];
    quickSort(arr, 0, arr.length - 1, animations);

    for (let i = 0; i < animations.length; i++) {
        const animation = animations[i];
        const action = animation[0];

        if (action === 'check') {
            setTimeout(() => {
                const toColour = animation[1];
                const bar = arrBars[animation[2]].style;
                const partitionBar = arrBars[animation[3]].style;
                bar.backgroundColor = toColour ? animColour : arrColour;
                partitionBar.backgroundColor = animation[2] === animation[3] ? animColour : partitionColour ;
            }, i * sortSpeed);
        }
        else if (action === 'swap') {
            setTimeout(() => {
                const barOne = arrBars[animation[1]].style;
                const newHeightOne = animation[2];
                const barTwo = arrBars[animation[3]].style;
                const newHeightTwo = animation[4];
                barOne.height = `${newHeightOne}px`;
                barTwo.height = `${newHeightTwo}px`;
            }, i * sortSpeed);
        }
        else if (action === 'partitionMove') {
            setTimeout(() => {
                const oldBar = arrBars[animation[1]].style;
                const newBar = arrBars[animation[2]].style;
                oldBar.backgroundColor = arrColour;
                newBar.backgroundColor = partitionColour;
            }, i * sortSpeed);
        }
        else if (action === 'partitionStartEnd') {
            setTimeout(() => {
                const toColour = animation[1];
                const partitionBar = arrBars[animation[2]].style;
                partitionBar.backgroundColor = toColour ? partitionColour : arrColour;
            }, i * sortSpeed);
        }
        else if (action === 'pivot') {
            setTimeout(() => {
                const toColour = animation[1];
                const pivotBar = arrBars[animation[2]].style;
                pivotBar.backgroundColor = toColour ? pivotColour : arrColour;
            }, i * sortSpeed);
        }
    }

    setTimeout(() => {
        for (let i = 0; i < arrBars.length; i++) {
            arrBars[i].style.backgroundColor = sortedColour;
        }
    }, (animations.length + speeds[1]) * sortSpeed);

    setTimeout(() => {
        for (let i = 0; i < arrBars.length; i++) {
            arrBars[i].style.backgroundColor = arrColour;
        }
        setIsSorting(false);
    }, (animations.length + speeds[2]) * sortSpeed);
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
