//? nesesitamos email y contrase;a del usuario para hacer login
//? email es unico para la bace de datos

const { getUserByEmail } = require("../users/users.controllers")
const {comparePassword} = require ('../utils/crypto')
const loginUser = async (email, password) => {
    //* Este controlador tiene 2 posibles respuestas
    //* 1 Las credenciales son validas y retornamos el usuario
    //* 2 Las credenciales son invalidas y retornamos false

    try {
        const user = await getUserByEmail(email)
        //? user.password contiene la contraseña encriptada de mi base de datos
        const verifyPassword = comparePassword(password, user.password)
        if(verifyPassword){
            return user
        } 
        return false
    } catch (err) {
        return false
    }
}

// loginUser('omarnava@example.com', '123567890')
// .then(response => console.log (response))
// .catch(err => console.log (err))

module.exports = {
    loginUser
}

