/* this file is used in webpack client for dev port and proxy host */
const port = Number(process.env.PORT) || 5000;
const isProd = process.env.NODE_ENV === 'production';
const baseURL = `http://localhost:${isProd || process.env.DEBUG ? port : port + 1}`;
const databaseUrl = process.env.DATABASE_URL || 'mongodb://localhost/<%-name%>';

module.exports = {
    port,
    databaseUrl,
    baseURL,
    isProd
};
