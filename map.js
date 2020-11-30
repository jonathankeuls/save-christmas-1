
function map(arr, func) {
    // skapa en ny tom array av samma längd som arr
    // för varje element i arr
    //      newArray[j] = func(arr[j])
    // returnera den nya arrayen

    const newArray = new Array(arr.length)
    for (let i = 0; i < arr.length; i++) {
        newArray[i] = func(arr[i])
    }

    return newArray
}


// Test 1
console.log('\nTEST 1')
const numberArray = [10, 50, 100]
// const newNumberArray = map(numberArray, x => x + 5)
const newNumberArray = numberArray.map(function(num) {
    return num + 5
})
console.log(newNumberArray) // [15, 55, 105]
console.log(numberArray)    // [10, 50, 100] 

// Test 2
console.log('\nTEST 2')
const stringArray = ['boll', 'häst', 'flygplan']
// const newStringArray = map(stringArray, str => str.toUpperCase())
const newStringArray = stringArray.map(function(str) {
    return str.toUpperCase()
})
console.log(newStringArray) // ['BOLL', 'HÄST', 'FLYGPLAN']
console.log(stringArray)    // ['boll', 'häst', 'flygplan']

// Test 3 - GÖR ETT EGET TEST HÄR
console.log('\nTEST 3')
const numArray = [5.7, 7.3, 10.3, 2.4]
const roundedNumArray = numArray.map(function(arr) {
    return Math.round(arr)
})
console.log(numArray)
console.log(roundedNumArray)
