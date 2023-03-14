'use strict';
const mongoose = require('mongoose');
const { Schema } = mongoose;

module.exports = new Schema({
    judul: {
        type: String,
        required: true
    },
    deskripsi: {
        type: String,
        default: "",
        required: false,
    },
    selesai: {
        type: Boolean,
        default: false,
    },
    deletedAt: {
        type: Date,
        default: null
    }
});