import React, { Component } from 'react';
import UsersConsumer from '../../api/users/consumer';
import ProjectsConsumer from '../../api/projects/consumer';
import List from '../List';

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <UsersConsumer render={userProps => (
                <ProjectsConsumer render={projectProps => (
                    <div>
                        <h2>
                            projects
                        </h2>
                        <List {...projectProps} />
                        <h2>
                            users
                        </h2>
                        <List {...userProps} />
                    </div>
                )}
                />
            )}
            />
        );
    }
}

export default Container;
