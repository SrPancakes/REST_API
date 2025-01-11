const PlaybackProgress = require('../models/playbackModel');

exports.getProgress = async (req, res) => {
    try {
        const { profileId } = req.params;
        const progress = await PlaybackProgress.findAll({ where: { profile_id: profileId } });
        res.json(progress);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching playback progress', error });
    }
};

exports.updateProgress = async (req, res) => {
    try {
        const { profileId } = req.params;
        const { content_type, content_id, progress_time } = req.body;

        const updatedProgress = await PlaybackProgress.upsert({
            profile_id: profileId,
            content_type,
            content_id,
            progress_time,
        });

        res.json(updatedProgress);
    } catch (error) {
        res.status(500).json({ message: 'Error updating playback progress', error });
    }
};