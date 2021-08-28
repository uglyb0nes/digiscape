const router = require('express').Router();

const userRoutes = require('./user.js');
const postRoutes = require('./post.js');
const commentRoutes = require('./comment.js');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;