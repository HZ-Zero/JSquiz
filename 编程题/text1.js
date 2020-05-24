const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var inputArr = [];
var numP=[]
var numT=[]
var MOD=1000000007;
var sum2=0;
rl.on('line', (input) => {
    inputArr[0]= input;

    rl.close();
});

// let i=readInt()
// let a=[];
// while(i>0){
//     a.push(read_line())
//     i--;
// }
// console.log(a)