'use strict';

const Tugas = require("../../databases/models/tugas.model");

class TugasServices {
    constructor() {

    }

    async add(judul, deskripsi, selesai) {
        const tugas = new Tugas({ judul, deskripsi: undefined || deskripsi, selesai: undefined || selesai });
        await tugas.save()
        return tugas;
    }
}

module.exports = {
    TugasServices
}