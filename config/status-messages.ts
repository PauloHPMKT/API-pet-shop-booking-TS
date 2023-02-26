export default {
	httpStatusCode: {
		OK: 200,
		CREATED: 201,
		NO_CONTENT: 204,
		BAD_REQUEST: 400,
		UNAUTHORIZED: 401,
		PAYMENT_REQUIRED: 402,
		FORBIDEN: 403,
		NOT_FOUND: 404,
		CONFLICT: 409,
		UNPROCESSABLE_ENTITY: 422,
		INTERNAL_SERVER_ERROR: 500,
		BAD_GATEWAY: 502,
	},
	errorMessage: {
		INTERNAL_SERVER_ERROR: {
			code: 500,
			message: "Erro no servidor",
		},
	},
};
