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

const readAllTugasJoiSchema = joi.object({
    page: joi.number().default(0).required(),
    perPage: joi.number().default(10).required(),
}).required();

const readAllTugas = async (req, res) => {
    requestHelper.schemaValidationWrapper(readAllTugasJoiSchema, req.query, { allowUnknown: false });
    const { page, perPage } = req.query;
    const tugases = await tugasServices.readAll({}, page, perPage);
    const totalTugas = await tugasServices.countTotal();

    res.send({
        page,
        perPage,
        totalData: totalTugas,
        data: tugases
    })
}

module.exports = {
    addTugas,
    readAllTugas
}