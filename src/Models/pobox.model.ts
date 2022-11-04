import {
    DataTypes,
    Model,
    // Optional,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
    Sequelize,
} from 'sequelize';

// Location ID	Low	High	ZIP5	ZIP7	Updated

class PoBoxModel extends Model<
    InferAttributes<PoBoxModel>,
    InferCreationAttributes<PoBoxModel>
> {
    declare location_id: CreationOptional<string>;
    declare low: string;
    declare high: string;
    declare zip5: string;
    declare zip7: string;
    declare updated: CreationOptional<Date>;
}

export default function (sequelize: Sequelize): typeof PoBoxModel {
    PoBoxModel.init(
        {
            location_id: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            low: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            high: {
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
        { tableName: 'pobox', timestamps: false, sequelize },
    );
    return PoBoxModel;
}
