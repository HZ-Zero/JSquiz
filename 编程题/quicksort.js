function swap(arr,i,j) {
    const temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
}
function didvidearr(arr,left,right) {
    const piv=arr[right-1];
    let i=left-1;
    for (let j=left;j<right-1;j++){
        if (arr[j]<=piv){
            i++;
            swap(arr,i,j);
        }
    }
    swap(arr,i+1,right-1);
    return i+1;
}
function quicksort(arr,left,right) {
    if (left<right-1){
        let len=didvidearr(arr,left,right);
        quicksort(arr,left,len);
        quicksort(arr,len+1,right);
    }
    return a;
}
let a=[3,54,4,46,234,12,52,2134,53421,2,34,6,21];
let b=quicksort(a,0,a.length)
console.log(b)