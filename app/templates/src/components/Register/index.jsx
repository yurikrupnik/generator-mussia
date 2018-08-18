import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import socket from '../../services/socket/client';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: [
                {
                    label: '',
                    type: 'text',
                    name: 'nickname',
                    value: '',
                    validate() {
                        return this.value.length;
                    },
                    errorText: 'no lenght',
                    onChange: this.onChange.bind(this),
                    handleBlur: this.handleBlur.bind(this),
                    touched: false,
                }
            ]
        };

        this.onRegister = this.onRegister.bind(this);
    }

    onChange(event) {
        const { target } = event;
        const { value, dataset } = target;
        const { index } = dataset;
        this.setState((prevState) => {
            const item = prevState.form[index];
            item.value = value;
            return prevState;
        });
    }

    onRegister(event) {
        event.preventDefault();
        const { form } = this.state;
        const nickname = form[0].value;
        const avatar = '';
        const newSession = { nickname, avatar };
        socket.emitNewUser(newSession, (err) => {
            if (!err) {
                // console.log('newSession', newSession);
                // setSession(newSession);
            } else {
                this.setState(prevState => ({
                    form: prevState.form.map((field) => {
                        field.errorText = err; // eslint-disable-line no-param-reassign
                        field.value = ''; // eslint-disable-line no-param-reassign
                        return field;
                    })
                }));
            }
        });
    }

    handleBlur(event) {
        const { target } = event;
        const { dataset } = target;
        const { index } = dataset;
        this.setState((prevState) => {
            const item = prevState.form[index];
            item.touched = true;
            return prevState;
        });
    }

    render() {
        const { form } = this.state;
        const hasName = form[0].value;
        return (
            <div className="row center-xs">
                <div className="col-xs-6">
                    <div className="box">
                        <div className="title margin-top-10">
                            Register
                        </div>
                        {form.map((field, index) => (
                            <TextField
                                fullWidth
                                inputProps={{
                                    'data-index': index
                                }}
                                data-index={index}
                                key={field.name}
                                label="Nickname"
                                helperText={!field.validate() && field.errorText}
                                placeholder={field.placeholder}
                                name={field.name}
                                value={field.value}
                                onChange={field.onChange}
                            />
                        ))}
                        <Button
                            onClick={this.onRegister}
                            disabled={!hasName}
                            fullWidth
                            label="Join"
                        >
                            join
                        </Button>

                    </div>
                </div>
            </div>
        );
        // return (
        //     <div>
        //         {form.map((val, index) => (
        //             <div key={val.name}>
        //                 {val.validate() ? null : (
        //                     <div>
        //                         {val.touched && val.errorText}
        //                     </div>
        //                 )}
        //                 <input
        //                     onBlur={val.handleBlur}
        //                     name={val.name}
        //                     type={val.type}
        //                     data-index={index}
        //                     onChange={val.onChange}
        //                     placeholder={val.placeholder}
        //                     value={val.value}
        //                 />
        //             </div>
        //         ))}
        //
        //         <button type="button" onClick={this.onRegister}>
        //             Register
        //         </button>
        //     </div>
        // );
    }
}

export default Register;
