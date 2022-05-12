const { response } = require("express");
const { request } = require("express");
const Product = require("../models/product.model");

module.exports.createNewProduct = (req, res) => {
Product.create(req.body)
    .then(newlyCreatedProduct => res.json({ product: newlyCreatedProduct }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.getAllProducts = (req, res) => {
    Product.find({})
        .then(products => res.json(products))
        .catch(err => res.json(err));
}

module.exports.getProduct = (req, res) => {
    Product.findOne({_id:req.params.id})
        .then(product => res.json(product))
        .catch(err => response.json(err));
}