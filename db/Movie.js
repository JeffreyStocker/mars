const mongoose = require('mongoose');
require('./index.js');

const movieSchema = new mongoose.Schema({
  tmdbId: {
    type: Number,
    required: true,
    unique: true,
  },
  title: String,
  productionCompanies: [{
    type: String,
  }],
  genres: [{
    type: String,
  }],
  images: [{
    type: String,
  }],
  budget: Number,
  revenue: Number,
  estimatedProfit: Number,
  releaseDate: Date,
  trendData: [{
    formattedAxisTime: String,
    formattedAxisTimeRelative: Number,
    value: Number,
  }],
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
