import { Table, Column, Model, DataType} from 'sequelize-typescript';

@Table
export class Objects extends Model<Objects> {

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string;

}