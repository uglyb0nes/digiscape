const { Comment } = require('../models');

const commentsData = [
    {
        user_id: 3,
        post_id: 1,
        comment_text: 'It looks good!',
    },
    {
        user_id: 1,
        post_id: 2,
        comment_text: 'What an incredible idea!',
    },
    {
        user_id: 2,
        post_id: 3,
        comment_text: 'Can you explain further?',
    }
];

const seedComments = () => Comment.bulkCreate(commentsData);

module.exports = seedComments;