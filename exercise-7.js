function urutkanAbjad(str) {
    // you can only write your code here!
    array = []
    for(var i = 0 ; i < str.length ; i++){
        array.push(str[i])
    }
    for(var loop = 0 ; loop < array.length-1 ; loop++){
        for(var j = 0 ; j < array.length-1 ; j++){
            if(array[j] > array[j+1]){
                var swap = array[j]
                array[j] = array[j+1]
                array[j+1] = swap
            }
        }
    }
    result = ''
    for(var k = 0 ; k < str.length ; k++){
        result += array[k]
    }
    return result
  }
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'