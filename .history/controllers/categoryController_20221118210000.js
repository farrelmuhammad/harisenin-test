const { Category, Asset } = require('../models');
const cloudinary = require('../utils/cloudinary');

const createCategory = async (req, res) => {
    const {
        category_name,
        category_slug,
        AssetId
    } = req.body;

    try {
        const result = await cloudinary.uploader.upload(req.file.path)
        const image = result.secure_url
        const byte = result.bytes
        const asset = await Asset.create({
            name: category_name + "-" + "upload",
            path: image,
            size: byte
        })
        await Category.create({
            category_name,
            category_slug: category_name.toLowerCase().split(' ').join('-'),
            AssetId: asset.id
        });
        res.status(200).json({
            message: 'Category created successfully'
        });
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
}

const updateCategoryById = async (req, res) => {
    const {
        category_name,
        category_slug,
        AssetId
    } = req.body;

    const { id } = req.params;

    try {
        await Category.update({
            category_name,
            category_slug,
            AssetId
        }, {
            where: {
                id
            }
        });
        res.status(200).json({
            message: 'Category updated successfully'
        });
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
}

const getCategory = async (req, res) => {
    try {
        const category = await Category.findAll({
            include: {
                model: Asset,
                required: true
            }
        });
        res.status(200).json({
            message: 'Category fetched successfully',
            data: category
        })
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
}

const getCategoryById = async (req, res) => {
    const { id } = req.params;

    try {
        const category = await Category.findOne({
            include: {
                model: Asset,
                required: true
            },
            where: {
                id
            }
        });
        res.status(200).json({
            message: 'Category fetched successfully',
            data: category
        })
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
}

module.exports = {
    createCategory,
    updateCategoryById,
    getCategory,
    getCategoryById
}