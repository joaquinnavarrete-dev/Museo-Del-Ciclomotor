const express = require ('express');
const router = express.Router();
const productController = require ('../controllers/productController');
// const productRoutes = require ('./product.routes');
// const usersRoutes = require ('./users.routes');
// const adminRoutes = require ('./admin.routes');
// const apiRoutes = require('./api.routes')


router.get('/', productController.index );

//router.use('/product', productRoutes );//para hacer el ABM adelante

// router.use('/admin', adminRoutes );

router.get("/product/search", productController.productSearch);
router.get('/product/detail/:id', productController.getOne);

module.exports = router;