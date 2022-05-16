// need function that will take input from index.js file and then functions required to:
const cTable = require("console.table");

function indexResponses(data) {
  // index responses will need to be further defined from various arrays returned

  if (data[0] === "view all departments") {
    db.query(`SELECT * FROM department`, (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
    });
  } else if (data[0] === "view all roles") {
    db.query(`SELECT * FROM role`, (err, result) => {
      if (err) {
        console.log(err);
      }
      console.table(result);
    });
  } else if (data[0] === "view all employees") {
    db.query(`SELECT * FROM employee`, (err, result) => {
      if (err) {
        console.log(err);
      }
      console.table(result);
    });
  } else if (data[0] === "add department") {
    db.query(
      `INSERT INTO department (name)
            VALUES ${indexReponses}`,
      (err, result) => {
        if (err) {
          console.log(err);
        }
        console.table(result);
      }
    );
  } else if (data[0] === "add role") {
    db.query(
      `INSERT INTO role (title, salary, department_id)
            VALUES ${indexResponses}`,
      (err, row) => {
        if (err) {
          console.log(err);
        }
        console.table(row);
      }
    );
  } else if (data[0] === "add employee") {
    db.query(
      `INSERT INTO employee (first_name, last_name, role_id, manager_id)
            VALUES ${indexReponses}`,
      (err, row) => {
        if (err) {
          console.log(err);
        }
        console.table(result);
      }
    );
  } else if (data[0] === "update employee role") {
    db.query(
      `UPDATE employee
            SET role_id = ${indexResponses} WHERE id = ?`,
      (err, result) => {
        if (err) {
          console.log(err);
        }
        console.table(result);
      }
    );
  } else if (data[0] === "update employee manager") {
    db.query(
      `UPDATE employee
            SET manager_id = ${indexResponses} WHERE id = ?`,
      (err, result) => {
        if (err) {
          console.log(err);
        }
        console.table(result);
      }
    );
  } else if (data[0] === "view employees by manager") {
    db.query(
      `SELECT * FROM employee WHERE employee.manager_id = ${indexResponses}`,
      (err, result) => {
        if (err) {
          console.log(err);
        }
        console.table(result);
      }
    );
  } else if (data[0] === "view employees by department") {
    db.query(
      `SELECT * FROM employee WHERE employee.department_id = ${indexResponses}`,
      (err, result) => {
        if (err) {
          console.log(err);
        }
        console.table(result);
      }
    );
  } else if (indexResponses === "delete department") {
    db.query(
      `DELETE FROM employee WHERE id = ${indexResponses}`,
      (err, result) => {
        if (err) {
          console.log(err);
        }
        console.table(result);
      }
    ); // does this have to work around FK Constraints?
  } else if (indexResponses === "view budget") {
    db.query(
      `SELECT SUM(salary) FROM employee WHERE id = ${indexResponses}`,
      (err, result) => {
        if (err) {
          console.log(err);
        }
        console.table(result);
      }
    );
  }
}
//tableAction();
module.exports = indexResponses; // where indexResponses is placeholder until I figure out what to use
