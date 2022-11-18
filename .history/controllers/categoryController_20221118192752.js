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
            category_slug: category_name.toLowerCase().split(' ').join('-'),
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

const getCategory = async (req, res) => {
    try {
        const category = await Category.findAll();
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