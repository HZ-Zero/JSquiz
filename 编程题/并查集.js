// 初始化 每个节点自身属于自己arr 每个集合只有1个自己节点 sum
let arr = []
let sum = []
// 初始化数组
function gener(n) {
    for(let i = 0;i < n;i++){
        arr.push(i)
        sum.push(1)
    }
}
// 找到根节点
function find(i) {
    if (arr[i] === i){
        return i
    }
    else {
        return find(arr[i])
    }

}
// 如果根节点不一致就合并
function merge(i,j) {
    let n1 = find(i)
    let n2 = find(j)
    if (n1 != n2){
        sum[n1] = sum[n1] + sum[n2]
        arr[i] = n1
        arr[j] = n1
    }
}

gener(10)

// 统计每个节点的孩子 遍历 找到根节点push到map中，存在就增加对应的arr，不存在就增加 key-arr，
