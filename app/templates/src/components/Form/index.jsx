import React, { Component } from 'react';
import styles from './styles.css';

class FormWithArrays extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-7">
                        <div className={styles.root}>
                            <div className="root">
                                 stam
                            </div>
                            <div>
                                form here
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-5">
                        right side
                    </div>
                </div>
            </div>
        );
    }
}

export default FormWithArrays;
