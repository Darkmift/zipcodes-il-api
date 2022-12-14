import Sequelize from 'sequelize';
import {
    NODE_ENV,
    DB_HOST,
    DB_PORT as dbPort,
    DB_USER,
    DB_PASSWORD,
    DB_DATABASE,
} from '@config';
import { logger } from '@utils/logger';

const DB_PORT = +dbPort;

const sequelize = new Sequelize.Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
    dialect: 'mysql',
    host: DB_HOST,
    port: DB_PORT,
    timezone: '+09:00',
    define: {
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
        underscored: true,
        freezeTableName: true,
    },
    pool: {
        min: 0,
        max: 5,
    },
    logQueryParameters: NODE_ENV === 'development',
    logging: (query, time) => {
        logger.info(time + 'ms' + ' ' + query);
    },
    benchmark: true,
});

sequelize
    .authenticate()
    .then(() => {
        logger.info('Connection has been established successfully.');
    })
    .catch(error => {
        logger.info('Unable to connect to the database: ', error);
    });

const DB = {
    // Users: UserModel(sequelize),
    sequelize, // connection instance (RAW queries)
    Sequelize, // library
};

export default DB;
