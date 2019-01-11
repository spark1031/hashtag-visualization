const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
require('dotenv').config();

console.log(process.env.AWSSecretKey, process.env.AWSAccessKeyId);

aws.config.update({
  secretAccessKey: process.env.AWSSecretKey,
  accessKeyId: process.env.AWSAccessKeyId,
  region: 'us-east-2'
});

const s3 = new aws.S3();

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'hashtag-visualization',
    acl: 'public-read',
    metadata: (req, file, cb) => {
      cb(null, { fieldName: 'TESTING FILE UPLOAD' });
    },
    key: (req, file, cb) => {
      cb(null, Date.now().toString());
    }
  })
});

module.exports = upload;