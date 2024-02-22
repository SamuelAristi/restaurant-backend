const express = require('express');
const connecction = require(' ./database/connection');
const app = express();
const port = process.env.PORT || 1337 ;

app.use(express.json());
app.use(express.urlencoded({extended: false}))

// routers

connecction.sync()
    .then(()=>{
        console.log('base de datos sincronizada');
        app.listen(port, ()=>{
            console.log('La aplicacion esta corriendo en el puerto ${port}');
        })
    })
    .catch((error)=>{
        console.error('Erro al sincronizar la base de datos '+ error)
    });
        
    