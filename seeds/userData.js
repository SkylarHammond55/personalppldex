const { User } = require('../models');

const usersdata = [
  {
    username: "Sal",
    email: "sal@hotmail.com",
    password: "password12345"
  },
]

const userData = () => User.bulkCreate(usersdata, {
  individualHooks: true,
  returning: true,
});


module.exports = userData;