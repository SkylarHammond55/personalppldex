const sequelize = require('../config/connection');
// const { User } = require('../models');
// const Profile = require('../models/Profile');
// const Stats = require('../models/Stats');
// const Skill = require('../models/Skill');

const userData = require('./userData');
const profileData = require('./profileData');
const statsData = require('./statsData');
const skillData = require('./skillData')
// const abilityData = require('./abilityData.json');

const seedDatabase = async () => {
        await sequelize.sync({ force: true });
        
        await userData();
        await profileData();
        await statsData();
        await skillData();
    
        // await User.bulkCreate(userData, {
        //     individualHooks: true,
        //     returning: true,
        // });
    
        // await Profile.bulkCreate(profileData)
    
        // await Ability.bulkCreate(abilityData);
    
        // await Stats.bulkCreate(statsData);
    
        // await Skill.bulkCreate(skillData)

        process.exit(0);
};

seedDatabase();
