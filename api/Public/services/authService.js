import md5 from 'md5';
import jwt from 'jsonwebtoken';
import db from '../../src/models';

class authService {

	static async register(body) {
		try {
			const result = await db.sequelize.transaction(async (t) => {
				console.log('body', body);
				const isEmailTaken = await db.Users.findOne({where: { email: body.email }});		
				if (isEmailTaken) return {
					type: false,
					message: 'Email is already taken.'
				};

				const dbUser = await db.Users.create({
					firstName: body.firstName,
					lastName: body.lastName,
					email: body.email,
					password: md5(body.password),
					UserRoles: {
						roleId: body.roleId
					}
				}, {transction: t});
				console.log('dbuser', body.UserRoles[0].roleId);
				const userRole = await db.UserRoles.create( {
					userId: dbUser.id,
					roleId: body.UserRoles[0].roleId

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
				{ expiresIn: '1h' }
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

