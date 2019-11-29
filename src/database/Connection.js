import {createConnection} from 'typeorm'
import entities from './entities'

async function createDbConnection() {
    return await createConnection({
        type: process.env.DB_DRIVER || 'postgres',
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 5432,
        username: process.env.DB_USERNAME || 'postgres',
        password: process.env.DB_PASSWORD || 'ilhamfatiri',
        database: process.env.DB_DATABASE || 'e_learning_web',
        synchronize: (process.env.DB_SYNC === 'true') || true,
        logging: (process.env.DB_LOGGING === 'true') || false,
        entities: Object.values(entities),
    });
}

export default createDbConnection;