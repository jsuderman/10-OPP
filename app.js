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
const teamArray = [];

const managerQuestions = [
        {
            type: "input",
            message: "what is your manager's name?",
            name: "managerName"
        }, 
        {   type: "input",
            message: "what is your manager's id?",
            name: "managerId"
        },
        {
            type: "input",
            message: "what is your manager's email?",
            name: "managerEmail"
        },
        {
            type:"input",
            message: "whats your manager's office number?",
            name: "managerOffice"
        }
    ]

const teamQuestions = [
        {
            type: "list",
            message: "Which type of team member would you like to add?",
            name: "team",
            choices: [
                "Engineer", 
                "Intern", 
                "I dont want to add any more team members"
            ]
        }      
    ]
const engineerQuestions = [
        {
            
            type: "input",
            message: "what is your engineer's name?",
            name: "engineerName"
        }, 
        {   
            type: "input",
            message: "what is your engineer's id?",
            name: "engineerId"
        },
        {
            type: "input",
            message: "what is your engineer's email?",
            name: "engineerEmail"
        },
        {
            type: "input",
            message: "what is your engineer's Github username",
            name: "engineerGit"
        }   
    ]
const internQuestions = [
    { 
        type: "input",
        message: "what is your intern's name?",
        name: "internName"
    }, 
    {   
        type: "input",
        message: "what is your intern's id?",
        name: "internId"
    },
    {
        type: "input",
        message: "what is your interns's email?",
        name: "internEmail"
    },
    {
        type: "input",
        message: "what is your intern's school",
        name: "internSchool"
    } 
]


inquirer
    .prompt(managerQuestions).then((answer) => {
        const manager = new Manager(
            answer.managerName,
            answer.managerId,
            answer.managerEmail,
            answer.managerOffice,
        );
        teamArray.push(manager);
        // console.log(manager)
        pickTeam();
        });
    
function pickTeam() {
    inquirer.prompt(teamQuestions).then(answers => {
    if (answers.team === "Engineer") {
        inquirer.prompt(engineerQuestions).then((answer) => {
            const engineer = new Engineer (
                answer.engineerName,
                answer.engineerId,
                answer.engineerEmail,
                answer.engineerGit,
            );
            teamArray.push(engineer);
            // console.log(engineer)
            pickTeam();
        });
    } else if (answers.team === "Intern") {
        inquirer.prompt(internQuestions).then((answer) => {
        const intern = new Intern (
            answer.internName,
            answer.internId,
            answer.internEmail,
            answer.internSchool
        );
        teamArray.push(intern);
        // console.log(intern)
        pickTeam();
        });
    } else (answers.team === "I dont want to add any more team members") 
        return teamArray, 
        console.log(teamArray)
             
    });

    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(teamArray), "utf-8");
}

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!



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
