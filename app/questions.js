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
        default: true
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
        when: answers => answers.fullstack && answers.db
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
        name: 'ws',
        message: 'Would you like to use WebSockets?',
        default: true,
        when: answers => answers.fullstack,
    }
];

module.exports = questions;
