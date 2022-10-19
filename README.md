#SKELETOR


-Express
-PostgreSQL
-Sequelize ORM
-Autenticacion de Tokens
-ncrypt para hacer contrase;as
-uso de json web token


 ---


 - Rutas de Login y creacion de usuarios (registros)
 - herramienta para publicar imagenes de perfil
 - CRUD de usuarios con autenticacion y manejo de permisos
 - /users/:id DELETE, PUT
 - /users/me











npm init --y
 npm install express uuid  dotenv sequelize pg pg-hstore passport passport-jwt jsonwebtoken nodemon bcrypt 

 express para que funcione nuestra aplicacion 
 uuid para generar las id 
 dotenv para editar las variables de entorno
 sequelize para crear mis modelos
 pg y pg-hstore dos dependencias que nesesita sequelize para poder integrar posgres

 npm install nodemon

npm install bcrypt


#para los tokens
npm install passport passport-jwt jsonwebtoken  

 orm y odm
 no sql


 poner en script del package,json
 "start": "node ./src/app.js",
"dev": "nodemon ./src/app.js",


///////////////////

1ro se crea el archivo dattabase.js es la que gestiona la informacion con la bace de datos 
2do despues se crean los modelos users.models.js 
3ro despues los controladores users.controllers.js  mandan a llamar los modelos
4to  despues los servicios users.services.js que mandan a llamar los controladores

4 despues las rutas users.router.js que mandan a llamar los servicios 


1. app.js
2. .env
3. config.js
4. database.js
5. modelos
6. controladores
7. servicios
8. rutas


dependencies": {
    "bcrypt": "^5.1.0",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "jsonwebtoken": "^8.5.1",
    "passport": "^0.6.0",
    "passport-jwt": "^4.0.0",
    "pg": "^8.8.0",
    "pg-hstore": "^2.3.4",
    "sequelize": "^6.24.0",
    "uuid": "^9.0.0"
  },
  "devDependencies": {
    "nodemon": "^2.0.20"




    # skeletor-API
