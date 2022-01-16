const router = require('express').Router();
const adminController = require('../controllers/adminContoller');
const { upload, uploadMultiple } = require('../middleware/multer');

router.get('/dashboard', adminController.viewDashboard);
// endpoint category
router.get('/category', adminController.viewCategory);
router.post('/category', adminController.addCategory);
router.put('/category', adminController.editcategory);
router.delete('/category/:id', adminController.deletecategory);
// endpoint bank
router.get('/bank', adminController.viewBank);
router.post('/bank', upload, adminController.addBank);
router.put('/bank', upload, adminController.editBank);
router.delete('/bank/:id', upload, adminController.deleteBank);
// endpoint bank
router.get('/item', adminController.viewItem);
router.post('/item', uploadMultiple, adminController.addItem);
router.get('/booking', adminController.viewBooking);

module.exports = router;
