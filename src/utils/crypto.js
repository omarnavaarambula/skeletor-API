const bcrypt = require('bcrypt')


//? encripta la contrase;a del usuario cuando se crea o se modifica la contrase;a
const hashPassword = ( plainPassword) => {
    return bcrypt.hashSync(plainPassword,10)


}

const comparePassword = (plainPassword, hashedPassword) =>{
    //? plainPassword : contraseá que recibimos de login
    //? hashedPassword : contrase;a que tenemos guardada en la base de datos
    //!esta utilidad se usa cuando hacemos un login y recibimos la contrase;a del usuario
    //! y la comparamos con la que tenemos en la database 
    return bcrypt.compareSync(plainPassword,hashedPassword)
}

// console.log(hashPassword('raulomar'))
// console.log(comparePassword('raulOmar', '$2b$10$7rzDf/ywMq5rdDxj.r.IruJA/G3bk2dJoy926DzcDG0svY4NH80H2'))


module.exports = {
    comparePassword,
    hashPassword

}