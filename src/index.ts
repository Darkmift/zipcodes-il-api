import express, { Express, Request, Response } from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { NODE_ENV, PORT, LOG_FORMAT } from '@config';
import validateEnv from './utils/validateEnv';
import { logger, stream } from '@utils/logger';
import DB from './database';

dotenv.config();
validateEnv();

try {
    DB.sequelize.sync({ force: false });
} catch (error) {
    const errorMessage = 'DB sync failed';
    logger.error(errorMessage);

    if (error instanceof Error) {
        error.message = errorMessage + '\n' + error.message;
    }
    throw error;
}

const app: Express = express();
const port = PORT || 5000;

app.use(morgan(LOG_FORMAT, { stream }));

app.get('/health', async (req: Request, res: Response) => {
    const data: any = {
        uptime: process.uptime(),
        message: 'Ok',
        date: new Date(),
        sqlConnection: null,
    };
    try {
        const [results] = await DB.sequelize.query(
            `SHOW TABLES LIKE "location";`,
        );

        if (!results[0]) {
            throw new Error('Error Query Health SQL');
        }
        data.sqlConnection = 'Ok';
    } catch (error) {
        if (error instanceof Error) {
            data.sqlConnection = error.message;
        }
        data.sqlConnection = 'error validating sql structure';
    }

    res.status(200).send(data);
});

const server = app.listen(port, () => {
    console.log(`⚡️[NODE_ENV]: ${NODE_ENV}`);
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);

    logger.info(`=================================`);
    logger.info(`======= ENV: ${NODE_ENV} =======`);
    logger.info(`🚀 [server]: Server is running at https://localhost:${port}`);
    logger.info(`=================================`);
});

process.on('SIGTERM', () => {
    logger.info('SIGTERM signal received: closing HTTP server');
    server.close(() => {
        logger.info('HTTP server closed');
    });
});
