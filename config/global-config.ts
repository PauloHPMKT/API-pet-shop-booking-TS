import "gotenv/config";

export default {
	urlEnconded: {
		extended: true,
	},
	development: {
		host_connection: process.env.DB_STRING_DEVELOPMENT,
	},
	tests: {},
	production: {},
};
