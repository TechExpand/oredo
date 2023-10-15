import { Table, Model, Column, DataType, HasOne, BelongsToMany, HasMany, AllowNull, Unique, Default, Index, BelongsTo, ForeignKey } from 'sequelize-typescript';


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



@Table({ timestamps: true, tableName: 'users' })
export class Users extends Model {


	@Index({ name: 'email-index', type: 'UNIQUE', unique: true })
	@AllowNull(false)
	@Column(DataType.STRING)
	email!: string;

	// @AllowNull(false)
	// @Column(DataType.STRING)
	// password!: string;

	

	@Default(UserStatus.ACTIVE)
	@Column(DataType.ENUM(UserStatus.ACTIVE, UserStatus.INACTIVE, UserStatus.SUSPENDED))
	status!: UserStatus;



	


	// @ForeignKey(() => Wallet)
	// @AllowNull(true)
	// @Column(DataType.INTEGER)
    // walletId!: number;


	// @HasOne(() => Wallet)
	// wallet!: Wallet;


	

// relationships

}
