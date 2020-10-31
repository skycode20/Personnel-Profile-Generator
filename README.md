# Personnel Profile Generator

  ![inquirer](https://img.shields.io/npm/l/inquirer)
  ![Personnel Profile Generator](https://img.shields.io/github/languages/top/skycode20/Personnel-Profile-Generator)
  [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md)

  - by *Skyler Rencher*
  
  ## Description    

  The Personnel Profile Generator is a CLI application that allows the user to enter employee information in via Inquirer prompts and to automatically generate a formatted html document that has contains the user input. This is important because there are many people in leadership roles at their organizations that desire a quick way to showcase the teams they oversee. There is immense value in simplifying the workload of said leaders. The beauty of this application is that the user doesn't have to be adept at programming to be able to utilize it in the workplace. The interface that generates the webpage with all of the information is simple to use and walks the user through each step.

  My inspiration behind this project was to provide a program those without a background in programming could easily use to produce instant results for the task of making a webpage that showcases their team(s).

  There were a few challenges faced within this project. The first of the challenges was to ensure the 4 different classes `(Employee, Manager, Engineer, and Intern)` passed the requirements of their respective tests. I tested them by running the command `npm run test` which ran a series of tests that determined if the constructor functions within the classes were operational. 
  
  Another challenge was getting the data entered by the user to stop being printed to the `team.html` file multiple times. I solved the problem by reading each line of code one by one until I discovered that I was calling the ```writeHTML(outputPath, render(personnelList))``` function 3 times which was causing the issue. I fixed that problem by placing the function inside of else if statement so that all of the data prints at the same time without the duplication. Once that was figured out the project was virtually ready to go.
    <br>    
    <img src="Assets\img\challengepic.jpg" alt="picture of an if statement" width= 50% height= 50%>
    <br>

  In the future I would like to make this a standalone application that operates outside of the CLI so that the installation of all of the npm packages aren't necessary. I would also like to tailor this program for other industries and roles so that more of the workforce and other consumers may have access to this convenient technology.

  ## Table Of Contents    

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation    

  Install the required npm packages such as inquirer, file system, path, and os. Also install Node.js as it is essential for running the CLI application. Then download all of the project's code from the repository. Once all of that has been completed, run ```node index.js``` to initiate the program.

  To install the **Personnel Profile Generator** please follow these steps:

  1. Download all of the project's source files `(clone the GitHub repository)`.
  2. Ensure your terminal is inside of the current folder that contains the source files.
  3. Install the following **NPMs** `(Node Package Managers)` in the system terminal:
        * Node.js
        * Inquirer (command: ```npm i inquirer```)
        * FileSystem (command: ```npm i fs```)
        * Path (command: ```npm i path```)
        * Jest (command: ```npm i jest```)
        * OS (command: ```npm i os```)
        * **Or just ```npm i``` that will install the packages within the `package.json` file. 

  ## Usage    

  For any leader in an organization that wanted to have a list of his/her team quickly published on an html document that can be uploaded to a site can now do so. It can showcase the positions of each team member in a clear mannerso that when it is uploaded to the company website the user can be proud of the clean look of the page. The user does not need to have any expertise in programming. it is easy to use and intuitive. Just run `node app.js` in the integrated terminal to initiate the program. Then when you're done you will have a beautiful page with your personnel's profiles.
    <br>
    <p align=center>   
    <img src="Assets\img\userprompts.jpg" alt="picture of user prompts in the terminal" width= 50% height= 50%>
    <img src="Assets\img\personnelpage.jpg" alt="picture of user generated personnel page" width= 50% height= 50%>
    </p>
    <br>

  ## License    

  The inquirer, jest, path, filesystem, and os is covered under the following license: ![inquirer](https://img.shields.io/npm/l/inquirer)

  ## Contributing     

  If you are interested in contributing to this project please adhere to the set of guidelines set forth by the [Contributor Covenant](https://www.contributor-covenant.org/version/2/0/code_of_conduct/). If any questions about the contributor guidelines feel free to contact me at skyler.rencher@gmail.com.  

  ## Tests    

  Yes there have been tests run by the npm Jest `(via the npm run test command)` in concert with the Employee, Engineer, Intern, and Manager tests javascript files. The purpose of these tests were to ensure that the aforementioned classes and their respective constructor functions were operational. Without the tests the project would've been even more challenging in the debugging process. 

  ## Questions    

  If you have any questions about the project feel free to reach out to me on via email: skyler.rencher@gmail.com or via Git Hub: https://github.com/skycode20.
  
  ## Links

  * [Personnel Profile Generator Application](https://skycode20.github.io/Personnel-Profile-Generator/)

  * [Personnel Profile Generator Repository](https://github.com/skycode20/Personnel-Profile-Generator)

  * [Personnel Profile Generator Demo Video](https://drive.google.com/file/d/1ooOAI5V2ga859cpDilKRd821CDL8uZn2/view?usp=sharing)


