const express=require('express');
const router = express.Router();

function errorLogger(error, req, res, next) {
    console.log(error);
}

module.exports = errorLogger