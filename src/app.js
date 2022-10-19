//?dependencias 
const express = require ('express');
const db = require('./utils/database')
//?rutas
const userRouter = require('./users/users.router')
const authRouter = require('./auth/auth.router')


//?files
const {port} = require('./config')


//?initial configs
const app = express()

app.use(express.json())

//? accion informativa de si las credensiales son correcytas
db.authenticate()
.then(() => console.log('DB Authentication Succesfully'))
.catch((err) => console.log(err))

 //? sincroniza los modelos con la basededatos creando las tablas
db.sync()
.then(() => console.log('DataBase synced'))
.catch((err)=> console.log(err))






app.get('/',(req, res) => {
        res.status(200).json({
            message: 'OK!',
            users: `localhost:${port}/api/v1/users`
        })
    });
  
app.use('/api/v1/users', userRouter);
app.use('/api/v1/auth',authRouter);




app.listen(port, () => {
    console.log(`server started ap port ${port}`)
})
