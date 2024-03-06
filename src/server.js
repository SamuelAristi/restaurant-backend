require('./DataBase/sync.js');

const express = require('express');
const connection = require('./DataBase/connection.js');
const app = express();
const port = process.env.PORT || 1337 ;

//router

const restaurantRouter = require('./Routers/restauranRouter.js')


app.use(express.json());
app.use(express.urlencoded({extended: false}));

connection.sync({force:false})
    .then(()=>{
        console.log('base de datos sincronizada');
        app.listen(port, ()=>{
            console.log(`La aplicacion esta corriendo en el puerto ${port}`);
        })
    })
    .catch((error)=>{
        console.error('Erro al sincronizar la base de datos '+ error)
    });

    //api
    app.use('/api',restaurantRouter)


        
    