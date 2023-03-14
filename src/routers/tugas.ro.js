'use strict';

const { addTugas, readAllTugas } = require("../controllers/tugas.co");
const { wrap } = require("../services/error/errorHandler");

module.exports = (router) => {
    router.get("/", wrap(readAllTugas))
    router.post("/", wrap(addTugas))
}