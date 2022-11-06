import { Table, Model, Column } from 'sequelize-typescript';

// interface IZipcode {
// location_id:string;
// house_number:number;
// entrance:string;
// zip5:string;
// zip7:string;
// street_id:string;
// remark:string;
// updated:Date;
// }

@Table({ timestamps: false, tableName: 'zipcode' })
class Zipcode extends Model<Zipcode> {
    @Column
    location_id: string;

    @Column
    house_number: number;

    @Column
    entrance: string;

    @Column
    zip5: string;

    @Column
    zip7: string;

    @Column
    street_id: string;

    @Column
    remark: string;

    @Column
    updated: Date;
}

export default Zipcode;
