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

const readOneTugas = async (req, res) => {
    const { id } = req.params;
    const tugas = await tugasServices.readOne(id);

    res.send({ data: tugas });
}

const updateTugasJoiSchema = joi.object({
    judul: joi.string().optional(),
    deskripsi: joi.string().optional().allow(""),
    selesai: joi.boolean().optional()
}).required();

const updateTugas = async (req, res) => {
    const { id } = req.params;

    requestHelper.schemaValidationWrapper(updateTugasJoiSchema, req.body, { allowUnknown: false });
    const { judul, deskripsi, selesai } = req.body;
    await tugasServices.updateTugas(id, judul, deskripsi, selesai);

    const tugas = await tugasServices.readOne(id);
    res.send({ data: tugas });
}

const deleteTugas = async (req, res) => {
    const { id } = req.params;
    await tugasServices.deleteTugas(id);

    res.send({ data: `${id} is deleted.`})
}

module.exports = {
    addTugas,
    readAllTugas,
    readOneTugas,
    updateTugas,
    deleteTugas
}