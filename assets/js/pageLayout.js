const Employee = require("../../library/Employee");

// Generates HTML card for Manager
const manager = managerInfo => {
    return `
        <div class="card w-48 lg:w-56 bg-slate-300 shadow-xl">
            <div class="card-body">
                <h2 class="card-title">${managerInfo.name}</h2>
                <div><i class="fa-sharp fa-solid fa-mug-hot mr-1"></i>Manager</div>
                <row class="">ID: <span>${managerInfo.id}</span></row>
                <row>EMAIL: <span>${managerInfo.email}</span></row>
                <row>OFFICE #: <span>${managerInfo.officeNumber}</span></row>
            </div>
        </div>
    `
};

// Generates HTML card for Engineer
const engineer = engineerInfo => {
    return `
        <div class="card w-48 lg:w-56 bg-slate-300 shadow-xl">
            <div class="card-body">
                <h2 class="card-title">${engineerInfo.name}</h2>
                <div><i class="fa-sharp fa-solid fa-mug-hot mr-1"></i>Engineer</div>
                <row class="">ID: <span>${engineerInfo.id}</span></row>
                <row>EMAIL: <span>${engineerInfo.email}</span></row>
                <row>GITHUB USERNAME #: <span>${engineerInfo.github}</span></row>
            </div>
        </div>
    `
};

// Generates HTML card for Intern
const intern = internInfo => {
    return `
        <div class="card w-48 lg:w-56 bg-slate-300 shadow-xl">
            <div class="card-body">
                <h2 class="card-title">${internInfo.name}</h2>
                <div><i class="fa-sharp fa-solid fa-mug-hot mr-1"></i>Intern</div>
                <row class="">ID: <span>${internInfo.id}</span></row>
                <row>EMAIL: <span>${internInfo.email}</span></row>
                <row>SCHOOL: <span>${internInfo.school}</span></row>
            </div>
        </div>
    `
}

module.exports = employees => {
    return `
    <!DOCTYPE html>
    <html lang="en" data-theme="cupcake">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
        <script src="https://kit.fontawesome.com/619ebb2432.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="./assets/css/input.css">
        <link rel="stylesheet" href="./assets/css/output.css">
    
        <title>Team Profile Generator</title>
    </head>
    
    <body>
        <section>
            <div class="navbar bg-gray-200 mb-4">
                <div class="navbar-start">
                </div>
                <div class="navbar-center">
                    <div class="text-2xl">MY TEAM</div>
                </div>
                <div class="navbar-end">
                </div>
            </div>
    
            <div class="justify-center grid grid-cols-3 md:grid-cols-5 lg:grid-cols-4 xl:grid-cols-7 mx-auto lg:gap-x-2 gap-y-2">
           
            ${employees.map(employee => {
                if (employee.getRole() === "Manager") {
                    return manager(employee);
                }else if (employee.getRole() === "Engineer") {
                    return engineer(employee);
                }
                return intern(employee);
                }).join("")}
               
            
    
        </section>
    </body>
    
    </html>
    `
};