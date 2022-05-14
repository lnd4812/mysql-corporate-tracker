INSERT INTO department (name)
VALUES
    ('Accounting'),
    ('Administration'),
    ('Corporate'),
    ('Customer Service'),
    ('Human Resources'),
    ('IT'),
    ('Marketing'),
    ('Sales');  

INSERT INTO role (title, salary, department_id)  
VALUES
    ('President', 250000, 3),
    ('Manager', 100000, 4),
    ('Manager', 100000, 6),
    ('Manager', 100000, 7),
    ('Manager', 100000, 8),
    ('Account Manager', 75000, 7),
    ('Customer Service Rep', 40000, 4),
    ('Sales Rep', 50000, 8),
    ('Data Analyst', 60000, 6);
   
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('John', 'Doe', 1, NULL),
    ('Mary', 'Smith', 2, 1),
    ('Jane', 'Johnson', 6, 4),
    ('Robert', 'Mason', 8, 5),
    ('Jill', 'Simpson', 3, 1);
    
    
  
  