import AWS from 'aws-sdk';

window.AWS = AWS;

window.AWS.config.update({
  accessKeyId: 'AKIAQHMIJWQQJ6TQ7G6S',
  region: 'eu-north-1'
});

export const s3 = new window.AWS.S3();


let bucketParams = window.bucketParams = {
    Bucket: 's3towebbbgrupparbete'

    // arn:aws:s3:::s3towebbbgrupparbete

}

export {bucketParams} 