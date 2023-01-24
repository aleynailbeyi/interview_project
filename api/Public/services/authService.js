import md5 from 'md5';
import jwt from 'jsonwebtoken';
import db from '../../src/models';

class authService {

	static async register(req) {
		try {
			const result = await db.sequelize.transaction(async (t) => {
		
				const isEmailTaken = await db.Users.findOne({where: { email: req.email }});		
				if (isEmailTaken) return {
					type: false,
					message: 'Email is already taken.'
				};

				const dbUser = await db.Users.create({
					firstName: req.firstName,
					lastName: req.lastName,
					email: req.email,
					password: md5(req.password)
				}, {transction: t});
			
				if (!dbUser) {
					return { data: null, message: 'Kayıt gerçekleştirilemedi.', type: false };
				}
				
			});
			return { data: result, message: 'Yeni kayıt oluşturuldu.', type: true };
		}
		catch (err) {
			throw (err);
		}
	}
	static async login(req) {
		try {
			
			const user = await db.Users.findOne({ where: { email: req.email, password: md5(req.password) } });
			if (!user) {
				return ({
					type: false,
					message: 'Giriş Yapılamadı.'
				});
			}
			
			const token = jwt.sign(
				{ userId: user.id },
				'wrong-secret',
				{ expiresIn: '1d' }
			);
			return {
				type: true,
				message: 'Giriş Başarılı!',
				data: {token: token}
			};
		}
		catch (err) {
			throw (err);
		}
	}	

}
export default authService;

