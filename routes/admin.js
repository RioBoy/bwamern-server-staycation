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

// endpoint item
router.get('/item', adminController.viewItem);
router.post('/item', uploadMultiple, adminController.addItem);
router.get('/item/show-image/:id', adminController.showImageItem);
router.get('/item/:id', adminController.showEditItem);
router.put('/item/:id', uploadMultiple, adminController.editItem);
router.delete('/item/:id/delete', adminController.deleteItem);

// endpoint detail item
router.get('/item/show-detail-item/:itemId', adminController.viewDetailItem);
// feature
router.post('/item/add/feature', upload, adminController.addfeature);
router.put('/item/update/feature', upload, adminController.editFeature);
router.delete('/item/:itemId/feature/:id', adminController.deleteFeature);

// activity
router.post('/item/add/activity', upload, adminController.addActivity);
router.put('/item/update/activity', upload, adminController.editActivity);
router.delete('/item/:itemId/activity/:id', adminController.deleteActivity);

router.get('/booking', adminController.viewBooking);

module.exports = router;
