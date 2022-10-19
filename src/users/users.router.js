const router = require('express').Router()
const userServices = require('./users.services')

//? importar primero passport para proteger rutas
const passport = require('passport')


//?bloqueo de rutas
require('../middlewares/auth.middlewares')(passport)





//? rutas raiz

router.get('/',
// passport.authenticate('jwt', {session:false}),
userServices.getAllUsers)

router.route('/me')
.get(passport.authenticate('jwt', {session:false}),
userServices.getMyUser)
.patch(passport.authenticate('jwt', {session:false}),
userServices.patchMyUser)
.delete(    passport.authenticate('jwt', {session:false}),
userServices.deleteMyUser)


router.route('/:id')
    .get(userServices.getUserById)
    .patch(userServices.patchUser)
    .delete(userServices.deleteUser)
//?? ruta de login




//? /api/v1/users/:id

   



module.exports = router 