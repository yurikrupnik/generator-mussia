const helpers = require('yeoman-test');
const assert = require('yeoman-assert');
const path = require('path');

describe('generator app', () => {
    it('generate a fullstak project', function () {
        return helpers.run(path.join(__dirname, 'index.js'))
            .withArguments('aris')
            .withPrompts({
                fullstack: false,
                render: false,
                db: false,
                auth: false,
                oauth: [],
                io: false,
            })
            .then(function(res) {
                // assert something about the generator
            });
    });
    it('generate a client project', function () {
        return helpers.run(path.join(__dirname, 'index.js'))
            .withArguments('aris')
            .withPrompts({
                fullstack: true,
                render: true,
                db: true,
                auth: true,
                oauth: ['facebook'],
                io: true,
            })
            .then(() => {
                assert.file([
                    'Dockerfile',
                    '.babelrc',
                    '.eslintrc',
                    '.gitignore',
                    'jestsetup.js',
                    'README.md',
                    'package.json',
                    'LICENSE'
                ]);

                assert.file([
                    'src/services/db/index.js',
                    'src/services/socket/server.js',
                    'src/services/passport/index.js',
                ]);
            });
    });
});
