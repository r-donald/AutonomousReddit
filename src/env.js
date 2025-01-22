import 'dotenv/config';

export const Env = {
	POST_URL: process.env.POST_URL,
	CLIENT_ID: process.env.CLIENT_ID,
	CLIENT_SECRET: process.env.CLIENT_SECRET,
	USERNAME: process.env.USERNAME,
	PASSWORD: process.env.PASSWORD,
	HOOK_PORT: Number(process.env.HOOK_PORT),
};

if (!Env.POST_URL) throw new Error('Missing ENV value: POST_URL');
if (!Env.CLIENT_ID) throw new Error('Missing ENV value: CLIENT_ID');
if (!Env.CLIENT_SECRET) throw new Error('Missing ENV value: CLIENT_SECRET');
if (!Env.USERNAME) throw new Error('Missing ENV value: USERNAME');
if (!Env.PASSWORD) throw new Error('Missing ENV value: PASSWORD');
if (isNaN(Env.HOOK_PORT)) throw new Error('Invalid ENV value: HOOK_PORT');
