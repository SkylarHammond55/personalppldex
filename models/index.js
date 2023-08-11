const User = require('./User');
const Profile = require('./Profile');
const Ability = require('./Ability');
const Skill = require('./Skill');
const Stats = require('./Stats');

User.hasMany(Profile, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Profile.belongsTo(User, {
    foreignKey: 'user_id'
});

Profile.hasMany(Ability, {
    foreignKey: 'ability_id',
    onDelete: 'CASCADE'
});

Ability.belongsTo(Profile, {
    foreignKey: 'ability_id'
})

Profile.hasMany(Skill, {
    foreignKey: 'skill_id',
    onDelete: 'CASCADE'
});

Skill.belongsTo(Profile, {
    foreignKey: 'skill_id'
})

Profile.hasMany(Stats, {
    foreignKey: 'stats_id',
    onDelete: 'CASCADE'
});

Stats.belongsTo(Profile, {
    foreignKey: 'stats_id'
})


module.exports = { User };