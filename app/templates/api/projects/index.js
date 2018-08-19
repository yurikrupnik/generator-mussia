import express from 'express';
import { url } from './config';
import Model from './model';
import {
    list,
    find,
    removeOne,
    create,
    update
} from '../methods';

const route = express.Router();

route.get(url, list(Model)); // array
route.get(`${url}/:id`, find(Model)); // object
route.post(url, create(Model));
//
route.put(url, update(Model));

route.delete(`${url}/:id`, removeOne(Model)); // id

export default route;
