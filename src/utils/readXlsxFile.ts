import xlsx from 'node-xlsx';
import { logger } from './logger';

export default function parseXlsx(xlsxPath: string) {
    try {
        const sheet = xlsx.parse(xlsxPath);
        return sheet[0].data;
    } catch (error) {
        logger.error('Error parsing file ' + xlsxPath);
        return null;
    }
}
