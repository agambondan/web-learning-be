import dotenv from 'dotenv';
import {dirname, resolve} from 'path';

export default function configure() {
    if (process.env.NODE_ENV === 'test') {
        dotenv.config({path: resolve('test.env')});
    } else {
        dotenv.config();
    }
    if (!process.env.APP_NAME) {
        console.error(`Environment File(.env) cannot be found in the root folder, copy . env.example file to .env`);
        process.exit(1);
    }

    process.env.BASE_PATH = dirname('index.js');
}