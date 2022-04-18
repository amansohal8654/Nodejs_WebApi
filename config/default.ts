export default {
    port: 3365,
    dbUri: "mongodb://127.0.0.1:27017/web-api",
    saltWorkFactor: 10,
    accessTokenTtl: "15m",
    refreshTokenTtl: "1y",
    publicKey: `-----BEGIN PUBLIC KEY-----
-----END PUBLIC KEY-----`,

    privateKey: `-----BEGIN RSA PRIVATE KEY-----
-----END RSA PRIVATE KEY-----`,
};
