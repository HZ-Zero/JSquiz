// var n = readline();
// n = parseInt(n);
var len=0
var n =1
for (let i =0;i<n;i++){
    var num = 6
    // var num = parseInt(readline());
    // var a = readline().split(" ");
    // var b = readline().split(" ");
    var a=[3,7,1,4,1,2]
    var b=[3,7,3,6,3,2]
    var c = [];
    var flag=0;
    var count=0;

    for(var j=0;j<num;j++){
        c.push(b[j]-a[j]);
        var val=b[j]-a[j];
        console.log(b[j]-a[j])
        if(b[j]-a[j]<0){
            // print('NO')
            console.log('NO2')
            break
        }
        if(j>1 &&　c[j]!=c[j-1]){
            if(count>0 && c[j]!=0){
                // print('NO')
                console.log('N3')
                break
            }
            count++;
        }
    }
    if (j==num){
        // print('YES')
        console.log('YES')
    }
}
