function tukarBesarKecil(kalimat) {
    // you can only write your code here
    var alphabet = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz'
    var result = ''
    for(var i = 0 ; i < kalimat.length ; i++){
        var flag = false
        for(var j = 0 ; j < alphabet.length ; j++){
            if(kalimat[i]===alphabet[j]){
                if(j%2 === 0){
                    result += alphabet[j+1]
                    flag = true
                }
                else{
                    result += alphabet[j-1]
                    flag = true
                }
            }
        }
        if(!flag){
            result += kalimat[i]
        }
    }
    return result
  }
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"