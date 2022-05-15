const inquirer = require("inquirer");
const cTable = require('console.table');
const mysql = require('mysql2');
// const db = require('./db');


const promptTracker = () => {
    console.table

    return (
      inquirer
        .prompt([
          {
            type: "checkbox",
            name: "options",
            message: "Please choose one of the following options",
            choices: ["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update employee role", "update employee manager", "view employees by manager", "view employees by department", "delete department", "delete role", "delete employee", "view budget"],
          }
        ])
        .then(responses => {
         
        // "extract" response from options array  
        let option = responses.options[0];
       
        switch(option) {
        
            case 'view all departments':
                
                return answers;

            case 'view all roles':
                
                return answers;
            
            case 'view all employees':
              
                return answers;

            case 'add department':
                return inquirer
                    .prompt([
                        {
                            type: 'input',
                            name: 'department',
                            message: "Please enter name of department",
                        },
                    ])
                    .then(answers => {
                       
                    });
                
            case 'add a role':
                return inquirer
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
                    
                });
            
            case 'add employee':
                return inquirer
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
                        
                    }); 

            case 'update employee role':        
                return inquirer
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
                        return `UPDATE employee
                        SET role_id = ${answers} WHERE id = ?`; 
                    });

            case 'update employee manager':        
                return inquirer
                    .prompt([
                        {
                            type: 'input',
                            name: 'employee_id',
                            message: "Please select employee whose manager is changing",
                        },
                        {
                            type: 'input',
                            name: 'manager_id',
                            message: "Please select employee's new manager",
                        },     
                    ])
                    . then(answers => {
                        return `UPDATE employee
                        SET manager_id = ${answers} WHERE id = ?`; 
                    });
                   
            case 'view employees by manager':        
                return inquirer
                    .prompt([
                        {
                            type: 'input',
                            name: 'manager_id',
                            message: "Please select manager by id",
                        },
                    ])
                    . then(answers => {
                        return `SELECT * FROM employee
                        WHERE manager_id = ${answers}`; 
                    });
                    
            case 'view employees by department':        
                return inquirer
                    .prompt([
                        {
                            type: 'input',
                            name: 'department_id',
                            message: "Please select department",
                        },
                    ])
                    . then(answers => {
                        return `SELECT * FROM employee
                        WHERE department_id = ${answers}`; 
                    });
            
            case 'delete department':        
                return inquirer
                    .prompt([
                        {
                            type: 'input',
                            name: 'department_id',
                            message: "Which department do you want to delete?",
                        },
                    ])
                    . then(answers => {
                        return `DELETE * FROM department
                        WHERE department_id = ${answers}`;
                        // include actions for roles/ee's attached to that department
                        // use similar format to delete role, employee 
                    });
            
            case "view total utilized budget for department":
                return inquirer
                    .prompt([
                        {
                            type: 'input',
                            name: 'department_id',
                            message: "Which department's salary do you want to view?",
                        },
                    ])
                    . then(answers => {
                        return `? add salaries ...SELECT * FROM TABLE role WHERE department_id = ${answers}`;
                        // include actions for roles/ee's attached to that department
                        // use similar format to delete role, employee 
                    });
                    
            };
        })
    );
}
promptTracker();

  // where answers is placeholder until I figure out what to use
