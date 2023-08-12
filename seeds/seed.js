const sequelize = require('../config/connection');
const { User } = require('../models');
const Profile = require('../models/Profile');
const Stats = require('../models/Stats');
const Skill = require('../models/Skill');

const userData = require('./userData.json');
const profileData = require('./profileData.json');
// const abilityData = require('./abilityData.json');
const statsData = require('./statsData.json');
const skillData = require('./skillData.json')

const seedDatabase = async () => {
        await sequelize.sync({ force: true });
    
        await User.bulkCreate(userData, {
            individualHooks: true,
            returning: true,
        });
    
        await Profile.bulkCreate(profileData)
    
        // await Ability.bulkCreate(abilityData);
    
        await Stats.bulkCreate(statsData);
    
        await Skill.bulkCreate(skillData)

        process.exit(0);
};

seedDatabase();
