const mergeSortAnimations = (arr, arrBars, arrColour, animColour) => {
    if (arr.length <= 1) return arr;
    const animations = [];
    const auxArr = arr.slice();
    mergeSort(arr, 0, arr.length - 1, auxArr, animations);

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
        animations.push([i, j, true]);
        animations.push([i, j, true]);
        if (auxArr[i] <= auxArr[j]) {
            animations.push([k, auxArr[i], false]);
            arr[k++] = auxArr[i++];
        } else {
            animations.push([k, auxArr[j], false]);
            arr[k++] = auxArr[j++];
        }
    }
    while (i <= middle) {
        animations.push([i, i, true]);
        animations.push([i, i, true]);
        animations.push([k, auxArr[i], false]);
        arr[k++] = auxArr[i++];
    }
    while (j <= end) {
        animations.push([j, j, true]);
        animations.push([j, j, true]);
        animations.push([k, auxArr[j], false]);
        arr[k++] = auxArr[j++];
    }
};

export {mergeSortAnimations};
