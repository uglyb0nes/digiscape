const { User } = require('../models');

const userData = [
    {
        username: 'n00b',
        email: 'n00b@hotmail.com',
        password: 'IAmAPassword',
    },
    {
        username: 'digitaldude',
        email: 'digitaldude@hotmail.com',
        password: 'YouCannotGuessMe',
    },
    {
        username: 'hodlgang',
        email: 'hodlgang@hotmail.com',
        password: 'SuperSecurePassword',
    },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;