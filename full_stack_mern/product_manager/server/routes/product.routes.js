const ProductController = require("../controllers/product.controller");

module.exports = app => {
    app.get("/api/products", ProductController.getAllProducts);
    app.get("/api/products/:id", ProductController.getProduct);
    app.post("/api/products/new", ProductController.createNewProduct);
    app.put("/api/products/:id", ProductController.updateProduct);
    app.delete("/api/products/delete/:id", ProductController.deleteAnExistingProduct);
};