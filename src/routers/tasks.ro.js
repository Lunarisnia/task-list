'use strict';

const { readOneTugas, updateTugas, deleteTugas } = require("../controllers/tugas.co");
const { wrap } = require("../services/error/errorHandler");

module.exports = (router) => {
    router.get("/:id", wrap(readOneTugas)),
    router.patch("/:id", wrap(updateTugas)),
    router.delete("/:id", wrap(deleteTugas))
}