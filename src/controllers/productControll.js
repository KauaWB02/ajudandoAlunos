const productModel = require('../models/productModel')

const listProducts = async (req, res) => {

   const products = await productModel.listProducts();
   return res.status(200).json(products)
};

const createProduct = async (req, res) => {

   await productModel.createProduct(req.body).then((data) => {


      res.status(200).send(data);

   });


}

module.exports = {
   listProducts,
   createProduct
}