const inquirer = require ("inquirer")
const mysql = require ("mysql2")

const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: 'password',
      database: 'employeeMg_db'
    },
    console.log(`Connected to the employeeMg_db database.`)
  );
 // view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
start()
function start() {
  inquirer.prompt([
    {
      type:"list",
      name:"option",
      message: "Select choice",
      choices: [ "view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role"]
    }
  ]) .then((answer)=>{
    if (answer.option==="view all departments") {
     viewdepartment ()
    }
    if (answer.option==="view all roles") {
     viewrole ()
    }
    if (answer.option==="add a department") {
     Adddepartment ()
    }
    if (answer.option==="view all employees") {
      viewrole ()
     }
     if (answer.option==="add a roll") {
      viewrole ()
     }
     if (answer.option==="add an employee") {
      viewrole ()
     }
     if (answer.option==="update an employee role") {
      viewrole ()
     }
 
  })
}

function viewdepartment() {
  db.query('SELECT * FROM department', function (err, results) {
    console.table(results);
    start()
  });
 
}
function viewrole() {
  db.query('SELECT * FROM role', function (err, results) {
    console.table(results);
    start()
  });
 
}

function Adddepartment() {
  inquirer.prompt([
    {
      type:"input",
      name:"name",
      message: "Input name of department",
    }
  ]) .then((answer)=>{
    db.query(`INSERT INTO department(name) values ("${answer.name}")`, function (err, results) {
      if (err) throw err
      console.table(results);
      start()
    });
  
  })
}
