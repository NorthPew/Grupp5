import dotenv from 'dotenv'
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import crypto from 'crypto'
import { promisify } from 'util'


const randomBytes = promisify(crypto.randomBytes)

dotenv.config()

const s3 = new S3Client({
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
    })
    
    const command = new PutObjectCommand(params);
    const uploadURL = await getSignedUrl(s3, command, { expiresIn: 60 });
}