function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    if(arrPenumpang.length === 0){
        return []
    }
    var result = []
    var perjalanan = []
    for(var i = 0 ; i < arrPenumpang.length ; i++){
        var temp = []
        for(var j = 0 ; j < rute.length ; j++){
            if(arrPenumpang[i][1]===rute[j]){
                temp.push(j)
            }
            else if(arrPenumpang[i][2]===rute[j]){
                temp.push(j)
            }
        }
        perjalanan.push(temp)
        var jalan = {}
        jalan.penumpang = arrPenumpang[i][0]
        jalan.naikDari = arrPenumpang[i][1]
        jalan.tujuan = arrPenumpang[i][2]
        jalan.bayar = (perjalanan[i][1] - perjalanan[i][0]) * 2000
        result.push(jalan)
    }
    return result
  }
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'D', 'A'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]