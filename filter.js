
function filter(arr, func) {

}

// TEST 1
const numbers = [4, 10, 3, 12, 5, 16, 8, 13, 2, 9, 1, 11, 2]
const filteredNumbers = filter(numbers, x => x < 10)
console.log(filteredNumbers)

// TEST 2 - skriv själv
const numbers2 = [5, 10, 1, 15, 45, 67, 87, 35, 25, 18, 6, 8, 2]
const filteredNumbers2 = numbers2.filter(function(x) {
    return x > 20
})
console.log(filteredNumbers2)

// TEST 3 - skriv själv
const numbers3 = [1, 5, 4, 9, 8, 20, 10, 4, 14, 27, 5, 3, 9, 6, 7, 5]
const filteredNumbers3 = numbers3.filter(function(x) {
    return x === 5
})
console.log(filteredNumbers3)
