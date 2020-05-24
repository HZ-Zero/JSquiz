var num = parseInt(readline());
var arr1 = readline().split(" ");
var arr2 = readline().split(" ");
for(let i =0 ;i<arr1.length;i++){
    arr1[i]=parseInt(arr1[i])
}
for(let i =0 ;i<arr2.length;i++){
    arr2[i]=parseInt(arr2[i])
}
function com(a,b){
    return a-b;
}
arr1=arr1.sort(com)
arr2=arr2.sort(com)
var flag=0;
var count=0;
var sum =0 ;
for (let i =0;i<arr2.length;i++){
    while (count < arr1.length &&　arr1[count]<=arr2[i]){
        count++;
    }
    if (count==arr1.length){
        if(arr2[i]-arr1[count-1]>=0){
            sum=sum+arr2[i]-arr1[count-1]
        }
        else
            sum=sum+arr2[i]-arr1[count-2]
    }
    else{
        if(count>0){
            sum=sum+arr2[i]-arr1[count-1]
        }
        else {
            sum=sum+arr2[i];
        }
    }
}
print(sum)
// console.log(49+99+100)