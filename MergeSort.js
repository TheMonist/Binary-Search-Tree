const mergeSort = (arr) => {
    //Base Case
    if (arr.length === 1) return arr;

    //To determine midpoint
    const midpoint = Math.floor(arr.length/2);

    //To determine left
    const left = mergeSort(arr.slice(0, midpoint));

    //To determine right
    const right = mergeSort(arr.slice(midpoint, arr.length));

    //Merge the sorted halfs
    merge(left, right); 
}

const merge = (left, right) => {
    //Empty array to store values
    const result = [];

    //Loop to store values
    while (left.length > 0 && right.length > 0) {
        if (left[0] < right [0]) {
            result.push(left[0]);
            left.shift();
        } else {
            result.push(right[0]);
            right.shift();
        }
    } 

    while (left.length > 0) {
        result.push(left[0]);
        left.shift();
    }

    while (right.length > 0) {
        result.push(right[0]);
        right.shift();
    }

    return result;
}

export default mergeSort;