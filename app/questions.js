const questions = [
    {
        type: 'list',
        name: 'fullstack',
        message: 'use app for',
        choices: [
            {
                value: true,
                name: 'Fullstack'
            },
            {
                value: false,
                name: 'Client'
            }
        ]
    },
    {
        type: 'checkbox',
        name: 'stylesheets',
        message: 'use style compiler',
        choices: [
            {
                value: 'css',
                name: 'CSS',
                checked: true
            },
            {
                value: 'sass',
                name: 'SASS',
                checked: true
            }
        ]
    },
    {
        type: 'confirm',
        name: 'loadable',
        message: 'would you like react-loadable?',
        default: true,
        when: answers => answers.fullstack
    },
    {
        type: 'list',
        name: 'odms',
        message: 'What would you like to use for data modeling?',
        choices: [{
            value: 'mongoose',
            name: 'Mongoose (MongoDB)',
            // checked: true
        }, {
            value: 'sequelize',
            name: 'Sequelize (MySQL, SQLite, MariaDB, PostgreSQL)',
            // checked: false
        }],
        when: answers => answers.fullstack
    },
    {
        type: 'list',
        name: 'models',
        message: 'What would you like to use for the default models?',
        choices: ['Mongoose', 'Sequelize'],
        filter: val => val.toLowerCase(),
        when: answers => answers.fullstack
        // when: answers => answers.odms && answers.odms.length > 1
    },
    {
        type: 'confirm',
        name: 'auth',
        message: 'Would you scaffold out an authentication boilerplate?',
        // when: answers => answers.odms && answers.odms.length !== 0
        when: answers => answers.fullstack
    },
    {
        type: 'checkbox',
        name: 'oauth',
        message: 'Would you like to include additional oAuth strategies?',
        when: answers => answers.fullstack && answers.auth,
        choices: [
            {
                value: 'googleAuth',
                name: 'Google',
                checked: true
            },
            {
                value: 'facebookAuth',
                name: 'Facebook',
                checked: true
            },
            {
                value: 'twitterAuth',
                name: 'Twitter',
                checked: true
            }]
    },
    {
        type: 'confirm',
        name: 'ws',
        message: 'Would you like to use WebSockets?',
        // to-do: should not be dependent on ODMs
        // when: answers => answers.odms && answers.odms.length !== 0,
        default: true,
        when: answers => answers.fullstack,
    }
];

module.exports = questions;
