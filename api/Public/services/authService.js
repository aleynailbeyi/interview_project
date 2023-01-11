import md5 from 'md5';
import jwt from 'jsonwebtoken';
import db from '../../src/models';

class authService {

	static async register(req) {
		try {
			const result = await db.sequelize.transaction(async (t) => {
				console.log('body', req);
				const isEmailTaken = await db.Users.findOne({where: { email: req.email }});		
				if (isEmailTaken) return {
					type: false,
					message: 'Email is already taken.'
				};

				const dbUser = await db.Users.create({
					firstName: req.firstName,
					lastName: req.lastName,
					email: req.email,
					password: md5(req.password),
					UserRoles: [
						{
							roleId: req.UserRoles[0].roleId
						}
					]
				}, {transction: t});
				console.log('dbuser', req.UserRoles[0].roleId);
				const userRole = await db.UserRoles.create( {
					userId: dbUser.id,
					roleId: req.UserRoles[0].roleId

				}, { transaction: t });
			
				if (!userRole) {
					return { data: null, message: 'Kayıt gerçekleştirilemedi.', type: false };
				}
			});
			return { data: result, message: 'Yeni kayıt oluşturuldu.', type: true };
		} 
		catch (err) {
			throw (err);
		}
	}
	static async login(body) {
		try {
			
			const user = await db.Users.findOne({ where: { email: body.email, password: md5(body.password) } });
			if (!user) {
				return ({
					status: 401,
					type: false,
					message: 'Giriş Yapılamadı.'
				});
			}
			const token = await jwt.sign(
				{ userId: user.id },
				'wrong-secret',
				{ expiresIn: '1d' }
			);
			return {
				status: 200,
				type: true,
				message: 'Giriş Başarılı!',
				data: {
					token
				}
			};
		}
		catch (err) {
			throw (err);
		}
	}	

}
export default authService;

