const { Stats } = require('../models');

const statsdata =  [
    {
        name: "Charms",
        level: 12,
        profile_id: 1
    },
    {
        name: "Defense Against the Dark Arts",
        level: 10,
        profile_id: 1
    },
    {
        name: "Potions",
        level: 3,
        profile_id: 1
    },
    {
        name: "Astrology",
        level: 8,
        profile_id: 1
    },
    {
        name: "Herbology",
        level: 5,
        profile_id: 1
    },
    {
        name: "Transfiguration",
        level: 6,
        profile_id: 1
    },
]

const statsData = () => Stats.bulkCreate(statsdata);

module.exports = statsData;