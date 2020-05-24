console.log('Hello World!');

//
arr=[1,2,3,4,5,6,7,8,9,10]
function swap(arr,i,j){
    const temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
}

function solution(arr){
    for(let i=0;i<arr.length;i++){
        swap(arr,i,Math.floor(Math.random()*arr.length));
    }
    return arr;
}

arr=solution(arr);
console.log(arr);