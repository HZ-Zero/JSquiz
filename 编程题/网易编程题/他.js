// var n=readline();
// if(n!=0)
// var str=readline();
// n=parseInt(n);
// var a=str.split(" ");
var a=[1,3,7,15]
var b=[];

function solution(a,b){

    for (let i=0;i<a.length;i++){
        a[i]=Number(a[i]);
    }
    for (let i=1;i<a.length;i++){
        b.push(a[i]-a[i-1])
        if (a[i]-a[i-1<0){
            print(-1);
            return ;
        }
    }
    let flag=b[0];
    while(flag>0){
        let i=0;
        while(i<b.length && b[i]%flag==0){
            i++;
        }
        if(i==b.length){
            break;
        }
        else
            flag--;
    }
}
solution(a,b)
console.log(flag)
if (flag==0)
    print(-1)
else
    print(flag)

// function solution() {
//
// }