require('dotenv').config()
// File is for command-line testing
// uploading files to AWS S3

// Require AWS SDK
const AWS = require('aws-sdk')

// Define bucket name to use
const bucket = 'wyang19a-bucket'

// Create S3 Service module instance
const s3 = new AWS.S3()
console.log(s3)

module.exports = (key, body) => {
  // Create object of params for putObject call:
  const params = {
    Bucket: bucket,
    ACL: 'public-read'
  }
  return new Promise((resolve, reject) => {
    // Add key and body params to object
    params.Key = key
    params.Body = body
    s3.upload(params, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}
