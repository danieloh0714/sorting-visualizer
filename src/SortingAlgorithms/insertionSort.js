const insertionSortAnimations = (arr, arrBars, arrColour, animColour) => {
    const animations = [];
    insertionSort(arr, animations);

    for (let i = 0; i < animations.length; i++) {
        if (animations[i][0] === 'move') {
            setTimeout(() => {
                const [_, barOneIdx, newHeightOne, barTwoIdx, newHeightTwo] = animations[i];
                const barOneStyle = arrBars[barOneIdx].style;
                barOneStyle.height = `${newHeightOne}px`;
                const barTwoStyle = arrBars[barTwoIdx].style;
                barTwoStyle.height = `${newHeightTwo}px`;
                barOneStyle.backgroundColor = 'olive';
                barTwoStyle.backgroundColor = 'pink';
            }, i * 300);
        }
        else {
            const [toColour, barIdx] = animations[i];
            const barStyle = arrBars[barIdx].style;
            const colour = toColour === 'colour' ? 'pink' : 'olive';
            setTimeout(() => {
                barStyle.backgroundColor = colour;
            }, i * 300);
        }
    }
};

const insertionSort = (arr, animations) => {
    for (let i = 1; i < arr.length; i++) {
        let j = i;
        animations.push(['colour', j]);
        while (j > 0) {
            if (arr[j] < arr[j - 1]) {
                animations.push(['move', j, arr[j - 1], j - 1, arr[j]]);
                let temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
                j--;
            }
            else {
                break;
            }
        }
        animations.push(['uncolour', j]);
    }
};

export {insertionSortAnimations};
