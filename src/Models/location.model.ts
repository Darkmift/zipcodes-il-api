import {
    DataTypes,
    Model,
    // Optional,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
    Sequelize,
} from 'sequelize';
import DB from '@database';

class LocationModel extends Model<
    InferAttributes<LocationModel>,
    InferCreationAttributes<LocationModel>
> {
    // there is no need to use CreationOptional on lastName because nullable attributes
    // are always optional in User.create()
    // id can be undefined during creation when using `autoIncrement`

    declare l_id: CreationOptional<number>;
    declare symbol: string;
    declare name: string;
    declare synonym_name: CreationOptional<string>;
    declare type: CreationOptional<number>;
    declare zip5: string;
    declare zip7: string;
    declare updated: CreationOptional<Date>;
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
                defaultValue: DB.sequelize.col('name'),
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
