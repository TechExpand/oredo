import { Table, Model, Column, DataType, HasOne, BelongsToMany, HasMany, AllowNull, Unique, Default, Index, BelongsTo, ForeignKey } from 'sequelize-typescript';



@Table({ timestamps: true, tableName: 'market' })
export class Market extends Model {
	@AllowNull(false)
	@Column(DataType.STRING)
	name!: string;
}
