import multer from 'multer';

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
	  cb(null, 'uploads/');
	},
	filename: async (req, file, cb) => {
	  const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
	  const originalFileName = file.originalname.split('.')[0];
	  const ext = file.originalname.split('.')[1];
	  cb(null, originalFileName + '-' + uniqueSuffix + '.' + ext);
	}
});
const upload = multer({ storage }).array('files', 3); 

export default upload;