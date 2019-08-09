export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "ap-northeast-2",
    BUCKET: "BUCKET_NAME"
  },
  apiGateway: {
    REGION: "ap-northeast-2",
    URL: "SERVERLESS-API-URL"
  },
  cognito: {
    REGION: "ap-northeast-2",
    USER_POOL_ID: "USER_POOL_ID",
    APP_CLIENT_ID: "APP_CLIENT_ID",
    IDENTITY_POOL_ID: "IDENTITY_POOL_ID"
  }
};
