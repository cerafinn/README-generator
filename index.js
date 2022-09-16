// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

// should set up two inquirer paths, one for one author, another for multiple authors?
// how would this look like?

// array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'author',
    message: 'Enter your full name: (Required)',
    default: 'Andaleeb Farooq'
  },
  {
    type: 'input',
    name: 'contactInfo',
    message: 'Enter your contact email: (Required)',
    default: 'andaleeb.farooq@gmail.com'
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub Username (Required)',
    default: 'cerafinn'
  },
  {
    type: 'input',
    name: 'title',
    message: 'Enter your project name (Required)',
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log('Required entry');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'repoName',
    message: 'Enter the repository name: (Required)',
    validate: (repoInput) => {
      if (repoInput) {
        return true;
      } else {
        console.log('Required entry');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'description',
    message: 'Add a description for your project',
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log('Required entry');
        return false;
      }
    }
  },
  {
    type: 'list',
    name: 'license',
    message: 'Select a license (choose one):',
    choices: ['MIT', 'Apache_2.0', 'GPL_3.0', 'BSD3', 'None']
  },
  {
    type: 'input',
    name: 'technologies',
    message: 'Enter technologies were used in the project (add all that apply):',
    validate: (techInput) => {
      if (techInput) {
        return true;
      } else {
        console.log('Required entry');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What does a user need to know about the project?',
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log('Required entry');
        return false;
      }
    }
  },
  {
      type: 'input',
      name: 'install',
      message: 'Are there any installation requirements?'
  },
  {
    type: 'input',
    name: 'test',
    message: 'Are there any tests to be run?',
  },
  {
    type: 'input',
    name: 'contribute',
    message: 'How to contribute to the project?',
    default: 'If interested in contributing to the project, feel free to reach out. Contact information can be found in the Questions section.'
  },
];

// Writes README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// Initialize app
function init() {
  return inquirer.prompt(questions)
    .then(answers => {writeToFile("./dist/generatedREADME.md", generateMarkdown(answers))})
}

init();