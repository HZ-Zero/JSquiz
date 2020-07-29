// arr.reduce(callback(accumulator, currentValue[,index[,array]])[, initialValue])
// reduce 调用方式
// Accumulator（累加器）——累加器累加回调函数的返回值。
// Current Value（当前值）——处理数组的当前元素。
// Current Index（当前索引）——处理数组当前元素的索引。
// Source Array（源数组）

const numbersArr = [67, 90, 100, 37, 60];

let total = numbersArr.reduce((accumulator, currentValue)=>{
    console.log("accumulator is " + accumulator + " current value is " + currentValue);
    return accumulator + currentValue;
}, 0);

console.log("total : "+ total);

const studentResult = [
    { subject: '数学', marks: 78 },
    { subject: '物理', marks: 80 },
    { subject: '化学', marks: 93 }
];

total = studentResult.reduce((accumulator, currentValue) => accumulator + currentValue.marks, 0);

console.log(total); // 251

const duplicatedsArr = [1, 5, 6, 5, 7, 1, 6, 8, 9, 7];

const result = [
    {subject: '物理', marks: 41},
    {subject: '化学', marks: 59},
    {subject: '高等数学', marks: 36},
    {subject: '应用数学', marks: 90},
    {subject: '英语', marks: 64},
];

let initialValue = {
    pass: [],
    fail: []
}

