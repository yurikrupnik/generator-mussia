import React from 'react';
import './styles.css';
import ThemesConsumer from '../contexts/themes/consumer';
import UsersConsumer from '../../api/users/consumer';
import ProjectsConsumer from '../../api/projects/consumer';
import Form from '../Form';
import List from '../List';

function Dashboard() {
    return (
        <UsersConsumer render={userProps => (
            <ProjectsConsumer render={projectsProps => (
                <div>
                    <h2>
                        Dashboardsds
                    </h2>
                    <List {...userProps} />
                    <List {...projectsProps} />
                    <ThemesConsumer />
                    <ThemesConsumer render={() => (
                        <div>
                            nuuuu
                        </div>
                    )}
                    />
                    <Form />
                </div>
            )}
            />
        )}
        />
    );
}

export default Dashboard;
