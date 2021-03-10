export const config = {
  "dev": {
    "username": "udagramxaxadev",
    "password": process.env.AWS_RDS_P,
    "database": "udagramxaxadev",
    "host": "udagramxaxadev.cvxrm0hmag7x.us-east-2.rds.amazonaws.com",
    "dialect": "postgres",
    "aws_region": "us-east-2",
    "aws_profile": "udagram-xaxa-dev",
    "aws_media_bucket": "udagram-xaxa-dev"
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  }
}
