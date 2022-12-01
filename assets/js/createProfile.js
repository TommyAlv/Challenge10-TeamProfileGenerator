const inquirer = require('inquirer');
const Manager = require('../../library/Manager');
const Engineer = require('../../library/Engineer');
const Intern = require('../../library/Intern');
const render = require('./pageLayout');
const writeFile = require('./createSite');

class EmployProGen {
    constructor() {
        this.employees = [];
        this.employeeCount = 0;
        this.employeeId = 1;
    }

    validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    addEmployee() {
        const questions = [
            {
                type: 'list',
                name: 'employeeType',
                message: 'What is the role of the employee?',
                choices: ['Engineer', 'Intern', 'Manager', 'No Further Employees']
            }
        ];

        inquirer.prompt(questions).then(answers => {
            switch (answers.employeeType) {
                case 'Engineer':
                    this.addEngineer();
                    break;
                case 'Intern':
                    this.addIntern();
                    break;
                case 'Manager':
                    this.addManager();
                    break;
                case 'No Further Employees':
                    if (this.employeeCount === 0) {
                        console.log('One Employee Must Be Added');
                        this.addEmployee();
                    }
                    console.log('\n\n---- Creating HTML File... ----');
                    writeFile(this.generateHTML())
                        .then(result => {
                            console.log(result.message)
                        });
                    break;
            }
        });
    }

    addEngineer() {
        const questions = [
            {
                type: 'input',
                name: 'name',
                message: 'Engineer\'s Name?',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Name must be entered');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'Engineer\'s Email?',
                validate: emailInput => {
                    if (emailInput) {
                        if (this.validateEmail(emailInput)) {
                            return true;
                        } else {
                            console.log('\nValid email needed');
                            return false;
                        }
                    } else {
                        console.log('Email cannot be blank');
                        return false;
                    }
                }

            },
            {
                type: 'input',
                name: 'github',
                message: 'Engineer\'s Github Account Username?',
                validate: githubInput => {
                    if (githubInput) {
                        return true;
                    } else {
                        console.log('Username must be entered');
                        return false;
                    }
                }
            }
        ];

        inquirer.prompt(questions).then(answers => {
            const engineer = new Engineer(answers.name, answers.email, this.employeeId, answers.github);
            this.employees.push(engineer);
            this.employeeCount++;
            this.employeeId++;
            this.addEmployee();
        });
    }

    addIntern() {
        const questions = [
            {
                type: 'input',
                name: 'name',
                message: 'Intern\'s Name?',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Name must be entered');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'Intern\'s email?',
                validate: emailInput => {
                    if (emailInput) {
                        if (this.validateEmail(emailInput)) {
                            return true;
                        } else {
                            console.log('\nEmail invalid.');
                            return false;
                        }
                    } else {
                        console.log('Email must be entered');
                        return false;
                    }
                }

            },
            {
                type: 'input',
                name: 'school',
                message: 'Intern school?',
                validate: schoolInput => {
                    if (schoolInput) {
                        return true;
                    } else {
                        console.log('School must be entered');
                        return false;
                    }
                }
            }
        ];

        inquirer.prompt(questions).then(answers => {
            const intern = new Intern(answers.name, answers.email, this.employeeId, answers.school);
            this.employees.push(intern);
            this.employeeCount++;
            this.employeeId++;
            this.addEmployee();
        });
    }

    addManager() {
        const questions = [
            {
                type: 'input',
                name: 'name',
                message: 'Manager\'s name?',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Name must be entered');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'Manager\'s email?',
                validate: emailInput => {
                    if (emailInput) {
                        if (this.validateEmail(emailInput)) {
                            return true;
                        } else {
                            console.log('\nEmail invalid');
                            return false;
                        }
                    } else {
                        console.log('Email must be entered');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'Manager\'s office number?',
                validate: officeNumberInput => {
                    if (officeNumberInput) {
                        return true;
                    } else {
                        console.log('Office number must be entered.');
                        return false;
                    }
                }

            }
        ];

        inquirer.prompt(questions).then(answers => {
            const manager = new Manager(answers.name, answers.email, this.employeeId, answers.officeNumber);
            this.employees.push(manager);
            this.employeeCount++;
            this.employeeId++;
            this.addEmployee();
        });
    }

    generateHTML() {
        return render(this.employees);
    }

}

module.exports = EmployProGen;