const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Ability extends Model {}

Ability.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        profile_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'profile',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'ability'
    }
);

module.exports = Ability;