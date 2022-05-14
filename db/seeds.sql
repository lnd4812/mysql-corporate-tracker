INSERT INTO department (name)
VALUES
    ('Accounting'),
    ('Administration'),
    ('Corporate'),
    ('Customer Service'),
    ('Human Resources'),
    ('Marketing');
    
INSERT INTO role (title, salary, department_id)  
VALUES
    ('President', 250000.00, 3),
    ('Controller', 200000.00, 3),
    ('Head of HR', 150000.00, 5),
    ('VP, Sales', 125000.00, 6),
    ('Accountant', 100000.00, 1),
    ('Account Manager', 75000.00, 6),
    ('Sales Rep', 60000.00, 6),
    ('Personal Assistant', 50000.00, 2),
    ('Customer Service Rep', 40000.00,5);
   
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('John', 'Doe', 1, NULL),
    ('Mary', 'Smith', 2, 1),
    ('Jane', 'Johnson', 3, 1),
    ('Robert', 'Mason', 4, 1),
    ('Jill', 'Simpson', 5, 2),
    ('Bill', 'Jones', 6, 4),
    ('Anne', 'Andrews', 7, 4),
    ('Ellen', 'White', 8, 1),
    ('Joe', 'Parker', 9, 4);
    
    
  
  