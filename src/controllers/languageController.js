const MediaLanguage = require('../models/mediaLanguageModel');
const Subtitle = require('../models/subtitleModel');

exports.getLanguages = async (req, res) => {
    try {
        const { contentType, contentId } = req.params;
        const languages = await MediaLanguage.findAll({ where: { content_type: contentType, content_id: contentId } });
        res.json(languages);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching languages', error });
    }
};

exports.getSubtitles = async (req, res) => {
    try {
        const { languageId } = req.params;
        const subtitles = await Subtitle.findAll({ where: { language_id: languageId } });
        res.json(subtitles);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching subtitles', error });
    }
};