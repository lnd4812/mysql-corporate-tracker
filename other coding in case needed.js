//   if (option === "view all departments") {
    //     indexResponses(option)
    //   }
    


      // else if (option === 'view all roles') {
      //         return answers = "view all roles";
      // }   else if (option === 'view all employees') {
      //         return answers = "view all employees";
      // }   else if (option === 'add department') {
      //         inquirer
      //             .prompt([
      //                 {
      //                     type: 'input',
      //                     name: 'department',
      //                     message: "Please enter name of department",
      //                 },
      //             ])
      //             .then(answers => {
      //                return answers;
      //             });
      // }   else if (option === 'add a role') {
      //         inquirer
      //             .prompt([
      //                 {
      //                     type: 'input',
      //                     name: 'title',
      //                     message: "Please enter title",
      //                 },
      //                 {
      //                     type: 'input',
      //                     name: 'salary',
      //                     message: "Please enter salary for the role",
      //                 },
      //                 {
      //                     type: 'input',
      //                     name: 'department_id',
      //                     message: "Please add department",
      //                 }
      //             ])
      //             .then(answers => {
      //                 return answers;
      //             });
      // }   else if (option === 'add employee') {
      //         inquirer
      //             .prompt([
      //                 {
      //                     type: 'input',
      //                     name: 'first_name',
      //                     message: "Please enter employee's first name",
      //                 },
      //                 {
      //                     type: 'input',
      //                     name: 'last_name',
      //                     message: "Please enter employee's last name",
      //                 },
      //                 {
      //                     type: 'input',
      //                     name: 'role_id',
      //                     message: "Please enter employee's title",
      //                 },
      //                 {
      //                     type: 'input',
      //                     name: 'manager_id',
      //                     message: "Please enter employee's manager",
      //                 }
      //             ])
      //             .then(answers => {
      //                 return answers;
      //             });
      // }   else if (option === 'update employee role') {
      //         inquirer
      //             .prompt([
      //                 {
      //                     type: 'input',
      //                     name: 'employee_id',
      //                     message: "Please select employee being updated",
      //                 },
      //                 {
      //                     type: 'input',
      //                     name: 'role_id',
      //                     message: "Please select employee's new role",
      //                 },
      //             ])
      //             . then(answers => {
      //                 return answers;
      //             });
      // }   else if (option === 'update employee manager') {
      //         inquirer
      //             .prompt([
      //                 {
      //                     type: 'input',
      //                     name: 'employee_id',
      //                     message: "Please select employee whose manager is changing",
      //                 },
      //                 {
      //                     type: 'input',
      //                     name: 'manager_id',
      //                     message: "Please select employee's new manager",
      //                 },
      //             ])
      //             . then(answers => {
      //                 return answers;
      //             });
      //         }
      //     case 'view employees by manager':
      //         inquirer
      //             .prompt([
      //                 {
      //                     type: 'input',
      //                     name: 'manager_id',
      //                     message: "Please select manager by id",
      //                 },
      //             ])
      //             . then(answers => {
      //                 return answers;
      //             });

      //     case 'view employees by department':
      //         inquirer
      //             .prompt([
      //                 {
      //                     type: 'input',
      //                     name: 'department_id',
      //                     message: "Please select department",
      //                 },
      //             ])
      //             . then(answers => {
      //                 return answers;
      //             });

      //     case 'delete department':
      //         inquirer
      //             .prompt([
      //                 {
      //                     type: 'input',
      //                     name: 'department_id',
      //                     message: "Which department do you want to delete?",
      //                 },
      //             ])
      //             . then(answers => {
      //                 return answers;

      //                 // include actions for roles/ee's attached to that department
      //                 // use similar format to delete role, employee
      //             });

      //     case "view total utilized budget for department":
      //         inquirer
      //             .prompt([
      //                 {
      //                     type: 'input',
      //                     name: 'department_id',
      //                     message: "Which department's salary do you want to view?",
      //                 },
      //             ])
      //             . then(answers => {
      //                 return answers;
      //                 // include actions for roles/ee's attached to that department
      //                 // use similar format to delete role, employee
      //             });

      // };