import { Table, Model, Column, DataType, HasOne, BelongsToMany, HasMany, AllowNull, Unique, Default, Index, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { Market } from './Market';
import { Details } from './Details';



// export enum UserGender {
// 	MALE = 'MALE',
// 	FEMALE = 'FEMALE',
// 	OTHER = 'OTHER',
// }

export enum UserStatus {
	ACTIVE = 'ACTIVE',
	INACTIVE = 'INACTIVE',
	SUSPENDED = 'SUSPENDED',
}



export enum UserState {
	STEP_ONE = 'STEP_ONE',
	STEP_TWO = 'STEP_TWO',
	STEP_THREE = 'STEP_THREE',
	VERIFIED = 'VERIFIED',
}



@Table({ timestamps: true, tableName: 'info' })
export class Info extends Model {
  
    @ForeignKey(() => Market)
	@AllowNull(true)
	@Column(DataType.INTEGER)
    marketId!: number;



    @AllowNull(false)
	@Column(DataType.STRING)
	spaceCategory!: string;


    @Default("")
    @AllowNull(true)
	@Column(DataType.STRING)
	storeType!: string;



    @Default("")
    @AllowNull(true)
	@Column(DataType.STRING)
	noOfShops!: string;




    @Default("")
    @AllowNull(true)
	@Column(DataType.STRING)
	typeOfAllotee!: string;

	
	@HasMany(() => Details, { onDelete: 'CASCADE' })
	profession!: Details[];


}
