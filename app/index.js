var Generator = require('yeoman-generator');
var reduce = require('lodash.reduce');
// var child = require('child_process');
// var exec = child.exec;
// var pkg = require('../../package');
const questions = require('./questions');
class App extends Generator {
    constructor(args, opts) {
        super(args, opts);
        this.argument('appname', { type: String, required: true });
    }


    async prompting() {
        this.answers = await this.prompt(questions);
    }

    configuring() {
        this.destinationRoot(this.options.appname);
        this.config.save();
        this._createFilters();
    }

    _handleWebpack() {
        if (this.answers.app) {
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

    static convertArrayToTrueValue(data) {
        return data.reduce((acc, next) => {
            acc[next] = true;
            return acc;
        }, {});
    }

    _createFilters() {
        this.filters = reduce(this.answers, (acc, next, key) => {
            acc[key] = Array.isArray(next) ? App.convertArrayToTrueValue(next) : next;
            return acc;
        }, {});
    }

    writing() {

        const { answers, options, filters } = this;

        console.log('answers', answers);
        console.log('filters', filters);
        this.fs.copyTpl(
            this.templatePath('core/**'),
            this.destinationRoot(),
            {
                name: options.appname,
                filters
            }
        );
        this.fs.copy(
            this.templatePath('core/.*'),
            this.destinationRoot()
        );
        this._handleWebpack();

        this.fs.copy(
            this.templatePath('src/'),
            this.destinationPath(`src`),
        );

        // console.log('this.answers', this.answers.stylesheet);
    }

    install() {
        // this.npmInstall();
    }

    end() {
        this.log('You have finished building the generator, Thank you for using yuri');
    }
}

module.exports = App;