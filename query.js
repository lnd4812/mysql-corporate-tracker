// need function that will take input from index.js file and then functions required to:

function tableAction(indexResponses) {
    // index responses will need to be further defined from various arrays returned


    if (indexResponses === "view all departments") {
        // SELECT * FROM department;
    }   else if (indexResponses === "view all roles") {
        // SELECT * FROM role;
    }   else if (indexResponses === "view all employees") {
        // SELECT * FROM employee;
    }   else if (indexResponses === "add department") {
        // INSERT indexResponses[i] INTO department;
    }   else if (indexResponses === "add role") {    
        // INSERT indexResponses[i] INTO role;
    }   else if (indexResponses === "add employee") {   
        // INSERT indexResponses[i] INTO employee;
    }   else if (indexResponses === "update employee role") {
        // UPDATE 
    }   else if (indexResponses === "update employee manager") {
        // UPDATE employee.manager_id WHERE id = 
    }   else if (indexResponses === "view employees by manager") {
        // SELECT * FROM employee WHERE employee.manager_id = ?
    }   else if (indexResponses === "view employees by department") {
        // SELECT * FROM employee WHERE employee.department_id = ?
    }   else if (indexResponses === "delete department") {
        // DELETE  etc.
    }   else if (indexResponses === "view budget") {
        // add employee.salary from SELECT * FROM employees WHERE employee.department_id = ?  
    }   return 
}
tableAction();