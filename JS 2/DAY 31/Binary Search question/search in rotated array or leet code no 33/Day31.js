// search in rotaed in array using binary search

var sorted =function(arr,target){
    let s=0
    let e=arr.length-1
    while(s<=e){
        let mid=Math.floor((s+e)/2)
        if(arr[mid]==target){
            return mid
        }
        else if(arr[s]<arr[mid]){
            if(target>=arr[s] && target<=arr[mid-1]){
                e=mid-1
            }
            else{
                s=mid+1
            }
        }
        else{
            if(target>=arr[mid+1] && target<=arr[e]){
                s=mid+1
            }
            else{
                e=mid-1
            }
        }
    }
return -1
}
console.log(sorted([4,5,6,8,22,99,100,0,3],3))