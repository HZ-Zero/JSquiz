function removeDup(arr){
    var result = [];
    var hashMap = {};
    for(var i = 0; i < arr.length; i++){
        var temp = arr[i]
        if(!hashMap[temp]){
            hashMap[temp] = true
            result.push(temp)
        }
    }
    return result;
}

Array.from(new Set(arr))

let a = [...new Set(arr)]
