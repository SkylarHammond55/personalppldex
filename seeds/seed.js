const sequelize = require('../config/connection');
const { User, Profile, Ability, Stats, Skills } = require('../models');

const userData = require('./userData.json');
const profileData = require()

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    await Profile.bulkCreate()

    process.exit(0);
};

seedDatabase();
