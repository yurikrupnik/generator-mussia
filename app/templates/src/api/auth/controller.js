import passport from 'passport';

function handleLogin(req, res, next) {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            next(err);
        }
        if (!user) {
            // res.locals.error = [info];
            res.status(500).json({ error: 'message' });
        } else {
            req.logIn(user, (err) => {
                if (err) {
                    next(err);
                }
                res.redirect('/');
            });
        }
    })(req, res, next);
}

function handleLogout(req, res, next) {
    req.session.destroy((err) => {
        if (err) {
            next(err);
        } else {
            res.redirect('/register');
        }
    });
}

export {
    handleLogin,
    handleLogout
};
