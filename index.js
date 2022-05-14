const inquirer = require("inquirer");


const promptTracker = () => {

    return (
      inquirer
        .prompt([
          {
            type: "checkbox",
            name: "options",
            message: "Please choose one of the following options",
            choices: ["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update employee role"],
          }
        ])
        .then(responses => {
         
        // "extract" response from options array  
        let option = responses.options[0];
       
        switch(option) {
        
            case 'view all departments':
                return inquirer
                    .prompt([
                        {
                    
                        },   
                    ])
                .then(responses => {
                });  

            case 'view all roles':
                return inquirer
                    .prompt ([
                    {


                    }
                    ])
                .then(responses => {
                });
            
            case 'view all employees':
                return inquirer
                    .prompt ([
                        {

                        }
                    ])
                .then(responses => {    
                });

            case 'add department':
                return inquirer
                    .prompt([
                        {
                            type: 'input',
                            name: 'department',
                            message: "Please enter name of department",
                        },
                    ])
                    .then(responses => {
                        //INSERT into TABLE department;
                    });
                
            case 'add a role':
                return inquirer
                .prompt([
                    {
                        type: 'input',
                        name: 'employee',
                        message: "Please enter name of employee being assigned the role",
                    },
                    {
                        type: 'input',
                        name: 'salary',
                        message: "Please enter the employee's salary",
                    },
                    {
                        type: 'input',
                        name: 'department',
                        message: "Please enter employee's department",
                    }
                ])
                .then(responses => {
                    //'INSERT into TABLE role';
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
                            name: 'salary',
                            message: "Please enter the employee's salary",
                        },
                        {
                            type: 'input',
                            name: 'role',
                            message: "Please enter employee's role",
                        },
                        {
                            type: 'input',
                            name: 'manager',
                            message: "Please enter employee's manager",
                        }
                    ])
                    .then(responses => {
                        // INSERT into TABLE employee;
                    }); 

            case 'update employee role':        
                return inquirer
                    .prompt([
                        {
                            type: 'input',
                            name: 'employee',
                            message: "Please select employee being updated",
                        },
                        {
                            type: 'input',
                            name: 'role',
                            message: "Please select employee's new role",
                        },     
                    ])
                    . then(responses => {
                        // PUT TABLE role; 
                    })
        }
        })
    )
}

promptTracker();