
// let i ='a' in ['a','2'];
// console.log(i)
//
// function  Node(val,next) {
//     this.val=val
//     this.next=next
// }
// function solution(arr) {
//     if (arr.length!=0) {
//         let root=new Node(null,null)
//         let node=new Node(arr[0],null)
//         root.next=node
//         for (let i=1;i<arr.length;i++){
//             node.next=new Node(arr[i],null)
//             node=node.next
//         }
//         return root;
//
//     }
//     else {
//         return null;
//     }
// }
//
// let arr=[1,2,3,4,5,6]
// let res=solution(arr)
// for(let i=0;i<10;i++){
//     console.log(res.val)
//     res=res.next
// }
// while(res.next!=null){
//     console.log(res.val)
//     res=res.next
// }



// class Person{
//     constructor(name){
//         this.name = name;
//     }
//     showName(){
//         return this.name;
//     }
// }
// class SubPerson extends Person{
//     constructor(name,job){
//         super(name);    // 指向父类的构造函数
//         this.job = job;
//     }
//     showJob(){
//         return this.job;
//     }
// }
// var p1 = new SubPerson('苏日俪格','前端开发');
// console.log(p1.name);  // 苏日俪格
// console.log(p1.showName());  // 苏日俪格
// console.log(p1.job); // 前端开发

// let a = new Array(6)
// console.log(0==undefined)
// console.log(0===undefined)



// var str = readline();
// var n = parseInt(readline());
// var arr=str.split("");
// while(n>0){
//     var lines = readline().split(" ");
//     lines[0]=parseInt(lines[0])
//     lines[1]=parseInt(lines[1])
//     for(var i = 0;i<lines[1];i++){
//         arr.push(arr[lines[1]+lines[0]-1-i]);
//     }
//     n--;
// }
// var str="";
// arr.map((item,key)=>{
//     str=str+item;
// })
// print(str)


// var str = readline();
// var n = Number(readline());
// var arr=str.split("");
// while(n>0){
//     var indexs = readline().split(" ");
//     indexs[0]=Number(indexs[0])
//     indexs[1]=Number(indexs[1])
//     for(let i = indexs[1]-1;i>indexs[0];i++){
//         arr.push(arr[i]);
//     }
//     n--;
// }


// var line = readline();
//
// var n = readline();
//
// for(var i=0;i<n;i++){
//
//     var line2 = readline().split(' ');
//
//     var start = parseInt(line2[0]);
//
//     var len = parseInt(line2[1]);
//
//     var temp = line.substr(start,len).split('').reverse().join('');
//
//     line = line.slice(0,start+len) + temp + line.slice(start+len);
//
// }
//
// print(line);
// a="1245132213".split("")
// a.map((item,key)=>{
//     a[key]=parseInt(a[key])
// })
// console.log(a)
// console.log(typeof a[0])
// let a=[6,5,1]
// let index =0
// let num=0;
// while(true){
//     if(a[index]==0){
//         break;
//     }
//     a[index--]--;
//     num++;
//     if(index<0){
//         index=a.length-1;
//     }
// }
// console.log(a)

// var line = readline();
// var a = readline().split(" ");
// a.map((item,key)=>{
//     a[key]=parseInt(a[key])
// })
// let index=parseInt(line.split(" ")[1]);
// index=index-1;
// let num=0;
// while(true){
//     if(a[index]==0){
//         break;
//     }
//     a[index--]--;
//     num++;
//     if(index<0){
//         index=a.length-1;
//     }
// }
// a[index]=num;
// print(a.join(" "))


// function Person() {
//     this.name = 'NAME'
//     this.Date = new Date()
// }
//
// const per = new Person()
// console.log(per)

let a = 0

