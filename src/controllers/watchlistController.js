const Watchlist = require('../models/watchlistModel');

exports.getWatchlist = async (req, res) => {
    try {
        const { profileId } = req.params;
        const watchlist = await Watchlist.findAll({ where: { profile_id: profileId } });
        res.json(watchlist);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching watchlist', error });
    }
};

exports.addToWatchlist = async (req, res) => {
    try {
        const { profileId } = req.params;
        const { content_type, content_id } = req.body;

        const entry = await Watchlist.create({ profile_id: profileId, content_type, content_id });
        res.status(201).json(entry);
    } catch (error) {
        res.status(500).json({ message: 'Error adding to watchlist', error });
    }
};

exports.removeFromWatchlist = async (req, res) => {
    try {
        const { entryId } = req.params;
        await Watchlist.destroy({ where: { entry_id: entryId } });
        res.json({ message: 'Removed from watchlist' });
    } catch (error) {
        res.status(500).json({ message: 'Error removing from watchlist', error });
    }
};