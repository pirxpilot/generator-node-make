'use strict';
var path = require('path');
var Generator = require('yeoman-generator');
var gitConfig = require('git-config');
var askName = require('inquirer-npm-name');
var yosay = require('yosay');
var _ = require('lodash');

module.exports = Generator.extend({
  initializing: function () {
    this.pkg = require('../package.json');
    this.log(yosay(
      'The name of your project shouldn\'t contain "node" or "js" and' +
      '\nshould be a unique ID not already in use at npmjs.org.'
    ));
    this.gitConfig = gitConfig.sync();
    this.props = {};
  },

  prompting: {
    askForModuleName: function () {
      return askName({
        name: 'name',
        message: 'Module Name',
        default: path.basename(process.cwd()),
        filter: _.kebabCase,
        validate: function (str) {
          return str.length > 0;
        }
      }, this).then(function (answer) {
        this.props.name = answer.name;
      }.bind(this));
    },

    askFor: function () {
      var prompts = [{
        name: 'description',
        message: 'Description',
        default: 'The best module ever.'
      }, {
        name: 'homepage',
        message: 'Homepage'
      }, {
        name: 'license',
        message: 'License',
        default: 'MIT'
      }, {
        name: 'githubUsername',
        message: 'GitHub username or organization',
        default: this.gitConfig.github.user,
      }, {
        name: 'authorName',
        message: 'Author\'s Name',
        default: this.gitConfig.user.name,
      }, {
        name: 'authorEmail',
        default: this.gitConfig.user.email,
        message: 'Author\'s Email',
      }, {
        name: 'authorUrl',
        message: 'Author\'s Homepage',
        default: this.gitConfig.user.homepage,
      }, {
        name: 'keywords',
        message: 'Key your keywords (comma to split)'
      }];

      this.currentYear = (new Date()).getFullYear();

      return this.prompt(prompts).then(function (props) {
        if (props.githubUsername) {
          this.repoUrl = props.githubUsername + '/' + this.props.name;
        } else {
          this.repoUrl = 'user/repo';
        }

        this.keywords = props.keywords.split(',').map(function (el) {
          return el.trim();
        });

        this.props = Object.assign(this.props, props);
      }.bind(this));
    }
  },

  writing: {
    app: function () {
      this.slugname = _.kebabCase(this.props.name);
      this.safeSlugname = _.camelCase(this.slugname);

      this.config.save();

      this._copy('editorconfig', '.editorconfig');
      this._copy('jshintrc', '.jshintrc');
      this._copy('gitignore', '.gitignore');
      this._copy('travis.yml', '.travis.yml');

      this._template('Readme.md', 'Readme.md');
      this._template('History.md', 'History.md');
      this._template('Makefile', 'Makefile');
      this._template('_package.json', 'package.json');
    },

    projectfiles: function () {
      this._template('index.js', 'index.js');
      this._template('lib/slugname.js', 'lib/' + this.slugname + '.js');
      this._template('test/slugname.js', 'test/' + this.slugname + '.js');
    }
  },

  install: function () {
    this.yarnInstall([
      'mocha',
      'should',
      'jshint'
    ], { 'dev': true });
  },

  _copy: function (source, destination) {
    this.fs.copy(
      this.templatePath(source),
      this.destinationPath(destination)
    );
  },

  _template: function (template, destination) {
    this.fs.copyTpl(
      this.templatePath(template),
      this.destinationPath(destination),
      this
    );
  }
});
