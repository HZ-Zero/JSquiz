function swap(list,a,b) {
    let temp=list[a];
    list[a]=list[b];
    list[b]=temp;
}
// function sub_sort(a,sleft,sright) {
// //     let pri=a[sright-1]
// //     let i = sleft-1
// //     for(let j=sleft;j<sright-1;j++){
// //         if(a[j]<=pri){
// //             i++
// //             swap(a,i,j)
// //         }
// //     }
// //     swap(a,i+1,sright-1)
// //     return i+1
// // }
// // function quick_sort(a,left,right) {
// //     if (left < right-1){
// //         let res=sub_sort(a,left,right)
// //         quick_sort(a,left,res)
// //         quick_sort(a,res+1,right)
// //     }
// // }

function divarr(arr,left,right) {
    let i=left-1
    const piv = arr[right-1]
    for(let j=left;j<right-1;j++){
        if (arr[j]<=piv){
            i++
            swap(arr,i,j)
        }
    }
    swap(arr,i+1,right-1)

    return i+1
    
}


function quick_sort(arr,left,right) {
    if(left < right){
        let res = divarr(arr,left,right)
        quick_sort(arr,left,res)
        quick_sort(arr,res+1,right)
    }

}


var arr=[12,214,123,412,123,412,31,4,23]
quick_sort(arr,0,arr.length)
// sub_sort(arr,3,9)
console.log(arr)