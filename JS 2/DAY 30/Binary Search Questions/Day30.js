// find last occurance using Binary search
function lastOccurrence(arr, x) {

    let s = 0;
    let e = arr.length - 1;
    let ans = -1;

    while (s <= e) {
        let mid = Math.floor((s + e) / 2);
        if (arr[mid] == x) {
            ans = mid;
            s = mid + 1;
        } else if (arr[mid] < x) {
            s = mid + 1;
        } else {

            e = mid - 1;
        }
    }

    return ans;
}

console.log(
    lastOccurrence([1, 2, 4, 4, 4, 5, 6, 6, 6, 8], 6)
);


