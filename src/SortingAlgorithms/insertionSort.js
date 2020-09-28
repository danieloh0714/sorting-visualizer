import {arrColour, animColour, sortedColour} from '../utils/utils';


const sortSpeed = 175;

const insertionSortAnimations = (arr, arrBars, setIsSorting) => {
    const animations = [];
    insertionSort(arr, animations);

    arrBars[0].style.backgroundColor = sortedColour;

    for (let i = 0; i < animations.length; i++) {
        const animation = animations[i];
        const action = animation[0];

        if (action === 'move') {
            setTimeout(() => {
                const [_, barOneIdx, newHeightOne, barTwoIdx, newHeightTwo] = animation;
                const barOne = arrBars[barOneIdx].style;
                const barTwo = arrBars[barTwoIdx].style;
                barOne.height = `${newHeightOne}px`;
                barTwo.height = `${newHeightTwo}px`;
                const temp = barOne.backgroundColor;
                barOne.backgroundColor = barTwo.backgroundColor;
                barTwo.backgroundColor = temp;
            }, i * sortSpeed);
        }
        else if (action === 'colour') {
            setTimeout(() => {
                const [_, toColour, barIdx] = animation;
                const colour = toColour ? animColour : sortedColour;
                arrBars[barIdx].style.backgroundColor = colour;
            }, i * sortSpeed);
        }
    }

    setTimeout(() => {
        for (let i = 0; i < arrBars.length; i++) {
            arrBars[i].style.backgroundColor = arrColour;
        }
        setIsSorting(false);
    }, (animations.length + 7) * sortSpeed);
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
