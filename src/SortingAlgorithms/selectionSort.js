const selectionSortAnimations = (arr, arrBars, arrColour, animColour) => {
    const animations = [];
    selectionSort(arr, animations);

    for (let i = 0; i < animations.length; i++) {
        if (animations[i][2]) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrBars[barOneIdx].style;
            const barTwoStyle = arrBars[barTwoIdx].style;
            const colour = i % 4 == 0 ? 'pink' : 'olive';
            setTimeout(() => {
                barOneStyle.backgroundColor = colour;
                barTwoStyle.backgroundColor = colour;
            }, i * 50);
        }
        else {
            setTimeout(() => {
                const [barOneIdx, newHeight] = animations[i];
                const barOneStyle = arrBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
            }, i * 50);
        }
    }
};

const selectionSort = (arr, animations) => {
    for (let i = 0; i < arr.length; i++) {
        let minIdx = i;
        
        for (let j = i + 1; j < arr.length; j++) {
            animations.push([i, j, true]);
            animations.push([i, j, true]);
            if (arr[j] < arr[minIdx]) minIdx = j;
        }
        
        animations.push([i, arr[minIdx], false]);
        animations.push([minIdx, arr[i], false]);
        const temp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = temp;
    }
};

export {selectionSortAnimations};
