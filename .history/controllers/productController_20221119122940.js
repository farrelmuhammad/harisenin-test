const { Product, Asset, Product_asset } = require('../models');
const cloudinary = require('../utils/cloudinary');

const createProduct = async (req, res) => {
    const {
        product_name,
        product_slug,
        price,
        description,
    } = req.body;

    try {
        const result = await cloudinary.uploader.upload(req.file.path)
        const image = result.secure_url
        const nameImg = result.original_filename
        const byte = result.bytes
        const product = await Product.create({
            product_name,
            product_slug: product_name.toLowerCase().split(' ').join('-'),
            // product_slug: product_name,
            price,
            description,
        });
        const asset = await Asset.create({
            name: product_name + "-" + nameImg,
            path: image,
            size: byte
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
        const product = await Product.findAll({
            include: {
                model: Product_asset,
                required: true
            }
        });
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