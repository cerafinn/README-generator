// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path")
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Enter your project name (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your project name');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'repoName',
      message: 'Enter the repository name: (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your repository name');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Add a description for your project'
    },
    {
      type: 'checkbox',
      name: 'license',
      message: 'Select a license (choose one):',
      choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD3', 'None'],
    },
    {
      type: 'input',
      name: 'install',
      message: 'Are there any installation requirements?'
    },
    {
      type: 'confirm',
      name: 'confirmTest',
      message: 'Are there any tests?',
      default: true
    },
    {
      type: 'input',
      name: 'test',
      message: 'Describe the Test instructions',
      when: ({ confirmTest }) => {
        if (confirmTest) {
          return true;
        } else {
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'name',
      message: 'What is your name? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your name');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your GitHub username');
          return false;
        }
      }
    },
  ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(answers => {writeToFile("${data.title}-README.md", generateMarkdown(answers))})
}

// Function call to initialize app
init();