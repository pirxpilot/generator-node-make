const path = require('path');
const Generator = require('yeoman-generator');
const gitConfig = require('git-config');
const askName = require('inquirer-npm-name');
const yosay = require('yosay');
const _ = require('lodash');

module.exports = class extends Generator {
  initializing() {
    this.env.options.nodePackageManager = 'yarn';
    this.pkg = require('../package.json');
    this.log(yosay(`Nice names only please`));
    this.gitConfig = gitConfig.sync();
    this.props = {};
  }

  async prompting() {
    const { name } = await askName({
      name: 'name',
      message: 'Module Name',
      default: path.basename(process.cwd()),
      filter: _.kebabCase,
      validate({ length }) {
        return length > 0;
      }
    }, this);
    this.props.name = name;

    const prompts = [{
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
      default: this.gitConfig?.github?.user,
    }, {
      name: 'authorName',
      message: 'Author\'s Name',
      default: this.gitConfig?.user?.name,
    }, {
      name: 'authorEmail',
      default: this.gitConfig?.user?.email,
      message: 'Author\'s Email',
    }, {
      name: 'authorUrl',
      message: 'Author\'s Homepage',
      default: this.gitConfig?.user?.homepage,
    }, {
      name: 'keywords',
      message: 'Key your keywords (comma to split)'
    }];

    this.currentYear = (new Date()).getFullYear();

    const props = await this.prompt(prompts);
    if (props.githubUsername) {
      this.repoUrl = `${props.githubUsername}/${this.props.name}`;
    } else {
      this.repoUrl = 'user/repo';
    }

    this.keywords = props.keywords.split(',').map(el => el.trim());

    this.props = Object.assign(this.props, props);
  }

  async writing() {
    // app
    this.slugname = _.kebabCase(this.props.name);
    this.safeSlugname = _.camelCase(this.slugname);

    this.config.save();

    this._copy('editorconfig', '.editorconfig');
    this._copy('jshintrc', '.jshintrc');
    this._copy('gitignore', '.gitignore');
    this._copy('github/workflows/check.yaml', '.github/workflows/check.yaml');

    this._template('Readme.md', 'Readme.md');
    this._template('History.md', 'History.md');
    this._template('Makefile', 'Makefile');
    this._template('_package.json', 'package.json');

    // project files
    this._template('index.js', 'index.js');
    this._template('lib/slugname.js', `lib/${this.slugname}.js`);
    this._template('test/slugname.js', `test/${this.slugname}.js`);

    await this.addDevDependencies({
      '@pirxpilot/jshint': '~3'
    });
  }

  _copy(source, destination) {
    this.fs.copy(
      this.templatePath(source),
      this.destinationPath(destination)
    );
  }

  _template(template, destination) {
    this.fs.copyTpl(
      this.templatePath(template),
      this.destinationPath(destination),
      this
    );
  }
};
