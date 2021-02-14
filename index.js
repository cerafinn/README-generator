// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path")

// TODO: Create an array of questions for user input
const questions = [
  //question for title

  // Description of project
  // Table of Contents, which will include:

  // Installation
  // Usage - include website link
  // license: MIT, Apache 2.0, GPL 3.0 BSD3, none
  // Contributing
  // Tests
  // Questions - include contact information and github link
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
