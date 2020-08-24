var line=readline().split(' ')
let end = Number(line[0])
let k = Number(line[1])
// let end = 3
// let k = 1
let left = 0
let right = end
let mid = 0
let sum = 0
while(left<right){
    if (k == 0) {
        mid = Math.round((left+right)/2)
        sum = sum + mid
        left = mid + 1
    } else {
        k--
        mid = Math.round((left+right)/2)
        left = mid + 1
    }
    // console.log(mid)
}
console.log(sum)
