const router = require('express').Router();
const apiController = require('../controllers/apiController');
// const { upload, uploadMultiple } = require('../middleware/multer');

router.get('/landing-page', apiController.landingPage);

module.exports = router;
