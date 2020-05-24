str="abcabcabc";
str=str.split("");
k=2;
let sum=0;
function compute(str) {
    // let left=2*k+1;
    // let right=str.length-1;
    for (let i=0;i<str.length-2*k+1;i++){
        for (let j=i+2*k;j<right;j++){
            for (let len=k;len<(j-i)/2;len++){
                if(compare(str,i,j,len)){
                    sum++;
                    break;
                }
            }
        }
    }
}
function compare(str,left,right,len) {
    let count =0;
    while(count<len){
        if(str[left+count]==str[right-len+1+count]){
            count++;
        }
        else return false;

    }
    return true;
}
print(sum)