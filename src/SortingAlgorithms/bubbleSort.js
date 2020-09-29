import {arrColour, animColour, sortedColour} from '../utils/utils';


const bubbleSortAnimations = (arr, arrBars, setIsSorting, speeds) => {
    const sortSpeed = speeds[0];

    const animations = [];
    bubbleSort(arr, animations);

    for (let i = 0; i < animations.length; i++) {
        const animation = animations[i];
        const action = animation[0];

        if (action === 'colour') {
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
                const newHeightOne = animation[2];
                const barTwo = arrBars[animation[3]].style;
                const newHeightTwo = animation[4];
                barOne.height = `${newHeightOne}px`;
                barTwo.height = `${newHeightTwo}px`;
            }, i * sortSpeed);
        }
        else if (action === 'sorted') {
            setTimeout(() => {
                const bar = arrBars[animation[1]].style;
                bar.backgroundColor = sortedColour;
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

const bubbleSort = (arr, animations) => {
    let isSorted = false;

    for (let i = 0; i < arr.length; i++) {
        isSorted = true;

        let j;
        for (j = 0; j < arr.length - i - 1; j++) {
            animations.push(['colour', true, j, j + 1]);

            if (arr[j + 1] < arr[j]) {
                animations.push(['swap', j, arr[j + 1], j + 1, arr[j]]);
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

                isSorted = false;
            }

            animations.push(['colour', false, j, j + 1]);
        }

        animations.push(['sorted', j]);

        if (isSorted) break;
    }
};

export {bubbleSortAnimations};
