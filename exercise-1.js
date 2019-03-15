function angkaPrima(angka){
  if(angka <= 1){
    return false
  }
  else if(angka === 2 || angka === 3){
    return true
  }
  else{
    for(var div = 2 ; div < angka ; div++){
      if(angka % div === 0){
        return false
      }
    }
    return true
  }
}
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false