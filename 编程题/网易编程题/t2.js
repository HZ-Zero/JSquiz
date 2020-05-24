var n=readline();
var str=n.split("");
var two=[];
var five=[];
var twoindex=[];
var fiveindex=[];
var count1=0;
var count2=0
function solution(str) {
    var sum=0;
    for(let i=0;i<str.length;i++){
        if(str[i]=='2'){
            count1++;
            twoindex.push(i)
        }
        two.push(count1)
        if (str[i]=='5'){
            count2++;
            fiveindex.push(i)
            five.push(count2)
        }
    }
    // 找到5 该坐标左有几个2，然后第二个5右有几个2？
    for (let i = 0 ;i<fiveindex.length-1;i++) {
        let index1=fiveindex[i];
        let count1=two[index1];
        for (let z = i ;z<fiveindex.length-1;z++) {
            let j=z;
            while(fiveindex[j]-index1<=1){
                j++;
            }
            if(j<fiveindex.length)
                var index2=fiveindex[j];
            else break;
            // let index2=fiveindex[i+1];
            let count2=two[index2]-two[index1];
            let count3=two[str.length-1]-two[index2];
            sum = (sum + count1*count2*count3)%1000000007;
        }

    }
    print(sum)
}
solution(str)