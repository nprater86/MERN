const Product = require("../models/product.model");

module.exports.createNewProduct = (req, res) => {
Product.create(req.body)
    .then(newlyCreatedProduct => res.json({ product: newlyCreatedProduct }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};