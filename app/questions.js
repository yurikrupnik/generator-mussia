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
        type: 'confirm',
        name: 'render',
        message: 'Would you like server side rendering?',
        default: true,
        when: answers => answers.fullstack
    },
    {
        type: 'confirm',
        name: 'db',
        message: 'Would you like to use MongoDB?',
        when: answers => answers.fullstack
    },
    {
        type: 'confirm',
        name: 'auth',
        message: 'Would you scaffold out an authentication boilerplate?',
        when: answers => answers.db
    },
    {
        type: 'checkbox',
        name: 'oauth',
        message: 'Would you like to include additional oAuth strategies?',
        when: answers => answers.auth,
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
        name: 'io',
        message: 'Would you like to use SocketIO?',
        default: true,
        when: answers => answers.fullstack,
    }
];

module.exports = questions;
