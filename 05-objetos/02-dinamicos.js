const user = { id: 1}

// user = 1 // ERROR

user.name = "Andres"
user.guardar = function () {
    console.log("Guardando", user.name)
}

user.guardar()

console.log(user)
delete user.name
console.log(user)

// const user1 = Object.freeze({ id: 1 })
const user1 = Object.seal({ id: 1 })
user1.name = "Andres"
user1.id = 2
console.log(user1)
