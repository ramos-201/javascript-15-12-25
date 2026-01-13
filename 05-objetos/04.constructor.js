function Usuario() {
    this.id = 1
    this.recuperarClave = function () {
        console.log("Recuperando clave")
    }
}

let us = new Usuario()
console.log(us)
