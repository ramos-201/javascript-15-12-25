// let a = 1
// let b = a
//
// b++
// console.log(a, b)

// let a = {}
// let b = a
//
// b.prop = 1
// console.log(a, b)
//
// let a = 1
// function s(n) {
//     n++
// }
//
// s(a)
// console.log(a)


let a = { prop: 1 }
function s(n) {
    n.prop++
}

s(a)
console.log(a)

// Primitivos -> se copian
// Referencia -> se referencia
