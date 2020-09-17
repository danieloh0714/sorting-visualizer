const insertionSortAnimations = (arr, arrBars) => {
    const animations = [];
    insertionSort(arr, animations);

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

const insertionSort = (arr, animations) => {
    for (let i = 1; i < arr.length; i++) {
        animations.push([i, i, true, 'colour']);
        let j = i;
        while (j > 0) {
            if (arr[j] < arr[j - 1]) {
                animations.push([j, arr[j - 1], false]);
                animations.push([j - 1, arr[j], false]);
                let temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
                j--;
            }
            else {
                break;
            }
        }
        animations.push([i, i, true, 'uncolour']);
    }
};

export {insertionSortAnimations};
