const multer = require('multer');

const MIME_TYPES = {
  'images/jpg': 'jpg',
  'images/jpeg': 'jpg',
  'images/png': 'png',
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images');
  },
  filename: (req, file, cb) => {
    const name = file.originalname.split(' ').join('_'); // Elemine les espaces entre les nom du fichier
    const extention = MIME_TYPES[file.mimetype]; // Extension du fichier
    console.log(extention);
    cb(null, name + Date.now() + '.' + extention);
  }
})

module.exports = multer({ storage }).single('image');