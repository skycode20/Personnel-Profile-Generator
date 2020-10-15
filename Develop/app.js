const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");



// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const engineerPersonnel = [
    {
        message: "Please enter your name:",
        name: "name"
    }
    ,
    {
        message: "Please enter your role:",
        name: "role"
    }
    ,
    {
        message: "Please enter your ID:",
        name: "id"
    }
    ,
    {
        message: "Please enter your GitHub email:",
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
        message: "Please enter your role:",
        name: "role"
    }
    ,
    {
        message: "Please enter your ID:",
        name: "id"
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
        message: "Please enter your role:",
        name: "role"
    }
    ,
    {
        message: "Please enter your ID:",
        name: "id"
    }
    ,
    {
        message: "Please enter your office number:",
        name: "officeNumber"
    }

]

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// const WeatherAdmin = function() {
//     this.getData = () => {
//       fs.readFile("log.txt", "utf8", (error, data) => {
//         console.log(data);
//       });
//     };
  
//     this.newEngineer = (name, location) => {
//       const newUserSearch = new UserSearch(name, location);
//       const logTxt =
//         "\nName: " +
//         newUserSearch.name +
//         " Location: " +
//         newUserSearch.location +
//         " Date: " +
//         moment(newUserSearch.date).format("MM-DD-YYYY");
  
//       fs.appendFile("log.txt", logTxt, err => {
//         if (err) throw err;
//       });
  
//       newUserSearch.getWeather();
//     };
//   };

// function to write HTML file
async function writeHTML(fileName, data) {
    await outputPath(fileName, data);
}

// function to initialize program
function init() {
    // Ask user questions about the project
    inquirer.prompt(engineerPersonnel)
        .then((answers) => {
            const personnelHTML = render(answers);
            console.log(personnelHTML);
            render(answers.role + ".html", personnelHTML);
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
