'use strict';
const joi = require("joi");
const requestHelper = require("../services/request/requestHelper");
const { TugasServices } = require('../services/tugas/tugasServices');
const tugasServices = new TugasServices();


const addTugasJoiSchema = joi.object({
    judul: joi.string().required(),
    deskripsi: joi.string().optional().allow(""),
    selesai: joi.boolean().optional(),
}).required();

const addTugas = async (req, res) => {
    requestHelper.schemaValidationWrapper(addTugasJoiSchema, req.body, { allowUnknown: false });
    const { judul, deskripsi, selesai } = req.body;
    const tugas = await tugasServices.add(judul, deskripsi, selesai);
    res.send({ data: tugas });
}

module.exports = {
    addTugas,
}