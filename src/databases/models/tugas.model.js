'use strict';
const mongoose = require('mongoose');
const tugasSchema = require('../schemas/tugas.schema');

module.exports = {
    Tugas: mongoose.model('Tasks', tugasSchema),
}