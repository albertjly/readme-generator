// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the project/repo name?',
        validate: input => !!input
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe the project/repo.',
        validate: input => !!input
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
        default: 'npm install',
        validate: input => !!input
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.',
        validate: input => !!input
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Please list your collaborators',
        validate: input => !!input
    },
    {
        type: 'input',
        name: 'features',
        message: 'Please list some features for the project!',
        validate: input => !!input
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Thanks to the contributors for the project',
        validate: input => !!input
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a license:',
        choices: [
            'GNU AGPLv3',
            'GNU GPLv3',
            'GNU LGPLv3',
            'Mozilla Public License 2.0',
            'Apache License 2.0',
            'MIT License',
            'Boost Software License 1.0',
            'The Unlicense'
        ]
    }
];

const dir = './description';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}
const filePath = path.join(__dirname, `${dir}/README.md`);
// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFileSync(filePath, data, err => {
        if (err) throw new Error(err);
        console.log('Done!');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(data => {
        // console.log(data);
        // console.log(generateMarkdown(data));
        writeToFile(generateMarkdown(data));
    }).catch(err => {
        console.error(err);
    });
}

// Function call to initialize app
init();