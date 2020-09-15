export function getBubbleSort(arr) {
    const animations = [];
    bubbleSort(arr, animations);
    return animations;
}

function bubbleSort(arr, animations) {
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
}
