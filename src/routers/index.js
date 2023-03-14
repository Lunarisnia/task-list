'use strict';

const fs = require('fs');
const path = require('path');
const express = require('express');
const routerDefault = express.Router();

const baseName = path.basename(__filename);

function applyRouter(app) {
  routerDefault.get('/', (_, res) =>
    res.send({ data: 'OK', version: 'v1.0.0' }),
  );

  fs.readdirSync(__dirname)
    .filter((file) => file.indexOf('.') !== 0 && file !== baseName)
    .forEach((file) => {
      if (/^v[0-9]+/.test(file)) return;
      const router = express.Router();
      const apply = require(path.join(__dirname, file));
      const prefix = file.split('.')[0];
      apply(router);
      app.use(`/${prefix}`, router);
    });

  app.use(`/`, routerDefault);
}

module.exports = applyRouter;
