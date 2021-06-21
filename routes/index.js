const router = require('express').Router()

//bring in routes for exporting
router.use('/api', require('./userRoutes.js'))
router.use('/', require('./htmlRoutes'))
router.use('/posts', require('./postRoutes'))
router.use('/comments', require('./commentRoutes'))

module.exports = router
