var Generator = require('yeoman-generator');
var reduce = require('lodash.reduce');
const questions = require('./questions');

class App extends Generator {
    constructor(args, opts) {
        super(args, opts);
        this.argument('appname', { type: String, required: true });
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
        this.config.save();
        this._createFilters(this.answers);
    }

    _handleCore(filters, options) {
        this.fs.copyTpl(
            this.templatePath('core/**'),
            this.destinationRoot(),
            {
                name: options.appname,
                filters
            }
        );
        this.fs.copyTpl(
            this.templatePath('core/.*'),
            this.destinationRoot(),
            { filters }
        );
    }

    _handleWebpack(answers) {
        if (answers.fullstack) {
            this.fs.copy(
                this.templatePath('webpack/**'),
                this.destinationRoot(),
            );
        } else  {
            this.fs.copy(
                this.templatePath('webpack/webpack.config.client.js'),
                this.destinationPath('webpack.config.client.js'),
            );
            this.fs.copy(
                this.templatePath('webpack/webpack.config.serve.js'),
                this.destinationPath('webpack.config.serve.js'),
            );
        }
    }

    _handleServices(answers) {
        if (answers.fullstack) {
            this.fs.copy(
                this.templatePath('services/**'),
                this.destinationPath('src/services'),
            );
        }
    }

    _handleApi(filters) {
        this.fs.copyTpl(
            this.templatePath('api/**'),
            this.destinationPath('src/api'),
            { filters }
        );
    }

    _handleComponents(filters) {
        this.fs.copyTpl(
            this.templatePath('components/**'),
            this.destinationPath('src/components'),
            { filters }
        );
    }

    writing() {
        const { answers, options, filters } = this;

        this._handleServices(answers);
        this._handleWebpack(answers);
        this._handleCore(filters, options);
        this._handleApi(filters);
        this._handleComponents(filters);

        this.fs.copyTpl(
            this.templatePath('src/'),
            this.destinationPath(`src`),
            { filters }
        );

        console.log('this.answers', this.answers);
        console.log('this.filters', this.filters);
    }

    install() {
        this.npmInstall();
    }

    end() {
        this.log('You have finished building the generator, Thank you for using yuri');
    }
}

module.exports = App;