'use strict';
const mongoose = require('mongoose');
const tugasSchema = require('../schemas/tugas.schema');

module.exports = mongoose.model('Tasks', tugasSchema);