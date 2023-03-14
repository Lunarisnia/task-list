'use strict';

const { addTugas } = require("../controllers/tugas.co");
const { wrap } = require("../services/error/errorHandler");

module.exports = (router) => {
    router.post("/", wrap(addTugas))
}