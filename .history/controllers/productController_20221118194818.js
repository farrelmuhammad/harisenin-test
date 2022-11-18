const { Product } = require('../models');

const createProduct = async (req, res) => {
    const {
        product_name,
        price,
        description,
    } = req.body;

    try {
        await Product.create({
            product_name,
            product_slug: product_name.split(' ').join('-'),
            price,
            description,
        });
        res.status(200).json({
            message: 'Product created successfully'
        });
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
}

module.exports = {
    createProduct
}