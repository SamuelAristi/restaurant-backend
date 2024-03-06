const connection = require('./connection');

//models
const restaurant = require('../Models/restaurant');
const product = require('../Models/product');

function sync(){
    console.log("ingreso");
    restaurant.hasMany(product,{
        foreignKey:'restaurantId',
        onDelete: 'restrict',
        onUpdate: 'cascade'
    });
    product.belongsTo(restaurant,{
        foreignKey: 'restaurantId'
    })
}

sync();