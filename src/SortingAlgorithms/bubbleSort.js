import {arrColour, animColour} from '../utils/utils';


const sortSpeed = 200;

const bubbleSortAnimations = (arr, arrBars) => {
    const animations = [];
    bubbleSort(arr, animations);

    for (let i = 0; i < animations.length; i++) {
        const animation = animations[i];
        const action = animation[0];

        if (action === 'colour') {
            setTimeout(() => {
                const [_, toColour, barOneIdx, barTwoIdx] = animation;
                const colour = toColour ? animColour : arrColour;
                arrBars[barOneIdx].style.backgroundColor = colour;
                arrBars[barTwoIdx].style.backgroundColor = colour;
            }, i * sortSpeed);
        }
        else if (action === 'swap') {
            setTimeout(() => {
                const [_, barOneIdx, newHeightOne, barTwoIdx, newHeightTwo] = animation;
                arrBars[barOneIdx].style.height = `${newHeightOne}px`;
                arrBars[barTwoIdx].style.height = `${newHeightTwo}px`;
            }, i * sortSpeed);
        }
    }
};

const bubbleSort = (arr, animations) => {
    let isSorted = false;

    while (!isSorted) {
        isSorted = true;

        for (let i = 0; i < arr.length - 1; i++) {
            animations.push(['colour', true, i, i + 1]);

            if (arr[i + 1] < arr[i]) {
                animations.push(['swap', i, arr[i + 1], i + 1, arr[i]]);
                const temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;

                isSorted = false;
            }

            animations.push(['colour', false, i, i + 1]);
        }
    }
};

export {bubbleSortAnimations};
