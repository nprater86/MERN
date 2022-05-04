let array1 = [4,8,5,7,1,6,10,2,3,9]
let array2 = [10,4,8,1,3,9]
let array3 = [11,34,12,56,876,39,90,87,33,1]
let array4 = [8,4]

function partition(arr,left,right){
    let pivot = arr[Math.floor(Math.random()*(right-left))+left];
    while (left < right){
        while (arr[left] < pivot){
            left++;
        }
        while (arr[right] > pivot){
            right--;
        }
        [arr[left],arr[right]] = [arr[right],arr[left]];
    }
    return right;
}

function quickSort(arr, left=0, right=arr.length-1){
    let pivotIndex = partition(arr,left,right);

    if (left < pivotIndex - 1){
        quickSort(arr, left, pivotIndex-1);
    }

    if (right > pivotIndex + 1){
        quickSort(arr, pivotIndex + 1, right);
    }

    return arr;
}

console.log(quickSort(array1));
console.log(quickSort(array2));
console.log(quickSort(array3));
console.log(quickSort(array4));
