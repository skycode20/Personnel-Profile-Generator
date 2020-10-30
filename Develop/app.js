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



// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
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

        // function which prompts the user for what action they should take
        function init() {
            inquirer
                .prompt({
                    name: "personnelEntry",
                    type: "list",
                    message: "Which personnel would you like to enter?",
                    choices: ["MANAGER", "ENGINEER", "INTERN", "EXIT"]
                })
                .then(function (answer) {
                    // based on their answer, either call the bid or the post functions
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
                        return;
                    }
                    else {
                        // end();
                        return;
                    }
                });
        }

        // function to initialize program
        async function enterManager() {
            // Ask user questions about the project
            await inquirer.prompt(managerPersonnel)
                .then((answers) => {

                    managerOne = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
                    personnelList.push(managerOne);
                    writeHTML(outputPath, render(personnelList));
                    init();
                })
        }

        async function enterEngineer() {
            await inquirer.prompt(engineerPersonnel)
                .then((answers) => {

                    engineerOne = new Engineer(answers.name, answers.id, answers.email, answers.github);
                    personnelList.push(engineerOne);
                    writeHTML(outputPath, render(personnelList));
                    init();
                })
        }

        async function enterIntern() {
            await inquirer.prompt(internPersonnel)
                .then((answers) => {

                    internOne = new Intern(answers.name, answers.id, answers.email, answers.school);
                    personnelList.push(internOne);
                    writeHTML(outputPath, render(personnelList));
                    init();
                })
        }



// function call to initialize program
init();

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
