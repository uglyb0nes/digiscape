const { Post } = require('../models');

const postData = [
    {
        title: 'Welcome To My Tech Blog',
        post_content: 'This is my new tech blog! I hope you enjoy!',
        user_id: 1,
    },
    {
        title: 'Recycling App',
        post_content: 'I want to make an app that will help people recycle!',
        user_id: 2,
    },
    {
        title: 'Is anyone else interested in net art?',
        post_content: 'Net art is an elusive and sometimes anarchic art form which uses the Internet as its primary material. Net art works often draw on data from other Internet materials and websites, which helps give them their distinctive dynamics and transience.',
        user_id: 3,
    },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;