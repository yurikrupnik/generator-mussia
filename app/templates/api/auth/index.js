import express from 'express';
import passport from 'passport';
import { handleLogout } from './controller';
import { loginUrl, logoutUrl } from './config';

const router = express.Router();

router.post(loginUrl, passport.authenticate('local', { failWithError: true }),
    (req, res) => res.redirect('/'),
    (err, req, res) => {
        console.log('err', err); // eslint-disable-line no-console
        res.redirect('/login');
    });

router.get(logoutUrl, handleLogout);

export default router;
