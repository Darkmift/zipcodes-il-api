import { Table, Model, Column, PrimaryKey } from 'sequelize-typescript';

// interface IStreet {
//     location_id: string;
//     location_symbol: string;
//     street_name: string;
//     street_synonym: string;
//     street_id: string;
//     street_symbol: string;
//     updated: Date;
// }

@Table({ timestamps: false, tableName: 'street' })
class Street extends Model<Street> {
    @PrimaryKey
    @Column
    street_id: string;

    @Column
    location_id: string;

    @Column
    location_symbol: string;

    @Column
    street_name: string;

    @Column
    street_synonym: string;

    @Column
    street_symbol: string;

    @Column
    updated: Date;
}

export default Street;
