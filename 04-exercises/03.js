function getByIdx(arr, idx) {
    if (idx < 0 || arr.length <= 0) {
        return "Elemento no existe"
    }

    return arr[idx]
}

let result = getByIdx([1, 2], 1)
console.log(result)
