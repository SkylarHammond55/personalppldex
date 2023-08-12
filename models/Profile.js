const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Profile extends Model {}

Profile.init(
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
        image: {
            type: DataTypes.BLOB
        },
        bio: {
            type: DataTypes.TEXT
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            }
        },
        // ability_id: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //         model: 'ability',
        //         key: 'id'
        //     }
        // },
        // skill_id: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //         model: 'skill',
        //         key: 'id'
        //     }
        // },
        // stats_id: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //         model: 'stats',
        //         key: 'id'
        //     }
        // }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'profile'
    }
);

module.exports = Profile;