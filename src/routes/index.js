import express from 'express';
import categoryRouter from "./category.route";
import articlesRouter from "./articles.route";
import userRouter from "./user.route";

export default express.Router()
    .use('/', userRouter)
    .use('/', categoryRouter)
    .use('/', articlesRouter);