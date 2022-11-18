const { Product, Asset } = require('../models');

const createProduct = async (req, res) => {
    const {
        product_name,
        product_slug,
        price,
        description,
    } = req.body;

    try {
        const product = await Product.create({
            product_name,
            product_slug: product_name.toLowerCase().split(' ').join('-'),
            // product_slug: product_name,
            price,
            description,
        });
        const asset = await Asset.create({
            name: product_name + "upload",
            path: 'https://www.google.com',
            size: '100kb'
        })

        await Product_asset.create({
            AssetId: asset.id,
            ProductId: product.id
        })
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
            product_slug: product_name.toLowerCase().split(' ').join('-'),
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

const getProduct = async (req, res) => {
    try {
        const product = await Product.findAll();
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

const getProductById = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findOne({
            where: {
                id
            }
        });
        res.status(200).json({
            message: 'Category fetched successfully',
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
    getProduct,
    getProductById
}