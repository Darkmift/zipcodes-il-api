import { cleanEnv, port, str, host } from 'envalid';
import { logger } from './logger';

const validators = {
    NODE_ENV: str(),
    PORT: port(),
    DB_HOST: host(),
    DB_PORT: port(),
    DB_USER: str(),
    DB_PASSWORD: str(),
    DB_DATABASE: str(),
    SECRET_KEY: str(),
};

const options = {
    reporter: ({ errors, env }: any) => {
        logger.info('Invalid env vars: ' + env + Object.keys(errors));
    },
};

function validateEnv() {
    cleanEnv(process.env, validators, options);
}

export default validateEnv;
