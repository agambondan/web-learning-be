import express from 'express';
import middleware from './middlewares/app.midleware.js';
import AppRouter from './routes';
import createDbConnection from './database/Connection';
import configure from './config';

export async function app() {
    configure();
    try{
        const connection = await createDbConnection();
        const app = express();
        if (connection.isConnected){
            console.log(`Connected to ${process.env.DB_DRIVER}`);
            app.use(middleware);
            app.use(AppRouter);
        }else{
            throw new Error(`Connection failed to ${process.env.DB_HOST} using current credential`);
        }
        return app;
    } catch (error) {
        throw error;
    }
}
