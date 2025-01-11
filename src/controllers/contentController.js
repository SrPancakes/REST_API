const Movie = require('../models/movieModel');
const Series = require('../models/seriesModel');
const Season = require('../models/seasonModel');
const Episode = require('../models/episodeModel');

exports.getMovies = async (req, res) => {
    try {
        const movies = await Movie.findAll();
        res.json(movies);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching movies', error });
    }
};

exports.getSeries = async (req, res) => {
    try {
        const series = await Series.findAll();
        res.json(series);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching series', error });
    }
};

exports.getMovieById = async (req, res) => {
    try {
        const { movieId } = req.params;
        const movie = await Movie.findByPk(movieId);
        if (!movie) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        res.json(movie);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching movie', error });
    }
};

exports.getSeriesById = async (req, res) => {
    try {
        const { seriesId } = req.params;
        const series = await Series.findByPk(seriesId, {
            include: [{ model: Season, include: [Episode] }],
        });
        if (!series) {
            return res.status(404).json({ message: 'Series not found' });
        }
        res.json(series);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching series', error });
    }
};