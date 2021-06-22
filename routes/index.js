const router = require('express').Router()

//bring in routes for exporting
router.use('/api', require('./userRoutes.js'))
router.use('/', require('./htmlRoutes'))
router.use('/api', require('./postRoutes'))
router.use('/api', require('./commentRoutes'))

module.exports = router
