require('dotenv').config()
// File is for command-line testing
// uploading files to AWS S3

// Require AWS SDK
const AWS = require('aws-sdk')
// Not sure if we need this:
// UUID Package
const uuid = require('uuid')

// Define bucket name to use
const bucket = 'wyang19a-bucket'

// Create S3 Service module instance
const s3 = new AWS.S3()
console.log(s3)

// Create object of params for putObject call:
const params = {
  Bucket: bucket,
  Key: 'file-test.txt',
  Body: 'Hello World!',
  ACL: 'public-read'
}

s3.upload(params).promise()
  .then(console.log)
  .catch(console.error)
