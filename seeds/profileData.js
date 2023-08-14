const { Profile } = require('../models');

const profiledata = [
    {
        name: "Test",
        image: "imagetest",
        bio: "This is a test",
        user_id: 1,
        skill_id: [3, 5, 6, 8],
        stats_id: [1, 2, 3, 4]
    },
    {
        name: "Hermione Granger",
        image: "imagetest",
        bio: "Hermione Granger is a muggle-born wizard who is currently attending Hogwarts. She is good friends with both Ron Weasley and Harry Potter.",
        user_id: 1,
        skill_id: [1, 2, 4, 10, 11],
        stats_id: [5, 3, 1, 6, 4, 7]
    }
]

const profileData = () => Profile.bulkCreate(profiledata);

module.exports = profileData;