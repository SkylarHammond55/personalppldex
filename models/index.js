const User = require('./User');
const Profile = require('./Profile');
// const Ability = require('./Ability');
const Skill = require('./Skill');
const Stats = require('./Stats');

User.hasMany(Profile, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Profile.belongsTo(User, {
    foreignKey: 'user_id'
});


// Profile.hasMany(Ability, {
//     foreignKey: 'profile_id',
//     onDelete: 'CASCADE'
// });

// Ability.belongsTo(Profile, {
//     foreignKey: 'profile_id'
// })

Profile.hasMany(Skill, {
    foreignKey: 'profile_id',
    onDelete: 'CASCADE'
});

Skill.belongsTo(Profile, {
    foreignKey: 'profile_id'
})

Profile.hasMany(Stats, {
    foreignKey: 'profile_id',
    onDelete: 'CASCADE'
});

Stats.belongsTo(Profile, {
    foreignKey: 'profile_id'
})


module.exports = { User };