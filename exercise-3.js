function cariMedian(arr){
  var size = arr.length
  if(size % 2 === 0){
    var number1 = (size/2)
    var number2 = (size/2-1)
    return (arr[number1] + arr[number2])/2
  }
  else{
    return arr[(Math.round(size/2)-1)]
  }
}
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5