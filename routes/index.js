const router = require('express').Router();
const apiRoutes = require('./api');

// API Routes
router.use('/api', apiRoutes);

// error if route not found
router.use((req, res) => {
    return res.send({ error: 'Route not found'
    })
});

module.exports = router;