// I know its not a real test :)
import { NODE_ENV } from '@/config';
import { logger } from '@/utils/logger';
import DB from '@database';

import RepositoryService from '@utils/repoSequelize';

const main = async (): Promise<void> => {
    const CrudRepo = new RepositoryService();

    const { Location, Pobox, Street, Zipcode } = DB.Models;
    try {
        const locations = await CrudRepo.getOneRow(Location);
        const poboxes = await CrudRepo.getOneRow(Pobox);
        const streets = await CrudRepo.getOneRow(Street);
        const zipcodes = await CrudRepo.getOneRow(Zipcode);

        const sample = {
            locationExample: locations,
            poboxExample: poboxes,
            streetsExample: streets,
            zipcodesExample: zipcodes,
        };
        console.log('\n\n', { sample }, '\n\n');
    } catch (error) {
        const output = error instanceof Error ? error.message : 'error test fn';
        logger.error(output);
    }
};

if (NODE_ENV === 'development') {
    main();
}
