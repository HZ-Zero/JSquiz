// var num = parseInt(readline());
// var arr = readline().split(" ");
// for(let i =0 ;i<arr.length;i++){
//     arr[i]=parseInt(arr[i])
// }
var arr = [3,5,13,9,12]
var arr2=[]
var count=0
arr2.push(12)
for(let i =arr.length-2;i>0;i--){
    if (arr[i]<arr[i+1]){
        arr2.push(arr[i])
        continue
    }
    else {
        var flag=2
        if (i>0){
            while(arr[i]/flag>(arr[i+1]+arr[i-1])){
                flag++;
            }
            if(flag*a[i-1]<a[i]){
                count=count+flag-1;
            }
        }
        else {
            while(arr[i]/flag>arr[i+1]){
                flag++;
            }
            count=count+flag-1;
        }
    }
}
console.log(count)
Math.floor()