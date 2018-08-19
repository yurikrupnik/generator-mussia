import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

const style = {
    marginTop: '15px',
    marginBottom: '15px',
    marginLeft: '0',
    marginRight: '0',
};

export default () => (
    <div className="row center-xs">
        <div className="col-xs-6">
            <form className="box" method="POST" action="api/auth/login">
                <div className="title margin-top-10">
                    Auth
                </div>
                <TextField
                    fullWidth
                    label="Email Field"
                    placeholder="enter email"
                    type="email"
                    name="email"
                />
                <TextField
                    fullWidth
                    label="Password Field"
                    placeholder="enter password"
                    type="password"
                    name="password"
                />

                <Button
                    fullWidth
                    label="Join now"
                    type="submit"
                >
                    Register
                </Button>

                <Divider style={style} />

                <a href="/auth/facebook">
                    <Button label="Continue with Facebook" fullWidth>
                        facebook
                    </Button>
                </a>
                <a href="/auth/flickr">
                    <Button label="Continue with Flickr" fullWidth>
                        flickr
                    </Button>
                </a>
            </form>
        </div>
    </div>
);
