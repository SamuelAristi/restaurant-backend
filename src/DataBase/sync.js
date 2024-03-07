const connection = require('./connection');

//models
const restaurant = require('../Models/restaurant');
const product = require('../Models/product');
const department = require('../Models/department');
const city = require('../Models/city')

const departmentjson = require('./jsonfiles/departmentjson');
const cityjson = require('./jsonfiles/cityjson');

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

    //feoreing key department - city
    department.hasMany(city,{
        foreignKey:'departmentId',
        onDelete: 'restrict',
        onUpdate: 'cascade'
    });
    city.belongsTo(department,{
        foreignKey: 'departmentId'
    })

    //foreing key city-restaurant
    city.hasMany(restaurant,{
        foreignKey:'cityId',
        onDelete: 'restrict',
        onUpdate: 'cascade'
    });
    restaurant.belongsTo(city,{
        foreignKey: 'cityId'
    });

    //create Json
    departmentjson.createDepartments();
    cityjson.createCities();
}

sync();