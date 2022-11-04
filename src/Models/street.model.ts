import DB from '@/database';
import {
    DataTypes,
    Model,
    // Optional,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
    Sequelize,
} from 'sequelize';

class StreetModel extends Model<
    InferAttributes<StreetModel>,
    InferCreationAttributes<StreetModel>
> {
    declare location_id: CreationOptional<string>;
    declare location_symbol: string;
    declare street_name: string;
    declare street_synonym: CreationOptional<string>;
    declare street_id: string;
    declare street_symbol: string;
    declare updated: CreationOptional<Date>;
}

export default function (sequelize: Sequelize): typeof StreetModel {
    StreetModel.init(
        {
            location_id: {
                type: DataTypes.STRING,
                allowNull: false,
                primaryKey: true,
            },
            location_symbol: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            street_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            street_synonym: {
                type: DataTypes.STRING,
                allowNull: false,
                defaultValue: DB.sequelize.col('street_name'),
            },
            street_id: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            street_symbol: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            updated: {
                type: DataTypes.DATE,
                allowNull: false,
            },
        },
        { tableName: 'street', timestamps: false, sequelize },
    );
    return StreetModel;
}
