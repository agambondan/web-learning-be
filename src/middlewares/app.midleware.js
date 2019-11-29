import express from 'express';

export default express.Router()
    .use(express.json())
    .use(express.urlencoded());
