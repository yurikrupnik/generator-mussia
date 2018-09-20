const port = Number(process.env.PORT) || 5000;
const isProd = process.env.NODE_ENV === 'production';
const ip = process.env.IP || 'localhost';
const host = process.env.WEBSITE_HOSTNAME || `http://${ip}:${port}`;
const devPort = port + 1;
const devHost = `http://${ip}:${devPort}`;
const baseURL = isProd ? host : devHost;
const localDBUrl = 'mongodb://localhost/<%-name%>';

let databaseUrl;
if (isProd) {
    if (JSON.parse(process.env.DB_LOCAL)) {
        databaseUrl = localDBUrl;
    } else {
        databaseUrl = process.env.DB_URL;
    }
} else {
    databaseUrl = localDBUrl;
}

module.exports = {
    port,
    host,
    devPort,
    devHost,
    databaseUrl,
    baseURL
};
