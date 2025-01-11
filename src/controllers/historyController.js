const History = require('../models/historyModel');

exports.getHistory = async (req, res) => {
    try {
        const { profileId } = req.params;
        const history = await History.findAll({ where: { profile_id: profileId } });
        res.json(history);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching history', error });
    }
};