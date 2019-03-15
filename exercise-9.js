function checkAB(num) {
    // you can only write your code here!
    var indexA = []
    var indexB = []
    for(var i = 0 ; i < num.length ; i++){
        if(num[i] === 'a'){
            indexA.push(i)
        }
        else if(num[i] === 'b'){
            indexB.push(i)
        }
    }
    if(indexA.length === 0 || indexB.length === 0){
        return false
    }
    for(var j = 0 ; j < indexA.length ; j++){
        for( k = 0 ; k < indexB.length ; k++){
            if(Math.abs(indexA[j]-indexB[k]) === 4){
                return true
            }
        }
    }
    return false
  }
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false