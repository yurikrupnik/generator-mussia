var Generator = require('yeoman-generator');
var reduce = require('lodash.reduce');
const questions = require('./questions');

class App extends Generator {
    constructor(args, opts) {
        super(args, opts);
        this.argument('appname', {type: String, required: true});
    }

    _createFilters(answers) {
        this.filters = reduce(answers, (acc, next, key) => {
            acc[key] = Array.isArray(next) ? next.reduce((acc, next) => {
                acc[next] = true;
                return acc;
            }, {}) : next;
            return acc;
        }, {});
    }

    async prompting() {
        this.answers = await this.prompt(questions);
    }

    configuring() {
        this.destinationRoot(this.options.appname);
        this._createFilters(this.answers);
        this.config.set(this.filters);
    }

    _handleCore(filters, options) {
        if (filters.fullstack) {
            this.fs.copyTpl(
                this.templatePath('server.jsx'),
                this.destinationPath('src/server.jsx'),
                {filters}
            );
        }
        this.fs.copyTpl(
            this.templatePath('client.jsx'),
            this.destinationPath('src/client.jsx'),
            {filters}
        );
        this.fs.copyTpl(
            this.templatePath('_package.json'),
            this.destinationPath('package.json'),
            {
                name: options.appname,
                filters,
            }
        );
        this.fs.copy(
            this.templatePath('core/'),
            this.destinationRoot(),
            {globOptions: {dot: true}}
        );
    }

    _handleWebpack(filters) {
        if (filters.fullstack) {
            this.fs.copyTpl(
                this.templatePath('webpack/**'),
                this.destinationRoot()
            );
        } else {
            this.fs.copy(
                this.templatePath('webpack/webpack.config.client.js'),
                this.destinationPath('webpack.config.client.js')
            );
        }
    }

    _handleServices(filters) {
        if (filters.db) {
            this.fs.copy(
                this.templatePath('services/db'),
                this.destinationPath('src/services/db')
            );
        }

        if (filters.io) {
            this.fs.copy(
                this.templatePath('services/socket'),
                this.destinationPath('src/services/socket')
            );
        }

        if (filters.auth) {
            this.fs.copy(
                this.templatePath('services/passport'),
                this.destinationPath('src/services/passport')
            );
        }

        if (filters.fullstack) {
            this.fs.copy(
                this.templatePath('services/render.jsx'),
                this.destinationPath('src/services/render.jsx'),
            );
        }
    }

    _handleApi(filters) {
        if (filters.fullstack) {
            this.fs.copy(
                this.templatePath('api/methods.js'),
                this.destinationPath('src/api/methods.js')
            );
            this.fs.copyTpl(
                this.templatePath('api/index.js'),
                this.destinationPath('src/api/index.js'),
                {filters}
            );
            this.fs.copy(
                this.templatePath('api/stam'),
                this.destinationPath('src/api/stam')
            );
        }
        if (filters.auth) {
            this.fs.copy(
                this.templatePath('api/auth'),
                this.destinationPath('src/api/auth')
            );
        }
        if (filters.db) {
            this.fs.copy(
                this.templatePath('api/users'),
                this.destinationPath('src/api/users')
            );
            this.fs.copy(
                this.templatePath('api/projects'),
                this.destinationPath('src/api/projects')
            );
        }

        this.fs.copyTpl(
            this.templatePath('api/providers.jsx'),
            this.destinationPath('src/api/providers.jsx'),
            {filters}
        );
        this.fs.copy(
            this.templatePath('api/request.js'),
            this.destinationPath('src/api/request.js')
        );
        this.fs.copy(
            this.templatePath('api/dataContainer.jsx'),
            this.destinationPath('src/api/dataContainer.jsx')
        );
        this.fs.copy(
            this.templatePath('api/__mocks__'),
            this.destinationPath('src/api/__mocks__')
        );
        this.fs.copy(
            this.templatePath('api/__tests__'),
            this.destinationPath('src/api/__tests__')
        );
    }

    _handleComponents(filters) {
        this.fs.copy(
            this.templatePath('components/__mocks__'),
            this.destinationPath('src/components/__mocks__')
        );
        this.fs.copyTpl(
            this.templatePath('components/routes.js'),
            this.destinationPath('src/components/routes.js'),
            {filters}
        );

        if (filters.io) {
            this.fs.copy(
                this.templatePath('components/Register'),
                this.destinationPath('src/components/Register')
            );
            this.fs.copy(
                this.templatePath('components/ChatRoom'),
                this.destinationPath('src/components/ChatRoom')
            );
        }
        if (filters.db) {
            this.fs.copy(
                this.templatePath('components/Dashboard'),
                this.destinationPath('src/components/Dashboard')
            );
            this.fs.copy(
                this.templatePath('components/Projects'),
                this.destinationPath('src/components/Projects')
            );
            this.fs.copy(
                this.templatePath('components/Users'),
                this.destinationPath('src/components/Users')
            );
        }

        this.fs.copyTpl(
            this.templatePath('components/routes.js'),
            this.destinationPath('src/components/routes.js'),
            {filters}
        );

        this.fs.copyTpl(
            this.templatePath('components/App'),
            this.destinationPath('src/components/App'),
            {filters}
        );
        this.fs.copy(
            this.templatePath('components/contexts'),
            this.destinationPath('src/components/contexts')
        );
        this.fs.copy(
            this.templatePath('components/Loadable'),
            this.destinationPath('src/components/Loadable')
        );
        this.fs.copy(
            this.templatePath('components/Router'),
            this.destinationPath('src/components/Router')
        );
        this.fs.copy(
            this.templatePath('components/Spinner'),
            this.destinationPath('src/components/Spinner')
        );
        this.fs.copy(
            this.templatePath('components/about'),
            this.destinationPath('src/components/About')
        );
        this.fs.copy(
            this.templatePath('components/Topics'),
            this.destinationPath('src/components/Topics')
        );
        this.fs.copy(
            this.templatePath('components/List'),
            this.destinationPath('src/components/List')
        );
        this.fs.copy(
            this.templatePath('components/Form'),
            this.destinationPath('src/components/Form')
        );
    }

    _handleSrc(filters) {
        this.fs.copyTpl(
            this.templatePath('src/'),
            this.destinationPath(`src`),
            {
                name: this.options.appname,
                filters
            }
        );
    }

    writing() {
        const {options, filters} = this;
        this._handleServices(filters);
        this._handleWebpack(filters);
        this._handleCore(filters, options);
        this._handleApi(filters);
        this._handleComponents(filters);
        this._handleSrc(filters);
    }

    install() {
        const { filters } = this;
        this.npmInstall([
            'react',
            'prop-types',
            'react-dom',
            'react-router',
            'react-router-dom',
            '@material-ui/core',
            'axios',
            'flexboxgrid',
            'react-loadable'
        ]);

        if (filters.fullstack) {
            this.npmInstall([
                'express',
                'ejs',
                'morgan'
            ]);
        }

        if (filters.db) {
            this.npmInstall([
                'connect-mongo',
                'express-session',
                'mongoose'
            ]);
        }

        if (filters.auth) {
            this.npmInstall([
                'bcrypt',
                'faker',
                'passport',
                'passport-local',
                'passport-facebook',
                'shortid'
            ]);
        }

        if (filters.io) {
            this.npmInstall([
                'socket.io',
                'socket.io-client'
            ]);
        }

        this.npmInstall();
    }

    end() {
        this.log(`You have finished building ${this.options.appname}.`);
    }
}

module.exports = App;
