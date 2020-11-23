// // while-loop
// let i = 0
// while(i < 10) {
//     console.log(i)
//     i++
// }

// //foor-loop
// for (let i = 0; i < 10; i++) {
//  console.log(i)
// }


function sum(arr) {
    let result = 0

    for (let i = 0; i < arr.length; i++) {
        result = result + arr[i]
        console.log('vi är i loopen och elementet har värdet ' + arr[i] + ' och result är ' + result)
    }

    return result
}

console.log(sum([5, 3, 7, 2])) // 15

