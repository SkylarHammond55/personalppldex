const sequelize = require('../config/connection');

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

        process.exit(0);
};

seedDatabase();
