export function getSelectionSort(arr) {
    const animations = [];
    selectionSort(arr, animations);
    return animations;
}

function selectionSort(arr, animations) {
    for (let i = 0; i < arr.length; i++) {
        let minIdx = i;
        
        for (let j = i + 1; j < arr.length; j++) {
            animations.push([i, j, true]);
            animations.push([i, j, true]);
            if (arr[j] < arr[minIdx]) minIdx = j;
        }
        
        animations.push([i, arr[minIdx], false]);
        animations.push([minIdx, arr[i], false]);
        const temp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = temp;
    }
}
