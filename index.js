// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');

const Employee = require("./Lib/Employee.js");
const Manager = require('./Lib/Manager.js');
const Engineer = require('./Lib/Engineer.js');
const Intern = require('./Lib/Intern.js');

// TODO: Create an array of questions for user input
const initial_questions = [
    {
        type: 'input',
        name: 'Name',
        message: "What is your name:"
    },
    {
        type: 'input',
        name: 'ID',
        message: "What is your ID:"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your email:"
    },
    {
        type: 'list',
        name: 'role',
        choices: ["Manager", "Engineer", "Intern"]
    },
];

//User Specific Questions:
const manager_questions = [
    {
        type: 'input',
        name: 'office',
        message: "Your Office Number:"
    },
];

const engineer_questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github ID:'
    }
];

const intern_questions = [
 {
     type: 'input',
     name: 'school',
     message: 'What school do you go to:'
 }
]



// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(initial_questions).then(data => {
        console.log(data);
        let newReadMe = generateMarkdown(data)
        fs.writeFile("README.md", newReadMe, (err) =>
            err ? console.log(err) : console.log('Congratulations! You have created your README!')
        );
    })
}
// Function call to initialize app
init();