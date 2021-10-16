const express = require('express')
const cors = require('cors');
const path = require('path');

const logger = require('morgan');
const app = express()

app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'))