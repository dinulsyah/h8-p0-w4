function cariModus(arr){
    var nilai = 0
    var modus = []
    var object = {}
    for(var i=0 ; i < arr.length ; i++){
        if(object[arr[i]] === undefined){
            object[arr[i]] = 1
        }
        else{
            object[arr[i]] += 1
        }
        if(object[arr[i]] > nilai){
            nilai = object[arr[i]]
        }
    }
    var keys = Object.keys(object)
    for(var j = 0 ; j < keys.length ; j++){
        if(object[keys[j]] === nilai){
            modus.push(Number(keys[j]))
        }
    }
    if(keys.length === 1 || modus.length > 1 && nilai === 1){
        return -1
    }
    else if(modus.length === 1){
        return modus[0]
    }
    for(var k = 0 ; k < arr.length ; k++){
        for( var l = 0 ; l < modus.length ; l++){
            if(arr[k]===modus[l]){
                return arr[k]
            }
        }
    }
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1