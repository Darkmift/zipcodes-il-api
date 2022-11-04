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
        const errorKeys = Object.keys(errors);
        if (errorKeys.length) {
            logger.info(
                `Invalid env vars: ${JSON.stringify(
                    env,
                )} \n\n\n error-keys:${errorKeys}`,
            );
        }
        logger.info('Validation of env passed!');
    },
};

function validateEnv() {
    cleanEnv(process.env, validators, options);
}

export default validateEnv;
