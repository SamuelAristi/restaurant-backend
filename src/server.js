require('./DataBase/sync.js');

const express = require('express');
const connection = require('./DataBase/connection.js');
const app = express();
const port = process.env.PORT || 1337 ;

//router

const restaurantRouter = require('./Routers/restauranRouter.js')
const productRouter = require('./Routers/productRouter.js')
const departmentController = require('./Routers/departmentRouter.js')
const cityController = require('./Routers/cityRouter.js')


app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.listen(port, ()=>{
    console.log(`La aplicacion esta corriendo en el puerto ${port}`);
});


    //api
    app.use('/apirestaurant',restaurantRouter);
    app.use('/apiproduct', productRouter);
    app.use('/apidepartment', departmentController);
    app.use('/apicity', cityController);


        
    