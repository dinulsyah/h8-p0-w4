function fpb(angka1, angka2){
    var fpb = 1
    var value = angka1 > angka2
    var hold = 0
    value === true
        ? hold = angka1
        : hold = angka2
    for(var div = 2 ; div < hold ; div++){
        if(angka1%div === 0 & angka2%div === 0){
            fpb = div
        }
    }
    return fpb
}
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1