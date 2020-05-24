let n= readInt();
let m= readInt();
let str=read_line();
let a=str.split(" ");
let count=0;
let sum=0;
for (let i=0;i<a.length;i++){
    a[i]=Number(a[i]);
    sum +=a[i];
}
function swap(arr, i, j) {
    let flag = arr[i];
    arr[i] = arr[j];
    arr[j] = flag;
}
function dividearr(arr, left, right) {
    const x = arr[right - 1];
    let i = left - 1;
    for (let j = left; j < right - 1; j++) {
        if (arr[j] <= x) {
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i + 1, right - 1);
    return i + 1;
}
function quicksort(arr, left, right) {
    if (left < right - 1) {
        const q = dividearr(arr, left, right);
        quicksort(arr, left, q);
        quicksort(arr, q + 1, right);
    }
    return arr;
}
a=quicksort(a,0,a.length)
print(a)
print(sum)
let times=Math.floor(x/sum);
x=x-times*sum;
while(x>a[0]){
    for(let j=0;i<a.length;j++){
        if (a[j]<x){
            x=x-a[j];
            count++;
        }
    }
}
//print(b)
print(times*a.length+count);
print(typeof a[0])