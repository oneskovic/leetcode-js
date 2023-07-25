/**
 * @param {number[]} nums
 * @return {number}
 */
const reversePairs = function(nums) {
    return mergeSort(nums, [], 0, nums.length-1);
};

function mergeSort(arr, temp, left, right){
    let mid = Math.floor((left+right)/2), count = 0;
    if(left<right){
        count+= mergeSort(arr, temp, left, mid);
        count+= mergeSort(arr, temp, mid+1, right);
        count+= merge(arr, temp, left, mid+1, right);
    }
    return count;
}

function merge(a, temp, left, mid, right){
    let i = left, j = mid, k = left, count=0;
    for(let y=left; y<mid; y++){
        while(j<=right && (a[y]>2*a[j])){
            j++;
        }
        count+= (j-(mid));
    }
    i=left;
    j=mid;
    while(i<=(mid-1) && j<=right){
        if (a[i]>(a[j])) {
            temp[k++] = a[j++];
        } else {
            temp[k++] = a[i++];
        }
    }
    while(i<=(mid-1)){
        temp[k++] = a[i++];
    }
    while(j<=right){
        temp[k++] = a[j++];
    }
    for(let x=left; x<=right; x++){
        a[x] = temp[x];
    }
    return count;
}

