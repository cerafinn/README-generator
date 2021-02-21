// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

// Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'contactInfo',
    message: 'Enter your contact email: (Required)'
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub Username (Required)'
  },
  {
    type: 'input',
    name: 'title',
    message: 'Enter your project name (Required)',
  },
  {
    type: 'input',
    name: 'repoName',
    message: 'Enter the repository name: (Required)'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Add a description for your project'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Select a license (choose one):',
    choices: ['MIT', 'Apache_2.0', 'GPL_3.0', 'BSD3', 'None']
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What does a user need to know about the project?',
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
  },
];

// Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// Create a function to initialize app
function init() {
  return inquirer.prompt(questions)
    .then(answers => {writeToFile("./dist/generatedREADME.md", generateMarkdown(answers))})
}

// Function call to initialize app
init();