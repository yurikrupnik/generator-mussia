import request from '../request';
import { loginUrl, logoutUrl } from './config';

const api = {
    logout: () => request.get(`/api${logoutUrl}`)
        .then(res => res.data)
        .catch(error => error),
    loging: () => request.post(`/api${loginUrl}`)
        .then()
        .catch()
};

export default api;
