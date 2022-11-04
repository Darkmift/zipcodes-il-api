import {
    DataTypes,
    Model,
    // Optional,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
    Sequelize,
} from 'sequelize';

class ZipCodeModel extends Model<
    InferAttributes<ZipCodeModel>,
    InferCreationAttributes<ZipCodeModel>
> {
    declare location_id: CreationOptional<string>;
    declare house_number: string;
    declare entrance: CreationOptional<string>;
    declare zip5: string;
    declare zip7: string;
    declare street_id: string;
    declare remark: string;
    declare updated: CreationOptional<Date>;
}

export default function (sequelize: Sequelize): typeof ZipCodeModel {
    ZipCodeModel.init(
        {
            location_id: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            house_number: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            entrance: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            street_id: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            remark: {
                type: DataTypes.STRING,
                allowNull: false,
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
        { tableName: 'zipcode', timestamps: false, sequelize },
    );

    return ZipCodeModel;
}
