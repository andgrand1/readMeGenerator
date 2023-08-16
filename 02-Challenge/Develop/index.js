// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please describe your project.',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Please provide instuctions for installation.',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information.',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Please select License information.',
        choices: ["GNU AGPLv3", "Mozilla Public License 2.0", "Apache License 2.0"],
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Please provide contribution guidelines.',
      },
      {
        type: 'input',
        name: 'Tests',
        message: 'Please provide test instructions.',
      },
      {
        type: 'input',
        name: 'userName',
        message: 'Please provide your GitHub username.',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please provide your email address.',
      },
      
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)  {
            console.log("Error in submitting your answers. Please try again.")
        }
    });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    console.log(data, "Success!  readMe.md generated");
    writeToFile("ReadMe.md", generateMarkdown(data));
  });
}

// Function call to initialize app
init();

