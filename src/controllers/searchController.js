const SearchIndex = require('../models/searchIndexModel');
const { Op } = require('sequelize');

exports.searchContent = async (req, res) => {
    try {
        const { query } = req.query;
        const results = await SearchIndex.findAll({
            where: { title: { [Op.like]: `%${query}%` } },
        });
        res.json(results);
    } catch (error) {
        res.status(500).json({ message: 'Error searching content', error });
    }
};