// need function that will take input from index.js file and then functions required to:

const db = require("./db/connection");
const cTable = require("console.table");

function tableAction(indexResponses) {
    // index responses will need to be further defined from various arrays returned

}
    if (indexResponses === "view all departments") {
        db.query(`SELECT * FROM department`, (err, result) => {
            if (err) {
                console.log(err);
            }   console.table(result);
        }); 
    }   else if (indexResponses === "view all roles") {
        db.query(`SELECT * FROM role`, (err, result) => {
            if (err) {
                console.log(err);
            }   console.table(result);
        });
    }   else if (indexResponses === "view all employees") {
        db.query(`SELECT * FROM employee`, (err, result) => {
            if (err) {
                console.log(err);
            }   console.table(result);
        });
    }   else if (indexResponses === "add department") {
        db.query(`INSERT INTO department (name)
            VALUES ${indexReponses}`, (err, result) => {
                if (err) {
                    console.log(err);
                }   console.table(result);
            });    
    }   else if (indexResponses === "add role") {    
        db.query(`INSERT INTO role (title, salary, department_id)
            VALUES ${indexResponses}`, (err, row) => {
                if (err) {
                    console.log(err);
                }   console.table(row);
            });
    }   else if (indexResponses === "add employee") {   
        db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id)
            VALUES ${indexReponses}`, (err, row) =>{
                if (err) {
                    console.log(err);
                }   console.table(result);
            });
    }   else if (indexResponses === "update employee role") {
        db.query(`UPDATE employee
            SET role_id = ${indexResponses} WHERE id = ?`, (err, result) => {; 
            if (err) {
                console.log(err);
            }   console.table(result);
        });
    }   else if (indexResponses === "update employee manager") {
        db.query(`UPDATE employee
            SET manager_id = ${indexResponses} WHERE id = ?`, (err, result) => {
            if (err) {
                console.log(err);
            }   console.table(result);
        }); 
    }   else if (indexResponses === "view employees by manager") {
        db.query(`SELECT * FROM employee WHERE employee.manager_id = ${indexResponses}`, (err, result) => {
            if (err) {
                console.log(err);
            }   console.table(result);
        });
    }   else if (indexResponses === "view employees by department") {
        db.query(`SELECT * FROM employee WHERE employee.department_id = ${indexResponses}`, (err, result) => {
            if (err) {
                console.log(err);
            }   console.table(result);
        })
    }   else if (indexResponses === "delete department") {
        db.query(`DELETE FROM employee WHERE id = ${indexResponses}`, (err, result) => {
            if (err) {
                console.log(err);
            }   console.table(result);
        });  // does this have to work around FK Constraints?
    }   else if (indexResponses === "view budget") {
        db.query(`SELECT * FROM `)
        // for (var i = 0; i < arrayCreatedFromRole.length, i++) {
            // let salaryTotal = ''; 
            //employee.salary += salaryTotal;
            // return salaryTotal
              // add employee.salary from SELECT * FROM employees WHERE employee.department_id = ?  
    }   

tableAction();

module.exports(indexResponses);  // where indexResponses is placeholder until I figure out what to use