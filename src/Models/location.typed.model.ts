import { Optional } from 'sequelize';
import { Table, Model } from 'sequelize-typescript';

interface LocationAttributes {
    l_id: string;
    symbol: string;
    name: string;
    synonym_name: string;
    type: string;
    zip5: string;
    zip7: string;
    updated: Date;
}

type LocationCreationAttributes = Optional<
    LocationAttributes,
    'type' | 'synonym_name'
>;

@Table
class Location extends Model<LocationAttributes, LocationCreationAttributes> {}

export default Location;
