
const array = [3, 4, 8, 0, 6, 7, 1, 0, 10, 11, 45, 9, 16]

function max(arr) {
    return Math.max.apply(Math, arr)
}
console.log(max(array))


function min(arr) {
    return Math.min.apply(Math, arr)
}
console.log(min(array))

function mean(arr) {
    // Ledtråd: Börja med att räkna ut summan av alla element
    let sum = 0
    for (i = 0; i < arr.length; i++) {
      sum = sum + arr[i]
    }
    return sum/arr.length
}
console.log(mean(array))
console.log(mean([1, 2, 6, 8]))