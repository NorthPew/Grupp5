import dotenv from 'dotenv'
import aws from 'aws-sdk'
import crypto from 'crypto'
import { promisify } from 'util'


const randomBytes = promisify(crypto.randomBytes)

dotenv.config()

const s3 = new aws.S3({
    region: 'eu-north-1',
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    signatureVersion: 'v4'
})

export const generateUploadURL = async () => {

    const rawBytes = await randomBytes(16)
    const imageName = rawBytes.toString('hex')

    const params = ({
        Bucket: "s3grupp5bucket",
        Key: imageName,
        Expires: 60
    })

    return uploadURL = await s3.getSignedUrlPromise('putObject', params)
}