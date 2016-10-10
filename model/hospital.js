'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const hospitalSchema = Schema({
  name: {type: String, required:  true},
  created: {type: Date, default: Date.now},
});

module.exports = mongoose.model('hospital', hospitalSchema);
