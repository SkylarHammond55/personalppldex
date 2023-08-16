const { Profile } = require('../models');

const profiledata = [
    {
        name: "Hermione Granger",
        image: "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*obDCz57X7D2Kd1XvcdI0Iw.jpeg",
        bio: "Hermione Granger is a muggle-born wizard who is currently attending Hogwarts. She is good friends with both Ron Weasley and Harry Potter.",
        user_id: 1,
        skill_id: [1, 2, 3, 4, 5, 6],
        stats_id: [1, 2, 3, 4, 5, 6]
    }
]

const profileData = () => Profile.bulkCreate(profiledata);

module.exports = profileData;