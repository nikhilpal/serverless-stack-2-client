const dev = {
  STRIPE_KEY: "pk_test_5SvOKfa2OxLltmewW8DSxwhj",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-rkg6sy9l2isg"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://n52pao85gg.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_6dUpG6OX3",
    APP_CLIENT_ID: "6mi969c401dh277ttl154bds6a",
    IDENTITY_POOL_ID: "us-east-1:9b0f007c-7dd9-4fae-914e-a5f7860e5e48"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_5SvOKfa2OxLltmewW8DSxwhj",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-1h5n5ttet1hy0"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://api.serverless-stack.seed-demo.club/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_TwYpMXIJH",
    APP_CLIENT_ID: "6kfg0o7qo2i3ndk2ur906sc5fd",
    IDENTITY_POOL_ID: "us-east-1:f4c754b4-24f0-4754-8596-30afedece1fc"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
