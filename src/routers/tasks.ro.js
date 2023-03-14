'use strict';

const { readOneTugas } = require("../controllers/tugas.co");
const { wrap } = require("../services/error/errorHandler");

module.exports = (router) => {
    router.get("/:id", wrap(readOneTugas))
}