import md5 from 'md5';
import jwt from 'jsonwebtoken';
import db from '../../src/models';

class authService {

	static async register(body) {
		try {
			const user = {
				firstName: body.firstName,
				lastName: body.lastName,
				email: body.email,
				password: md5(body.password)
			};
			const dbuser = await db.Users.findOne({
				where: {
					email: user.email
				}
			});
			if (dbuser) {
				return { type: false, message: 'Veritabanında böyle bir kayıt var.' };
			}
			const newUser = await db.Users.create(user);
			if (!newUser) {
				return { data: null, message: 'Kayıt gerçekleştirilemedi.', type: false };
			}
			return { data: newUser, message: 'Yeni kayıt oluşturuldu.', type: true };
		} 
		catch (err) {
			throw (err);
		}
	}
	static async login(body) {
		try {
			const { email, password } = body;
			password !== md5(password);
			const user = await db.Users.findOne({ where: { email: email, password: password } });
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

