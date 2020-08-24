function generArr(n,w) { // 物品总数 总价值
    let arr = []
    for (let i = 0;i <= n; i++){
        arr.push(new Array(w+1).fill(0))
    }
    return arr
}

function getMaxVal(arr,weight,value,n,w){
    let res = 0
    for(let i = 1;i <= n ; i++ ){
        for (let j = 1;j <= w;j++){
            if (weight[i] > j){
                arr[i][j] = arr[i-1][j] // 如果第i个物品重量大于了j 无法放入
            } else {
                arr[i][j] = Math.max(arr[i-1][j],arr[i-1][j-weight[i]] + value[i])
            }
            res = Math.max(res,arr[i][j])

        }
    }
    return res
}

let arr = generArr(3,4) // 前 n 件物品放入容量为 w 的背包中可以获得的最大价值。
let weight = [0,3,2,2]
let value = [0,18,10,10]
let res =getMaxVal(arr,weight,value,3,4)
console.log(res)
