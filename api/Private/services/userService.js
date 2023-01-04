import db from '../../src/models';
import md5 from 'md5';

class userService {

	static async createUser(body) {
		try {
			const user = {
				firstName: body.firstName,
				lastName: body.lastName,
				email: body.email,
				password: md5(body.password),
				role: body.role
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
		catch (error) {
			throw (error);
		}
	}

}
export default userService;