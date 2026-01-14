const punto = {
    x: 10,
    y: 5,
}

let cloneP = Object.assign({}, punto, { z: 10 })
console.log(punto)
console.log(cloneP)

let copi3 = { ...punto }
console.log(copi3)
