'use strict';

const { Types } = require("mongoose");
const { Tugas } = require("../../databases/models/tugas.model");
const { ResourceNotFoundError } = require("../error/errorTypes");

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

    async readOne(id) {
        const tugas = await Tugas.findById(new Types.ObjectId(id));
        if (!tugas) throw new ResourceNotFoundError("Invalid Tugas ID");
        return tugas;
    }

    async updateTugas(id, judul, deskripsi, selesai) {
        await Tugas.findByIdAndUpdate(new Types.ObjectId(id), {
            judul,
            deskripsi,
            selesai
        });
    }
}

module.exports = {
    TugasServices
}