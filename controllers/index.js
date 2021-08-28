const router = require('express').Router();

const apiRoutes = require('./routes');
const homeRoutes = require('./home');
const dashboardRoutes = require('./dash');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/dash', dashboardRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;