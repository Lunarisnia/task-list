'use strict';

const { Tugas } = require("../../databases/models/tugas.model");

class TugasServices {
    constructor() {

    }

    async add(judul, deskripsi, selesai) {
        const tugas = new Tugas({ judul, deskripsi: undefined || deskripsi, selesai: undefined || selesai });
        await tugas.save()
        return tugas;
    }

    async countTotal(query = {}) {
        return Tugas.count(query);
    }

    async readAll(query = {}, page = 0, perPage = 10) {
        const tugases = await Tugas.find(query, null, { skip: perPage * page, limit: perPage });
        return tugases;
    }
}

module.exports = {
    TugasServices
}