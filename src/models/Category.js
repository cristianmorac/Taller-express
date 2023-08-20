const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Category', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        }, 
        title:{
            type: DataTypes.STRING,
            /* No permitir un valor nulo */
            allowNull: false
        },
    },
    {
        timestamps: true
    })
}