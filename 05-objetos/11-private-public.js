function User() {
    this.name = 'Ramos'
    let log = function () {
        console.log("logging")
    }

    this.guardar = function () {
        log()
        console.log("guardando")
    }
}

const user = new User()
user.log = function () {
    console.log("lalalala")
}

user.log()

