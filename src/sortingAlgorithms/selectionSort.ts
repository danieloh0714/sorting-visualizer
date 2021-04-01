import { animColour, arrColour, sortedColour } from '../utils/utils';

const rootColour = 'brown';
const minIdxColour = 'gold';

const selectionSortAnimations = (arr: Array<number>, arrBars: any, setIsSorting: any, speeds: Array<number>) => {
    const sortSpeed = speeds[0];
    const animations: Array<any> = [];
    selectionSort(arr, animations);

    for (let i = 0; i < animations.length; i++) {
        const animation = animations[i];
        const action = animation[0];

        if (action === 'root') {
            setTimeout(() => {
                const toColour = animation[1];
                const bar = arrBars[animation[2]].style;
                bar.backgroundColor = toColour ? rootColour : sortedColour;
            }, i * sortSpeed);
        }
        else if (action === 'compare') {
            setTimeout(() => {
                const toColour = animation[1];
                const bar = arrBars[animation[2]].style;
                const colour = toColour ? animColour : arrColour;
                bar.backgroundColor = colour;
            }, i * sortSpeed);
        }
        else if (action === 'swap') {
            setTimeout(() => {
                const barOne = arrBars[animation[1]].style;
                const newHeightOne = animation[2];
                const barTwo = arrBars[animation[3]].style;
                const newHeightTwo = animation[4];
                barOne.height = `${newHeightOne}px`;
                barOne.backgroundColor = arrColour;
                barTwo.height = `${newHeightTwo}px`;
                barTwo.backgroundColor = arrColour;
            }, i * sortSpeed);
        }
        else if (action === 'newMinIdx') {
            setTimeout(() => {
                const rootBar = arrBars[animation[1]].style;
                const oldMinIdxBar = arrBars[animation[2]].style;
                const newMinIdxBar = arrBars[animation[3]].style;
                oldMinIdxBar.backgroundColor = arrColour;
                newMinIdxBar.backgroundColor = minIdxColour;
                rootBar.backgroundColor = rootColour;
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

const selectionSort = (arr: Array<number>, animations: Array<any>) => {
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

export { selectionSortAnimations };
