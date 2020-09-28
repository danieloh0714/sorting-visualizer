import {arrColour, animColour} from '../utils/utils';


const rootColour = 'orange';
const minIdxColour = 'navy';
const sortSpeed = 150;

const selectionSortAnimations = (arr, arrBars) => {
    const animations = [];
    selectionSort(arr, animations);

    for (let i = 0; i < animations.length; i++) {
        const animation = animations[i];
        const action = animation[0];

        if (action === 'root') {
            setTimeout(() => {
                const [_, toColour, idx] = animation;
                arrBars[idx].style.backgroundColor = toColour ? rootColour : arrColour;
            }, i * sortSpeed);
        }
        else if (action === 'compare') {
            setTimeout(() => {
                const [_, toColour, idx] = animation;
                const barStyle = arrBars[idx].style;
                const colour = toColour ? animColour : arrColour;
                barStyle.backgroundColor = colour;
            }, i * sortSpeed);
        }
        else if (action === 'swap') {
            setTimeout(() => {
                const [_, barOneIdx, newHeightOne, barTwoIdx, newHeightTwo] = animation;
                const barOne = arrBars[barOneIdx].style;
                const barTwo = arrBars[barTwoIdx].style;
                barOne.height = `${newHeightOne}px`;
                barOne.backgroundColor = arrColour;
                barTwo.height = `${newHeightTwo}px`;
                barTwo.backgroundColor = arrColour;
            }, i * sortSpeed);
        }
        else if (action === 'newMinIdx') {
            setTimeout(() => {
                const [_, rootIdx, oldIdx, newIdx] = animation;
                arrBars[oldIdx].style.backgroundColor = arrColour;
                arrBars[newIdx].style.backgroundColor = minIdxColour;
                arrBars[rootIdx].style.backgroundColor = rootColour;
            }, i * sortSpeed);
        }
    }
};

const selectionSort = (arr, animations) => {
    for (let i = 0; i < arr.length; i++) {
        animations.push(['root', true, i]);

        let minIdx = i;
        
        for (let j = i + 1; j < arr.length; j++) {
            animations.push(['compare', true, j]);
            animations.push(['compare', false, j]);
            if (arr[j] < arr[minIdx]) {
                animations.push(['newMinIdx', i, minIdx, j]);
                minIdx = j;
            }
        }
        
        animations.push(['swap', i, arr[minIdx], minIdx, arr[i]]);
        const temp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = temp;

        animations.push(['root', false, i]);
    }
};

export {selectionSortAnimations};
