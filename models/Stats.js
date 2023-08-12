const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Stats extends Model {}

Stats.init(
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
        level: {
            type: DataTypes.INTEGER,
            allowNull: false
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
        modelName: 'stats'
    }
);

module.exports = Stats;