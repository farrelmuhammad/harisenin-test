const { Category } = require('../models');

const createCategory = async (req, res) => {
    const {
        category_name,
        category_slug,
        AssetId
    } = req.body;

    try {
        await Category.create({
            category_name,
            category_slug,
            AssetId
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

module.exports = {
    createCategory,
    updateCategoryById
}