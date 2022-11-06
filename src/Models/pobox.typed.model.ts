import { Table, Model, Column } from 'sequelize-typescript';

// interface IPobox {
//     location_id: string;
//     low: string;
//     high: string;
//     zip5: string;
//     zip7: string;
//     updated: Date;
// }

@Table({ timestamps: false, tableName: 'pobox' })
class Pobox extends Model<Pobox> {
    @Column
    location_id: string;

    @Column
    low: string;

    @Column
    high: string;

    @Column
    zip5: string;

    @Column
    zip7: string;

    @Column
    updated: Date;
}

export default Pobox;
