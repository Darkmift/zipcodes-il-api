import { Sequelize, DataTypes, Model, Optional } from 'sequelize';

export interface Location {
    l_id: string;
    symbol: string;
    name: string;
    synonym_name: string;
    type: string;
    zip5: string;
    zip7: string;
    updated: Date;
}

export type LocationCreationAttributes = Optional<
    Location,
    'type' | 'synonym_name'
>;

export class LocationModel
    extends Model<Location, LocationCreationAttributes>
    implements Location
{
    public l_id!: string;
    public symbol!: string;
    public name!: string;
    public synonym_name!: string;
    public type!: string;
    public zip5!: string;
    public zip7!: string;
    public updated!: Date;
}

export default function (sequelize: Sequelize): typeof LocationModel {
    LocationModel.init(
        {
            l_id: {
                type: DataTypes.STRING,
                allowNull: false,
                primaryKey: true,
            },
            symbol: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            synonym_name: {
                type: DataTypes.STRING,
                allowNull: false,
                defaultValue: Sequelize.col('name'),
            },
            type: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            zip5: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            zip7: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            updated: {
                type: DataTypes.DATE,
                allowNull: false,
            },
        },
        { tableName: 'location', timestamps: false, sequelize },
    );
    return LocationModel;
}
