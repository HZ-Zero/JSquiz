// \d+匹配多个数字
let str="asdhjklglskdfj 112 asd jlkasj ";
let reg=/\d+/
console.log(reg.test(str))//验证
str="2019-08-23";
console.log(reg.exec(str))//捕获符合正则的数据 返回值为数组第一个符合要求的字符串
//创建方式
// let reg=/\d+/ ;//通过//将规则包裹
// let reg2=new RegExp("\d+");// 构造函数创建 参数为元字符串和修饰符字符串


console.log(/3$/.test(str))
// 验证手机号
let re=/^1\d{10}$/
//验证邮箱
let re2=/^\w+(\.\w+)*@[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*\.[a-z]+$/;
// 必须以\w开头 中间匹配.开头多个字符串 然后匹配@ 然后匹配多个@后面的字母或数字 然后匹配以.开头的域名最后只可匹配.字母的域名
//匹配有效数字
let reg=/^[+-]?(\d|([1-9]\d+))(\.\d+)?$/