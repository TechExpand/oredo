import * as dotenv from 'dotenv';
dotenv.config();

type Config = {
	NODE_ENV: string | undefined;
	PORT: number | undefined;
	SSL: boolean | undefined;
	DBNAME: any;
	DBUSERNAME: any | undefined;
	DBPASSWORD: string | undefined;
	DBHOST: string | undefined;
	DBPORT: number | undefined;
	DBDIALECT: string | undefined;
	PUBLIC_ROUTES: string[] | [];
	BUSINESS_PUBLIC_ROUTES: string[] | [];
};

const getConfig = (): Config => {
	return {
		NODE_ENV: process.env.NODE_ENV,
		PORT: Number(process.env.PORT),
		SSL: true,
		DBNAME: process.env.DBNAME,
		DBUSERNAME: process.env.DBUSERNAME,
		DBPASSWORD: process.env.DBPASSWORD,
		DBHOST: process.env.DBHOST,
		DBPORT: Number(process.env.DBPORT),
		DBDIALECT: process.env.DBDIALECT,
		
		PUBLIC_ROUTES: [
			'/api',
			'/',
			'/api/send-otp',
			'/api/register',
			'/api/verify-otp',
			'/api/change-password',
			'/api/login',
			'/api/sector',
			'/api/profession',
		],
		BUSINESS_PUBLIC_ROUTES: [
			
		],
	};
};

const getSanitzedConfig = (config: Config) => {
	for (const [key, value] of Object.entries(config)) {
		if (value === undefined) {
			throw new Error(`Missing key ${key} in .env`);
		}
	}
	return config as Config;
};

const config = getConfig();
const sanitizedConfig = getSanitzedConfig(config);

export default sanitizedConfig;
