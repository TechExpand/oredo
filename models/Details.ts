import { Table, Model, Column, DataType, HasOne, BelongsToMany, HasMany, AllowNull, Unique, Default, Index, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { Market } from './Market';
import { Info } from './Info';




@Table({ timestamps: true, tableName: 'details' })
export class Details extends Model {
   
    @ForeignKey(() => Info)
	@AllowNull(true)
	@Column(DataType.INTEGER)
    infoId!: number;
   

    @Default("")
    @AllowNull(true)
	@Column(DataType.STRING)
	fullname!: string;


    @Default("")
    @AllowNull(true)
	@Column(DataType.STRING)
	phoneNum!: string;



    @Default("")
    @AllowNull(true)
	@Column(DataType.STRING)
	address!: string;




    @Default("")
    @AllowNull(true)
	@Column(DataType.STRING)
	typeOfItemSold!: string;



    @Default("")
    @AllowNull(true)
	@Column(DataType.STRING)
	itemWorth!: string;



    @Default("")
    @AllowNull(true)
	@Column(DataType.STRING)
	comment!: string;


    @Default("")
    @AllowNull(true)
	@Column(DataType.STRING)
	image!: string;
	
	@BelongsTo(() => Info, { onDelete: 'CASCADE' })
	info!: Info;

}
