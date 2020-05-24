let n=readInt();
let a=read_line();
a=a.split(" ");
let flagmax=[];
let flagmin=[]
for (let i=0;i<a.length;i++){
    a[i]=Number(a[i]);
    flagmax.push(new Array(a.length))
    flagmin.push(new Array(a.length))
}
function swap(arr, i, j) {
    let flag = arr[i];
    arr[i] = arr[j];
    arr[j] = flag;
}
function computeflag(a,left,right){
    let maxvalue=a[left];
    let minvalue=a[left];
    let i=left;
    while(i<right){
        if(a[i]>maxvalue){
            maxvalue=a[i]
        }
        if (a[i]<minvalue){
            minvalue=a[i]
        }
        i++;
    }
    return [minvalue,maxvalue]
}
flag[0][0]
print(a)
print(flag.length)
print(flag[0].length)
print(1^3)
let b =