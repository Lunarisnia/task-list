'use strict';
require('dotenv').config();
const express = require('express');
const app = express();
const applyRouter = require('./routers');
const cors = require('cors');
const { errHandler } = require('./services/error/errorHandler');
const mongoose = require('mongoose');

app.use(express.json());
app.use(cors());

applyRouter(app);
app.use(errHandler);

const mongoUri = process.env.MONGO_DB_URL;
const port = process.env.PORT || 3000;
async function main() {
    if (!mongoUri) { console.log("Invalid DB URI."); process.exit(0); }
    await mongoose.connect(mongoUri);
    app.listen(port, () => {
        console.log(`App listening on port: ${port}`);
    })
}


main().catch(err => console.log(err));
