import {arrColour, animColour, sortedColour} from '../utils/utils';


const mergeSortAnimations = (arr, arrBars, setIsSorting, speeds) => {
    const sortSpeed = speeds[0];

    const animations = [];
    const auxArr = arr.slice();
    mergeSort(arr, 0, arr.length - 1, auxArr, animations);

    for (let i = 0; i < animations.length; i++) {
        const animation = animations[i];
        const action = animation[0];
        
        if (action === 'compare') {
            setTimeout(() => {
                const toColour = animation[1];
                const barOne = arrBars[animation[2]].style;
                const barTwo = arrBars[animation[3]].style;
                const colour = toColour ? animColour : arrColour;
                barOne.backgroundColor = colour;
                barTwo.backgroundColor = colour;
            }, i * sortSpeed);
        }
        else if (action === 'swap') {
            setTimeout(() => {
                const barOne = arrBars[animation[1]].style;
                const newHeight = animation[2];
                barOne.height = `${newHeight}px`;
                barOne.backgroundColor = 'gold';
            }, i * sortSpeed);
        }
        else if (action === 'swapColour') {
            setTimeout(() => {
                const toColour = animation[1];
                const barOne = arrBars[animation[2]].style;
                barOne.backgroundColor = toColour ? 'gold' : arrColour;
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

const mergeSort = (arr, start, end, auxArr, animations) => {
    if (start === end) return;
    const middle = Math.floor((start + end) / 2);
    mergeSort(auxArr, start, middle, arr, animations);
    mergeSort(auxArr, middle + 1, end, arr, animations);
    merge(arr, start, middle, end, auxArr, animations);
};

const merge = (arr, start, middle, end, auxArr, animations) => {
    let i = start, j = middle + 1, k = start;

    while (i <= middle && j <= end) {
        animations.push(['compare', true, i, j]);
        if (auxArr[i] <= auxArr[j]) {
            animations.push(['swapColour', true, k]);
            animations.push(['swap', k, auxArr[i]]);
            animations.push(['swapColour', false, k]);
        }
        else {
            animations.push(['swapColour', true, k]);
            animations.push(['swap', k, auxArr[j]]);
            animations.push(['swapColour', false, k]);
        }
        animations.push(['compare', false, i, j]);

        if (auxArr[i] <= auxArr[j]) {
            arr[k++] = auxArr[i++];
        }
        else {
            arr[k++] = auxArr[j++];
        }
    }
    while (i <= middle) {
        animations.push(['compare', true, i, i]);
        animations.push(['swapColour', true, k]);
        animations.push(['swap', k, auxArr[i]]);
        animations.push(['swapColour', false, k]);
        animations.push(['compare', false, i, i]);
        arr[k++] = auxArr[i++];
    }
    while (j <= end) {
        animations.push(['compare', true, j, j]);
        animations.push(['swapColour', true, k]);
        animations.push(['swap', k, auxArr[j]]);
        animations.push(['swapColour', false, k]);
        animations.push(['compare', false, j, j]);
        arr[k++] = auxArr[j++];
    }
};

export {mergeSortAnimations};
