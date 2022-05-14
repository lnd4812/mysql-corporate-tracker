// const express = require('express');
// const db = require('./db/connection');
// const apiRoutes = require('./routes/apiRoutes');
const cTable = require('console.table');
console.table([
    {employee, department, role}
]);




// const PORT = process.env.PORT || 3001;
// const app = express();

// app.use(express.urlencoded({extended: false}));
// app.use(express.json());

// get all departments
// db.query(`SELECT * FROM department`, (err, rows) => {
//     if (err) {
//         console.log(err);
//     }
//     console.table(rows);
// });









// app.get('/', (req, res) => {
//     res.json({
//         message: 'Hello world'
//     });
// });

// app.use((req, res) => {
//     res.status(404).end();
// });


// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });