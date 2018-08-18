var Generator = require('yeoman-generator');
var reduce = require('lodash.reduce');
// var child = require('child_process');
// var exec = child.exec;
// var pkg = require('../../package');
// const questions = require('./questions');
class Route extends Generator {
    // The name `constructor` is important here
    constructor(args, opts) {
        // Calling the super constructor is important so our generator is correctly set up
        super(args, opts);
        // this.destinationRoot(this.options.appname);
        // this.config.save();
        this.argument('route', { type: String, required: true });
        this.state = {

        }
        // Next, add your custom code
        // this.option('babel'); // This method adds support for a `--babel` flag
        // this.sourceRoot('src/')
    }

    writing() {
        console.log('this.options.route', this.options.route);
    }

    install() {
        // this.npmInstall();
    }

    end() {
        this.log('You have finished building the generator, Thank you for using yuri');
    }
}

module.exports = Route;