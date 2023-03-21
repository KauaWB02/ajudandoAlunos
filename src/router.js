const { request, response } = require('express');
const express = require('express')
const router = express.Router();

const productControll = require('./controllers/productControll');

router.get('/products', productControll.listProducts);
router.post('/create/product', productControll.createProduct);

module.exports = router;