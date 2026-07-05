import { Table, Column, Model, DataType} from 'sequelize-typescript';
import { CreateProductDto } from './dto/create-product.dto';


@Table({ tableName: 'categories', timestamps: true })
export class Category extends Model<Category, CreateProductDto> {

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;


}