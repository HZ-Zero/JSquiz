let n= readInt();
let x= readInt();
let str=read_line();
let a=str.split(" ");
let count=0;
a.map((item,index)=>{
    return Number(item);
});
print(a)
function solution(a) {
    let left=0;
    let right=a.length-1;
    a.sort;
    while(a[right]-a[left]>x){
        if(a[right]-a[right-1]>a[left+1]-a[left]){
            right--;
            count++;
        }
        else
        {
            count++;
            left++;
        }
    }
}
function f() {
    
}
solution(a);
print()
a.sort()