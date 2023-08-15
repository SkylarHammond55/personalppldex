const { Skill } = require('../models');

const skilldata = [
    {
        name: "Accio",
        profile_id: 2
    },
    {
        name: "Arresto Momentum",
        profile_id: 2
    },
    {
        name: "Avada Kedavra",
        profile_id: 1
    },
    {
        name: "Alohomora",
        profile_id: 2
    },
    {
        name: "Bombarda",
        profile_id: 1
    },
    {
        name: "Confringo",
        profile_id: 1
    },
    {
        name: "Crucio",
        profile_id: 1
    },
    {
        name: "Descendo",
        profile_id: 2
    },
    {
        name: "Polyjuice Potion",
        profile_id: 2
    }
]

const skillData = () => Skill.bulkCreate(skilldata);

module.exports = skillData;