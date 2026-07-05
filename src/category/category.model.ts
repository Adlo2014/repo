import { Table, Column, Model, DataType} from 'sequelize-typescript';
import { CreateCategoryDto } from './dto/create-category.dto';

@Table({ tableName: 'categories', timestamps: true })
export class Category extends Model<Category, CreateCategoryDto> {

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;


}