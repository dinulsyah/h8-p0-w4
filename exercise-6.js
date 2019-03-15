function digitPerkalianMinimum(angka) {
    // you can only write your code here! 
    var flag = false
    for(var div = 1 ; div <= angka ; div++){
        var temp = ''
        if(angka % div === 0){
            temp += angka/div 
            temp += div
            if(!flag){
                var min = temp.length
                flag = true
            }
            if(temp.length < min){
                min = temp.length
            }
        }
    }
    return min
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2   