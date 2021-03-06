const Sequelize = require('sequelize');
let sequelize = require("./database");
let usuario = require("./usuario")
let etiquetaXAlumno = require('./etiquetaXAlumno');
let etiqueta = require("./etiqueta");

let nametable = 'ALUMNO';

let alumno = sequelize.define(nametable,{

    ID_ALUMNO:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
            model: "USUARIO",
            key: "ID_USUARIO"
          }
    }        
},
{
    timestamps :false,
    freezeTableName: true
});



// alumno.belongsTo(usuario, {foreignKey:{name:"ID_ALUMNO"}});
// alumno.hasMany(etiquetaXAlumno, {foreignKey:{name: "ID_ALUMNO"}});

module.exports = alumno;