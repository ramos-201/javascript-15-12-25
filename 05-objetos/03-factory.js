
/*
let user1 = {
    id: 2,
    email: "and2@gmail.com",
    name: "Andres2",
    activo: false,
    recuperarClave: function () {
        console.log("Recuperar clave")
    },
}
  */

function crearUser(id, name, email) {
    return {
        id,
        email,
        name,
        activo: true,
        recuperarClave: function () {
            console.log("Recuperar clave")
        },
    }
}

let user1 = crearUser(1, "and1@", "Andres1")
let user2 = crearUser(2, "and2@", "Andres2")

console.log(user1)
console.log(user2)
