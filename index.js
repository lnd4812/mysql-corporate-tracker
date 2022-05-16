// const fs = require('fs');
const inquirer = require("inquirer");
const cTable = require('console.table');
const mysql = require("mysql2");
const db = require("./db/connection");

function promptTracker() {
  // ask user to choose an option from selection of menu items
  return inquirer
    .prompt([
      {
        type: "checkbox",
        name: "options",
        message: "Please choose one of the following options",
        choices: [
          "view all departments",
          "view all roles",
          "view all employees",
          "add a department",
          "add a role",
          "add an employee",
          "update employee role",
          "update employee manager",
          "view employees by manager",
          "view employees by department",
          "delete department",
          "delete role",
          "delete employee",
          "view budget",
        ],
      },
    ])
    .then((responses) => {
      // "extract" response from options array
      let option = responses.options[0];
      console.log(option);
      tableAction(option);
    })

function tableAction(option) {
    
      if (option === 'view all departments') {
        db.query(`SELECT * FROM department`, (err, result) => {
          if (err) {
            throw(err);
          }
          console.table(result);
        });
      } else if (option === 'view all roles') {
        db.query(`SELECT * FROM role`, (err, result) => {
          if (err) {
            throw(err);
          }
          console.table(result);
        });
      } else if (option === 'view all employees') {
          db.query(`SELECT * FROM employee`, (err, result) => {
            if (err) {
              throw(err);
            }
            console.table(result);
          });
      } else if (option === 'add department') {
          inquirer
            .prompt([
              {
                type: 'input',
                name: 'department',
                message: "Please enter name of department",
              },
            ])
            .then(answers => {
              db.query(
                `INSERT INTO department (name)
                 VALUES (${answers})`,
                  (err, result) => {
                    if (err) {
                      throw(err);
                    }
                  console.table(result);
                  }  
              );
            });         
        } else if (option === 'add a role') {
            inquirer
              .prompt([
                {
                  type: 'input',
                  name: 'title',
                  message: "Please enter title",
                },
                { 
                  type: 'input',
                  name: 'salary',
                  message: "Please enter salary for the role",
                },
                {
                  type: 'input',
                  name: 'department_id',
                  message: "Please add department",
                }
              ])
              .then(answers => {
                db.query(
                  `INSERT INTO role (title, salary, department_id)
                   VALUES (${answers})`,
                      (err, result) => {
                        if (err) {
                          throw(err);
                        }
                      console.table(result);
                      }
                );
              })
            
        } else if (option === 'add employee') {
            inquirer
              .prompt([
                {
                  type: 'input',
                  name: 'first_name',
                  message: "Please enter employee's first name",
                },
                {
                  type: 'input',
                  name: 'last_name',
                  message: "Please enter employee's last name",
                },
                {
                  type: 'input',
                  name: 'role_id',
                  message: "Please enter employee's title",
               },
               {
                  type: 'input',
                  name: 'manager_id',
                  message: "Please enter employee's manager",
               }
              ])
              .then(answers => {
                db.query(
                  `INSERT INTO employee (first_name, last_name, role_id, manager_id)
                   VALUES (${answers})`,
                    (err, result) => {
                      if (err) {
                        throw(err);
                      }
                    console.table(result);
                    }
                );
              });
        } else if (option === 'update employee role') {
            inquirer
              .prompt([
                {
                  type: 'input',
                  name: 'employee_id',
                  message: "Please select employee being updated",
                },
                {
                  type: 'input',
                  name: 'role_id',
                  message: "Please select employee's new role",
                },
              ])
              . then(answers => {
                  db.query(
                    `UPDATE employee
                     SET role_id = (${answers[1]}) WHERE id = (${answers[0]})`,
                       (err, result) => {
                          if (err) {
                            throw(err);
                          }
                        console.table(result);
                        }
                  );
                });
        } else if (option === 'update employee manager') {
            inquirer
             .prompt([
               {
                  type: 'input',
                  name: 'employee_id',
                  message: "Please select employee whose manager is changing",
                },
                {
                  type: 'input',
                  name: 'managername',
                  message: "Please select employee's new manager",
                },
              ])
              . then(answers => {
                  db.query(
                    `UPDATE employee
                     SET manager_id = (${answers[1]}) WHERE id = (${answers[0]})`,
                       (err, result) => {
                          if (err) {
                            throw(err);
                          }
                        console.table(result);
                      }
                  );
              }
            );

        } else if (option === 'view employees by manager') {
            inquirer
              .prompt([
                {
                  type: 'input',
                  name: 'managername',
                  message: "Please select manager",
                },
                ])
                . then(answers => {
                    db.query(
                      `SELECT employee.*, role.name AS role_name
                      FROM employee
                      LEFT JOIN role ON employee.role.name_id = ${answers}_id`,
                        (err, result) => {
                          if (err) {
                            throw(err);
                          }
                        console.table(result);
                      }
                    );
                });
        } else if (option === 'view employees by department') {
            inquirer
              .prompt([
                {
                  type: 'input',
                  name: 'department_id',
                  message: "Please select department",
                },
              ])
              . then(answers => {
                  db.query(
                    `SELECT employee.*, role.department_id AS department_id
                    FROM employee
                    LEFT JOIN role.department ON employee.role._id = role.${answers}.id 
                      ${answers}`,
                        (err, result) => {
                          if (err) {
                            throw(err);
                          }
                        console.table(result);
                        }
                  );
              });
        } else if (option === 'delete department') {
            inquirer
             .prompt([
                {
                  type: 'input',
                  name: 'department_id',
                  message: "Which department do you want to delete?",
                },
              ])
              . then(answers => {
                  db.query(
                    `DELETE FROM department WHERE id = ${answers}`,
                        (err, result) => {
                          if (err) {
                            throw(err);;
                        }
                          console.table(result);
                        }
                    )
                }); 
          } else if (option === "view total utilized budget for department") {
              inquirer
                .prompt([
                  {
                    type: 'input',
                    name: 'department_id',
                    message: "Which department's salary do you want to view?",
                  },
                ])
                . then(answers => {
                    db.query(
                      `SELECT SUM(salary) FROM role WHERE role.department_id = ${answers}`,
                        (err, result) => {
                          if (err) {
                            throw(err);
                          }
                          console.table(result);
                        }
                    );
                });
              }
            }  
}
async function init() {
  await promptTracker();
};

init();
