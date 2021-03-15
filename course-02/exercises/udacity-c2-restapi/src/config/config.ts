export const config = {
  "dev": {
    "username": process.env.AWS_RDS_U,
    "password": process.env.AWS_RDS_P,
    "database": process.env.AWS_RDS_NAME,
    "host": process.env.AWS_RDS_HOST,
    "dialect": "postgres",
    "aws_region": process.env.AWS_REGION,
    "aws_profile": process.env.AWS_PROFILE,
    "aws_media_bucket": process.env.AWS_MEDIA_BUCKET
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  },
  "jwt": {
    "secret": process.env.AWS_JWT_KEY
  }
}
