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
            // product_slug: product_name.toLowerCase().split(' ').join('-'),
            product_slug: product_name,
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

const updateProductById = async (req, res) => {
    const {
        product_name,
        price,
        description,
    } = req.body;

    const { id } = req.params;

    try {
        await Product.update({
            product_name,
            product_slug: product_name,
            price,
            description,
        }, {
            where: {
                id
            }
        });
        res.status(200).json({
            message: 'Product updated successfully'
        });
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
}

const getProduct = (req, res) => {
    try {
        const product = Product.findAll();
        res.status(200).json({
            message: 'Product fetched successfully',
            data: product
        })
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
}

module.exports = {
    createProduct,
    updateProductById,
}