function changeMe(arr) {
    array = []
    for( var i = 0 ; i < arr.length ; i++){
        array[i] = { 'firstName' : arr[i][0],
        'lastName' : arr[i][1],
        'gender' : arr[i][2],
        } 
        if(arr[i][3] === undefined || arr[i][3] >= 2019){
            array[i].age = 'Invalid Birth Year'
        }
        else{
            array[i].age = 2019 - arr[i][3]
        }
        console.log(i + 1 + '.' + array[i].firstName + ' ' + array[i].lastName)
        console.log(array[i])
    }
  }
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 2982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }

  // minus year