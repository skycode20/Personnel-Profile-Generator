const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const os = require("os");

const personnelList = [];



// Inquirer prompt object array that contains the questions
const engineerPersonnel = [
    {
        message: "Please enter your name:",
        name: "name"
    }
    ,
    {
        message: "Please enter your ID:",
        name: "id"
    }
    ,
    {
        message: "Please enter your email:",
        name: "email"
    }
    ,
    {
        message: "Please enter your GitHub username:",
        name: "github"
    }

]

const internPersonnel = [
    {
        message: "Please enter your name:",
        name: "name"
    }
    ,
    {
        message: "Please enter your ID:",
        name: "id"
    }
    ,
    {
        message: "Please enter your email:",
        name: "email"
    }
    ,
    {
        message: "Please enter the name of your school:",
        name: "school"
    }

]

const managerPersonnel = [
    {
        message: "Please enter your name:",
        name: "name"
    }
    ,
    {
        message: "Please enter your ID:",
        name: "id"
    }
    ,
    {
        message: "Please enter your email:",
        name: "email"
    }
    ,
    {
        message: "Please enter your office number:",
        name: "officeNumber"
    }

]


        // function to write HTML file
        function writeHTML(fileName, data) {
            fs.appendFile(fileName, data, (err) => {
                // throws an error, you could also catch it here
                if (err) throw err;

                // success case, the file was saved
                console.log('personnel saved');
            });
        }

        // function which prompts the user to choose which personnel will be entered
        function init() {
            inquirer
                .prompt({
                    name: "personnelEntry",
                    type: "list",
                    message: "Which personnel would you like to enter?",
                    choices: ["MANAGER", "ENGINEER", "INTERN", "EXIT"]
                })
                .then(function (answer) {
                    // based on their answer, prompt user about chosen employee role or to exit prompts to save
                    if (answer.personnelEntry === "MANAGER") {
                        enterManager();
                    }
                    else if (answer.personnelEntry === "ENGINEER") {
                        enterEngineer();
                    }
                    else if (answer.personnelEntry === "INTERN") {
                        enterIntern();
                    }
                    else if (answer.personnelEntry === "EXIT") {
                        writeHTML(outputPath, render(personnelList));
                        return;
                    }
                    else {
                        return;
                    }
                });
        }

        // Function to prompt user about Management Personnel
        async function enterManager() {
            
            await inquirer.prompt(managerPersonnel)
                .then((answers) => {

                    managerOne = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
                    personnelList.push(managerOne);
                    init();
                })
        }

        // Function to prompt user about Engineer Personnel
        async function enterEngineer() {
            await inquirer.prompt(engineerPersonnel)
                .then((answers) => {

                    engineerOne = new Engineer(answers.name, answers.id, answers.email, answers.github);
                    personnelList.push(engineerOne);
                    init();
                })
        }

        // Function to prompt user about Intern Personnel
        async function enterIntern() {
            await inquirer.prompt(internPersonnel)
                .then((answers) => {

                    internOne = new Intern(answers.name, answers.id, answers.email, answers.school);
                    personnelList.push(internOne);
                    init();
                })
        }



// function call to initialize program
init();
