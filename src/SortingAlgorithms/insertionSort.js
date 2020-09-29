import {arrColour, animColour, sortedColour} from '../utils/utils';


const insertionSortAnimations = (arr, arrBars, setIsSorting, speeds) => {
    const sortSpeed = speeds[0];
    const animations = [];
    insertionSort(arr, animations);

    arrBars[0].style.backgroundColor = sortedColour;

    for (let i = 0; i < animations.length; i++) {
        const animation = animations[i];
        const action = animation[0];

        if (action === 'move') {
            setTimeout(() => {
                const barOne = arrBars[animation[1]].style;
                const newHeightOne = animation[2];
                const barTwo = arrBars[animation[3]].style;
                const newHeightTwo = animation[4];
                barOne.height = `${newHeightOne}px`;
                barTwo.height = `${newHeightTwo}px`;
                const temp = barOne.backgroundColor;
                barOne.backgroundColor = barTwo.backgroundColor;
                barTwo.backgroundColor = temp;
            }, i * sortSpeed);
        }
        else if (action === 'colour') {
            setTimeout(() => {
                const toColour = animation[1];
                const bar = arrBars[animation[2]].style;
                const colour = toColour ? animColour : sortedColour;
                bar.backgroundColor = colour;
            }, i * sortSpeed);
        }
    }

    setTimeout(() => {
        for (let i = 0; i < arrBars.length; i++) {
            arrBars[i].style.backgroundColor = arrColour;
        }
        setIsSorting(false);
    }, (animations.length + speeds[2]) * sortSpeed);
};

const insertionSort = (arr, animations) => {
    for (let i = 1; i < arr.length; i++) {
        let j = i;
        animations.push(['colour', true, j]);

        while (j > 0) {
            if (arr[j] < arr[j - 1]) {
                animations.push(['move', j, arr[j - 1], j - 1, arr[j]]);
                const temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
                j--;
            }
            else {
                break;
            }
        }
        
        animations.push(['colour', false, j]);
    }
};

export {insertionSortAnimations};
