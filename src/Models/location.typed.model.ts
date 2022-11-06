import { Optional } from 'sequelize';
import { Table, Model, Column, PrimaryKey } from 'sequelize-typescript';

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

@Table({ timestamps: false, tableName: 'location' })
class Location extends Model<LocationAttributes, LocationCreationAttributes> {
    @PrimaryKey
    @Column
    l_id: string;

    @Column
    symbol: string;

    @Column
    name: string;

    @Column
    synonym_name: string;

    @Column
    type: string;

    @Column
    zip5: string;

    @Column
    zip7: string;

    @Column
    updated: Date;
}

export default Location;
