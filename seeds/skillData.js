const { Skill } = require('../models');

const skilldata = [
    {
        name: "Accio",
        profile_id: 1
    },
    {
        name: "Arresto Momentum",
        profile_id: 1
    },
    {
        name: "Alohomora",
        profile_id: 1
    },
    {
        name: "Descendo",
        profile_id: 1
    },
    {
        name: "Polyjuice Potion",
        profile_id: 1
    },
    {
        name: "Patronus",
        profile_id: 1
    }
]

const skillData = () => Skill.bulkCreate(skilldata);

module.exports = skillData;