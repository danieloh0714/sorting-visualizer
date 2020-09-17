const bubbleSortAnimations = (arr, arrBars, arrColour, animColour) => {
    const animations = [];
    bubbleSort(arr, animations);

    for (let i = 0; i < animations.length; i++) {
        if (animations[i][2]) {
            const [barOneIdx, barTwoIdx,_ , toColour] = animations[i];
            const barOneStyle = arrBars[barOneIdx].style;
            const barTwoStyle = arrBars[barTwoIdx].style;
            const colour = toColour == 'colour' ? 'pink' : 'olive';
            setTimeout(() => {
                barOneStyle.backgroundColor = colour;
                barTwoStyle.backgroundColor = colour;
            }, i * 50);
        }
        else {
            setTimeout(() => {
                const [barOneIdx, newHeightOne, _, barTwoIdx, newHeightTwo] = animations[i];
                const barOneStyle = arrBars[barOneIdx].style;
                barOneStyle.height = `${newHeightOne}px`;
                const barTwoStyle = arrBars[barTwoIdx].style;
                barTwoStyle.height = `${newHeightTwo}px`;
            }, i * 50);
        }
    }
};

const bubbleSort = (arr, animations) => {
    let isOrdered = false;

    while (!isOrdered) {
        isOrdered = true;

        for (let i = 0; i < arr.length - 1; i++) {
            animations.push([i, i + 1, true, 'colour']);
            animations.push([i, i + 1, true, 'uncolour']);
            if (arr[i + 1] < arr[i]) {
                animations.push([i, arr[i + 1], false, i + 1, arr[i]]);
                const temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                isOrdered = false;
            }
        }
    }
};

export {bubbleSortAnimations};
