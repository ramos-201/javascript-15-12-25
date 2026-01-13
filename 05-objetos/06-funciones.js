function User(nombre) {
    this.name = nombre
}

console.log(User.name)
console.log(User.length)

const U2 = User
let user = new U2("Juan")
console.log(user)

function of(Fn, arg) {
    return new Fn(arg)
}

let us2 = of(User, "Raul")
console.log(us2)

function returned() {
    return function () {
        console.log("Hola mundo")
    }
}

let salud = returned()
salud()

