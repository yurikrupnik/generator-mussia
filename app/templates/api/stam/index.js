import express from 'express';
import config from './config';

const route = express.Router();

route.get(config.url, (req, res) => {
    res.status(200).json([1, 2, 3, 4, 5]);
}); // array

export default route;
