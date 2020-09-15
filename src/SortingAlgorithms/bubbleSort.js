export function getBubbleSort(arr) {
    const animations = [];
    bubbleSort(arr, animations);
    // return animations;
    return arr;
}

function bubbleSort(arr, animations) {
    let isOrdered = false;

    while (!isOrdered) {
        isOrdered = true;

        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i + 1] < arr[i]) {
                const temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                isOrdered = false;
            }
        }
    }

    return arr;
}
