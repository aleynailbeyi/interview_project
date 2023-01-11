const options = {
	swaggerDefinition: {
		info: {
			description: 'Interview Api',
			title: 'Swagger Interview Api',
			version: '1.0.0'
		},
		host: 'localhost:3000',
		basePath: '/',
		produces: [
			'application/json',
			'multipart/form-data'
		],
		schemes: [ 'HTTP' ],
		securityDefinitions: {
			JWT: {
				type: 'apiKey',
				in: 'header',
				name: 'Authorization',
				description: 'Authorization with JWT'
			}

		}
	},
	basedir: __dirname,
	files: [
		'../../public/controllers/*.js',
		'../../private/controllers/*.js'
	]
};
export default options;
